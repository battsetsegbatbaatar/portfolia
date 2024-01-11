import React from "react";

export const Menu = (props) => {
  return (
    <div
      className={`position flex rounded-xl bg-gray-100 onClick:${
        props.index === 1 && "flex-row-reverse"
      }`}
    >
      <a>About</a>
      <a>Work</a>
      <a>Testimonials</a>
      <a>Contact</a>
    </div>
  );
};
s;
