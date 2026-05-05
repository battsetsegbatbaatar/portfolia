import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: "© 2025 Battsetseg Batbaatar",
  mn: "© 2025 Батцэцэг Батбаатар",
};

export const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="max-w-3xl mx-auto px-6 py-8 border-t border-gray-100 dark:border-gray-800">
      <p className="text-sm text-gray-400 dark:text-gray-600">
        {t[lang]}
      </p>
    </footer>
  );
};
