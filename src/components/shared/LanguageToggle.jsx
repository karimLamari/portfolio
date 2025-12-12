import {useContext} from 'react';
import {LanguageContext} from '../../context/LanguageProvider.jsx';
import { FiGlobe } from 'react-icons/fi';




const LanguageToggle = () => {
    const {language, setLanguage} = useContext(LanguageContext);
    const handleToggle = () => {
        setLanguage(language === 'fr' ? 'en' : 'fr');
    }


  return (
    <div>
      <button
        onClick={handleToggle}
        className="fixed top-3 right-20 p-3 rounded-full bg-card border border-border hover:bg-accent  shadow-lg z-50"
        aria-label="Toggle language"
      >
        <FiGlobe className="w-5 h-5 text-muted" />
      </button>
    </div>
  )
}

export default LanguageToggle
