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
          src="/backgrounds/bg-linux-user-room.png"
          alt="Linux Developer Room"
          className="h-full w-full object-cover object-center will-change-transform"
          style={{
            scale: imageScale,
            x: imageX,
            y: imageY,
          }}
        />
        {/* Soft bottom edge transition to next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Centered Hero Typography */}
      <div className="relative z-10 flex min-h-[100svh] items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="relative w-full max-w-5xl -translate-y-8 sm:-translate-y-16">
          <motion.div
            className="relative"
            style={{
              filter: textFilter,
              opacity: textOpacity,
              y: textY,
            }}
          >
            <div className="relative inline-block">
              {/* Main Title with DecryptedText and High-Contrast Drop Shadow */}
              <h1 className="font-doto text-[2.75rem] leading-[1.04] font-semibold tracking-normal text-white [text-shadow:0_4px_30px_rgba(0,0,0,0.95),0_1px_6px_rgba(0,0,0,0.9)] sm:text-[4rem] md:text-[5.25rem] lg:text-[6.5rem]">
                <DecryptedText
                  text="hi, im anmol."
                  speed={80}
                  sequential
                  animateOn="view"
                  encryptedClassName="text-white/60"
                />
              </h1>
            </div>
            <p className="mt-5 font-doto text-[14px] font-semibold tracking-[0.14em] text-white [text-shadow:0_3px_20px_rgba(0,0,0,0.95),0_1px_4px_rgba(0,0,0,0.9)] sm:mt-6 sm:text-[19px] sm:tracking-[0.18em] md:text-[24px]">
              <DecryptedText
                text="engineer. researcher. builder."
                speed={60}
                sequential
                animateOn="view"
                encryptedClassName="text-white/50"
              />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
