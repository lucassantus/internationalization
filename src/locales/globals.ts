import { Locale } from "@/types/locale";

export interface GlobalTranslations {
  portuguese: string;
  english: string;
}

export const globalTranslations: Record<Locale, GlobalTranslations> = {
  "pt-BR": {
    portuguese: "Português",
    english: "Inglês",
  },
  "en-US": {
    portuguese: "Portuguese",
    english: "English",
  },
};
