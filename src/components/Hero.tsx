'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import ThreeDCard from './3DCard';
import WorkClock from './widgets/WorkClock';
import { heroContent } from '@/content/loaders';

const TITLES = heroContent.typewriterTitles;

const TYPING_SPEED = 50;
const DELETING_SPEED = 25;
const PAUSE_TIME = 1000;

const Hero = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const currentTitle = TITLES[currentTitleIndex];

    if (isTyping) {
      if (currentIndex < currentTitle.length) {
        const timeout = setTimeout(() => {
          setText(currentTitle.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(timeout);
      }
      const timeout = setTimeout(() => setIsTyping(false), PAUSE_TIME);
      return () => clearTimeout(timeout);
    }

    if (currentIndex > 0) {
      const timeout = setTimeout(() => {
        setText(currentTitle.slice(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      }, DELETING_SPEED);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setIsTyping(true);
      setCurrentTitleIndex((prev) => (prev + 1) % TITLES.length);
    }, 500);
    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, currentTitleIndex]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-x-hidden bg-background py-14 sm:py-20 lg:py-24">
      {/* Ambient Atmospheric Glow Orbs */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full bg-blue-600/10 dark:bg-blue-600/20 blur-[130px] -z-10" />
      <div className="pointer-events-none absolute top-1/2 -right-40 w-96 sm:w-[500px] h-96 sm:h-[500px] rounded-full bg-indigo-600/10 dark:bg-indigo-600/20 blur-[140px] -z-10" />

      {/* Grid Pattern with Vignette */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Ohshin Meta Strip */}
        <div className="flex items-center justify-between font-mono text-[0.62rem] sm:text-xs uppercase tracking-[0.24em] text-muted-foreground mb-10 border-b border-border/40 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>[ 00 / SYSTEM INITIALIZED ]</span>
          </div>
          <span className="hidden md:inline">LOC: JAIPUR, IN // 26.9124° N, 75.7873° E</span>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground/60">TIME:</span>
            <WorkClock />
            <span className="text-primary font-bold">IST</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* System status pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-600 dark:text-emerald-400 font-mono text-xs mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE // AI SYSTEMS &amp; AGENT PLATFORMS</span>
              </div>

              {/* Ultra-bold Doto Display Headline */}
              <div className="overflow-x-visible">
                <h1 className="font-doto text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tight mb-5 text-foreground leading-[0.98]">
                  {heroContent.headlinePrefix}
                  <span className="text-primary drop-shadow-[0_0_25px_rgba(37,99,235,0.35)]">
                    {heroContent.headlineGradient}
                  </span>
                  {heroContent.headlineSuffix}
                </h1>
              </div>

              {/* Typewriter Terminal Bar */}
              <div className="h-12 flex items-center justify-center lg:justify-start mb-6 font-mono">
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-muted-foreground">
                  <span className="text-primary mr-2 font-bold">&gt;</span>
                  <span className="text-foreground/90 font-semibold">{text}</span>
                  <span
                    className={`inline-block w-2 h-5 ml-1 bg-primary ${isTyping ? 'animate-pulse' : ''}`}
                  />
                </h2>
              </div>

              {/* Compaction Summary */}
              <p className="font-mono text-xs sm:text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {heroContent.summary}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-mono">
                <a
                  href={heroContent.primaryCta.href}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-primary/25 text-xs sm:text-sm uppercase tracking-wider text-center"
                >
                  {heroContent.primaryCta.label}
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="px-8 py-4 border border-border/80 bg-card/60 backdrop-blur-md text-foreground rounded-xl font-semibold hover:bg-foreground/5 transition-all duration-200 text-xs sm:text-sm uppercase tracking-wider text-center"
                >
                  {heroContent.secondaryCta.label}
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-[320px] sm:h-[360px] lg:h-[400px] max-w-xl lg:max-w-2xl mx-auto w-full mt-4 lg:mt-0"
          >
            <ThreeDCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
