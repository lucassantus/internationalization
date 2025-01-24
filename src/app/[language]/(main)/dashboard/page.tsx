import { Locale } from "@/types/locale";
import { TableDashboard } from "./table";

interface HomeProps {
  params: Promise<{
    language: Locale;
  }>;
}

export default async function Home({ params }: HomeProps) {
  return <TableDashboard />;
}
