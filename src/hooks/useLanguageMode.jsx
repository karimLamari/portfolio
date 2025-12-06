import {useState, useEffect} from 'react';

function useLanguageMode() {
    const [language, setLanguage] = useState(() => {
        const storedLanguage = localStorage.getItem('language');
        return storedLanguage ? storedLanguage : 'en';
    });
    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);
    return [language, setLanguage];
}
export default useLanguageMode;