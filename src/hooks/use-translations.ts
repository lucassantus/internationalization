"use client";

import { DEFAULT_LOCALE } from "@/constants/globals";
import { Translations, translations } from "@/locales";
import { Locale, TranslationResponse } from "@/types/locale";
import { useParams } from "next/navigation";

/**
 * Retrieves translations for a specific module based on the current locale.
 *
 * @param {T} module - The translation module key.
 * @returns {TranslationResponse<T>} An object containing the current locale and the corresponding translations.
 */
export function useTranslations<T extends keyof Translations>(module: T): TranslationResponse<T> {
  const { locale } = useParams<{ locale: Locale }>();

  const modules = translations[module];

  const translate = modules[locale] ?? modules[DEFAULT_LOCALE];

  return {
    locale,
    translate,
  };
}
