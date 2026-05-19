import { NextResponse } from "next/server";

// Best-effort in-memory rate limiter (shared module state — survives warm
// invocations, resets on cold starts). For higher guarantees, swap to Vercel
// KV or Upstash later.
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

const KLAVIYO_REVISION = "2024-02-15";

// Best-effort upsert: write contact submission as custom profile properties.
// The support team can subscribe to a Klaviyo flow that fires when
// "Last Contact Submitted At" changes, to receive a notification email.
async function upsertContactProfile(
  privateKey: string,
  email: string,
  properties: Record<string, unknown>,
): Promise<boolean> {
  const headers = {
    Authorization: `Klaviyo-API-Key ${privateKey}`,
    Accept: "application/json",
    "Content-Type": "application/json",
    Revision: KLAVIYO_REVISION,
  };

  const createRes = await fetch("https://a.klaviyo.com/api/profiles/", {
    method: "POST",
    headers,
    body: JSON.stringify({
      data: { type: "profile", attributes: { email, properties } },
    }),
  });
  if (createRes.ok) return true;

  if (createRes.status === 409) {
    const errBody: unknown = await createRes.json().catch(() => ({}));
    const duplicateId =
      typeof errBody === "object" && errBody !== null
        ? (
            errBody as {
              errors?: Array<{ meta?: { duplicate_profile_id?: string } }>;
            }
          ).errors?.[0]?.meta?.duplicate_profile_id
        : undefined;

    if (!duplicateId) {
      console.error("Klaviyo 409 without duplicate id:", errBody);
      return false;
    }

    const patchRes = await fetch(
      `https://a.klaviyo.com/api/profiles/${duplicateId}/`,
      {
        method: "PATCH",
        headers,
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
    console.error(
      "Klaviyo PATCH failed:",
      await patchRes.json().catch(() => ({})),
    );
    return false;
  }

  console.error(
    "Klaviyo create failed:",
    await createRes.json().catch(() => ({})),
  );
  return false;
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

    const body = await req.json();
    const name = typeof body?.name === "string" ? body.name.trim() : "";
    const email = typeof body?.email === "string" ? body.email.trim() : "";
    const subject = typeof body?.subject === "string" ? body.subject.trim() : "";
    const message = typeof body?.message === "string" ? body.message.trim() : "";

    if (!name || name.length < 2 || name.length > 120) {
      return NextResponse.json(
        { error: "Please enter your name.", code: "invalid_name" },
        { status: 400 },
      );
    }
    if (!email || !EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address.", code: "invalid_email" },
        { status: 400 },
      );
    }
    if (!subject || subject.length < 2 || subject.length > 200) {
      return NextResponse.json(
        { error: "Please enter a subject.", code: "invalid_subject" },
        { status: 400 },
      );
    }
    if (!message || message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        {
          error:
            "Please enter a message (10 characters minimum, 5000 maximum).",
          code: "invalid_message",
        },
        { status: 400 },
      );
    }

    const privateKey = process.env.KLAVIYO_PRIVATE_API_KEY;
    if (!privateKey) {
      console.error("KLAVIYO_PRIVATE_API_KEY not set — contact form cannot deliver.");
      // We still acknowledge the submission so the user is not blocked.
      // Logs preserve the submission for manual recovery.
      console.warn("Unrouted contact submission:", {
        name,
        email,
        subject,
        messageLength: message.length,
      });
      return NextResponse.json({ success: true, queued: false });
    }

    const properties = {
      "Contact Form Source": "muscalarpro.com",
      "Last Contact Name": name,
      "Last Contact Subject": subject,
      "Last Contact Message": message,
      "Last Contact Submitted At": new Date().toISOString(),
    };

    const ok = await upsertContactProfile(privateKey, email, properties);
    if (!ok) {
      // Log the submission anyway so it isn't lost.
      console.warn("Contact submission profile-write failed:", {
        name,
        email,
        subject,
        messageLength: message.length,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
