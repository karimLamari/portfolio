
import ProjectCard from "./ProjectCard.jsx";
import {useContext,useState} from 'react';
import {LanguageContext} from "../../../context/LanguageProvider.jsx";
import ModalProject from "./MOdalProject.jsx";


export default function Projects() {
  const { t } = useContext(LanguageContext);


const projects = Object.values(t.portfolio.projects);
const [selectedProject, setSelectedProject] = useState(null);


  return (
    <section id="portfolio" className="min-h-screen snap-start py-20 px-4 rounded-t-3xl -mt-8 flex flex-col justify-center">
      <div className="container mx-auto w-full max-w-full overflow-hidden">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {t.portfolio.title} <span className="text-primary">{t.portfolio.titleHighlight}</span>
        </h2>

        <div className="flex justify-center flex-wrap gap-12 w-full mb-50">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project}
             onClick={() => setSelectedProject(project)} />
          ))}
        </div>
      </div>
      <ModalProject
        isOpen={selectedProject}
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
