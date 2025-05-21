'use server'

import { SIGNED_KEY_LOCALE } from '@/constants/globals';
import { Locale } from '@/types/locale';
import { cookies } from 'next/headers';

export async function changeLanguage(newLocale: Locale) {
  const cookieStore = await cookies()

  cookieStore.set(SIGNED_KEY_LOCALE, newLocale)
}