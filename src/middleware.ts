import { NextResponse } from "next/server";
import { DEFAULT_LOCALE } from "./constants/globals";
import { Locale } from "./types/locale";

const locales: Locale[] = ["en-US", "pt-BR"]; 

function getPreferredLocale(request: Request): string {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return locales[0];

  const preferredLocales = acceptLanguage
    .split(",")
    .map((lang) => lang.split(";")[0].trim()) as Locale[]

  return (
    preferredLocales.find((locale) => locales.includes(locale)) || DEFAULT_LOCALE
  );
}

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);

  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: [
    "/((?!_next|favicon.ico).*)",
  ],
};