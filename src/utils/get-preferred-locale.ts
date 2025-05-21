import { DEFAULT_LOCALE, LOCALES } from "@/constants/globals";
import { Locale } from "@/types/locale";

/**
 * Determines the user's preferred locale based on the "Accept-Language" header.
 *
 * @param {Request} request - The incoming HTTP request.
 * @returns {Locale} The preferred locale if found, otherwise `DEFAULT_LOCALE`.
 */
export function getPreferredLocale(request: Request): Locale {
  const acceptLanguage = request.headers.get("accept-language");

  if (!acceptLanguage) return DEFAULT_LOCALE;

  const preferredLocales = acceptLanguage.split(",").map((language) => language.split(";")[0].trim()) as Locale[];

  const preferredLocale: Locale = preferredLocales.find((locale) => LOCALES.includes(locale)) || DEFAULT_LOCALE;

  return preferredLocale;
}
