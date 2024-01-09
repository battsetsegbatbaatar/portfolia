import React, { useState } from "react";
import { LigthIcon } from "./icon/LigthIcon";
import { Menu } from "./icon/Menu";

export const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <header className="flex lg:w-[1500px] lg:px-20 px-4 py-4 justify-between items-center">
        <a
          href="#"
          className="text-3xl font-bold leading-9 tracking-wide scroll-pl-8"
        >
          {"<SS />"}
        </a>
        <nav className=" hidden lg:flex content-center items-center gap-6 text-gray-900 text-base font-medium leading-6">
          <a>About</a>
          <a>Work</a>
          <a>Testimonials</a>
          <a>Contact</a>
          <LigthIcon />
          <button className="rounded-xl bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 ">
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
