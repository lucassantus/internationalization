import { dashboardTranslations } from "./dashboard";
import { globalTranslations } from "./globals";

export const translations = {
  general: globalTranslations,
  dashboard: dashboardTranslations
};

export type Translations = typeof translations;