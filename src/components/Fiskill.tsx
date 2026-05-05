import React from "react";
import { ExidIcon } from "./icon/ExidIcon";

interface FiskillProps {
  title: string;
  para: string;
  text: string[];
  index: number;
}

export const Fiskill: React.FC<FiskillProps> = ({ title, para, text, index }) => {
  return (
    <div
      className={`flex flex-col lg:w-[1500px] shadow-[0px_1px_1px_0px_#EEEEEE] dark:shadow-[0px_1px_1px_0px_#0000001a] rounded-xl dark:bg-[#1F2937] dark:text-[#D1D5DB] ${
        index === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <img
        className="py-12 px-12 rounded-3xl bg-gray-50 dark:bg-[#374151] lg:w-[40%]"
        src="/Picture.png"
        alt={title}
      />
      <div className="py-12 px-12 rounded-xl flex flex-col gap-8 lg:w-[50%]">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-base font-normal text-gray-600 dark:text-white">{para}</p>
        <div>
          {text.map((btn, i) => (
            <button
              key={i}
              className="m-2 rounded-xl bg-gray-200 text-gray-600 dark:bg-[#374151] dark:text-[#D1D5DB] text-base font-medium leading-6 py-1 px-4 transition ease-in-out delay-150 hover:-translate-y-1 duration-200"
            >
              {btn}
            </button>
          ))}
        </div>
        <ExidIcon />
      </div>
    </div>
  );
};
