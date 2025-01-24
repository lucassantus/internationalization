import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "@/hooks/use-translations";
import { Locale } from "@/types/locale";
import { ChevronDownIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface ToggleLanguageProps {}

export function ToggleLanguage({}: ToggleLanguageProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { translate, locale } = useTranslations("globals");

  const languages: Record<Locale, string> = {
    "en-US": translate.english,
    "pt-BR": translate.portuguese,
  };

  function handleChangeLanguage(newLocale: Locale) {
    const newUrl = pathname.replace(locale, newLocale);

    router.replace(newUrl);
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto">
          {languages[locale]} <ChevronDownIcon className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.keys(languages).map((key) => {
          const currentLocale = key as Locale;
          const language = languages[currentLocale];

          return (
            <DropdownMenuItem
              key={key}
              disabled={currentLocale === locale}
              onClick={() => handleChangeLanguage(currentLocale)}
            >
              {language}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
