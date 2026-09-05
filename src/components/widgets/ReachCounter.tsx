'use client';

import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

import GlassSheen from './GlassSheen';
import { reachMetricsContent } from '@/content/loaders';
import type { ReachMetric } from '@/content/schemas';

function formatCount(value: number) {
  return new Intl.NumberFormat('en-US').format(Math.round(value));
}

function getCountStorageKey(id: string) {
  return `portfolio-reach-metric-animated:${id}`;
}

function hasAnimated(storageKey: string) {
  if (typeof window === 'undefined') return false;
  return window.sessionStorage.getItem(storageKey) === '1';
}

function persistAnimated(storageKey: string) {
  if (typeof window === 'undefined') return;
  window.sessionStorage.setItem(storageKey, '1');
}

const CountUpNumber: React.FC<{ metric: ReachMetric }> = ({ metric }) => {
  const storageKey = getCountStorageKey(metric.id);
  const frameRef = useRef<number | null>(null);
  const [displayValue, setDisplayValue] = useState<number>(() => {
    return hasAnimated(storageKey) ? metric.value : 0;
  });

  useEffect(() => {
    if (hasAnimated(storageKey)) return;

    persistAnimated(storageKey);
    const duration = 2800; // 2.8s smooth cubic easing
    const startedAt = window.performance.now();

    const tick = (time: number) => {
      const progress = Math.min((time - startedAt) / duration, 1);
      // Cubic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(metric.value * easedProgress);

      if (progress < 1) {
        frameRef.current = window.requestAnimationFrame(tick);
      }
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [metric.value, storageKey]);

  return (
    <span>
      {metric.prefix ?? ''}
      {formatCount(displayValue)}
      {metric.suffix}
    </span>
  );
};

export const ReachCounter: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl glass p-6 sm:p-8 motion-safe:animate-glass-breathe mb-12">
      <GlassSheen />

      {/* Top Kicker */}
      <div className="flex items-center justify-between gap-4 mb-6 border-b border-border/40 pb-4">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-primary">
          <Activity className="w-4 h-4 text-primary animate-pulse" />
          <span>[ 01 / VERIFIED SYSTEM BENCHMARKS ]</span>
        </div>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground hidden sm:block">
          real-time metrics &amp; impact
        </span>
      </div>

      {/* Responsive Grid: 1 col on mobile, 2 cols on 940px half-screen tiled mode, 4 cols on full screen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reachMetricsContent.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * index, duration: 0.4 }}
            className="relative overflow-hidden rounded-xl bg-card/80 dark:bg-zinc-900/70 border border-border/70 p-4 sm:p-5 flex flex-col justify-between shadow-sm hover:border-primary/50 transition-colors"
          >
            {/* Specular glow orb */}
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-xl" />

            <div className="flex items-center justify-between text-muted-foreground font-mono text-xs mb-3">
              <span className="truncate pr-2 font-medium">{metric.label}</span>
              <span className="font-doto text-primary font-black">0{index + 1}</span>
            </div>

            <div className="my-1">
              <p className="font-doto text-3xl sm:text-4xl font-black tracking-tight text-foreground">
                <CountUpNumber metric={metric} />
              </p>
            </div>

            <p className="text-xs text-muted-foreground mt-3 line-clamp-2 leading-relaxed">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReachCounter;
