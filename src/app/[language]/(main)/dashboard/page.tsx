import { Locale } from "@/types/locale";
import { getTranslations } from "@/utils/get-translations";
import { LocaleToggle } from "./locale-toggle";
import { TranslatedPage } from "./translated";

interface HomeProps {
  params: Promise<{
    language: Locale
  }>
}

export default async function Home({ params }: HomeProps) {
  const { language } = await params

  const server = getTranslations("dashboard", language)

  return (
    <div>
      <LocaleToggle />

      {/* SERVER SIDE */}

      <span>
        Texto em Server Side:

        {server.portuguese}
      </span>

      {/* CLIENT SIDE */}
      <TranslatedPage />
    </div>
  )
}
