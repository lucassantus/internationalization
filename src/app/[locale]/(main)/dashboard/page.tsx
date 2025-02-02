import { getTranslations } from "@/utils/get-translations";
import { Metadata } from "next";
import { ClientSideTranslations } from "./_components/client";
import { ServerSideTranslation } from "./_components/server";

export async function generateMetadata(): Promise<Metadata> {
  const translate = await getTranslations("globals");

  return {
    title: translate.pages.dashboard,
  };
}

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-5">
      <ClientSideTranslations />
      <ServerSideTranslation />
    </div>
  );
}
