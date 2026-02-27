import { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { GlobeAltIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const StartingScreen: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isInView) setAnimationKey((k) => k + 1);
  }, [isInView]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="min-h-screen pt-24 md:pt-28 flex flex-col text-white font-mono select-none px-4 sm:px-6 lg:px-16 relative md:max-h-screen md:overflow-hidden"
    >
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center">
        <div
          key={animationKey}
          className="flex flex-col items-center w-full max-h-full justify-center px-2 gap-6"
        >
          {/* Name + Globe */}
          <div className="flex flex-col-reverse sm:flex-col md:flex-row items-center justify-center gap-4 md:gap-[clamp(0.75rem,2.5vw,2rem)] lg:gap-8 text-center flex-shrink-0">
            <h1 className="flex flex-col">
              <div
                className="text-[var(--color-custom-yellow)] font-normal animate-fade-in-up-scale-color"
                style={{ fontSize: 'clamp(2.25rem, 10vmin, 4.5rem)' }}
              >
                Ahmed
              </div>
              <div
                className="text-[var(--color-custom-yellow)] font-normal animate-fade-in-up-scale-color-delay-0-5"
                style={{ fontSize: 'clamp(2.25rem, 10vmin, 4.5rem)' }}
              >
                Alaa
              </div>
            </h1>
            <GlobeAltIcon className="w-[min(10rem,55vw)] h-[min(10rem,55vw)] sm:w-[min(12rem,45vw)] sm:h-[min(12rem,45vw)] md:w-[min(18rem,35vmin)] md:h-[min(18rem,35vmin)] lg:w-[min(22rem,40vmin)] lg:h-[min(22rem,40vmin)] flex-shrink-0 text-[var(--color-custom-green)] animate-icon-scale-color" />
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 md:gap-4 mt-1 md:mt-6 animate-fade-in-up-scale-delay-1 flex-shrink-0 text-center px-1">
            <p
              className="text-[var(--color-custom-yellow)] font-light tracking-wider font-mono"
              style={{ fontSize: 'clamp(0.9rem, 2.6vmin, 1.75rem)' }}
            >
              Building Secure, Scalable Web Applications
            </p>
            <CommandLineIcon className="w-8 h-8 md:w-12 md:h-12 text-[var(--color-custom-yellow)] animate-icon-pulse translate-y-[0.25rem] flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartingScreen;
