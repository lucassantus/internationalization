import { DEFAULT_LOCALE, KEY_LOCALE } from "@/constants/globals";
import { Translations, translations } from "@/locales";
import { Locale, TranslationResponse } from "@/types/locale";
import { cookies } from "next/headers";

/**
 * Fetches the translation module for the user's current locale.
 *
 * - Retrieves the user's preferred locale from cookies.
 * - Falls back to `DEFAULT_LOCALE` if no locale is found.
 * - Loads the translation module for the determined locale.
 * - If the translation module for the locale is missing, defaults to `DEFAULT_LOCALE`.
 *
 * @param {T} module - The translation module key.
 * @returns {Promise<TranslationResponse<T>>} An object containing the locale and its corresponding translations.
 */
export async function getTranslations<T extends keyof Translations>(module: T): Promise<TranslationResponse<T>> {
  const cookieStore = await cookies();

  const currentLocale = cookieStore.get(KEY_LOCALE)?.value as Locale;

  const locale: Locale = currentLocale ?? DEFAULT_LOCALE;

  const modules = translations[module];

  const translate = modules[locale] ?? modules[DEFAULT_LOCALE];

  return {
    locale,
    translate,
  };
}
