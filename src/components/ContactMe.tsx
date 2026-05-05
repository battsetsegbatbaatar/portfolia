import React from "react";
import { Label } from "./Label";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    title: "Get in Touch",
    para: "If you have a project proposal or questions, feel free to reach out.",
  },
  mn: {
    title: "Холбоо барих",
    para: "Проектын санал эсвэл асуулт байвал холбогдоорой.",
  },
};

export const ContactMe = () => {
  const { lang } = useLanguage();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text={t[lang].title} para={t[lang].para} />
        <div className="flex flex-col gap-3">
          <a
            href="mailto:bg_elestren@icloud.com"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-base"
          >
            bg_elestren@icloud.com
          </a>
          <a
            href="tel:+97680836369"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-base"
          >
            +976 8083 6369
          </a>
          <a
            href="https://github.com/battsetsegbatbaatar"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors text-base"
          >
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};
