
import ProjectCard from "./ProjectCard.jsx";
import {useContext} from 'react';
import {LanguageContext} from "../../../context/LanguageProvider.jsx";


export default function Portfolio() {
  const { t } = useContext(LanguageContext);

  const projects = [
    {
      title: t.portfolio.projects.bimisushi.title,
      description: t.portfolio.projects.bimisushi.description,
      image: "/images/bimisushi.webp",
      tags: ["React", "Node.js", "MongoDB"],
      link: "https://bimisushi31.com",
    },
    {
      title: t.portfolio.projects.blink.title,
      description: t.portfolio.projects.blink.description,
      image: "/images/blink.webp",
      tags: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
      link: "https://blink.quxly.fr",
    },
    {
      title: t.portfolio.projects.kasa.title,
      description: t.portfolio.projects.kasa.description,
      image: "/images/kasa.webp",
      tags: ["React"],
      link: "https://kasa-nine-smoky.vercel.app/",
    },
  ];

  return (
    <section id="portfolio" className="min-h-screen py-20 px-4 rounded-t-3xl -mt-8 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {t.portfolio.title} <span className="text-primary">{t.portfolio.titleHighlight}</span>
        </h2>

        <div className="flex justify-around flex-wrap gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
