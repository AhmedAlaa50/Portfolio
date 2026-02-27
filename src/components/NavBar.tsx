import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface NavLink {
  id: string;
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'welcome', label: 'Welcome', href: '#welcome' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (!element) return;

    // Add a slight delay to allow the mobile menu animation to finish/start
    // closing so it doesn't jitter during the scroll calculation.
    setTimeout(() => {
      const offset = 80; // Height of your fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }, 10);

    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-custom-dark/95 backdrop-blur-md shadow-xl border-b-2 border-custom-green/20'
          : 'bg-custom-dark/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-4 md:py-5">
        <div className="flex justify-between items-center">
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl md:text-3xl font-bold text-custom-yellow cursor-pointer relative group"
          >
            Ahmed Alaa
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-custom-green"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg border-2 border-custom-green hover:border-custom-yellow transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <AnimatePresence mode="wait">
              {menuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="w-6 h-6 text-custom-yellow" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Bars3Icon className="w-6 h-6 text-custom-yellow" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <ul className="hidden md:flex gap-2 lg:gap-4">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={`relative px-4 py-2 text-base lg:text-lg font-semibold transition-all duration-300 rounded-lg group block ${
                    activeSection === link.id
                      ? 'text-custom-yellow'
                      : 'text-custom-green hover:text-custom-yellow'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>

                  <motion.div
                    className="absolute inset-0 bg-custom-green/10 rounded-lg"
                    initial={false}
                    animate={{
                      scale: activeSection === link.id ? 1 : 0,
                      opacity: activeSection === link.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                  />

                  <motion.div
                    className="absolute bottom-0 left-1/2 h-0.5 bg-custom-yellow"
                    initial={{ width: 0, x: '-50%' }}
                    whileHover={{ width: '80%' }}
                    animate={{
                      width: activeSection === link.id ? '80%' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t-2 border-custom-green/20"
          >
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="flex flex-col bg-custom-dark/95 backdrop-blur-md"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="border-b border-custom-green/10 last:border-b-0"
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }}
                    className={`block px-6 py-4 text-lg font-semibold transition-all duration-300 ${
                      activeSection === link.id
                        ? 'text-custom-yellow bg-custom-green/10 border-l-4 border-custom-yellow'
                        : 'text-custom-green hover:text-custom-yellow hover:bg-custom-green/5 border-l-4 border-transparent'
                    }`}
                  >
                    <motion.span whileHover={{ x: 10 }} className="block">
                      {link.label}
                    </motion.span>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
