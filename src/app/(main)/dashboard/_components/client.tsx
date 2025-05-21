"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translations";

interface ClientTranslationsProps {}

export function ClientTranslations({}: ClientTranslationsProps) {
  const { translate, locale } = useTranslation("dashboard");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Side ( {locale} )</CardTitle>
        <CardDescription>{translate.dashboard.description}</CardDescription>
      </CardHeader>

      <CardContent>{translate.dashboard.content}</CardContent>
    </Card>
  );
}
