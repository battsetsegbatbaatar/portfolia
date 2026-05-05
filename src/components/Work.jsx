import React from "react";
import { Label } from "./Label";

const projects = [
  {
    title: "MEVENTO — Event Management Platform",
    description:
      "Арга хэмжээний удирдлагын платформын backend системийг Node.js болон PostgreSQL ашиглан хөгжүүлсэн. GraphQL API нэвтрүүлж, React frontend-тэй нэгтгэсэн.",
    tech: ["Node.js", "GraphQL", "PostgreSQL", "React", "Express.js"],
  },
  {
    title: "Melearnпlatform — E-Learning Backend",
    description:
      "Онлайн сургалтын платформын backend архитектурыг зохион бүтээж хөгжүүлсэн. REST API endpoint баримтжуулж, мэдээллийн санг удирдсан.",
    tech: ["Node.js", "REST API", "PostgreSQL", "JavaScript", "Postman"],
  },
  {
    title: "Meskill — Skills Training API",
    description:
      "Ур чадвар сургалтын платформын API системийг хөгжүүлсэн. React Native мобайл апп-тай нэгдсэн backend-ийг хариуцаж хэрэгжүүлсэн.",
    tech: ["Node.js", "React Native", "PostgreSQL", "GraphQL"],
  },
];

export const Work = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text="Ажлууд" />
        <div className="flex flex-col gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 p-5 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full"
                  >
                    {t}
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
