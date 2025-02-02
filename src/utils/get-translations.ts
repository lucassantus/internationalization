import { DEFAULT_LOCALE, KEY_LOCALE } from "@/constants/globals";
import { Translations, translations } from "@/locales";
import { Locale, TranslationResponse } from "@/types/locale";
import { cookies } from "next/headers";

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
