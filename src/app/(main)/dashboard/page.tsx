import { getTranslation } from "@/utils/get-translation";
import { Metadata } from "next";
import { ClientTranslations } from "./_components/client";
import { ServerTranslations } from "./_components/server";

export async function generateMetadata(): Promise<Metadata> {
  const { translate } = await getTranslation("globals");

  return {
    title: translate.pages.dashboard,
  };
}

interface DashboardPageProps { }

export default async function DashboardPage({ }: DashboardPageProps) {
  return (
    <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-5">
      <ClientTranslations />

      <ServerTranslations />
    </div>
  );
}
