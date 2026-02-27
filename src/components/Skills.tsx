import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

interface Skill {
  name: string;
  category: string;
}

const Skills: React.FC = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });
  const [animationKey, setAnimationKey] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (isInView) {
      setAnimationComplete(false);
      setAnimationKey((k) => k + 1);
    }
  }, [isInView]);

  const skills: Skill[] = [
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Laravel', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'JWT', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'React', category: 'Frontend' },
    { name: 'Redux', category: 'State' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'RESTful APIs', category: 'Backend' },
    { name: 'AWS Deploy', category: 'DevOps' },
    { name: 'RBAC', category: 'Backend' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'Git', category: 'Tool' },
  ];

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setAnimationComplete(true);
      },
      skills.length * 200 + 1000
    );

    return () => clearTimeout(timer);
  }, [skills.length, animationKey]);

  const pyramidPositions = [
    { row: 0, col: 0, span: 1 },
    { row: 1, col: 0, span: 1 },
    { row: 1, col: 1, span: 1 },
    { row: 2, col: 0, span: 1 },
    { row: 2, col: 1, span: 1 },
    { row: 2, col: 2, span: 1 },
    { row: 3, col: 0, span: 1 },
    { row: 3, col: 1, span: 1 },
    { row: 3, col: 2, span: 1 },
    { row: 3, col: 3, span: 1 },
    { row: 4, col: 0, span: 1 },
    { row: 4, col: 1, span: 1 },
    { row: 4, col: 2, span: 1 },
    { row: 4, col: 3, span: 1 },
    { row: 4, col: 4, span: 1 },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Frontend: 'bg-blue-500',
      Backend: 'bg-green-500',
      Language: 'bg-purple-500',
      Database: 'bg-orange-500',
      State: 'bg-pink-500',
      Tool: 'bg-teal-500',
      DevOps: 'bg-indigo-500',
    };
    return colors[category] || 'bg-gray-500';
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen pt-28 flex flex-col px-4 md:px-8 lg:px-16 relative md:max-h-screen md:overflow-hidden"
    >
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col items-center justify-center min-w-0">
        <div className="max-w-6xl w-full min-h-0 flex flex-col flex-1 py-4">
          <h2
            className="font-bold text-custom-yellow mb-4 md:mb-8 text-center flex-shrink-0"
            style={{ fontSize: 'clamp(1.5rem, 5vmin, 3.75rem)' }}
          >
            Technical Skills
          </h2>

          <div className="flex justify-center items-center min-h-0 flex-1 w-full">
            <AnimatePresence>
              <div
                className="grid gap-2 md:gap-3 lg:gap-4 max-h-full w-full max-w-2xl"
                style={{ gridTemplateColumns: 'repeat(5, minmax(0, 1fr))' }}
              >
                {skills.map((skill, index) => {
                  const position = pyramidPositions[index];
                  const rowStart = position.row + 1;
                  const colStart = position.col + 1;
                  const colSpan = position.span;

                  return (
                    <motion.div
                      key={`${skill.name}-${animationKey}`}
                      initial={{ y: -600, rotate: 0, opacity: 0 }}
                      animate={
                        animationComplete
                          ? {
                              y: 0,
                              rotate: 0,
                              opacity: 1,
                              scale: 1,
                            }
                          : {
                              y: 0,
                              rotate: [0, 360],
                              opacity: 1,
                              scale: 1,
                            }
                      }
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2,
                        type: 'spring',
                        stiffness: 100,
                        damping: 10,
                      }}
                      className={`${getCategoryColor(skill.category)} rounded-lg p-2 md:p-3 text-white font-semibold text-center shadow-lg hover:scale-110 transition-transform cursor-pointer min-w-0`}
                      style={{
                        fontSize: 'clamp(0.5rem, 1.5vmin, 1rem)',
                        gridRow: `${rowStart}`,
                        gridColumn: `${colStart} / span ${colSpan}`,
                      }}
                    >
                      {skill.name}
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>
          </div>

          <div className="mt-4 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-4 flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-custom-green text-sm">Frontend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-custom-green text-sm">Backend</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-purple-500 rounded"></div>
              <span className="text-custom-green text-sm">Language</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-custom-green text-sm">Database</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-pink-500 rounded"></div>
              <span className="text-custom-green text-sm">State</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-teal-500 rounded"></div>
              <span className="text-custom-green text-sm">Tool</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-indigo-500 rounded"></div>
              <span className="text-custom-green text-sm">DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
