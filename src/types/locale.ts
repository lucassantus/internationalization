import { Translations } from "@/locales";

export type Locale = "pt-BR" | "en-US";

export interface TranslationResponse<T extends keyof Translations> {
  locale: Locale;
  translate: Translations[T][Locale];
}
