import React from "react";

interface LabelProps {
  text: string;
  para?: string;
}

export const Label: React.FC<LabelProps> = ({ text, para }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white tracking-tight">
        {text}
      </h2>
      {para && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{para}</p>
      )}
    </div>
  );
};
