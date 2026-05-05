import React from "react";
import { Label } from "./Label";

const projects = [
  {
    title: "Meskill — Байгуулагчийн E-Learning Platform",
    description:
      "MEVENTO-д ороод хийсэн эхний төсөл. Байгуулагчдад зориулсан e-learning платформын backend-ийг эхнээс нь зохион бүтээсэн. FFmpeg + BullMQ queue ашиглан видео upload & боловсруулалтын pipeline хэрэгжүүлж, DigitalOcean Spaces-д хадгалах систем барьсан. Redis-ээр видео үзэлтийн бүртгэлийг real-time шийдсэн. Docker-оор deploy хийсэн.",
    tech: ["Node.js", "TypeScript", "Express.js", "PostgreSQL", "Redis", "BullMQ", "FFmpeg", "DigitalOcean Spaces", "Multer", "Docker", "JWT"],
  },
  {
    title: "Melearnболон — Иж Бүрэн Сургалтын Platform",
    description:
      "Course, audiobook, quiz, certificate, payment, notification зэрэг 20+ module-тэй иж бүрэн e-learning платформын backend. GraphQL (Apollo) + REST API хавсарсан архитектур ашигласан. QPay, Голомт, Хаан банкны payment интеграци, Firebase push notification, Socket.io real-time холболт хэрэгжүүлсэн. Хэрэглэгчдийн хүсэлтийн дагуу file upload-ыг queue-тэй болгож, API-г тасралтгүй сайжруулсан.",
    tech: ["Node.js", "TypeScript", "Express.js", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "DigitalOcean Spaces", "FFmpeg", "Socket.io", "Firebase", "QPay", "JWT"],
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
