import { NextResponse } from "next/server";

export function middleware(
  request: { url: string | URL | undefined } | any
): any {
  const verify = request.cookies.get("loggedIn");

  if (verify?.name !== "loggedIn") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/donor",
    "/donations",
    "/donation-buckets",
    "/wishlist",
    "/donor-profile",
  ],
};