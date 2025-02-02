import { DEFAULT_LOCALE, KEY_LOCALE } from "@/constants/globals";
import { Translations, translations } from "@/locales";
import { Locale } from "@/types/locale";
import { cookies } from "next/headers";

export async function getTranslations<T extends keyof Translations>(module: T): Promise<Translations[T][Locale]> {
  const cookieStore = await cookies();

  const currentLocale = cookieStore.get(KEY_LOCALE)?.value as Locale;

  const locale: Locale = currentLocale ?? DEFAULT_LOCALE;

  const modules = translations[module];

  return modules[locale];
}
