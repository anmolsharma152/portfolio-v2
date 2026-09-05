'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import DecryptedText from './widgets/DecryptedText';

export const Hero = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.34]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 165]);
  const imageX = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const ghostX = useTransform(scrollYProgress, [0, 1], [18, -42]);
  const ghostY = useTransform(scrollYProgress, [0, 1], [-10, 92]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.22, 0.85], [0.12, 0.28, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.82], [0, -172]);
  const textFilter = useTransform(scrollYProgress, [0, 0.74], ['blur(0px)', 'blur(10px)']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.68], [1, 0]);
  const scanOpacity = useTransform(scrollYProgress, [0, 1], [0.18, 0.58]);
  const gridOpacity = useTransform(scrollYProgress, [0, 1], [0.08, 0.34]);
  const lightOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.14, 0.42, 0.12]);
  const lightX = useTransform(scrollYProgress, [0, 1], ['-18%', '24%']);
  const scanBeamOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.18, 0.56, 0.2]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-black selection:bg-white selection:text-black"
    >
      {/* Background Cyberpunk Workstation Image */}
      <div className="absolute inset-0">
        <motion.img
          src="/backgrounds/1.jpg"
          alt="Cyberpunk Engineer Workstation"
          className="h-full w-full object-cover object-center will-change-transform"
          style={{
            scale: imageScale,
            x: imageX,
            y: imageY,
          }}
        />
      </div>

      {/* Ghost Aberration Layer */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[url('/backgrounds/1.jpg')] bg-cover bg-center opacity-20 mix-blend-screen will-change-transform [clip-path:polygon(0_8%,100%_0,100%_18%,0_28%)]"
        style={{ opacity: ghostOpacity, x: ghostX, y: ghostY }}
      />

      {/* Static Scanline & Vignette */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2] mix-blend-screen motion-safe:animate-hero-static [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.14)_0px,rgba(255,255,255,0.14)_1px,transparent_1px,transparent_4px),radial-gradient(circle_at_24%_18%,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_72%_76%,rgba(211,23,10,0.22),transparent_34%)]"
        style={{ opacity: scanOpacity }}
      />

      {/* Subtle Coordinate Grid */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[3] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:32px_32px]"
        style={{ opacity: gridOpacity }}
      />

      {/* Micro Pixel Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[4] opacity-[0.09] motion-safe:animate-hero-static [background-image:radial-gradient(rgba(255,255,255,0.95)_0.7px,transparent_0.7px)] [background-size:5px_5px]"
      />

      {/* Rolling Scan Beam */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-1/2 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.22),rgba(211,23,10,0.16),transparent)] mix-blend-screen blur-sm motion-safe:animate-scan-roll"
        style={{ opacity: scanBeamOpacity }}
      />

      {/* Diagonal Ambient Light Sheen */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[-18%] top-[-28%] z-[5] h-[42rem] rotate-[-9deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.16),transparent)] blur-2xl"
        style={{ opacity: lightOpacity, x: lightX }}
      />

      {/* Centered Hero Typography */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="relative w-full max-w-5xl -translate-y-8 sm:-translate-y-16">
          {/* Backdrop Shadow Orb to Ensure Text Legibility */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-72 w-[min(92vw,54rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/65 blur-[80px] sm:h-[22rem] md:h-[26rem]"
          />

          <motion.div
            className="relative"
            style={{
              filter: textFilter,
              opacity: textOpacity,
              y: textY,
            }}
          >
            <div className="relative inline-block">
              {/* Ghost Red Chromatic Aberration */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 font-doto text-[2.5rem] font-semibold leading-[1.04] text-[#D3170A]/40 blur-[1px] mix-blend-screen motion-safe:animate-chroma-shake sm:text-[3.75rem] md:text-[5rem] lg:text-[6.25rem]"
              >
                hi, im anmol.
              </span>
              {/* Ghost White Offset Aberration */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 translate-x-2 font-doto text-[2.5rem] font-semibold leading-[1.04] text-white/25 blur-[2px] mix-blend-screen sm:text-[3.75rem] md:text-[5rem] lg:text-[6.25rem]"
              >
                hi, im anmol.
              </span>
              {/* Main Title with DecryptedText */}
              <h1 className="font-doto text-[2.5rem] leading-[1.04] font-semibold tracking-normal text-white drop-shadow-[0_0_24px_rgba(255,255,255,0.22)] sm:text-[3.75rem] md:text-[5rem] lg:text-[6.25rem]">
                <DecryptedText
                  text="hi, im anmol."
                  speed={80}
                  sequential
                  animateOn="view"
                  encryptedClassName="text-white/50"
                />
              </h1>
            </div>
            <p className="mt-5 font-doto text-[13px] font-medium tracking-[0.1em] text-white/90 sm:mt-6 sm:text-[18px] sm:tracking-[0.14em] md:text-[24px]">
              <DecryptedText
                text="engineer. researcher. builder."
                speed={60}
                sequential
                animateOn="view"
                encryptedClassName="text-white/40"
              />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
