import React from "react";

export const Label = (props) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
        {props.text}
      </h2>
      {props.para && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{props.para}</p>
      )}
    </div>
  );
};
