import React from "react";
import { Label } from "./Label";

const histories = [
  {
    company: "MEVENTO LLC",
    position: "Backend хөгжүүлэгч",
    period: "2024.05 — Одоо",
    highlights: [
      "FFmpeg + BullMQ queue ашиглан видео upload & боловсруулалтын pipeline хэрэгжүүлсэн (Meskill)",
      "Redis-ээр видео үзэлтийн бүртгэл, DigitalOcean Spaces-д file хадгалах систем барьсан",
      "GraphQL (Apollo) + REST API хавсарсан архитектуртай иж бүрэн e-learning backend хөгжүүлсэн (Melearnболон)",
      "QPay, Голомт, Хаан банкны payment интеграци болон Firebase push notification хэрэгжүүлсэн",
      "Socket.io real-time холболт, audiobook, quiz, certificate, analytics зэрэг 20+ module хөгжүүлсэн",
      "Хэрэглэгчдийн хүсэлтийн дагуу file upload-ыг queue-тэй болгож, API-г тасралтгүй сайжруулсан",
    ],
  },
  {
    company: "Pinecone Academy",
    position: "Fullstack хөгжүүлэлтийн сургалт",
    period: "2023.10 — 2024.06",
    highlights: [
      "Fullstack хөгжүүлэлтийн 8 сарын эрчимжүүлсэн сургалтыг амжилттай дүүргэсэн",
      "React, Node.js, PostgreSQL зэрэг технологиудыг гүнзгий судалсан",
    ],
  },
  {
    company: "Monos Group",
    position: "Дадлагажигч",
    period: "2022.06 — 2022.08",
    highlights: [
      "Мэдээлэл шинжилгээ, боловсруулалтын ажлуудад оролцсон",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text="Туршлага" />
        <div className="flex flex-col gap-10">
          {histories.map((h, i) => (
            <div key={i} className="flex flex-col gap-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {h.company}
                  </span>
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                    {h.period}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {h.position}
                </span>
              </div>
              <ul className="flex flex-col gap-1">
                {h.highlights.map((item, j) => (
                  <li key={j} className="text-sm text-gray-600 dark:text-gray-300 flex gap-2">
                    <span className="text-gray-300 dark:text-gray-600 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
