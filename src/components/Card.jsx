import React from "react";
import { UpworkIcon } from "./icon/UpworkIcon";

export const Card = (props) => {
  console.log(props.startDate);

  return (
    <div className="px-8 py-8 flex gap-12 bg-gray-default shadow-[0px_2px_2px_0px_gray-200_gray-250]">
      <UpworkIcon />
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold loaning-6">{props.title}</h1>
        <ul className="text-base font-normal loaning-6 text-gray-600 list-disc">
          {props.highlights.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
      </div>
      <div className=" text-base font-normal loaning-6 text-gray-700 scroll-pr-2">
        {props.startDate}-{props.endDate}
        {/* {props.startDate.toString()} */}
      </div>
    </div>
  );
};
