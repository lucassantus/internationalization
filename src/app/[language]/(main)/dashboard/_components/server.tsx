import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Locale } from "@/types/locale";
import { getTranslations } from "@/utils/get-translations";

interface ServerSideTranslationProps {
  params: Promise<{
    language: Locale;
  }>;
}

export async function ServerSideTranslation({ params }: ServerSideTranslationProps) {
  const { language } = await params;

  const translate = getTranslations("dashboard", language);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Side</CardTitle>
        <CardDescription>{translate.dashboard.description}</CardDescription>
      </CardHeader>
      <CardContent>{translate.dashboard.content}</CardContent>
    </Card>
  );
}
