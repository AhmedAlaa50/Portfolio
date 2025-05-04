import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

interface DownArrowProps {
    onClick: () => void;
}

const DownArrow: React.FC<DownArrowProps> = ({ onClick }) => {
    return (
        <motion.div
            className="fixed bottom-20 lg:bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex items-center justify-center p-4 cursor-pointer"
            whileHover={{ y: 5 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClick}
        >
            <ArrowDownIcon className="w-10 h-10 text-[var(--color-custom-yellow)]" />
        </motion.div>
    );
}

export default DownArrow;
