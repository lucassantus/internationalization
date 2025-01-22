"use client"

import { useTranslations } from "@/hooks/use-translations"

interface TranslatedPageProps {}

export function TranslatedPage({}: TranslatedPageProps){
  const translale = useTranslations("dashboard")

  return <div>{translale.dashboard.title}</div>
}