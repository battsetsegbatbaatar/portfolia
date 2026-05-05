import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    title: "Battsetseg Batbaatar",
    role: "Backend & Fullstack Developer",
    bio: "I build fast, reliable backend systems using Node.js, PostgreSQL, Redis, and GraphQL. Currently working at MEVENTO LLC.",
    available: "Open to new opportunities",
    contact: "Contact me",
  },
  mn: {
    title: "Батцэцэг Батбаатар",
    role: "Backend & Fullstack Developer",
    bio: "Node.js, PostgreSQL, Redis, GraphQL ашиглан хурдан, найдвартай backend систем бүтээдэг. Одоогоор MEVENTO LLC-д ажиллаж байна.",
    available: "Шинэ боломжид нээлттэй",
    contact: "Холбоо барих",
  },
};

export const Hero = () => {
  const { lang } = useLanguage();
  const tx = t[lang];

  return (
    <section className="max-w-3xl mx-auto px-6 pt-24 pb-16">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            {tx.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 font-medium">
            {tx.role}
          </p>
        </div>

        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
          {tx.bio}
        </p>

        <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400"></span>
            {tx.available}
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href="https://github.com/battsetsegbatbaatar"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:border-gray-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:bg_elestren@icloud.com"
            className="text-sm px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-80 transition-opacity"
          >
            {tx.contact}
          </a>
        </div>
      </div>
    </section>
  );
};
