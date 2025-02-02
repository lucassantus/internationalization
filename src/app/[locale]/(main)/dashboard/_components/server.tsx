import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations } from "@/utils/get-translations";

interface ServerTranslationsProps {}

export async function ServerTranslations({}: ServerTranslationsProps) {
  const { translate } = await getTranslations("dashboard");

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
