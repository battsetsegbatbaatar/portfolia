import React from "react";
import { C } from "./icon/C";

export const Footer = () => {
  return (
    <div className="flex py-6 px-4 lg:px-20 bg-gray-50 justify-center dark:bg-[#111827]">
      <C />
      <p className="text-sm font-normal loaning-6 text-gray-600 dark:text-[#D1D5DB]">
        2023 |{" "}
        <a
          href="https://www.figma.com/@shahsagarm"
          className="underline underline-offset-1"
        >
          Designed
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/shahsagarm/sagarshah.dev"
          className="underline underline-offset-1"
        >
          coded
        </a>{" "}
        with ❤️️ by Sagar Shah
      </p>
    </div>
  );
};
