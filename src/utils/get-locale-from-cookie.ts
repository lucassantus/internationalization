import { SIGNED_KEY_LOCALE } from "@/constants/globals";
import { Locale } from "@/types/locale";
import { cookies } from "next/headers";

export async function getLocaleFromCookie(): Promise<Locale>{
  const cookieStore = await cookies()

  const cookie = cookieStore.get(SIGNED_KEY_LOCALE)

  const locale = cookie!.value as Locale

  return locale
}