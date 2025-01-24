import { DEFAULT_LOCALE } from "@/constants/globals";
import { Translations, translations } from "@/locales";
import { Locale } from "@/types/locale";

export function getTranslations<T extends keyof Translations>(module: T, language: Locale): Translations[T][Locale] {
  const modules = translations[module];

  return modules[language] ?? modules[DEFAULT_LOCALE];
}
