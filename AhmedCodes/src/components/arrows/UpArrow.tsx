import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

interface UpArrowProps {
    sectionId: string;
}

const UpArrow: React.FC<UpArrowProps> = ({ sectionId }) => {
    return (
        <motion.div
        className="absolute top-0 left-1/2 w-full flex items-end justify-center p-4"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <ArrowUpIcon className="w-10 h-10 text-[var(--color-custom-yellow)]" />
      </motion.div>
    );
}

export default UpArrow;