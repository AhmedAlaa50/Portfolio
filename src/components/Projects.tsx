import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowTopRightOnSquareIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

interface Project {
  title: string;
  role: string;
  impact: string;
  description: string[];
  techStack: string[];
  url?: string;
  status: string;
  tags: string[];
  startDate: string;
  endDate: string;
}

const projects: Project[] = [
  {
    title: 'EGY HEAD Registry',
    role: 'Full-Stack Architect & Lead Developer',
    status: 'Production – Deployed on AWS',
    impact:
      'Clinical registry platform enabling structured medical workflows and secure healthcare data handling.',
    description: [
      'Partnered with clinicians to model registry workflows and medical data entities.',
      'Designed a normalized PostgreSQL schema for core clinical data with performance-focused indexing.',
      'Built a modular Next.js App Router architecture with secure JWT-based authentication and RBAC.',
      'Deployed on AWS with automated backups, email/SMS notifications, and other security measures.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Redux Toolkit',
      'JWT',
      'Tailwind CSS',
      'AWS',
    ],
    tags: [
      'Next.js',
      'Healthcare',
      'Full-Stack',
      'Production',
      'AWS',
      'Data-Intensive',
    ],
    startDate: 'Aug 2025',
    endDate: 'Feb 2026',
    url: 'https://egyhead.org/',
  },
  {
    title: 'Ain Shams University Virtual Hospital',
    role: 'Full-Stack Contributor (Maintenance & Feature Development)',
    status: 'Production - Ongoing Contribution',
    impact:
      'Enterprise-scale healthcare platform supporting virtual medical services.',
    description: [
      'Maintaining and extending core virtual hospital workflows across backend and frontend.',
      'Modernized Zoom-based telemedicine integration to improve stability and compatibility.',
      'Delivered and deployed new Laravel APIs and React features for live clinical teams.',
    ],
    techStack: [
      'React',
      'Laravel',
      'REST APIs',
      'Zoom SDK',
      'Real-Time Updates',
      'AWS',
    ],
    tags: [
      'Healthcare',
      'Enterprise',
      'Frontend',
      'Backend APIs',
      'Real-Time',
      'AWS',
      'Laravel',
    ],
    startDate: 'May 2025',
    endDate: 'Present',
    url: 'https://treats.asuvh.com/',
  },
  {
    title: 'Exeera Healthcare System',
    role: 'Full-Stack & System Feature Contributor',
    status: 'Production - Ongoing Development',
    impact: 'Healthcare management platform with continuous feature expansion.',
    description: [
      'Implemented multilingual support across the platform with structured localization handling.',
      'Enhanced notification workflows including push notification integration.',
      'Added Progressive Web App (PWA) capabilities to improve accessibility and device compatibility.',
      'Contributed to ongoing feature enhancements within an existing production environment.',
    ],
    techStack: [
      'React',
      'Internationalization (i18n)',
      'Push Notifications',
      'PWA',
      'API Integration',
      'AWS',
      'Laravel',
    ],
    tags: [
      'Healthcare',
      'Frontend',
      'Internationalization',
      'Notifications',
      'PWA',
    ],
    startDate: 'Sep 2025',
    endDate: 'Present',
    url: 'https://exeera.com/',
  },
  {
    title: 'Rahiq Brand Platform',
    role: 'Full-Stack Developer',
    status: 'Ongoing Development',
    impact:
      'Scalable brand platform built with performance-focused architecture.',
    description: [
      'Collaborated with UI/UX designers to translate wireframes into interactive user interfaces.',
      'Designed and maintained scalable MongoDB data structures.',
      'Implemented responsive layouts with performance-conscious Next.js rendering strategies.',
      'Structured server-side logic and API routes to support future scalability.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'MongoDB',
      'Tailwind CSS',
      'Server-Side Rendering',
    ],
    tags: ['Brand Platform', 'Full-Stack', 'Next.js', 'Performance'],
    startDate: 'May 2025',
    endDate: 'Present',
    url: 'https://rahiq.vercel.app/',
  },
  {
    title: 'Flash Tuning Business Website',
    role: 'Frontend Developer (Collaborative Project)',
    status: 'Production - Completed',
    impact:
      'Business platform integrating multiple external services and payment processing.',
    description: [
      'Developed React-based frontend architecture in collaboration with backend developer.',
      'Integrated external APIs for business operations and payment workflows.',
      'Built responsive UI ensuring cross-device compatibility and consistent user experience.',
    ],
    techStack: ['React', 'API Integration', 'Payment Gateway'],
    tags: ['Business', 'Frontend', 'Integrations', 'Payments'],
    startDate: 'Jun 2025',
    endDate: 'Aug 2025',
    url: 'https://www.flash-tuning.com/',
  },
  {
    title: 'Online Exam Proctoring System',
    role: 'Frontend Developer',
    status: 'Academic Project',
    impact: 'Real-time monitoring system designed to improve exam integrity.',
    description: [
      'Replaced traditional HTTP polling with WebSockets for persistent real-time communication.',
      'Implemented continuous monitoring logic and event-driven updates.',
      'Developed cheating detection mechanisms within live exam sessions.',
    ],
    techStack: ['React', 'WebSockets', 'Django', 'Real-Time Systems'],
    tags: ['Academic', 'Real-Time', 'Monitoring', 'Frontend'],
    startDate: 'Oct 2022',
    endDate: 'Jul 2023',
    url: 'https://drive.google.com/file/d/15MbQUr7uqMkYuzrSwqJiJRe2JxKGZq-a/view?usp=drive_link',
  },
];

/* ---------------------- STATUS STYLES ---------------------- */

const getStatusClasses = (status: string) => {
  const normalized = status.toLowerCase();

  if (normalized.includes('production'))
    return 'bg-emerald-500/10 text-emerald-300 border border-emerald-400/40';

  if (normalized.includes('ongoing'))
    return 'bg-sky-500/10 text-sky-300 border border-sky-400/40';

  if (normalized.includes('academic'))
    return 'bg-purple-500/10 text-purple-300 border border-purple-400/40';

  if (normalized.includes('completed'))
    return 'bg-custom-green/10 text-custom-green border border-custom-green/40';

  return 'bg-custom-green/10 text-custom-green border border-custom-green/40';
};

/* ---------------------- FILTERS ---------------------- */

const filterGroups = {
  role: ['All', 'Full-Stack', 'Frontend'],
  domain: ['All', 'Healthcare', 'Business', 'Academic', 'Enterprise'],
  status: ['All', 'Production', 'Ongoing', 'Completed', 'Academic'],
  tech: ['All', 'React', 'Next.js', 'AWS', 'Laravel'],
};

/* ---------------------- COMPONENT ---------------------- */

const Projects = () => {
  const [filters, setFilters] = useState({
    role: 'All',
    domain: 'All',
    status: 'All',
    tech: 'All',
  });
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects
    .filter((project) => {
      const matchRole =
        filters.role === 'All' ||
        project.role.toLowerCase().includes(filters.role.toLowerCase());

      const matchDomain =
        filters.domain === 'All' || project.tags.includes(filters.domain);

      const matchStatus =
        filters.status === 'All' ||
        project.status.toLowerCase().includes(filters.status.toLowerCase());

      const matchTech =
        filters.tech === 'All' || project.techStack.includes(filters.tech);

      return matchRole && matchDomain && matchStatus && matchTech;
    })
    .sort((a, b) => {
      // Sort by most recent endDate
      return (
        new Date(b.endDate === 'Present' ? Date.now() : b.endDate).getTime() -
        new Date(a.endDate === 'Present' ? Date.now() : a.endDate).getTime()
      );
    });

  /* ---------------------- ARROW SCROLL ---------------------- */

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    const { clientWidth } = scrollRef.current;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  /* ---------------------- AUTO SCROLL ---------------------- */

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [isHovered]);

  /* ---------------------- PROGRESS BAR ---------------------- */

  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
    setScrollProgress(progress);
  };

  return (
    <section id="projects" className="min-h-screen pt-16 pb-20 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold text-center text-custom-yellow mb-6">
          Selected Projects
        </h2>

        <p className="text-center text-custom-green/70 max-w-2xl mx-auto mb-4 text-sm">
          Scroll or use arrows to explore projects. Hover a card to see detailed
          responsibilities.
        </p>

        {/* FILTERS */}
        <div className="mb-8">
          {/* Mobile filter toggle */}
          <div className="flex items-center justify-between gap-2 mb-3 md:hidden">
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((prev) => !prev)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-custom-green/60 text-xs text-custom-green hover:bg-custom-green/10 transition-colors"
            >
              <span className="font-semibold uppercase tracking-wide">
                Filters
              </span>
              <span className="text-[11px] text-custom-green/70">
                {filteredProjects.length} projects
              </span>
            </button>

            <button
              type="button"
              onClick={() =>
                setFilters({
                  role: 'All',
                  domain: 'All',
                  status: 'All',
                  tech: 'All',
                })
              }
              className="text-[11px] text-custom-green/60 underline underline-offset-2"
            >
              Reset
            </button>
          </div>

          {/* Desktop header */}
          <div className="hidden md:flex flex-wrap items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-semibold text-custom-yellow uppercase tracking-wide">
              Filters
            </h3>
            <p className="text-xs text-custom-green/60">
              {filteredProjects.length} projects
            </p>
          </div>

          {/* Shared filter grid – always visible on desktop, collapsible on mobile */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-3 ${
              mobileFiltersOpen ? 'mt-3' : 'max-h-0 overflow-hidden md:max-h-none'
            }`}
          >
            {Object.entries(filterGroups).map(([groupName, values]) => (
              <div key={groupName} className="space-y-1">
                <h4 className="text-[11px] text-custom-green/70 uppercase tracking-wide">
                  {groupName}
                </h4>

                <div className="flex flex-wrap gap-1.5">
                  {values.map((value) => {
                    const isActive =
                      filters[groupName as keyof typeof filters] === value;

                    return (
                      <button
                        key={value}
                        onClick={() =>
                          setFilters((prev) => ({
                            ...prev,
                            [groupName]: value,
                          }))
                        }
                        className={`px-2.5 py-1 rounded-full text-[11px] font-medium border transition-all duration-200 ${
                          isActive
                            ? 'bg-custom-green text-custom-dark border-custom-green shadow-md'
                            : 'bg-transparent text-custom-green border-custom-green/40 hover:border-custom-green hover:bg-custom-green/10'
                        }`}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT (STACKED CARDS) */}
        <div className="flex flex-col gap-6 md:hidden">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-custom-dark border border-custom-green/40 rounded-2xl p-5 shadow-xl"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-custom-yellow">
                    {project.title}
                  </h3>
                  <p className="text-sm text-custom-green/70 mt-1">
                    {project.role}
                  </p>
                  <p
                    className={`inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${getStatusClasses(
                      project.status
                    )}`}
                  >
                    {project.status}
                  </p>
                  <p className="mt-1 text-xs text-custom-green/60">
                    {project.startDate} – {project.endDate}
                  </p>
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-custom-green hover:text-custom-yellow transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                  </a>
                )}
              </div>

              <p className="text-custom-green font-medium mb-3">
                {project.impact}
              </p>

              <ul className="list-disc list-inside space-y-2 text-custom-green/90 mb-4 text-sm">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs bg-custom-green/20 text-custom-green rounded-full border border-custom-green/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* DESKTOP / TABLET CAROUSEL */}
        <div className="relative hidden md:block">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-40 z-10 bg-custom-dark/80 backdrop-blur-md p-2 rounded-full border border-custom-green/40 hover:bg-custom-green/10 transition"
          >
            <ChevronLeftIcon className="w-6 h-6 text-custom-green" />
          </button>

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="flex gap-8 overflow-x-auto pb-6 scroll-smooth scrollbar-hide"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group min-w-[340px] max-w-[380px] flex-shrink-0 bg-custom-dark border border-custom-green/40 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-[320px] hover:h-[520px]"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-custom-yellow">
                      {project.title}
                    </h3>
                    <p className="text-sm text-custom-green/70 mt-1">
                      {project.role}
                    </p>
                    <p
                      className={`inline-flex items-center mt-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${getStatusClasses(
                        project.status
                      )}`}
                    >
                      {project.status}
                    </p>
                    <p className="mt-1 text-xs text-custom-green/60">
                      {project.startDate} – {project.endDate}
                    </p>
                  </div>

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-green hover:text-custom-yellow transition-colors"
                    >
                      <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                    </a>
                  )}
                </div>

                <p className="text-custom-green font-medium mb-3">
                  {project.impact}
                </p>

                <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  <ul className="list-disc list-inside space-y-2 text-custom-green/90 mb-6 text-sm mt-4">
                    {project.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-custom-green/20 text-custom-green rounded-full border border-custom-green/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-40 z-10 bg-custom-dark/80 backdrop-blur-md p-2 rounded-full border border-custom-green/40 hover:bg-custom-green/10 transition"
          >
            <ChevronRightIcon className="w-6 h-6 text-custom-green" />
          </button>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-custom-green/20 rounded-full mt-6">
            <div
              className="h-1 bg-custom-green rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
