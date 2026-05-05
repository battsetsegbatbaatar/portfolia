import React, { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const navLinks = {
  en: [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
  mn: [
    { href: "#about", label: "Тухай" },
    { href: "#skills", label: "Ур чадвар" },
    { href: "#work", label: "Ажлууд" },
    { href: "#contact", label: "Холбоо" },
  ],
};

const cvLabel = { en: "Download CV", mn: "CV татах" };

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { lang, toggle } = useLanguage();

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const links = navLinks[lang];

  return (
    <div className="sticky top-0 z-50 bg-white/90 dark:bg-black/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
      <header className="max-w-3xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-lg font-bold text-gray-900 dark:text-white tracking-tight">
          BB
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggle}
            className="text-sm text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-200 transition-colors font-mono"
            aria-label="Toggle language"
          >
            {lang === "en" ? "MN" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="text-sm text-gray-400 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? "○" : "●"}
          </button>
          <a
            href="/Battsetseg-CV.pdf"
            download="Battsetseg-CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-4 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:opacity-80 transition-opacity"
          >
            {cvLabel[lang]}
          </a>
        </nav>

        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={toggle}
            className="text-gray-400 text-xs font-mono"
            aria-label="Toggle language"
          >
            {lang === "en" ? "MN" : "EN"}
          </button>
          <button onClick={toggleTheme} className="text-gray-400 text-sm">
            {theme === "light" ? "○" : "●"}
          </button>
          <button
            onClick={() => setIsNavOpen((prev) => !prev)}
            className="flex flex-col gap-1.5 p-1"
            aria-label="Menu"
          >
            <span className="block h-px w-6 bg-gray-600 dark:bg-gray-400"></span>
            <span className="block h-px w-6 bg-gray-600 dark:bg-gray-400"></span>
            <span className="block h-px w-6 bg-gray-600 dark:bg-gray-400"></span>
          </button>
        </div>
      </header>

      {isNavOpen && (
        <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-black">
          <nav className="max-w-3xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsNavOpen(false)}
                className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/Battsetseg-CV.pdf"
              download="Battsetseg-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm px-4 py-2 text-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg"
            >
              {cvLabel[lang]}
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};
