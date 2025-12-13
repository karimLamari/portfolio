import SkillCard from "../Skills/SkillCard";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiDocker } from "react-icons/si";


const MOdalProject = ({ isOpen, project, onClose }) => {
  if (!isOpen) return null;

  const skills = [
    {
      name: "JavaScript",
      Icon: IoLogoJavascript,
      iconColor: "text-yellow-400",
    },
    { name: "React", Icon: FaReact, iconColor: "text-cyan-400" },
    { name: "Next.js", Icon: RiNextjsFill, iconColor: "text-white" },
    { name: "Node.js", Icon: FaNodeJs, iconColor: "text-green-500" },
    { name: "Express", Icon: SiExpress, iconColor: "text-gray-400" },
    { name: "MongoDB", Icon: SiMongodb, iconColor: "text-green-600" },
    { name: "Git", Icon: FaGit, iconColor: "text-red-500" },
    { name: "Docker", Icon: SiDocker, iconColor: "text-blue-500" },
  ];
  return (
    <div
      className="fixed inset-0 bg-[var(--color-background)]/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-[var(--color-background)] border border-bg-[var(--color-foreground)] p-6 rounded-xl max-w-7xl w-full m-4 max-h-[80vh] relative overflow-auto slide-up justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white  text-2xl font-bold"
          onClick={onClose}
        >
          X
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-muted">
          {project.title}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {project.tags.map((tag) => {
            const skill = skills.find((s) => s.name === tag);
            return skill ? (
              <SkillCard
                key={skill.name}
                name={skill.name}
                Icon={skill.Icon}
                iconColor={skill.iconColor}
              />
            ) : null;
          })}
        </div>

        <h3 className="bg-[var(--color-background)] relative text-center slide-up">
          {project.context}
        </h3>
        <div className="mt-4 text-center relative slide-up">
          {project.objectifs}
        </div>
        <div className="mt-4 text-center relative slide-up">
          {project.skills}
        </div>
        <div className="mt-4 text-center relative slide-up">
          {project.results}
        </div>
        <div className="mt-4 text-center relative slide-up">
          {project.perspectives}
        </div>
        <div className="mt-6 flex justify-center gap-10 flex-wrap">
          <a
            href={project.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted"
          >
            View Project
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted "
            >
              <FaGit size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default MOdalProject;
