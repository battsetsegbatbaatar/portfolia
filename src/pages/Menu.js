import React from "react";
import { Header } from "@/components/Header";

export const Menu = () => {
  return (
    <div>
      <Header />
      <nav className="flex flex-col content-center items-center gap-6 text-gray-900 text-base font-medium leading-6 dark:bg-black dark:text-white">
        <a
          href="About"
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
        >
          About
        </a>
        <a
          href="Work"
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
        >
          Work
        </a>
        <a
          href="Testimonials"
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
        >
          Testimonials
        </a>
        <a
          href="Contact"
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
        >
          Contact
        </a>
        <img
          className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
          onClick={toggle}
          src={theme === "light" ? "/sun.jpg" : "/Icon.png"}
          alt=""
        />
        <a className="rounded-xl bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 dark:bg-white dark:text-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200">
          Download CV
        </a>
      </nav>
    </div>
  );
};
