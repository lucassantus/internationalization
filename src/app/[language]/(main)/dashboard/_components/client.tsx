"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "@/hooks/use-translations";

interface ClientSideTranslationsProps {}

export function ClientSideTranslations({}: ClientSideTranslationsProps) {
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
