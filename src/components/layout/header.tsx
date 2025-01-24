"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/types/locale";
import { ChevronDown, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";

const languages = [
  { locale: "en-US", description: "English" },
  { locale: "pt-BR", description: "Português" },
  { locale: "es-ES", description: "Español" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  function handleChangeLanguage(locale: Locale) {}

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-3">
        <div className="flex items-center">
          <span className="ml-2 font-bold text-xl">Internationalization</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="dark:-rotate-90 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                {selectedLanguage.description} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.locale} onClick={() => handleChangeLanguage(lang.locale as Locale)}>
                  {lang.description}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
