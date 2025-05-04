import { useEffect, useMemo } from 'react';
import UpArrow from '../arrows/UpArrow';
import DownArrow from '../arrows/DownArrow';
import StartingScreen from '../sections/StartingScreen';
import Welcome from '../sections/Welcome';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateCurrentSectionFromScroll } from '../../store/currentSectionSlice';

const ScreenContainer: React.FC = () => {
    const dispatch = useDispatch();
    const currentSection = useSelector((state: RootState) => state.currentSection.currentSection);
    const sections = useMemo(() => ['home', 'welcome', 'skills', 'projects', 'about', 'contact', 'footer'] as const, []);

    // Handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            dispatch(updateCurrentSectionFromScroll());
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dispatch]);

    // Handle navigation
    const handleNavigation = (direction: 'up' | 'down') => {
        const currentIndex = sections.indexOf(currentSection);
        const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
        
        if (newIndex >= 0 && newIndex < sections.length) {
            const section = document.getElementById(sections[newIndex]);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                dispatch(updateCurrentSectionFromScroll());
            }
        }
    };

    return (
        <div>
            {/* Up Arrow - only show when not in home section */}
            {currentSection !== 'home' && (
                <UpArrow 
                    onClick={() => handleNavigation('up')}
                />
            )}

            {/* Main Content */}
            <div>
                <StartingScreen />
                <Welcome />
                <Skills />
                <Projects />
                <About />
                <Contact />
                <Footer />
            </div>

            {/* Down Arrow - only show when not in footer section */}
            {currentSection !== 'footer' && (
                <DownArrow 
                    onClick={() => handleNavigation('down')}
                />
            )}
        </div>
    );
};

export default ScreenContainer;