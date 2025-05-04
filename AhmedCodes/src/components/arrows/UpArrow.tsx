import { motion } from 'framer-motion';
import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

interface UpArrowProps {
    onClick: () => void;
}

const UpArrow: React.FC<UpArrowProps> = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-20 lg:top-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-50 flex items-center justify-center p-4 cursor-pointer"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                setIsVisible(false);
                onClick();
            }}
        >
            <ArrowUpIcon className="w-10 h-10 text-[var(--color-custom-yellow)]" />
        </motion.div>
    );
}

export default UpArrow;