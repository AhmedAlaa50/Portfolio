import { HeartIcon } from '@heroicons/react/24/solid';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-custom-dark border-t-2 border-custom-green py-8 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-custom-yellow mb-2">
              Ahmed Alaa | Full Stack Engineer
            </h3>
            <p className="text-custom-green">Full Stack Developer</p>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-custom-green flex items-center gap-2">
              Made with{' '}
              <HeartIcon className="w-5 h-5 text-red-500 animate-pulse" /> by
              Ahmed Alaa
            </p>
            <p className="text-custom-green/70 text-sm mt-2">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/ahmed-alaa-mahmoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-green hover:text-custom-yellow transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/AhmedAlaa50"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-green hover:text-custom-yellow transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:ahmed.alaa.hamdy.2000@gmail.com"
              className="text-custom-green hover:text-custom-yellow transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 w-12 h-12 bg-custom-green/20 border-2 border-custom-green rounded-full flex items-center justify-center hover:bg-custom-green hover:border-custom-yellow transition-all group"
        aria-label="Scroll to top"
      >
        <ArrowUpIcon className="w-6 h-6 text-custom-green group-hover:text-custom-dark transition-colors" />
      </button>
    </footer>
  );
};

export default Footer;
