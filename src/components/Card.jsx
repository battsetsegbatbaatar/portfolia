import React from "react";
import { UpworkIcon } from "./icon/UpworkIcon";

export const Card = (props) => {
  console.log(props.startDate);

  return (
    <div className="px-8 py-8 max-w-4xl flex flex-col lg:flex-row gap-12 justify-between bg-gray-default rounded-xl bg-white shadow-[0px_2px_2px_0px_gray-200] dark:bg-[#374151] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-200">
      <UpworkIcon className="min-w-[110px]"></UpworkIcon>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold loaning-6 dark:text-[#D1D5DB]">
          {props.title}
        </h1>
        <ul className="text-base font-normal flex-wrap loaning-6 text-gray-600 dark:text-[#D1D5DB] list-disc">
          {props.highlights.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
      </div>
      <div className=" text-base font-normal loaning-6 text-gray-700 scroll-pr-2 dark:text-[#D1D5DB]">
        {props.startDate}-{props.endDate}
      </div>
    </div>
  );
};
