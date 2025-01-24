"use client";

import { Translations } from "@/locales";
import { Locale } from "@/types/locale";
import { getTranslations } from "@/utils/get-translations";
import { useParams } from "next/navigation";

export function useTranslations<T extends keyof Translations>(module: T) {
  const { language } = useParams<{ language: Locale }>();

  return {
    locale: language,
    translate: getTranslations(module, language),
  };
}
