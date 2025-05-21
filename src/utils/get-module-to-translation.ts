import { Translations, translations } from "@/locales";
import { Locale, TranslationResponse } from "@/types/locale";

interface GetModuleToTranslation<T extends keyof Translations> {
  module: T
  locale: Locale
}

export function getModuleToTranslation<T extends keyof Translations>({ module, locale }: GetModuleToTranslation<T>): TranslationResponse<T> {
  const modules = translations[module];

  const translate = modules[locale]

  return {
    locale,
    translate,
  };
}
