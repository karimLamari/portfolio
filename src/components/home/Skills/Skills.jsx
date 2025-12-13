import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageProvider.jsx';
import { IoLogoJavascript } from 'react-icons/io5';
import { FaReact, FaNodeJs, FaGit } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiDocker } from 'react-icons/si';
import SkillCard from './SkillCard.jsx';


const Skills = () => {


  const skills = [
  { name: "JavaScript", Icon: IoLogoJavascript, iconColor: "text-yellow-400" },
  { name: "React", Icon: FaReact, iconColor: "text-cyan-400" },
  { name: "Next.js", Icon: RiNextjsFill, iconColor: "text-white" },
  { name: "Node.js", Icon: FaNodeJs, iconColor: "text-green-500" },
  { name: "Express", Icon: SiExpress, iconColor: "text-gray-400" },
  { name: "MongoDB", Icon: SiMongodb, iconColor: "text-green-600" },
  { name: "Git", Icon: FaGit, iconColor: "text-red-500" },
  { name: "Docker", Icon: SiDocker, iconColor: "text-blue-500" }
];

    const { t } = useContext(LanguageContext);
  return (
<section id="skills" className=" min-h-screen snap-start py-20 px-4 rounded-t-3xl -mt-8 flex flex-col justify-center">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {t.skills.title} <span className="text-[var(--color-primary)]">{t.skills.titleHighlight}</span>
        </h2>
        <div className="flex justify-around flex-wrap gap-12">
          {skills.map(skill =>(
            <SkillCard
              key={skill.name}
              name={skill.name}
              Icon={skill.Icon}
              iconColor={skill.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
