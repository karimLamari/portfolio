import {useState, useEffect} from 'react';



export default function useThemeMode() {


const [isDark, setIsDark] = useState(
  () => (localStorage.getItem("theme") || "dark") === "dark"
);
   useEffect(() => {
        const html = document.documentElement;
        if (isDark) {
            html.classList.remove('light'); 
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);
    return [isDark, setIsDark];
}
