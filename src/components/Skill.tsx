import React from "react";

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

export const Skill: React.FC<SkillProps> = ({ icon, title, href }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-120 duration-200">
        <a href={href}>{icon}</a>
      </div>
      <p className="dark:text-white">{title}</p>
    </div>
  );
};
