import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  TrophyIcon,
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen pt-28 pb-12 flex flex-col px-4 md:px-8 lg:px-16 relative md:max-h-screen md:overflow-hidden"
    >
      <div className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden flex flex-col items-center min-w-0 scrollbar-hide">
        <div className="max-w-6xl w-full flex flex-col py-4">
          <h2
            className="font-bold text-custom-yellow mb-4 text-center flex-shrink-0"
            style={{ fontSize: 'clamp(1.5rem, 4.5vmin, 3rem)' }}
          >
            About Me
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="bg-custom-dark border-2 border-custom-green rounded-lg p-4 md:p-6 mb-4 md:mb-5 shadow-xl flex-shrink-0"
          >
            <p
              className="text-custom-green leading-relaxed mb-3"
              style={{ fontSize: 'clamp(0.875rem, 1.6vmin, 1.125rem)' }}
            >
              I’m a Full Stack Engineer focused on designing secure, scalable
              systems that solve real-world problems. I specialize in Next.js,
              TypeScript, and backend architecture — building applications that
              are not just functional, but production-ready and
              performance-optimized.
            </p>
            <p
              className="text-custom-green leading-relaxed"
              style={{ fontSize: 'clamp(0.875rem, 1.6vmin, 1.125rem)' }}
            >
              From healthcare platforms to e-commerce systems, I take ownership
              of the entire development lifecycle — from database schema design
              and authentication logic to UI performance and deployment. My goal
              is to build software that scales reliably and delivers measurable
              impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 flex-shrink-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-custom-dark border-2 border-custom-green rounded-lg p-4 md:p-5 hover:border-custom-yellow transition-colors shadow-xl"
            >
              <AcademicCapIcon className="w-10 h-10 md:w-12 md:h-12 text-custom-yellow mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-custom-yellow mb-3">
                Education
              </h3>
              <p className="text-custom-green font-semibold mb-1 text-sm md:text-base">
                Bachelor of Engineering
              </p>
              <p className="text-custom-green mb-1 text-sm md:text-base">
                Computer and Systems
              </p>
              <p className="text-custom-green/70 mb-2 text-sm">
                Ain Shams University
              </p>
              <p className="text-custom-green/70 text-sm">2018 - 2023</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-custom-dark border-2 border-custom-green rounded-lg p-4 md:p-5 hover:border-custom-yellow transition-colors shadow-xl"
            >
              <BriefcaseIcon className="w-10 h-10 md:w-12 md:h-12 text-custom-yellow mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-custom-yellow mb-3">
                Experience
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-custom-green font-semibold text-sm md:text-base">
                    Full Stack Engineer — Healthcare Platform
                  </p>
                  <p className="text-custom-green/70 text-sm">
                    ASU Virtual Hospital · May 2025 - Present
                  </p>
                </div>
                <div>
                  <p className="text-custom-green font-semibold text-sm md:text-base">
                    Full Stack Developer
                  </p>
                  <p className="text-custom-green/70 text-sm">
                    Rahiq Brand · May 2025 - Present
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-custom-dark border-2 border-custom-green rounded-lg p-4 md:p-5 hover:border-custom-yellow transition-colors shadow-xl"
            >
              <TrophyIcon className="w-10 h-10 md:w-12 md:h-12 text-custom-yellow mb-3" />
              <h3 className="text-lg md:text-xl font-bold text-custom-yellow mb-3">
                Achievements
              </h3>
              <ul className="space-y-2 text-custom-green text-sm md:text-base">
                <li className="flex items-start">
                  <span className="text-custom-yellow mr-2">•</span>
                  <span>Coursera Data Structures Certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-yellow mr-2">•</span>
                  <span>Coursera Python for Everybody Certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-custom-yellow mr-2">•</span>
                  <span>10+ Deployed Applications</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 md:mt-8 bg-custom-dark border-2 border-custom-green rounded-lg p-4 md:p-6 shadow-xl flex-shrink-0"
          >
            <h3 className="text-lg md:text-xl font-bold text-custom-yellow mb-4 text-center">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                'Problem Solving',
                'Team Collaboration',
                'Adaptability',
                'Work Under Pressure',
                'Communication',
                'Work Ethic',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-custom-green/20 text-custom-green rounded-full border border-custom-green/40 hover:bg-custom-green/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
