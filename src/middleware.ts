import { NextResponse } from "next/server";
import { DEFAULT_LOCALE } from "./constants/globals";
import { Locale } from "./types/locale";

export const locales: Locale[] = ["en-US", "pt-BR"];

function getPreferredLocale(request: Request): string {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return DEFAULT_LOCALE;

  const preferredLocales = acceptLanguage.split(",").map((language) => language.split(";")[0].trim()) as Locale[];

  return preferredLocales.find((locale) => locales.includes(locale)) || DEFAULT_LOCALE;
}

export function middleware(request: Request) {
  const { pathname } = new URL(request.url);

  const pathHasLocale = locales.some((locale) => pathname.includes(locale));

  if (pathHasLocale) {
    return NextResponse.next();
  }

  const locale = getPreferredLocale(request);

  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
