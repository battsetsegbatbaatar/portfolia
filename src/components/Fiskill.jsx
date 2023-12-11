import React from "react";
import { ExidIcon } from "./icon/ExidIcon";

export const Fiskill = (props) => {
  console.log(props.index);
  return (
    <div
      className={`flex shadow-[0px_2px_2px_0px_#EEEEEE] rounded-xl ${
        props.index === 1 && "flex-row-reverse"
      }`}
    >
      <img
        className="py-12 px-12 rounded-xl bg-gray-50 w-[50%]"
        src="/Picture.jpg"
      />
      <div className="py-12 px-12 rounded-xl flex flex-col gap-8 w-[50%]">
        <h1 className="text-xl font-semibold loaning-6">{props.title}</h1>
        <p className="text-base font-normal flex-wrap loaning-6 text-gray-600">
          {props.para}
        </p>
        <div>
          {props.text.map((button) => (
            <button className="m-2 rounded-xl bg-gray-200 text-gray-600 text-base font-medium leading-6 py-1 px-4">
              {button}
            </button>
          ))}
        </div>
        <ExidIcon />
      </div>
    </div>
  );
};
