import React from "react";
import { Label } from "./Label";
import { Fiskill } from "./Fiskill";
const histories = [
  {
    title: "Fiskil",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    text: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Fiskil",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    text: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
  {
    title: "Fiskil",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    text: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
  },
];

export const Work = () => {
  return (
    <div className="py-24 px-4 flex flex-col justify-between items-center gap-12 lg:px-20 dark:bg-black dark:text-white">
      <Label text="Work" para="Some of the noteworthy projects I have built:" />
      {histories.map((history, index) => (
        <Fiskill
          title={history.title}
          para={history.para}
          text={history.text}
          index={index}
        />
      ))}
      {console.log(Fiskill)}
    </div>
  );
};
