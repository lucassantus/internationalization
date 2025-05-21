"use client";

import { application } from "@/constants/application";
import { useTranslation } from "@/hooks/use-translations";
import { EarthIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import { ToggleLanguage } from "../toggle-language";
import { ToggleMode } from "../toggle-mode";
import { Button } from "../ui/button";

export default function Header() {
  const { locale } = useTranslation("dashboard");

  if (!locale) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-border/40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-6">
        <Link href="/dashboard" className="mr-2 flex items-center md:mr-6 md:space-x-2">
          <EarthIcon className="size-4" aria-hidden="true" />
          <span className="hidden font-bold md:inline-block">{application.name}</span>
        </Link>

        <nav className="flex flex-1 items-center gap-2 md:justify-end">
          <ToggleLanguage />

          <Button variant="ghost" size="icon" className="size-8" asChild>
            <Link aria-label="GitHub repo" href={application.links.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="size-4" aria-hidden="true" />
            </Link>
          </Button>

          <ToggleMode />
        </nav>
      </div>
    </header>
  );
}
