'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  Brain,
  Cpu,
  Database,
  GitBranch,
  Globe,
  Target,
  Terminal,
  X,
  ArrowUpRight,
} from 'lucide-react';
import Image from 'next/image';
import { useRef, useState } from 'react';

import DecryptedText from './widgets/DecryptedText';
import GlassSheen from './widgets/GlassSheen';
import ReadingStack from './widgets/ReadingStack';
import SpotifyShelf from './widgets/SpotifyShelf';
import { aboutContent, spotifyConfig } from '@/content/loaders';

const ICON_MAP = {
  brain: Brain,
  terminal: Terminal,
  cpu: Cpu,
  globe: Globe,
  database: Database,
  gitBranch: GitBranch,
};

const ABOUT_TAGS = [
  'AI Systems Engineer',
  'Multi-Agent Architect',
  'LLMOps & PEFT',
  'Edge & Speech Runtimes',
  'Jaipur, India',
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <section id="about" className="py-20 md:py-28 relative z-10">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
        <div
          aria-hidden="true"
          className="absolute -right-28 top-20 h-[34rem] w-[34rem] rounded-full bg-blue-600/10 dark:bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute -left-32 bottom-20 h-[32rem] w-[32rem] rounded-full bg-indigo-600/10 dark:bg-indigo-600/15 blur-3xl"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header with Ohshin Metadata Row */}
        <header className="mb-14 sm:mb-16">
          <div className="flex items-center justify-between font-mono text-[0.62rem] sm:text-xs uppercase tracking-[0.24em] text-muted-foreground border-b border-border/40 pb-3 mb-6">
            <span className="text-foreground font-semibold">profile / anmol</span>
            <span className="hidden sm:inline">engineering &amp; research</span>
            <span>jaipur, india</span>
          </div>

          <div ref={ref} className="pt-2">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary mb-2">
              origin, architecture &amp; methodology
            </p>
            <h2 className="font-doto text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-foreground">
              <DecryptedText text="About" speed={60} sequential animateOn="view" />
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mt-4 rounded-full" />
          </div>
        </header>

        {/* Main Showcase: Big Ohshin-Style 2-Column Split (Story & Capabilities Left | Big Portrait Right) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative isolate overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] glass p-6 sm:p-8 lg:p-12 mb-14 shadow-2xl border border-border/70"
        >
          <GlassSheen className="left-[-40%]" />

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 xl:gap-12 items-stretch">
            {/* Left Column: Narrative, Mission, Capabilities, Beyond Code */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Profile Badges */}
                <div className="mb-6 flex flex-wrap gap-2 font-mono text-[0.62rem] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {ABOUT_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-foreground/5 border border-border/60 text-foreground/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Narrative Intro */}
                <p className="font-mono text-sm sm:text-base md:text-lg text-foreground/90 leading-relaxed mb-8">
                  {aboutContent.introText}
                </p>

                {/* Mission Box */}
                <div className="p-5 sm:p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-8 shadow-sm">
                  <h3 className="font-heading text-lg sm:text-xl font-bold mb-2 flex items-center text-foreground">
                    <Target className="w-5 h-5 mr-2 text-primary" />
                    {aboutContent.missionTitle}
                  </h3>
                  <p className="text-foreground/90 text-xs sm:text-sm md:text-base leading-relaxed">
                    {aboutContent.missionStatement}
                  </p>
                </div>

                {/* Architectural Capabilities */}
                <div className="space-y-4 mb-8">
                  {aboutContent.capabilities.map((item) => {
                    const IconComponent = ICON_MAP[item.icon] ?? Brain;
                    return (
                      <div
                        key={item.id}
                        className="relative pl-5 border-l-2 border-primary/30 py-2 group hover:border-primary transition-colors"
                      >
                        <div className="absolute left-[-5px] top-3 w-2 h-2 rounded-full bg-primary" />
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <IconComponent className={`w-5 h-5 ${item.iconColor}`} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-heading font-semibold text-sm sm:text-base text-foreground">
                              {item.title}
                            </h4>
                            <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 leading-relaxed">
                              {item.description}
                            </p>
                            {item.tools && item.tools.length > 0 && (
                              <div className="flex flex-wrap gap-1.5 mt-2">
                                {item.tools.map((tool) => (
                                  <span
                                    key={tool}
                                    className="text-[0.65rem] font-mono px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/70 border border-border/40"
                                  >
                                    {tool}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Beyond the Code & Philosophy */}
              <div className="pt-6 border-t border-border/50">
                <h3 className="font-heading text-lg sm:text-xl font-bold mb-3 flex items-center text-foreground">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  {aboutContent.beyondCodeTitle}
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-foreground/80 leading-relaxed mb-6">
                  {aboutContent.beyondCodeParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm italic font-medium">
                  &ldquo;{aboutContent.quote}&rdquo;
                </p>
              </div>
            </div>

            {/* Right Column: Big Ohshin-Style Framed Portrait Showcase */}
            <aside className="order-first lg:order-last min-h-[26rem] sm:min-h-[36rem] lg:min-h-full flex flex-col">
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
                aria-label="Portrait of Anmol Sharma - Click to inspect"
                className="relative w-full h-full min-h-[26rem] sm:min-h-[36rem] lg:min-h-[46rem] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border-2 border-border/80 shadow-2xl bg-black/40 group cursor-zoom-in"
              >
                {/* Full-bleed Portrait Image */}
                <Image
                  src={aboutContent.profileImage}
                  alt="Portrait of Anmol Sharma"
                  fill
                  priority
                  className="object-cover object-center sm:object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Ambient Radial Highlight & Vignette Overlays */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.18),transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.05)_0%,transparent_50%,rgba(0,0,0,0.85)_100%)]"
                />

                <GlassSheen className="left-[-42%] bg-white/[0.045] motion-safe:[animation-duration:12s]" />

                {/* Bottom Overlay Info Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 z-20 flex flex-col justify-end">
                  <div className="backdrop-blur-md bg-black/60 border border-white/15 p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#1DB954] font-semibold mb-0.5">
                          ONLINE // AI SYSTEMS ENGINEER
                        </p>
                        <h4 className="font-doto text-xl sm:text-2xl font-black uppercase tracking-tight text-white">
                          Anmol Sharma
                        </h4>
                        <p className="font-mono text-xs text-white/70 mt-0.5">
                          Jaipur, India &bull; CCE, IIT Mandi Alumni
                        </p>
                      </div>
                      <div className="flex-none p-2.5 rounded-full bg-white/10 text-white group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </motion.div>

        {/* Curated Reading Stack & Spotify Records */}
        <div className="space-y-10">
          {spotifyConfig?.enabled && <SpotifyShelf config={spotifyConfig} />}
          <ReadingStack />
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md cursor-zoom-out p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-2xl w-full max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsZoomed(false)}
                className="absolute -top-12 right-0 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-200 z-50 cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="relative w-full aspect-square max-w-[500px] rounded-3xl overflow-hidden border-4 border-primary/40 shadow-2xl">
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
