'use client';

import { motion, AnimatePresence, useInView, Variants } from 'framer-motion';
import { Brain, Cpu, Database, GitBranch, Globe, Target, Terminal, X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

import ReadingStack from './widgets/ReadingStack';
import SpotifyShelf from './widgets/SpotifyShelf';
import { aboutContent } from '@/content/loaders';

const ICON_MAP = {
  brain: Brain,
  terminal: Terminal,
  cpu: Cpu,
  globe: Globe,
  database: Database,
  gitBranch: GitBranch,
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isZoomed, setIsZoomed] = useState(false);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-16 md:py-20 relative z-10">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header & Avatar */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-14 sm:mb-16"
        >
          <div
            onClick={() => setIsZoomed(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsZoomed(true);
              }
            }}
            role="button"
            tabIndex={0}
            className="relative w-36 h-36 sm:w-40 sm:h-40 mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg hover:shadow-primary/20 hover:scale-105 transition-all duration-300 cursor-zoom-in"
          >
            <Image
              src={aboutContent.profileImage}
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            {aboutContent.sectionTitle}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 max-w-4xl mx-auto leading-relaxed text-center">
            {aboutContent.introText}
          </p>
        </motion.div>

        {/* 2-Column Overview: Mission & Capabilities (Left) | Beyond the Code (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-16">
          {/* Left Column - Mission & Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.3 }}
              className="glass p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 flex items-center text-foreground">
                <Target className="w-5 h-5 mr-2 text-primary" />
                {aboutContent.missionTitle}
              </h3>
              <p className="text-foreground/90 mb-6 text-sm sm:text-base leading-relaxed">
                {aboutContent.missionStatement}
              </p>

              <div className="space-y-4">
                {aboutContent.capabilities.map((item, index) => {
                  const IconComponent = ICON_MAP[item.icon] ?? Brain;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative pl-5 border-l-2 border-primary/30 py-1.5"
                    >
                      <div className="absolute left-[-5px] top-2.5 w-2 h-2 rounded-full bg-primary" />
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-0.5">
                          <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-sm sm:text-base text-foreground">
                            {item.title}
                          </h4>
                          <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 leading-relaxed">
                            {item.description}
                          </p>
                          {item.tools && item.tools.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {item.tools.map((tool) => (
                                <span
                                  key={tool}
                                  className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/70"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Beyond the Code & Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              transition={{ delay: 0.4 }}
              className="glass p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 flex items-center text-foreground">
                <Globe className="w-5 h-5 mr-2 text-primary" />
                {aboutContent.beyondCodeTitle}
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-foreground/90 leading-relaxed">
                {aboutContent.beyondCodeParagraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/50">
                <p className="text-muted-foreground text-sm italic font-medium">
                  &ldquo;{aboutContent.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Personality Shelf: Reading Stack & Spotify Embedded Playlists */}
        <div className="space-y-8 sm:space-y-10">
          <ReadingStack />
          <SpotifyShelf />
        </div>
      </div>

      {/* Profile Zoom Lightbox Modal */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-3xl max-h-[85vh] w-full p-4 flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200 z-50"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[480px] md:h-[480px] rounded-full overflow-hidden border-4 border-primary/40 shadow-2xl">
                <Image
                  src={aboutContent.profileImage}
                  alt="Anmol Sharma"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
