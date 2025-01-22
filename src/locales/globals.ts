import { Locale } from "@/types/locale";

export interface GlobalTranslations {
  portuguese: string;
  english: string;
  title: string
}

export const globalTranslations: Record<Locale, GlobalTranslations> = {
  "pt-BR": {
    portuguese: "Português",
    english: "Inglês",
    title: "Titulo"
  },
  "en-US": {
    portuguese: "Portuguese",
    english: "English",
    title: "Title"
  },
};

