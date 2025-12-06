import {createContext, useMemo} from 'react';
import useLanguageMode from '../hooks/useLanguageMode.jsx';
import fr from '../translations/fr.json';
import en from '../translations/en.json';




const LanguageContext = createContext();

export function LanguageProvider({children}) {


    const [language, setLanguage] = useLanguageMode();

    const translations = useMemo(() => {
        return language === 'fr' ? fr : en;
    }, [language]);
    return (
        <LanguageContext.Provider value={{language, setLanguage, t: translations}}>
            {children}
        </LanguageContext.Provider>
    );
}
export { LanguageContext };