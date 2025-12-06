import {useState, useEffect} from 'react';

function useLanguageMode() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("language") || "en"
  );
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);
    return [language, setLanguage];
}
export default useLanguageMode;