import React from "react";
import { ExidIcon } from "./icon/ExidIcon";

export const Fiskill = (props) => {
  console.log(props.index);
  return (
    <div
      className={`flex flex-col lg:w-[1500px] justify-center shadow-[0px_1px_1px_0px_#EEEEEE] dark:shadow-[0px_1px_1px_0px_#0000001a] rounded-xl lg:flex-row dark:bg-[#1F2937] dark:text-[#D1D5DB] lg:${
        props.index === 1 && "flex-row-reverse"
      }`}
    >
      <img
        className="py-12 px-12 rounded-3xl bg-gray-50 dark:bg-[#374151] lg:w-[40%]"
        src="/Picture.png"
      />
      <div className="py-12 px-12 rounded-xl flex flex-col gap-8 lg:w-[50%]">
        <h1 className="text-xl font-semibold loaning-6">{props.title}</h1>
        <p className="text-base font-normal flex-wrap loaning-6 text-gray-600 dark:text-white">
          {props.para}
        </p>
        <div>
          {props.text.map((button) => (
            <button className="m-2 rounded-xl bg-gray-200 text-gray-600 dark:bg-[#374151] dark:text-[#D1D5DB] text-base font-medium leading-6 py-1 px-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-200">
              {button}
            </button>
          ))}
        </div>
        <ExidIcon />
      </div>
    </div>
  );
};
