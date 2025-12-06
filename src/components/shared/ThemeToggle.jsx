import {useContext} from 'react';
import {ThemeContext} from '../../context/ThemeProvider.jsx';
import { FiMoon, FiSun } from 'react-icons/fi'; // Assurez-vous d'avoir installé react-icons

const ThemeToggle = () => {
    const {isDark, setIsDark} = useContext(ThemeContext);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            className="fixed top-3 right-6 p-3 rounded-full bg-background border border-border hover:bg-accent transition-colors shadow-lg z-50"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <FiSun className="w-5 h-5 text-muted" />
            ) : (
                <FiMoon className="w-5 h-5 text-muted" />
            )}
        </button>
    );
};

export default ThemeToggle;