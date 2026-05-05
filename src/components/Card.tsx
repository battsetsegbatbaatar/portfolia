import React from "react";
import { UpworkIcon } from "./icon/UpworkIcon";

interface CardProps {
  title: string;
  highlights: string[];
  startDate: string;
  endDate: string;
}

export const Card: React.FC<CardProps> = ({ title, highlights, startDate, endDate }) => {
  return (
    <div className="px-8 py-8 max-w-4xl flex flex-col lg:flex-row gap-12 justify-between bg-white rounded-xl shadow-[0px_2px_2px_0px_#e5e7eb] dark:bg-[#374151] transition ease-in-out delay-150 hover:-translate-y-1 duration-200">
      <UpworkIcon />
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-semibold dark:text-[#D1D5DB]">{title}</h1>
        <ul className="text-base font-normal text-gray-600 dark:text-[#D1D5DB] list-disc">
          {highlights.map((li, i) => (
            <li key={i}>{li}</li>
          ))}
        </ul>
      </div>
      <div className="text-base font-normal text-gray-700 dark:text-[#D1D5DB]">
        {startDate} - {endDate}
      </div>
    </div>
  );
};
