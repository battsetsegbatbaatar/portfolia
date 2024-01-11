import React, { useEffect, useState } from "react";
import { Menu } from "./icon/Menu";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

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
          className="text-3xl font-bold leading-9 tracking-wide scroll-pl-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
        >
          {"<SS />"}
        </a>
        <nav className=" hidden lg:flex content-center items-center gap-6 text-gray-900 text-base font-medium leading-6 dark:bg-black dark:text-white">
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
          <a
            // href={require("../path/to/file.pdf")}
            // download="myFile"
            className="rounded-xl bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 dark:bg-white dark:text-black transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-100 duration-200"
          >
            Download CV
          </a>
        </nav>
        <nav className="flex relative lg:hidden">
          <a href="Menu" onClick={Menu}>
            <Menu />
          </a>
          <nav className="dark:bg-black dark:text-white flex flex-col position">
            <a href="About" className="hover:bg-[#ddd]">
              About
            </a>
            <a href="Work" className="hover:bg-[#ddd]">
              Work
            </a>
            <a href="Testimonials" className="hover:bg-[#ddd]">
              Testimonials
            </a>
            <a href="Contact" className="hover:bg-[#ddd]">
              Contact
            </a>
            <img
              onClick={toggle}
              src={theme === "light" ? "/sun.jpg" : "/Icon.png"}
              alt=""
            />
            <button className="rounded-xl bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 dark:bg-white dark:text-black">
              Download CV
            </button>
          </nav>
        </nav>
      </header>
    </div>
  );
};
