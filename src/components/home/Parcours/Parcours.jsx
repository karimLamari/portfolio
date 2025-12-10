import ParcoursCard from './ParcoursCard'
import { useContext } from 'react';
import { LanguageContext } from '../../../context/LanguageProvider.jsx';


const Parcours = () => {

  const {t} = useContext(LanguageContext);


  return (
    <section className="py-20 px-4 flex justify-center">
      <div className="relative border-l-2 border-foreground transition-colors duration-300">
        {t.parcours.items.map((item, index) => (
          <ParcoursCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Parcours;
