import { Locale } from "@/types/locale";
import { getProjectKey } from "@/utils/get-project-key";

// Default Values
export const DEFAULT_LOCALE: Locale = "pt-BR";

// Keys
export const KEY_LOCALE = getProjectKey("locale");

// Constants
export const locales: Locale[] = ["en-US", "pt-BR"];
