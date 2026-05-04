import React from "react";
import { Label } from "./Label";

export const About = () => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text="Миний тухай" />
        <div className="flex flex-col gap-4 text-base text-gray-600 dark:text-gray-300 leading-relaxed">
          <p>
            Нано инженерчлалийн бакалавр боловсролтой бөгөөд одоогоор MEVENTO LLC-д
            Backend хөгжүүлэгчээр ажиллаж байна. Melearnболон Meskill платформуудын
            back-end системийг хөгжүүлэхэд оролцсон туршлагатай.
          </p>
          <p>
            Node.js, React, PostgreSQL, GraphQL зэрэг технологиудыг ашиглан RESTful API
            болон цахим системүүдийг хөгжүүлдэг. Багаар ажиллах, шинийг санаачлах,
            асуудал шийдвэрлэх чадвартай.
          </p>
          <p>
            Мэдээллийн технологи, програм хангамжийн салбарт мэргэших, шинэ сорог
            шийдлүүдийг хэрэгжүүлэхийг зорьдог.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 dark:text-gray-400">
          <span>✦ Нано инженерчлалийн бакалавр</span>
          <span>✦ Англи хэл — ахисан дунд шат</span>
          <span>✦ 2+ жилийн Backend туршлага</span>
          <span>✦ Шинийг судлах хүсэлтэй</span>
        </div>
      </div>
    </section>
  );
};
