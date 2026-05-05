import React from "react";

interface CountProps {
  count: number;
  countPlus: () => void;
  countMinus: () => void;
}

export const Count: React.FC<CountProps> = ({ count, countPlus, countMinus }) => {
  return (
    <div className="flex justify-center items-center h-60 gap-8">
      <button
        onClick={countPlus}
        className="m-2 rounded-xl bg-gray-200 text-gray-600 text-base font-medium leading-6 py-1 px-4"
      >
        +
      </button>
      <p>{count}</p>
      <button
        onClick={countMinus}
        className="m-2 rounded-xl bg-gray-200 text-gray-600 text-base font-medium leading-6 py-1 px-4"
      >
        -
      </button>
    </div>
  );
};
