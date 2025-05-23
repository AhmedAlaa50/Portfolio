import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navBarStyles =
  "relative px-4 py-1 text-base md:text-xl font-semibold hover:text-custom-yellow transition-colors duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-custom-yellow before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-custom-dark px-4 md:px-8 py-4 md:py-6 text-custom-green fixed top-0 left-0 w-full z-50 shadow-lg transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-custom-yellow selection:text-[var(--color-custom-green)]">
          AhmedCodes
        </h1>

        {/* Toggle button - visible only on small screens */}
        <button
          className="md:hidden text-custom-yellow"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <XMarkIcon className="w-8 h-8" />
          ) : (
            <Bars3Icon className="w-8 h-8" />
          )}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-base md:text-xl font-semibold">
          <li>
            <a href="#home" className={navBarStyles}>
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className={navBarStyles}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={navBarStyles}>
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className={navBarStyles}>
              About
            </a>
          </li>
          <li>
            <a href="#contact" className={navBarStyles}>
              Conatct
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-custom-dark z-50 md:hidden shadow-lg">
          <ul className="flex flex-col gap-4 p-4 text-lg font-semibold text-custom-green">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
