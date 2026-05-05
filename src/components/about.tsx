import React from "react";
import { Label } from "./Label";

export const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text="Миний тухай" />
        <div className="flex flex-col gap-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Нано инженерчлалийн бакалавр боловсролтой бөгөөд Pinecone Academy-д
            Fullstack хөгжүүлэлтийн 8 сарын сургалт дүүргэсний дараа 2024 оны 5-р
            сард MEVENTO LLC-д Backend хөгжүүлэгчээр орж, одоо хүртэл ажиллаж байна.
          </p>
          <p>
            Node.js, PostgreSQL, Redis зэрэг технологиудыг ашиглан байгуулагчдад
            зориулсан e-learning платформ болон сургалтын платформын backend
            системүүдийг хөгжүүлсэн. File upload, queue, видео үзэлтийн бүртгэл
            зэрэг нарийн функциональ системүүдийг хэрэгжүүлсэн туршлагатай.
          </p>
          <p>
            Хэрэглэгчдийн хүсэлтийн дагуу системийг тасралтгүй сайжруулж,
            уян хатан, өргөтгөх боломжтой шийдлүүдийг бүтээхийг зорьдог.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>✦ Нано инженерчлалийн бакалавр</span>
          <span>✦ Pinecone Academy Fullstack (2024.06)</span>
          <span>✦ 1+ жилийн Backend туршлага</span>
          <span>✦ Англи хэл — ахисан дунд шат</span>
        </div>
      </div>
    </section>
  );
};
