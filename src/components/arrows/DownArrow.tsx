import { motion } from 'framer-motion';

interface DownArrowProps {
  sectionId: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ sectionId }) => {
  const handleClick = () => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.button
      className="absolute bottom-8 left-1/2 -translate-x-1/2 focus:outline-none"
      onClick={handleClick}
      aria-label="Scroll down"
    >
      <motion.div
        className="flex flex-col items-center gap-2 cursor-pointer"
        whileHover={{ y: 5 }}
        whileTap={{ scale: 0.95 }}
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
  );
};

export default DownArrow;
