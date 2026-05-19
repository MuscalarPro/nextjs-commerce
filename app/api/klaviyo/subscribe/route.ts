import { NextResponse } from "next/server";

// Best-effort in-memory rate limiter. Warm instances share state; cold starts
// reset the bucket. Not a substitute for a real limiter (Upstash/Vercel KV)
// but raises the bar against trivial abuse.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const ipBuckets = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = ipBuckets.get(ip);
  if (!bucket || bucket.resetAt < now) {
    ipBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

// RFC-5322-ish, good enough for input rejection.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const KLAVIYO_REVISION = "2024-02-15";

// Best-effort upsert of custom profile properties (e.g. Health Goals).
// Returns true on success, false on failure (caller decides what to do).
async function upsertProfileProperties(
  privateKey: string,
  email: string,
  properties: Record<string, unknown>,
): Promise<boolean> {
  const baseHeaders = {
    Authorization: `Klaviyo-API-Key ${privateKey}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    Revision: KLAVIYO_REVISION,
  };

  // Step 1: try POST (new profile)
  const createRes = await fetch("https://a.klaviyo.com/api/profiles/", {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({
      data: {
        type: "profile",
        attributes: { email, properties },
      },
    }),
  });

  if (createRes.ok) return true;

  // Step 2: if it's a duplicate, Klaviyo returns 409 with the existing id.
  if (createRes.status === 409) {
    const errBody: unknown = await createRes.json().catch(() => ({}));
    const duplicateId =
      typeof errBody === "object" && errBody !== null
        ? // Klaviyo shape: { errors: [{ meta: { duplicate_profile_id: "..." } }] }
          (
            errBody as {
              errors?: Array<{ meta?: { duplicate_profile_id?: string } }>;
            }
          ).errors?.[0]?.meta?.duplicate_profile_id
        : undefined;

    if (!duplicateId) {
      console.error("Klaviyo 409 without duplicate_profile_id:", errBody);
      return false;
    }

    const patchRes = await fetch(
      `https://a.klaviyo.com/api/profiles/${duplicateId}/`,
      {
        method: "PATCH",
        headers: baseHeaders,
        body: JSON.stringify({
          data: {
            type: "profile",
            id: duplicateId,
            attributes: { properties },
          },
        }),
      },
    );

    if (patchRes.ok) return true;
    const patchBody = await patchRes.json().catch(() => ({}));
    console.error("Klaviyo PATCH profile failed:", patchBody);
    return false;
  }

  const errBody = await createRes.json().catch(() => ({}));
  console.error("Klaviyo create profile failed:", errBody);
  return false;
}

function isAllowedOrigin(origin: string | null): boolean {
  if (!origin) return false;
  const allowed = [
    "https://www.muscalarpro.com",
    "https://muscalarpro.com",
  ];
  if (process.env.NODE_ENV !== "production") {
    allowed.push("http://localhost:3000", "http://127.0.0.1:3000");
  }
  return allowed.includes(origin);
}

export async function POST(req: Request) {
  try {
    const origin = req.headers.get("origin");
    if (!isAllowedOrigin(origin)) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 },
      );
    }

    const { email, source, goals } = await req.json();

    if (!email || typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "A valid email is required", code: "invalid_email" },
        { status: 400 },
      );
    }

    // Klaviyo segments subscribers by `custom_source`. Use the explicit
    // source from the caller; fall back to legacy `goals` (the old API
    // shape from earlier forms) for backwards compatibility, then to a
    // generic label.
    const customSource =
      (typeof source === "string" && source) ||
      (Array.isArray(goals) && goals.length ? goals.join(", ") : null) ||
      "Newsletter Signup";

    const privateKey = process.env.KLAVIYO_PRIVATE_API_KEY;
    const listId = process.env.KLAVIYO_LIST_ID;

    if (!privateKey || !listId) {
      console.error(
        "Klaviyo API Key or List ID is missing in environment variables",
      );
      return NextResponse.json(
        { error: "Klaviyo configuration is missing" },
        { status: 500 },
      );
    }

    // Klaviyo API v3: Subscribe profiles to a list
    const response = await fetch(
      "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/",
      {
        method: "POST",
        headers: {
          Authorization: `Klaviyo-API-Key ${privateKey}`,
          Accept: "application/json",
          "Content-Type": "application/json",
          Revision: "2024-02-15",
        },
        body: JSON.stringify({
          data: {
            type: "profile-subscription-bulk-create-job",
            attributes: {
              custom_source: customSource,
              profiles: {
                data: [
                  {
                    type: "profile",
                    attributes: { email },
                  },
                ],
              },
            },
            relationships: {
              list: {
                data: {
                  type: "list",
                  id: listId,
                },
              },
            },
          },
        }),
      },
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("Klaviyo API error:", JSON.stringify(errorData, null, 2));
      return NextResponse.json(
        {
          error: "Failed to subscribe to Klaviyo",
          code: "klaviyo_error",
          // Surface Klaviyo's detail message in dev so we can debug; never in prod
          ...(process.env.NODE_ENV !== "production"
            ? { klaviyo: errorData }
            : {}),
        },
        // Treat any Klaviyo non-2xx as a 502 — it's a downstream failure,
        // not a problem with the user's request.
        { status: 502 },
      );
    }

    // Best-effort: if the caller sent goals, attach them as Health Goals on
    // the profile. Failure here doesn't roll back the subscription (the user
    // is already on the list); we just log so we can debug later.
    let propertiesSaved: boolean | null = null;
    if (Array.isArray(goals) && goals.length > 0) {
      propertiesSaved = await upsertProfileProperties(privateKey, email, {
        "Health Goals": goals,
      });
    }

    return NextResponse.json({
      success: true,
      ...(propertiesSaved === false ? { propertiesSaved: false } : {}),
    });
  } catch (error) {
    console.error("Klaviyo subscription error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
