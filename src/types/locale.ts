import { Translations } from "@/locales";

export enum Locale {
  EN = "en-US",
  PT = "pt-BR"
}

export interface TranslationResponse<T extends keyof Translations> {
  locale: Locale;
  translate: Translations[T][Locale];
}