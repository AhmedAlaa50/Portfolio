import { GlobeAltIcon, CommandLineIcon } from '@heroicons/react/24/outline';

const StartingScreen: React.FC = () => {
  return (
    <section className="min-h-screen pt-28 flex flex-col items-center justify-center bg-[var(--color-custom-dark)] text-white font-mono select-none px-4">
      <div className="flex items-center gap-6 text-center my-6">
        <h1>
          <div className="text-[var(--color-custom-yellow)] font-normal text-[6rem] md:text-[8rem] lg:text-[9rem] animate-fade-in-up-scale-color">
            Ahmed
          </div>
          <div className="text-[var(--color-custom-yellow)] font-normal text-[6rem] md:text-[8rem] lg:text-[9rem] animate-fade-in-up-scale-color-delay-0-5">
            Alaa
          </div>
        </h1>
        <GlobeAltIcon className="w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] lg:w-[30rem] lg:h-[30rem] text-[var(--color-custom-green)] animate-icon-scale-color" />
      </div>
      <div className="flex items-center gap-4 mt-10 animate-fade-in-up-scale-delay-1">
        <p className="text-[var(--color-custom-yellow)] font-light text-[2.5rem] md:text-[3rem] lg:text-[4rem] tracking-wider font-mono">
          Frontend Developer
        </p>
        <CommandLineIcon className="w-12 h-12 text-[var(--color-custom-yellow)] animate-icon-pulse translate-y-[0.25rem]" />
      </div>
    </section>
  );
};

export default StartingScreen;
