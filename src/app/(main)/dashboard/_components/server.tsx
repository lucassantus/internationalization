import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslation } from "@/utils/get-translation";

interface ServerTranslationsProps { }

export async function ServerTranslations({ }: ServerTranslationsProps) {
  const { translate, locale } = await getTranslation("dashboard");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Server Side ( {locale} )</CardTitle>
        <CardDescription>{translate.dashboard.description}</CardDescription>
      </CardHeader>
      <CardContent>{translate.dashboard.content}</CardContent>
    </Card>
  );
}
