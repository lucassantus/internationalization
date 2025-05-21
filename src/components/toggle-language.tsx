import { changeLanguage } from "@/actions/change-language";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { KEY_LOCALE_COOKIE } from "@/constants/globals";
import { useTranslation } from "@/hooks/use-translations";
import { Locale } from "@/types/locale";
import { ChevronDownIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Button } from "./ui/button";

interface ToggleLanguageProps { }

export function ToggleLanguage({ }: ToggleLanguageProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { translate, locale: currentLocale } = useTranslation("globals");
  const [isPending, startTransition] = useTransition();

  const languages: Record<Locale, string> = {
    [Locale.EN]: translate.english,
    [Locale.PT]: translate.portuguese,
  };

  async function handleChangeLanguage(newLocale: Locale) {
    if (newLocale === currentLocale) return;

    const params = new URLSearchParams(searchParams.toString());

    params.set(KEY_LOCALE_COOKIE, newLocale);

    const newUrl = `${pathname}?${params.toString()}`;

    startTransition(() => {
      router.replace(newUrl);

      changeLanguage(newLocale)
    });
  }


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto h-8 px-3">
          {languages[currentLocale]}
          <ChevronDownIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {Object.keys(languages).map((key) => {
          const locale = key as Locale;

          const language = languages[locale];

          return (
            <DropdownMenuItem
              key={key}
              disabled={locale === currentLocale || isPending}
              onClick={() => handleChangeLanguage(locale)}
            >
              {language}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
