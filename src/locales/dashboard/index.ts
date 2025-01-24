import { Locale } from "@/types/locale";
import { dashboardEnTranslations } from "./en";
import { dashboardPtTranslations } from "./pt";

export interface DashboardTranslations {
  dashboard: {
    title: string;
    description: string;
    content: string;
  };
}

export const dashboardTranslations: Record<Locale, DashboardTranslations> = {
  "pt-BR": dashboardPtTranslations,
  "en-US": dashboardEnTranslations,
};
