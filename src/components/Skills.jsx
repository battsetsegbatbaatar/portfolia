import React, { useEffect, useState } from "react";
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
import { CypressLight } from "./CypressLight";
import { StorybookIcon } from "./skillIcon/StorybookIcon";
import { GitIcon } from "./skillIcon/GitIcon";
import { Label } from "./Label";
import { useServerInsertedHTML } from "next/navigation";
// import { ExpressDarkIcon } from "./skillIcon/ExpressDarkIcon";
const skills = [
  {
    icon: <JavaScript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <Typescript />,
    title: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: <ReactIcom />,
    title: "React",
    href: "https://react.dev/",
  },
  {
    icon: <NextJSIcon />,
    title: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    icon: <NodeJSIcon />,
    title: "Node.js",
    href: "https://nodejs.org/en",
  },
  {
    icon: <ExpressJSIcon />,
    title: "Express.js",
    href: "https://expressjs.com/",
  },
  {
    icon: <NestJSIcon />,
    title: "Nest.js",
    href: "https://nestjs.com/",
  },
  {
    icon: <SocketIOIcon />,
    title: "Socket.io",
    href: "https://socket.io/",
  },
  {
    icon: <PostgreSQLIcon />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    icon: <MongoDBIcon />,
    title: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    icon: <SassScssIcon />,
    title: "Sass/Scss",
    href: "https://sass-lang.com/",
  },
  {
    icon: <TailwindcssIcon />,
    title: "Tailwindcss",
    href: "https://tailwindcss.com/",
  },
  {
    icon: <FigmaIcon />,
    title: "Figma",
    href: "https://www.figma.com/",
  },
  {
    icon: <CypressIcon />,
    title: "Cypress",
    href: "https://www.cypress.io/",
  },
  {
    icon: <StorybookIcon />,
    title: "Storybook",
    href: "https://storybook.js.org/",
  },
  {
    icon: <GitIcon />,
    title: "Git",
    href: "https://git-scm.com/",
  },
];
const darkModeSkills = [
  {
    icon: <JavaScript />,
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: <Typescript />,
    title: "Typescript",
    href: "https://www.typescriptlang.org/",
  },
  {
    icon: <ReactIcom />,
    title: "React",
    href: "https://react.dev/",
  },
  {
    icon: <NextJSIcon />,
    title: "Next.js",
    href: "https://nextjs.org/",
  },
  {
    icon: <NodeJSIcon />,
    title: "Node.js",
    href: "https://nodejs.org/en",
  },
  {
    icon: <ExpressLight />,
    title: "Express.js",
    href: "https://expressjs.com/",
  },
  {
    icon: <NestJSIcon />,
    title: "Nest.js",
    href: "https://nestjs.com/",
  },
  {
    icon: <SocketLigth />,
    title: "Socket.io",
    href: "https://socket.io/",
  },
  {
    icon: <PostgreSQLIcon />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    icon: <MongoDBIcon />,
    title: "MongoDB",
    href: "https://www.mongodb.com/",
  },
  {
    icon: <SassScssIcon />,
    title: "Sass/Scss",
    href: "https://sass-lang.com/",
  },
  {
    icon: <TailwindcssIcon />,
    title: "Tailwindcss",
    href: "https://tailwindcss.com/",
  },
  {
    icon: <FigmaIcon />,
    title: "Figma",
    href: "https://www.figma.com/",
  },
  {
    icon: <CypressLight />,
    title: "Cypress",
    href: "https://www.cypress.io/",
  },
  {
    icon: <StorybookIcon />,
    title: "Storybook",
    href: "https://storybook.js.org/",
  },
  {
    icon: <GitIcon />,
    title: "Git",
    href: "https://git-scm.com/",
  },
];
export const Skills = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Initial check

    // Listen for changes in the class attribute
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect(); // Cleanup
    };
  }, []);

  const skillSets = isDarkMode ? darkModeSkills : skills;
  return (
    <container className="py-24 px-4 flex flex-col justify-between items-center gap-4 lg:px-20 dark:bg-black dark:text-white">
      <Label
        text="Skills"
        para="The skills, tools and technologies I am really good at:"
      />
      <div>
        <div className="grid grid-cols-3 lg:grid-cols-8 gap-12  text-lg font-normal loaning-6 text-gray-600">
          {/* <skillSets /> */}
          {skillSets.map((skill, index) => {
            return (
              <Skill
                icon={skill.icon}
                title={skill.title}
                key={index}
                href={skill.href}
              />
            );
          })}
        </div>
      </div>
    </container>
  );
};
