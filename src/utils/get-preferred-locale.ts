import { DEFAULT_LOCALE, locales } from "@/constants/globals";
import { Locale } from "@/types/locale";

export function getPreferredLocale(request: Request): string {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return DEFAULT_LOCALE;

  const preferredLocales = acceptLanguage.split(",").map((language) => language.split(";")[0].trim()) as Locale[];

  return preferredLocales.find((locale) => locales.includes(locale)) || DEFAULT_LOCALE;
}
