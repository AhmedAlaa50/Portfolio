import { GlobeAltIcon, CommandLineIcon } from '@heroicons/react/24/outline';
import DownArrow from './arrows/DownArrow';

const StartingScreen: React.FC = () => {
  return (
    <section id="home" className="min-h-screen pt-5 flex flex-col items-center justify-center text-white font-mono select-none px-4 relative">
      <div className="flex items-center gap-6 text-center">
        <h1>
          <div className="text-[var(--color-custom-yellow)] font-normal text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6rem] animate-fade-in-up-scale-color">
            Ahmed
          </div>
          <div className="text-[var(--color-custom-yellow)] font-normal text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[6rem] animate-fade-in-up-scale-color-delay-0-5">
            Alaa
          </div>
        </h1>
        <GlobeAltIcon className="w-[12rem] h-[12rem] sm:w-[14rem] sm:h-[14rem] md:w-[16rem] md:h-[16rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem] text-[var(--color-custom-green)] animate-icon-scale-color" />
      </div>
      <div className="flex items-center gap-4 mt-10 animate-fade-in-up-scale-delay-1">
        <p className="text-[var(--color-custom-yellow)] font-light text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] xl:text-[2.5rem] tracking-wider font-mono">
          Frontend Developer
        </p>
        <CommandLineIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg-h-14 xl:w-16 xl:h-16 text-[var(--color-custom-yellow)] animate-icon-pulse translate-y-[0.25rem]" />
      </div>
      <DownArrow sectionId="welcome" />
    </section>
  );
};

export default StartingScreen;
