import React from "react";
import { GitIcon } from "./skillIcon/GitIcon";

export const Skill = (props) => {
  console.log(props);
  return (
    <div className="flex flex-col items-center gap-2">
      {/* {props.icon} */}
      {props.icon}
      <p>{props.title}</p>
    </div>
  );
};
