import ParcoursCard from './ParcoursCard'
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageProvider.jsx';


const Parcours = () => {

  const {t} = useContext(LanguageContext);
  const parcours = t.parcours;
return (
<section id="parcours" className="min-h-screen snap-start w-full py-20 px-4 flex flex-col justify-center ">
    <div className="container mx-auto w-full max-w-4xl overflow-hidden">
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
        {parcours.title} <span className="text-[var(--color-primary)]">{parcours.titleHighlight}</span>
      </h2>
    </div>
    <div className="flex flex-col items-center mb-50">
      {t.parcours.items.map((item, index) => (
        <ParcoursCard key={index} {...item} index={index} />
      ))}
    </div>
  </section>
);

};

export default Parcours;
