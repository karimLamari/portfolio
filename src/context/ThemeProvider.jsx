import {createContext} from 'react';
import useThemeMode from '../hooks/useThemeMode.jsx';

const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [isDark, setIsDark] = useThemeMode();
    return (
        <ThemeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeContext };