"use client";

import { KEY_LOCALE_COOKIE } from "@/constants/globals";
import { Translations } from "@/locales";
import { Locale, TranslationResponse } from "@/types/locale";
import { getModuleToTranslation } from "@/utils/get-module-to-translation";
import { useSearchParams } from "next/navigation";

export function useTranslation<T extends keyof Translations>(module: T): TranslationResponse<T> {
  const searchParams = useSearchParams()

  const locale = searchParams.get(KEY_LOCALE_COOKIE) as Locale

  return getModuleToTranslation({
    module,
    locale
  })
}
