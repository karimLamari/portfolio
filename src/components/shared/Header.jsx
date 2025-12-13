import { useState, useEffect, useContext } from 'react';
import { LanguageContext } from '../../context/LanguageProvider';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const { t } = useContext(LanguageContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.approach, href: '#approach' },    
    { name: t.nav.parcours, href: '#parcours' },
    { name: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-heading text-lg font-medium text-foreground hover:text-muted hover:scale-105 "
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-[var(--color-primary)] "
            aria-label={t.nav.toggleMenu}
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background h-screen">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base font-medium text-foreground hover:text-[var(--color-primary)]  py-2"
                >
                  {item.name}
                </a>
              ))}
              
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <LanguageToggle />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;