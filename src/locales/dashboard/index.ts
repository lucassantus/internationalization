import { Locale } from "@/types/locale";
import { dashboardEnTranslations } from "./en";
import { dashboardPtTranslations } from "./pt";

export interface DashboardTranslations {
  portuguese: string;
  english: string;
  title: string
  dashboard: {
    title: string
  }
}

export const dashboardTranslations: Record<Locale, DashboardTranslations> = {
  "pt-BR": dashboardPtTranslations,
  "en-US": dashboardEnTranslations,
};

