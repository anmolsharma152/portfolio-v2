'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

import ThreeDCard from './3DCard';
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
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-x-hidden bg-background py-12 md:py-16 lg:py-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 xl:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-mono text-xs mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ONLINE // AI SYSTEMS &amp; AGENT PLATFORMS</span>
              </div>

              <div className="overflow-x-visible">
                <h1 className="font-doto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 text-foreground">
                  {heroContent.headlinePrefix}
                  <span className="text-primary">{heroContent.headlineGradient}</span>
                  {heroContent.headlineSuffix}
                </h1>
              </div>

              <div className="h-12 flex items-center justify-center lg:justify-start mb-6 font-mono">
                <h2 className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground">
                  <span className="text-primary mr-2">&gt;</span>
                  {text}
                  <span
                    className={`inline-block w-1.5 h-5 ml-1 bg-primary ${isTyping ? 'animate-pulse' : ''}`}
                  />
                </h2>
              </div>

              <p className="font-mono text-xs sm:text-sm md:text-base text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {heroContent.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start font-mono">
                <a
                  href={heroContent.primaryCta.href}
                  className="px-7 py-3.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20 text-xs sm:text-sm"
                >
                  {heroContent.primaryCta.label}
                </a>
                <a
                  href={heroContent.secondaryCta.href}
                  className="px-7 py-3.5 border border-border text-foreground rounded-xl font-semibold hover:bg-muted/60 transition-colors text-xs sm:text-sm"
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
