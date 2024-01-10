import React from "react";

export const Label = (props) => {
  return (
    <div className=" flex flex-col justify-between items-center gap-4">
      <button className="rounded-xl bg-gray-200 text-gray-600 dark:bg-[#374151] dark:text-[#D1D5DB] text-base font-medium leading-6 py-1 px-4">
        {props.text}
      </button>
      <div className="text-base lg:text-xl font-normal leaning-6 text-gray-600 dark:text-[#D1D5DB]">
        {props.para}
      </div>
    </div>
  );
};
