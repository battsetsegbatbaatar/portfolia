import React from "react";
import { Label } from "./Label";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = {
  en: [
    { name: "Language", skills: ["TypeScript", "JavaScript", "SQL"] },
    { name: "Backend", skills: ["Node.js", "Express.js", "GraphQL (Apollo)", "REST API", "Socket.io", "BullMQ"] },
    { name: "Database & Cache", skills: ["PostgreSQL", "MongoDB", "Redis", "Sequelize"] },
    { name: "Cloud & Infrastructure", skills: ["DigitalOcean Spaces", "AWS S3", "Docker", "FFmpeg"] },
    { name: "Integrations & Tools", skills: ["Firebase", "QPay", "JWT", "Multer", "Nodemailer", "Git", "Postman"] },
  ],
  mn: [
    { name: "Хэл", skills: ["TypeScript", "JavaScript", "SQL"] },
    { name: "Backend", skills: ["Node.js", "Express.js", "GraphQL (Apollo)", "REST API", "Socket.io", "BullMQ"] },
    { name: "Мэдээллийн сан & Cache", skills: ["PostgreSQL", "MongoDB", "Redis", "Sequelize"] },
    { name: "Cloud & Дэд бүтэц", skills: ["DigitalOcean Spaces", "AWS S3", "Docker", "FFmpeg"] },
    { name: "Интеграци & Хэрэгсэл", skills: ["Firebase", "QPay", "JWT", "Multer", "Nodemailer", "Git", "Postman"] },
  ],
};

const titles = {
  en: { title: "Skills", para: "Technologies and tools I work with:" },
  mn: { title: "Ур чадвар", para: "Би ашигладаг технологи болон хэрэгслүүд:" },
};

export const Skills = () => {
  const { lang } = useLanguage();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text={titles[lang].title} para={titles[lang].para} />
        <div className="flex flex-col gap-6">
          {categories[lang].map((cat) => (
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
