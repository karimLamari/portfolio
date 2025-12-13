
import Hero from '../components/home/Hero/Hero';
import About from '../components/home/About/About.jsx';
import Skills from '../components/home/Skills/Skills.jsx';
import Projects from '../components/home/Projects/Projects.jsx';
import Contact from '../components/home/Contact/Contact.jsx';
import Approach from '../components/home/Approach/Approach.jsx';
import Parcours from '../components/home/Parcours/Parcours.jsx';
export default function Home() {
  return (
    <div className="overflow-x-hidden overflow-y-scroll h-screen snap-y snap-mandatory scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Approach />
      <Parcours />
      <Contact />
    </div>
  );
}

