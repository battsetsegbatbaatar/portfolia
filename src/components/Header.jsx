import React from "react";
import { LigthIcon } from "./icon/ligthIcon";

export const Header = () => {
  return (
    <div>
      <header className="flex px-20 py-4 justify-between items-center self-stretch">
        <h1 className="text-3xl font-bold leading-9 tracking-wide scroll-pl-8">
          {"<SS />"}
        </h1>
        <nav className="flex content-center items-center gap-6 text-gray-900 text-base font-medium leading-6">
          <a>About</a>
          <a>Work</a>
          <a>Testimonials</a>
          <a>Contact</a>
          <LigthIcon />
          <button className="rounded-xl bg-gray-900 text-gray-50 text-base font-medium leading-6 py-1 px-4 ">
            Download CV
          </button>
        </nav>
      </header>
    </div>
  );
};
