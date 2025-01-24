import { Locale } from "@/types/locale";
import { ClientSideTranslations } from "./_components/client";
import { ServerSideTranslation } from "./_components/server";

interface HomeProps {
  params: Promise<{
    language: Locale;
  }>;
}

export default function Home({ params }: HomeProps) {
  return (
    <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-5">
      <ClientSideTranslations />
      <ServerSideTranslation params={params} />
    </div>
  );
}
