import React from "react";

export const Count = (props) => {
  return (
    <div className="flex justify-center items-center h-60 gap-8">
      <button
        onClick={props.countPlus}
        className="m-2 rounded-xl bg-gray-200 text-gray-600 text-base font-medium leading-6 py-1 px-4"
      >
        +
      </button>
      <p>{props.count}</p>
      <butoon
        onClick={props.countMinus}
        className="m-2 rounded-xl bg-gray-200 text-gray-600 text-base font-medium leading-6 py-1 px-4"
      >
        -
      </butoon>
    </div>
  );
};
