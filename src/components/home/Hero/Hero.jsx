import {useContext} from 'react';
import {LanguageContext} from '../../../context/LanguageProvider.jsx';
import ParticlesBackground from '../../shared/ParticlesBackground.js';

const Hero = () => {
const {t} = useContext(LanguageContext);

  return (
  <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
            <ParticlesBackground />
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center gap-8">

          <div className="space-y-4">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold slide-up">
              {t.hero.greeting}{" "}
              <span className="text-primary slide-up">{t.hero.name}</span>
            </h1>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-semibold text-muted">
              {t.hero.title}
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
