import React, { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageProvider.jsx';
import ParticlesBackground from '../../shared/ParticlesBackground.js';
import { motion } from 'framer-motion';
const About = () => {
    const { t } = useContext(LanguageContext);

  return (
    <motion.section id="about" className=" min-h-screen snap-start py-20 px-4 flex flex-col justify-center rounded-t-3xl -mt-8 overflow-hidden" 
  initial={{ x: 200, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.3 }}
    >
      <ParticlesBackground />

      <div className="container mx-auto w-full max-w-4xl flex flex-col justify-center h-full">
        
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
    </motion.section>
  )
}

export default About
