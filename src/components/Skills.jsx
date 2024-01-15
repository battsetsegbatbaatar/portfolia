import React from "react";
import { Skill } from "./Skill";
import { NodeJSIcon } from "./skillIcon/NodeJSIcon";
import { JavaScript } from "./skillIcon/JavaScript";
import { Typescript } from "./skillIcon/Typescript";
import { ReactIcom } from "./skillIcon/ReactIcom";
import { NextJSIcon } from "./skillIcon/NextJSIcon";
import { ExpressJSIcon } from "./skillIcon/ExpressJSIcon";
import { ExpressLight } from "./skillIcon/ExpressLight";
import { NestJSIcon } from "./skillIcon/NestJSIcon";
import { SocketIOIcon } from "./skillIcon/SocketIOIcon";
import { SocketLigth } from "./skillIcon/SocketLigth";
import { PostgreSQLIcon } from "./skillIcon/PostgreSQLIcon";
import { MongoDBIcon } from "./skillIcon/MongoDBIcon";
import { SassScssIcon } from "./skillIcon/SassScssIcon";
import { TailwindcssIcon } from "./skillIcon/TailwindcssIcon";
import { FigmaIcon } from "./skillIcon/FigmaIcon";
import { CypressIcon } from "./skillIcon/CypressIcon";
import { StorybookIcon } from "./skillIcon/StorybookIcon";
import { GitIcon } from "./skillIcon/GitIcon";
import { Label } from "./Label";
// import { ExpressDarkIcon } from "./skillIcon/ExpressDarkIcon";
const skills = [
  {
    icon: <JavaScript />,
    title: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <Typescript />,
    title: "Typescript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: <ReactIcom />,
    title: "React",
    url: "https://react.dev/",
  },
  {
    icon: <NextJSIcon />,
    title: "Next.js",
    url: "https://nextjs.org/",
  },
  {
    icon: <NodeJSIcon />,
    title: "Node.js",
    url: "https://nodejs.org/en",
  },
  {
    icon: <ExpressJSIcon />,
    title: "Express.js",
    darkModeIcon: <ExpressLight />,
    url: "https://expressjs.com/",
  },
  {
    icon: <NestJSIcon />,
    title: "Nest.js",
    url: "https://nestjs.com/",
  },
  {
    icon: <SocketIOIcon />,
    title: "Socket.io",
    darkModeIcon: <SocketLigth />,
    url: "https://socket.io/",
  },
  {
    icon: <PostgreSQLIcon />,
    title: "PostgreSQL",
  },
  {
    icon: <MongoDBIcon />,
    title: "MongoDB",
  },
  {
    icon: <SassScssIcon />,
    title: "Sass/Scss",
  },
  {
    icon: <TailwindcssIcon />,
    title: "Tailwindcss",
  },
  {
    icon: <FigmaIcon />,
    title: "Figma",
  },
  {
    icon: <CypressIcon />,
    title: "Cypress",
  },
  {
    icon: <StorybookIcon />,
    title: "Storybook",
  },
  {
    icon: <GitIcon />,
    title: "Git",
  },
];
export const Skills = () => {
  const skillSets = [];
  skills.forEach((skill) => {
    skillSets.push(<Skill icon={skill.icon} title={skill.title} />);
  });
  return (
    <container className="py-24 px-4 flex flex-col justify-between items-center gap-4 lg:px-20 dark:bg-black dark:text-white">
      <Label
        text="Skills"
        para="The skills, tools and technologies I am really good at:"
      />
      <div>
        <div className="grid grid-cols-3 lg:grid-cols-8 gap-12  text-lg font-normal loaning-6 text-gray-600">
          {/* <skillSets /> */}
          {skills.map((skill, index) => {
            return <Skill icon={skill.icon} title={skill.title} key={index} />;
          })}
        </div>
      </div>
    </container>
  );
};
