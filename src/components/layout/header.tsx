"use client";

import { ToggleLanguage } from "../toggle-language";
import { ToggleMode } from "../toggle-mode";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-3">
        <div className="flex items-center">
          <span className="ml-2 font-bold text-xl">Internationalization</span>
        </div>
        <div className="flex items-center space-x-4">
          <ToggleLanguage />

          <ToggleMode />
        </div>
      </div>
    </header>
  );
}
