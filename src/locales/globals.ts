import { Locale } from "@/types/locale";

export interface GlobalTranslations {
  portuguese: string;
  english: string;
  pages: {
    dashboard: string;
  };
}

export const globalTranslations: Record<Locale, GlobalTranslations> = {
  [Locale.PT]: {
    portuguese: "Português",
    english: "Inglês",
    pages: {
      dashboard: "Home Page",
    },
  },

  [Locale.EN]: {
    portuguese: "Portuguese",
    english: "English",
    pages: {
      dashboard: "Dashboard",
    },
  },
};
