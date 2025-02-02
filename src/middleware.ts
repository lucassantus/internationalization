import { NextResponse } from "next/server";
import { KEY_LOCALE, locales } from "./constants/globals";
import { getPreferredLocale } from "./utils/get-preferred-locale";

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  const locale = locales.find((locale) => pathname.includes(locale));

  if (locale) {
    const response = NextResponse.next();

    response.cookies.set(KEY_LOCALE, String(locale));

    return response;
  }

  const preferredLocale = getPreferredLocale(request);

  const redirectUrl = new URL(`/${preferredLocale}${pathname}`, request.url);

  const response = NextResponse.redirect(redirectUrl);

  response.cookies.set(KEY_LOCALE, String(preferredLocale));

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
