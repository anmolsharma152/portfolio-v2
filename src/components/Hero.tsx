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

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imageX = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const textY = useTransform(scrollYProgress, [0, 0.82], [0, -172]);
  const textFilter = useTransform(scrollYProgress, [0, 0.74], ['blur(0px)', 'blur(10px)']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.68], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative isolate min-h-[100svh] overflow-hidden bg-black selection:bg-white selection:text-black"
    >
      {/* Background Linux Developer Room */}
      <div className="absolute inset-0">
        <motion.img
          src="/backgrounds/bg-linux-user-room.webp"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center will-change-transform"
          style={{
            scale: imageScale,
            x: imageX,
            y: imageY,
          }}
        />
        {/* Soft Night Window Scrim: Shates the central bright window to deep night sky for supreme contrast */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 h-80 w-[min(94vw,54rem)] rounded-[50%] bg-[#080d1a]/70 blur-[54px]"
        />
        {/* Soft bottom edge transition to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Centered Hero Typography */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="relative w-full max-w-5xl -translate-y-6 sm:-translate-y-14">
          <motion.div
            className="relative"
            style={{
              filter: textFilter,
              opacity: textOpacity,
              y: textY,
            }}
          >
            <div className="relative inline-block">
              {/* Ghost Crimson Chromatic Aberration for Depth */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 font-doto text-[2.75rem] font-black leading-[1.04] text-[#D3170A]/50 blur-[2px] mix-blend-screen motion-safe:animate-chroma-shake sm:text-[4rem] md:text-[5.25rem] lg:text-[6.5rem]"
              >
                hi, im anmol.
              </span>
              {/* Ghost White Offset Aberration */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 -z-10 translate-x-1 font-doto text-[2.75rem] font-black leading-[1.04] text-white/30 blur-[2px] mix-blend-screen sm:text-[4rem] md:text-[5.25rem] lg:text-[6.5rem]"
              >
                hi, im anmol.
              </span>

              {/* Main Title with Solid Doto Weight and Deep Compound Shadow */}
              <h1 className="font-doto text-[2.75rem] leading-[1.04] font-black tracking-normal text-white [text-shadow:0_0_30px_rgba(0,0,0,1),0_4px_16px_rgba(0,0,0,0.95),0_1px_4px_rgba(0,0,0,1)] sm:text-[4rem] md:text-[5.25rem] lg:text-[6.5rem]">
                <DecryptedText
                  text="hi, im anmol."
                  speed={80}
                  sequential
                  animateOn="view"
                  encryptedClassName="text-white/60"
                />
              </h1>
            </div>

            {/* Terminal Status Subtitle Pill for 100% Contrast & Developer Feel */}
            <div className="mt-5 flex items-center justify-center sm:mt-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/65 px-5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.7)] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <p className="font-mono text-xs font-medium tracking-[0.2em] text-neutral-200 uppercase sm:text-sm">
                  <DecryptedText
                    text="engineer // researcher // builder"
                    speed={45}
                    sequential
                    animateOn="view"
                    encryptedClassName="text-white/40"
                  />
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
