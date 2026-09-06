'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

import GlassSheen from './widgets/GlassSheen';
import ReadingStack from './widgets/ReadingStack';
import SpotifyShelf from './widgets/SpotifyShelf';
import { aboutContent, spotifyConfig } from '@/content/loaders';

const ABOUT_TAGS = ['origin', 'linux', 'chess', 'systems', 'side-quests'];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
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
    <section id="about" className="pt-16 md:pt-24 pb-8 md:pb-12 relative z-10 isolate overflow-hidden">
      {/* Background ambient lighting & Ohshin dot-matrix raster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.52)_0.62px,transparent_0.62px)] [background-size:6px_6px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.04),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-white/[0.03] blur-3xl"
      />

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Dedicated About Header Card (Obsidian Glass) */}
        <header className="relative isolate overflow-hidden rounded-[2rem] bg-white/[0.05] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7 lg:rounded-[2.5rem] lg:p-9 mb-8">
          <GlassSheen className="left-[-35%] bg-white/[0.045]" />

          <div className="flex items-center justify-between font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/50">
            <p className="text-white/80">profile / anmol</p>
            <p className="sm:text-right">jaipur, india</p>
          </div>

          <div ref={ref} className="pt-10 sm:pt-14 lg:pt-18">
            <h2 className="font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tighter text-white">
              about
            </h2>
          </div>
        </header>

        {/* Main Showcase: Flowing Personal Narrative on Left, Full Portrait on Right */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate min-w-0 w-full overflow-hidden rounded-[1.5rem] bg-white/[0.05] shadow-[0_24px_100px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:rounded-[2rem] lg:rounded-[2.35rem] p-6 sm:p-8 lg:p-10 mb-12"
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

              {/* Personal Story Copy */}
              <div className="max-w-[72ch] space-y-4 font-mono text-[0.92rem] sm:text-[1rem] leading-[1.85] text-white/90">
                <p>
                  I grew up fascinated by how things work under the hood. My early obsession started
                  in Jaipur—tearing down computers, breaking Linux kernels, and getting hopelessly
                  lost in terminal configs long before I ever thought of it as a career path.
                </p>
                <p>
                  My journey didn&apos;t follow the standard engineering playbook. I spent three
                  years studying political science and economics at the Symbiosis School for Liberal
                  Arts (SSLA). It was an unconventional detour for an engineer, but it fundamentally
                  shaped how I think: teaching me to analyze complex macro incentives, technological
                  governance, and the systemic feedback loops that dictate human behavior.
                </p>
                <p>
                  Still, no matter how deeply I explored economic theory, I kept being pulled back
                  to what I love most: writing code and building machines. I transitioned into deep
                  AI and systems engineering at IIT Mandi, realizing that machine intelligence,
                  local models, and autonomous agents are the ultimate synthesis of incentives,
                  math, and low-level code.
                </p>
                <p>
                  When I&apos;m not fine-tuning models, orchestrating multi-agent swarms, or writing
                  low-latency speech pipelines, I&apos;m usually tinkering with minimalist
                  Arch/Hyprland tiling environments, exploring cognitive spaced-repetition science,
                  or diving deep into classic sci-fi worldbuilding with post-rock blasting on my
                  headphones.
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <SpotifyShelf config={spotifyConfig} />
          <ReadingStack />
        </div>
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
