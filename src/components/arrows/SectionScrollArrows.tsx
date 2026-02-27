import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SECTION_IDS = ['home', 'welcome', 'skills', 'projects', 'about', 'contact'] as const;

const SectionScrollArrows: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      let index = 0;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && el.offsetTop <= scrollPosition) {
          index = i;
          break;
        }
      }
      setCurrentIndex(index);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const prevId = currentIndex > 0 ? SECTION_IDS[currentIndex - 1] : null;
  const nextId = currentIndex < SECTION_IDS.length - 1 ? SECTION_IDS[currentIndex + 1] : null;

  return (
    <div
      className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-40 pointer-events-none hidden md:flex flex-col items-center gap-6"
      aria-hidden
    >
      <div className="flex flex-col items-center gap-4 pointer-events-auto">
        {/* Up arrow - same visual as UpArrow */}
        <motion.button
          className="focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
          onClick={() => prevId && scrollTo(prevId)}
          disabled={!prevId}
          aria-label="Previous section"
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            whileHover={prevId ? { y: -5 } : {}}
            whileTap={prevId ? { scale: 0.95 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <motion.div
              className="w-1 h-1 rounded-full bg-[var(--color-custom-yellow)]"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="w-8 h-12 rounded-full border-2 border-[var(--color-custom-yellow)] flex items-end justify-center pb-2 relative overflow-hidden">
              <motion.div
                className="w-1.5 h-3 bg-[var(--color-custom-yellow)] rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.button>

        {/* Down arrow - same visual as DownArrow */}
        <motion.button
          className="focus:outline-none disabled:opacity-40 disabled:pointer-events-none"
          onClick={() => nextId && scrollTo(nextId)}
          disabled={!nextId}
          aria-label="Next section"
        >
          <motion.div
            className="flex flex-col items-center gap-2 cursor-pointer"
            whileHover={nextId ? { y: 5 } : {}}
            whileTap={nextId ? { scale: 0.95 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="w-8 h-12 rounded-full border-2 border-[var(--color-custom-yellow)] flex items-start justify-center pt-2 relative overflow-hidden">
              <motion.div
                className="w-1.5 h-3 bg-[var(--color-custom-yellow)] rounded-full"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
            <motion.div
              className="w-1 h-1 rounded-full bg-[var(--color-custom-yellow)]"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
};

export default SectionScrollArrows;
