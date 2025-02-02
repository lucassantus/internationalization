"use client";

import { DEFAULT_LOCALE } from "@/constants/globals";
import { Translations, translations } from "@/locales";
import { Locale } from "@/types/locale";
import { useParams } from "next/navigation";

interface TranslationsResponse<T extends keyof Translations> {
  locale: Locale;
  translate: Translations[T][Locale];
}

export function useTranslations<T extends keyof Translations>(module: T): TranslationsResponse<T> {
  const { locale } = useParams<{ locale: Locale }>();

  const modules = translations[module];

  const translate = modules[locale] ?? modules[DEFAULT_LOCALE];

  return {
    locale,
    translate,
  };
}
