
import Hero from '../components/home/Hero/Hero';
import About from '../components/home/About/About.jsx';
import Skills from '../components/home/Skills/Skills.jsx';
import Portfolio from '../components/home/Portfolio/Portfolio.jsx';
import Contact from '../components/home/Contact/Contact.jsx';
import Approach from '../components/home/Approach/Approach.jsx';
import Parcours from '../components/home/Parcours/Parcours.jsx';
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Approach />
      <Parcours />
      <Contact />
    </div>
  )
}
