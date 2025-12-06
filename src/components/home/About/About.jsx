import React, { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageProvider.jsx';
import ParticlesBackground from '../../shared/ParticlesBackground.js';

const About = () => {
    const { t } = useContext(LanguageContext);

  return (
    <section id="about" className=" py-20 px-4  rounded-t-3xl -mt-8 ">

      <div className="container mx-auto max-w-6xl">
        
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {t.about.title} <span className="text-primary">{t.about.titleHighlight}</span>
        </h2>

        <div className=" flex  justify-center px-8 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted leading-relaxed text-center">
              {t.about.paragraph1}
            </p>
            <p className="text-lg text-muted leading-relaxed text-center">
              {t.about.paragraph2}
            </p>
            <p className="text-lg text-muted leading-relaxed text-center  ">
              {t.about.paragraph3}
            </p>
          </div>


        </div>
      </div>
    </section>
  )
}

export default About
