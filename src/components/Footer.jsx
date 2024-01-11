import React from "react";
import { C } from "./icon/C";

export const Footer = () => {
  return (
    <div className="flex py-6 px-4 lg:px-20 bg-gray-50 justify-center dark:bg-[#111827]">
      <C />
      <p className="text-sm font-normal loaning-6 text-gray-600 dark:text-[#D1D5DB]">
        2023 | Designed and coded with ❤️️ by Sagar Shah
      </p>
    </div>
  );
};
