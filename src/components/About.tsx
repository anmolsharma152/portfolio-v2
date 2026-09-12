'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import GlassSheen from './widgets/GlassSheen';
import ReadingStack from './widgets/ReadingStack';
import SpotifyShelf from './widgets/SpotifyShelf';
import WorkClock from './widgets/WorkClock';
import { aboutContent, spotifyConfig } from '@/content/loaders';

const ABOUT_TAGS = ['craft', 'systems', 'linux', 'chess', 'curiosity'];

const About = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsZoomed(false);
      }
    };
    if (isZoomed) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isZoomed]);

  return (
    <section id="about" className="relative z-10 isolate overflow-hidden scroll-mt-0">
      {/* Background ambient lighting & Ohshin dot-matrix raster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-12 [background-image:radial-gradient(rgba(255,255,255,0.45)_0.62px,transparent_0.62px)] [background-size:6px_6px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.04),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-white/[0.03] blur-3xl"
      />

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-10 lg:pt-12 relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
        {/* Dedicated About Header Card (Obsidian Glass) */}
        <motion.header
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="work-panel p-5 sm:p-7 lg:p-9 motion-safe:animate-glass-breathe"
        >
          <GlassSheen className="left-[-35%] bg-white/[0.045] motion-safe:[animation-delay:-2.4s] motion-safe:[animation-duration:10.2s]" />

          {/* 28px Mesh Grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.08] mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_18%_18%,rgba(255,255,255,.09),transparent_32%),radial-gradient(circle_at_82%_82%,rgba(255,255,255,.04),transparent_40%)]"
          />

          <div className="flex items-center justify-between font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/50">
            <span className="text-white/80 font-medium">profile / anmol</span>
            <span className="hidden sm:block text-center text-white/50">scroll / inspect</span>
            <span className="flex items-center gap-1.5 font-bold text-white/80">
              <span>jaipur, in</span>
              <span className="text-white/30">•</span>
              <WorkClock /> <span>IST</span>
            </span>
          </div>

          <div className="pt-10 sm:pt-14 lg:pt-18">
            <h2 className="font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              about
            </h2>
          </div>
        </motion.header>

        {/* Main Showcase: Flowing Personal Narrative on Left, Full Portrait on Right */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="work-panel p-6 sm:p-8 lg:p-10 motion-safe:animate-glass-breathe"
        >
          <GlassSheen className="left-[-42%] bg-white/[0.035]" />

          {/* 28px Mesh Grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-[0.08] mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)] gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Flowing Personal Narrative */}
            <div className="flex min-w-0 flex-col justify-center">
              {/* Minimalist Profile Pills (Ohshin Style) */}
              <div className="mb-6 flex flex-wrap gap-2 font-mono text-[0.56rem] uppercase tracking-[0.22em] text-white/46">
                {ABOUT_TAGS.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/[0.055] px-3 py-1 ring-1 ring-white/10"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Personal Story & Craft Copy */}
              <div className="max-w-[72ch] space-y-4 font-mono text-[0.92rem] sm:text-[1rem] leading-[1.85] text-white/90">
                <p>
                  I build software because I love understanding things down to the metal. What
                  excites me most is peeling back layers of abstraction, whether that means
                  profiling sub-150 millisecond inference pipelines, wiring stateful multi-agent
                  graphs that run without babysitting, or dialing in a clean Linux kernel
                  environment.
                </p>
                <p>
                  My background outside traditional engineering gave me an unusual lens on
                  technology. Studying political economy and systemic incentives taught me to treat
                  software not just as code, but as living feedback loops. I care deeply about
                  building systems that are resilient, predictable, and transparent, where state
                  transitions are deterministic and failures degrade gracefully.
                </p>
                <p>
                  Most of my day-to-day focus centers on agentic architectures, local machine
                  intelligence, and low-latency backends. I believe the most durable software is
                  fast, private, and quiet. When AI is engineered properly, it disappears into the
                  background and simply does the job with precision.
                </p>
                <p>
                  Outside of terminal windows, my curiosity gravitates toward spaced-repetition
                  cognitive systems, classical economics, chess tactics, and classic science fiction
                  worldbuilding. I enjoy deep work, good books, and the quiet satisfaction of
                  shipping tools that actually work.
                </p>
              </div>
            </div>

            {/* Right Column: Full Portrait Card (No Obstructing Badges) */}
            <figure className="order-first min-h-[22rem] sm:min-h-[30rem] lg:order-none lg:min-h-full m-0">
              <div className="relative h-full min-h-[22rem] sm:min-h-[30rem] lg:min-h-full overflow-hidden rounded-[1.25rem] bg-black/35 shadow-[0_30px_90px_rgba(0,0,0,0.38)] ring-1 ring-white/10 sm:rounded-[1.65rem]">
                <div
                  role="button"
                  tabIndex={0}
                  aria-label="Enlarge portrait photo"
                  onClick={() => setIsZoomed(true)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setIsZoomed(true);
                    }
                  }}
                  className="relative h-full w-full min-h-[22rem] sm:min-h-[30rem] lg:min-h-full cursor-zoom-in group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <Image
                    src={aboutContent.profileImage}
                    alt="Portrait of Anmol Sharma"
                    fill
                    priority
                    className="object-cover object-[center_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 480px"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.06),transparent_32%,rgba(0,0,0,0.22))]"
                  />
                </div>
              </div>
            </figure>
          </div>
        </motion.div>

        {/* 2-Column Side-by-Side Shelves (Ohshin Style: Playlists Left, Books Right) */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch"
        >
          <SpotifyShelf config={spotifyConfig} />
          <ReadingStack />
        </motion.div>
      </div>

      {/* Lightbox / Zoom Modal for High-Res Portrait */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged portrait view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl cursor-zoom-out"
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close zoomed image"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-lg md:max-w-xl aspect-square rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={aboutContent.profileImage}
                alt="Portrait of Anmol Sharma"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
