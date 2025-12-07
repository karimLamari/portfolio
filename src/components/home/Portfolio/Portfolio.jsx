
import ProjectCard from "./ProjectCard.jsx";
import {useContext,useState} from 'react';
import {LanguageContext} from "../../../context/LanguageProvider.jsx";
import ModalProject from "./MOdalProject.jsx";


export default function Portfolio() {
  const { t } = useContext(LanguageContext);


const projects = Object.values(t.portfolio.projects);
const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section id="portfolio" className="min-h-screen py-20 px-4 rounded-t-3xl -mt-8 ">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {t.portfolio.title} <span className="text-primary">{t.portfolio.titleHighlight}</span>
        </h2>

        <div className="flex justify-around flex-wrap gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project}
             onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      <ModalProject
        isOpen={!!selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
