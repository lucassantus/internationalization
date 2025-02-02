"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/use-translations";

interface ClientTranslationsProps {}

export function ClientTranslations({}: ClientTranslationsProps) {
  const { translate } = useTranslations("dashboard");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Side</CardTitle>
        <CardDescription>{translate.dashboard.description}</CardDescription>
      </CardHeader>

      <CardContent>{translate.dashboard.content}</CardContent>
    </Card>
  );
}
