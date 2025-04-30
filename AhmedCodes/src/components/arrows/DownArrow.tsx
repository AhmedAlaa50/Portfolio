import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

interface DownArrowProps {
    sectionId: string;
}

const DownArrow: React.FC<DownArrowProps> = ({ sectionId }) => {
    return (
        <motion.div
        className="absolute bottom-0 left-0 w-full flex items-end justify-center p-4"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          const section = document.getElementById(sectionId);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <ArrowDownIcon className="w-10 h-10 text-[var(--color-custom-yellow)]" />
      </motion.div>
    );
}

export default DownArrow;
