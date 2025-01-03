import { NextRequest, NextResponse } from "next/server";

const ALLOWED_IPS: string[] = ["80.49.186.24", "::1"];

export function middleware(req: NextRequest): NextResponse | undefined {
  const ip: string | null =
    req.headers.get("x-forwarded-for")?.split(",")[0] ||
    req.headers.get("x-real-ip") ||
    "unknown";

  if (req.nextUrl.pathname.startsWith("/admin") && !ALLOWED_IPS.includes(ip)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}
