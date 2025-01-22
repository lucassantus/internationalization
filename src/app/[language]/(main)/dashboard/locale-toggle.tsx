"use client"

import { Locale } from "@/types/locale";
import { useParams } from "next/navigation";
import { Fragment } from "react";

interface LocaleToggleProps {}

export function LocaleToggle({}: LocaleToggleProps) {
  const { language } = useParams<{ language: Locale }>()

  const changeLanguage = (newLocale: Locale) => {
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;

    const segments = currentPath.split("/");

    if (segments[1] === "en-US" || segments[1] === "pt-BR") {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }

    const newPath = segments.join("/");

    window.location.href = `${newPath}${currentSearch}`;
  };

  return (
    <div>
      <Fragment>
        <button onClick={() => changeLanguage("en-US")} disabled={language === "en-US"}>
          English
        </button>
        <button onClick={() => changeLanguage("pt-BR")} disabled={language === "pt-BR"}>
          Português
        </button>
      </Fragment>
    </div>
  )
}
