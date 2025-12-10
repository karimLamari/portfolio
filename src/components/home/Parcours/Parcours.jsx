import ParcoursCard from './ParcoursCard'
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageProvider.jsx';


const Parcours = () => {

  const {t} = useContext(LanguageContext);


  return (
    <section className="w-full py-20 px-4 flex flex-col justify-center overflow-hidden">
            <div className="container mx-auto w-full max-w-4xl overflow-hidden">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">
          {t.portfolio.title} <span className="text-primary">{t.portfolio.titleHighlight}</span>
        </h2>
        </div>
      <div className="flex  flex-col items-center">
        {t.parcours.items.map((item, index) => (
          <ParcoursCard key={index} {...item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Parcours;
