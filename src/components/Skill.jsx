import React from "react";
import { GitIcon } from "./skillIcon/GitIcon";

export const Skill = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col items-center gap-2">
      {/* {props.icon} */}
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-200">
        {props.icon}
      </div>
      <p className="dark:text-white">{props.title}</p>
    </div>
  );
};
