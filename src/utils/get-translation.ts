import { Translations } from "@/locales";
import { TranslationResponse } from "@/types/locale";
import { getLocaleFromCookie } from "./get-locale-from-cookie";
import { getModuleToTranslation } from "./get-module-to-translation";

export async function getTranslation<T extends keyof Translations>(module: T): Promise<TranslationResponse<T>> {
  const locale = await getLocaleFromCookie()

  return getModuleToTranslation({
    module,
    locale
  })
}
