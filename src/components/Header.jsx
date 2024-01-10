import React, { useEffect, useState } from "react";
import { Menu } from "./icon/Menu";

export const Header = () => {
  const [theme, setTheme] = useState("light");
  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else setTheme("light");
    console.log();
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="flex flex-col items-center justify-center dark:bg-black dark:text-white">
      <header className="flex w-screen lg:w-[1500px] lg:px-20 px-4 py-4 justify-between items-center dark:bg-black dark:text-white">
        <a
          href="/"
          className="text-3xl font-bold leading-9 tracking-wide scroll-pl-8"
        >
          {"<SS />"}
        </a>
        <nav className=" hidden lg:flex content-center items-center gap-6 text-gray-900 text-base font-medium leading-6 dark:bg-black dark:text-white">
          <a href="About">About</a>
          <a href="Work">Work</a>
          <a href="Testimonials">Testimonials</a>
          <a href="Contact">Contact</a>
          <img
            onClick={toggle}
            src={theme === "light" ? "/sun.jpg" : "/Icon.png"}
            alt=""
          />
          <button className="rounded-xl bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 dark:bg-white dark:text-black">
            Download CV
          </button>
        </nav>
        <nav className="flex relative lg:hidden">
          <a href="Menu">
            <Menu />
          </a>
        </nav>
      </header>
    </div>
  );
};
