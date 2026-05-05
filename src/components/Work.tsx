import React from 'react';
import { Label } from './Label';
import { useLanguage } from '@/contexts/LanguageContext';

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const projects: { en: Project[]; mn: Project[] } = {
  en: [
    {
      title: 'Meskill — Corporate E-Learning Platform',
      description:
        'Independently designed and built the entire backend system for a corporate online learning platform from scratch.',
      highlights: [
        'Built a video upload & automated processing pipeline using FFmpeg + BullMQ — uploaded videos are queued, processed in the background, and stored on DigitalOcean Spaces',
        'Implemented real-time video view tracking with Redis, enabling per-user progress monitoring',
        'Standardized environment configuration with Docker, simplifying deployment',
        'Implemented JWT-based authentication system'
      ],
      tech: [
        'Node.js',
        'TypeScript',
        'Express.js',
        'PostgreSQL',
        'Redis',
        'BullMQ',
        'FFmpeg',
        'DigitalOcean Spaces',
        'Docker',
        'JWT'
      ]
    },
    {
      title: 'Melearn — Full-Featured Learning Platform',
      description:
        'Developed and continuously improved the backend for a large-scale e-learning platform with 20+ modules including courses, audiobooks, quizzes, certificates, payments, and notifications.',
      highlights: [
        'Designed a GraphQL (Apollo) + REST API hybrid architecture for flexible, efficient data delivery to the frontend',
        'Integrated QPay, Golomt Bank payment gateways with both subscription and one-time order flows',
        'Added real-time notifications and Firebase push notifications and Socket.io',
        'Improved file upload reliability by introducing queue-based processing; continuously iterated on APIs based on user feedback',
        'Implemented complex modules: audiobooks, quiz engine, certificate issuance, and affiliate system'
      ],
      tech: [
        'Node.js',
        'TypeScript',
        'GraphQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'DigitalOcean Spaces',
        'FFmpeg',
        'Socket.io',
        'Firebase',
        'QPay',
        'JWT'
      ]
    }
  ],
  mn: [
    {
      title: 'Meskill — Байгуулагчийн E-Learning Platform',
      description:
        'Байгуулагчдад зориулсан онлайн сургалтын платформын backend системийг эхнээс нь бие даан зохион бүтээж хэрэгжүүлсэн.',
      highlights: [
        'FFmpeg + BullMQ queue ашиглан видео upload & автомат боловсруулалтын pipeline барьсан — хэрэглэгч видеогоо upload хийхэд дараалалд орж, арын системд боловсруулагдаж, DigitalOcean Spaces-д хадгалагддаг',
        'Redis ашиглан видео үзэлтийн бүртгэлийг real-time хийж, хэрэглэгч бүрийн явцыг хянах боломжтой болгосон',
        'Docker ашиглан орчны тохиргоог стандартчилж, deploy хялбарчилсан',
        'JWT-д суурилсан authentication систем хэрэгжүүлсэн'
      ],
      tech: [
        'Node.js',
        'TypeScript',
        'Express.js',
        'PostgreSQL',
        'Redis',
        'BullMQ',
        'FFmpeg',
        'DigitalOcean Spaces',
        'Docker',
        'JWT'
      ]
    },
    {
      title: 'Melearn — Иж Бүрэн Сургалтын Platform',
      description:
        'Course, audiobook, quiz, certificate, payment, notification зэрэг 20+ module-тэй томоохон e-learning платформын backend-ийг хөгжүүлж, тасралтгүй сайжруулсан.',
      highlights: [
        'GraphQL (Apollo) + REST API хавсарсан архитектур зохион байгуулж, frontend-д уян хатан мэдээлэл дамжуулалт хэрэгжүүлсэн',
        'QPay, Голомт банкны payment интеграци хийж, subscription болон нэг удаагийн захиалгын систем барьсан',
        'Firebase push notification болон Socket.io ашиглан real-time мэдэгдэл нэмсэн',
        'File upload-ыг queue-тэй болгож найдвартай болгосон — хэрэглэгчдийн хүсэлтийн дагуу API-г тасралтгүй сайжруулсан',
        'Audiobook, quiz, сертификат олгох, affiliate систем зэрэг нарийн модулиудыг хэрэгжүүлсэн'
      ],
      tech: [
        'Node.js',
        'TypeScript',
        'GraphQL',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'DigitalOcean Spaces',
        'FFmpeg',
        'Socket.io',
        'Firebase',
        'QPay',
        'JWT'
      ]
    }
  ]
};

const titles = {
  en: 'Projects',
  mn: 'Ажлууд'
};

export const Work = () => {
  const { lang } = useLanguage();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 border-t border-gray-100 dark:border-gray-800">
      <div className="flex flex-col gap-8">
        <Label text={titles[lang]} />
        <div className="flex flex-col gap-8">
          {projects[lang].map((p, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 p-6 border border-gray-100 dark:border-gray-800 rounded-xl hover:border-gray-300 dark:hover:border-gray-600 transition-colors"
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  {p.description}
                </p>
              </div>

              <ul className="flex flex-col gap-2">
                {p.highlights.map((h, j) => (
                  <li
                    key={j}
                    className="flex gap-2 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                  >
                    <span className="text-gray-300 dark:text-gray-600 shrink-0 mt-0.5">
                      →
                    </span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-1">
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
