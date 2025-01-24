import { dashboardTranslations } from "./dashboard";
import { globalTranslations } from "./globals";

export const translations = {
  globals: globalTranslations,
  dashboard: dashboardTranslations,
};

export type Translations = typeof translations;
