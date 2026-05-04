import React from "react";
import { Label } from "./Label";

const categories = [
  {
    name: "Хэл",
    skills: ["JavaScript", "SQL"],
  },
  {
    name: "Framework & Library",
    skills: ["React", "React Native", "Next.js", "Node.js", "Express.js", "GraphQL"],
  },
  {
    name: "Мэдээллийн сан & Хэрэгсэл",
    skills: ["PostgreSQL", "Git", "GitHub", "Postman"],
  },
];

export const Skills = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text="Ур чадвар" />
        <div className="flex flex-col gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="flex flex-col gap-3">
              <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                {cat.name}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
