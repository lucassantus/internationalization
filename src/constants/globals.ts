import { Locale } from "@/types/locale";
import { getProjectKey } from "@/utils/get-project-key";

// DEFAULT VALUES
export const DEFAULT_LOCALE: Locale = Locale.PT

// SIGNED KEYS
export const SIGNED_KEY_LOCALE = getProjectKey("locale");

// KEYS
export const KEY_LOCALE_COOKIE = "locale"

// CONSTANTS
export const LOCALES = Object.values(Locale)
