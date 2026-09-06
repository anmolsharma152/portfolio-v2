'use client';

import React from 'react';
import GlassSheen from '@/components/widgets/GlassSheen';
import WorkClock from '@/components/widgets/WorkClock';

export default function WorkHeader() {
  return (
    <header className="work-panel p-5 sm:p-7 lg:p-9 motion-safe:animate-glass-breathe">
      <GlassSheen className="left-[-35%] bg-white/[0.045] motion-safe:[animation-delay:-2.4s] motion-safe:[animation-duration:10.2s]" />



      {/* Top Metadata Row */}
      <div className="flex items-center justify-between font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/50">
        <span className="text-white/80 font-medium">work / output</span>
        <span className="hidden sm:block text-center text-white/50">scroll / inspect</span>
        <span className="flex items-center gap-1.5 font-bold text-white/80">
          <WorkClock /> <span>IST</span>
        </span>
      </div>

      <div className="pt-10 sm:pt-14 lg:pt-18">
        <h1 className="font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          work
        </h1>
      </div>
    </header>
  );
}
