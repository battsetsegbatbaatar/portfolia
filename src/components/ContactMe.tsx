import React from "react";
import { Label } from "./Label";

export const ContactMe = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label
          text="Холбоо барих"
          para="Ажиллах санал, асуулт, эсвэл зүгээр танилцахаар ч байсан бичнэ үү."
        />
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
