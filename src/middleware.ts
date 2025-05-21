import { NextResponse } from "next/server";
import { KEY_LOCALE_COOKIE, LOCALES, SIGNED_KEY_LOCALE } from "./constants/globals";
import { Locale } from "./types/locale";
import { getPreferredLocale } from "./utils/get-preferred-locale";

export async function middleware(request: Request) {
  const url = new URL(request.url)

  const locale = url.searchParams.get(KEY_LOCALE_COOKIE) as Locale

  if(locale) {
    const localeIsValid = LOCALES.includes(locale)

    if(localeIsValid) {
      const response = NextResponse.next();

      response.cookies.set(SIGNED_KEY_LOCALE, String(locale));

      return response;
    }
  }

  const preferredLocale = getPreferredLocale(request);

  url.searchParams.set(KEY_LOCALE_COOKIE, preferredLocale)

  const response = NextResponse.redirect(url);

  response.cookies.set(SIGNED_KEY_LOCALE, String(preferredLocale));

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
