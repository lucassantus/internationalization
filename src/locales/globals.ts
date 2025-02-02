import { Locale } from "@/types/locale";

export interface GlobalTranslations {
  portuguese: string;
  english: string;
  pages: {
    dashboard: string;
  };
}

export const globalTranslations: Record<Locale, GlobalTranslations> = {
  "pt-BR": {
    portuguese: "Português",
    english: "Inglês",
    pages: {
      dashboard: "Home Page",
    },
  },
  "en-US": {
    portuguese: "Portuguese",
    english: "English",
    pages: {
      dashboard: "Dashboard",
    },
  },
};
