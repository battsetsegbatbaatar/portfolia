import React from 'react';
import { Label } from './Label';
import { useLanguage } from '@/contexts/LanguageContext';

const histories = {
  en: [
    {
      company: 'MEVENTO LLC',
      position: 'Backend Developer',
      period: 'May 2024 — Present',
      highlights: [
        'Built a video upload & processing pipeline using FFmpeg + BullMQ queue (Meskill)',
        'Implemented real-time video view tracking with Redis and file storage on DigitalOcean Spaces',
        'Developed a full-featured e-learning backend with GraphQL (Apollo) + REST API hybrid architecture (Melearn)',
        'Integrated QPay, Golomt Bank payment gateways with subscription and one-time order flows',
        'Built 20+ modules including Socket.io real-time, audiobook, quiz, certificate, and analytics',
        'Improved file upload reliability with queue processing; iterated on APIs based on user feedback'
      ]
    },
    {
      company: 'Pinecone Academy',
      position: 'Fullstack Development Program',
      period: 'Oct 2023 — Jun 2024',
      highlights: [
        'Completed an intensive 8-month fullstack development bootcamp',
        'Studied React, Node.js, PostgreSQL, and modern web development practices in depth'
      ]
    },
    {
      company: 'Monos Group',
      position: 'Intern',
      period: 'Jun 2022 — Aug 2022',
      highlights: [
        'Participated in pharmaceutical quality analysis and development activities'
      ]
    }
  ],
  mn: [
    {
      company: 'MEVENTO LLC',
      position: 'Backend хөгжүүлэгч',
      period: '2024.05 — Одоо',
      highlights: [
        'FFmpeg + BullMQ queue ашиглан видео upload & боловсруулалтын pipeline хэрэгжүүлсэн (Meskill)',
        'Redis-ээр видео үзэлтийн бүртгэл, DigitalOcean Spaces-д file хадгалах систем барьсан',
        'GraphQL (Apollo) + REST API хавсарсан архитектуртай иж бүрэн e-learning backend хөгжүүлсэн (Melearn)',
        'QPay, Голомт банкны payment интеграци болон Firebase push notification хэрэгжүүлсэн',
        'Socket.io real-time, audiobook, quiz, certificate, analytics зэрэг 20+ module хөгжүүлсэн',
        'Хэрэглэгчдийн хүсэлтийн дагуу file upload-ыг queue-тэй болгож, API-г тасралтгүй сайжруулсан'
      ]
    },
    {
      company: 'Pinecone Academy',
      position: 'Fullstack хөгжүүлэлтийн сургалт',
      period: '2023.10 — 2024.06',
      highlights: [
        'Fullstack хөгжүүлэлтийн 8 сарын эрчимжүүлсэн сургалтыг амжилттай дүүргэсэн',
        'React, Node.js, PostgreSQL зэрэг технологиудыг гүнзгий судалсан'
      ]
    },
    {
      company: 'Monos Group',
      position: 'Дадлагажигч',
      period: '2022.06 — 2022.08',
      highlights: ['Эмийн чанарын шинжилгээ, боловсруулалтын ажлуудад оролцсон']
    }
  ]
};

const titles = {
  en: 'Experience',
  mn: 'Туршлага'
};

export const Experience = () => {
  const { lang } = useLanguage();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text={titles[lang]} />
        <div className="flex flex-col gap-10">
          {histories[lang].map((h, i) => (
            <div
              key={i}
              className="flex flex-col gap-3 pl-4 border-l-2 border-gray-200 dark:border-gray-700"
            >
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
                  <li
                    key={j}
                    className="text-sm text-gray-600 dark:text-gray-300 flex gap-2"
                  >
                    <span className="text-gray-300 dark:text-gray-600 shrink-0">
                      —
                    </span>
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
