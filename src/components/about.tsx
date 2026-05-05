import React from "react";
import { Label } from "./Label";
import { useLanguage } from "@/contexts/LanguageContext";

const t = {
  en: {
    title: "About Me",
    p1: "I hold a Bachelor's degree in Nano Engineering and completed an 8-month Fullstack Development program at Pinecone Academy (graduated June 2024). I joined MEVENTO LLC as a Backend Developer in May 2024 and have been working there since.",
    p2: "I've built backend systems for e-learning platforms using Node.js, PostgreSQL, and Redis — including video upload pipelines, queues, and real-time tracking. I enjoy designing scalable, maintainable APIs that evolve with user needs.",
    p3: "I'm driven by solving real problems through clean, reliable code and continuously improving systems based on user feedback.",
    facts: [
      "B.S. in Nano Engineering",
      "Pinecone Academy Fullstack (2024.06)",
      "1+ year Backend experience",
      "English — Upper Intermediate",
    ],
  },
  mn: {
    title: "Миний тухай",
    p1: "Нано инженерчлалийн бакалавр боловсролтой бөгөөд Pinecone Academy-д Fullstack хөгжүүлэлтийн 8 сарын сургалт дүүргэсний дараа 2024 оны 5-р сард MEVENTO LLC-д Backend хөгжүүлэгчээр орж, одоо хүртэл ажиллаж байна.",
    p2: "Node.js, PostgreSQL, Redis ашиглан e-learning платформын backend системүүдийг хөгжүүлсэн. File upload, queue, видео үзэлтийн бүртгэл зэрэг нарийн функциональ системүүдийг хэрэгжүүлсэн туршлагатай.",
    p3: "Хэрэглэгчдийн хүсэлтийн дагуу системийг тасралтгүй сайжруулж, уян хатан, өргөтгөх боломжтой шийдлүүдийг бүтээхийг зорьдог.",
    facts: [
      "Нано инженерчлалийн бакалавр",
      "Pinecone Academy Fullstack (2024.06)",
      "1+ жилийн Backend туршлага",
      "Англи хэл — ахисан дунд шат",
    ],
  },
};

export const About = () => {
  const { lang } = useLanguage();
  const tx = t[lang];

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text={tx.title} />
        <div className="flex flex-col gap-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>{tx.p1}</p>
          <p>{tx.p2}</p>
          <p>{tx.p3}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400">
          {tx.facts.map((f) => (
            <span key={f}>✦ {f}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
