import React from "react";
import { UpworkIcon } from "./icon/UpworkIcon";

export const Card = (props) => {
  console.log(props.startDate);

  return (
    <div className="px-8 py-8 max-w-4xl flex gap-12 justify-between bg-gray-default rounded-xl bg-white shadow-[0px_2px_2px_0px_gray-200]">
      <UpworkIcon />
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold loaning-6">{props.title}</h1>
        <ul className="text-base font-normal flex-wrap loaning-6 text-gray-600 list-disc">
          {props.highlights.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
      </div>
      <div className=" text-base font-normal loaning-6 text-gray-700 scroll-pr-2">
        {props.startDate}-{props.endDate}
      </div>
    </div>
  );
};
