import { get } from "@vercel/edge-config";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|maintenance).*)"],
};

const BYPASS_COOKIE = "maintenance_bypass";

export async function proxy(request: NextRequest) {
  let isInMaintenanceMode = false;
  try {
    isInMaintenanceMode = (await get<boolean>("isInMaintenanceMode")) ?? false;
  } catch {
    // Edge Config unreachable — fail closed. A compliance/legal shutdown must
    // hold even if the flag store has an outage; an infra hiccup blocking
    // traffic is preferable to it silently letting traffic through.
    isInMaintenanceMode = true;
  }

  if (!isInMaintenanceMode) {
    return NextResponse.next();
  }

  const bypassSecret = process.env.MAINTENANCE_BYPASS_SECRET;
  const bypassParam = request.nextUrl.searchParams.get("bypass");
  const bypassCookie = request.cookies.get(BYPASS_COOKIE)?.value;

  if (bypassParam === "clear") {
    const url = request.nextUrl.clone();
    url.pathname = "/maintenance";
    url.searchParams.delete("bypass");
    const response = NextResponse.rewrite(url, {
      status: 503,
      headers: { "Retry-After": "3600" },
    });
    response.cookies.delete(BYPASS_COOKIE);
    return response;
  }

  const hasValidBypass =
    !!bypassSecret &&
    (bypassParam === bypassSecret || bypassCookie === bypassSecret);

  if (hasValidBypass) {
    const response = NextResponse.next();
    if (bypassParam === bypassSecret) {
      response.cookies.set(BYPASS_COOKIE, bypassSecret, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });
    }
    return response;
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-maintenance-mode", "1");

  const url = request.nextUrl.clone();
  url.pathname = "/maintenance";

  return NextResponse.rewrite(url, {
    status: 503,
    headers: { "Retry-After": "3600" },
    request: { headers: requestHeaders },
  });
}
