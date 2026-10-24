import React from 'react';

import { PanelEffects } from '@/components/widgets/PanelEffects';
import WorkClock from '@/components/widgets/WorkClock';

export default function WorkHeader() {
  return (
    <header className="work-panel p-5 motion-safe:animate-glass-breathe motion-safe:[animation-delay:-1.1s] motion-safe:[animation-duration:12.5s] sm:p-7 lg:p-9">
      <PanelEffects
        sheenClassName="left-[-35%] bg-white/[0.045] motion-safe:[animation-delay:-2.4s] motion-safe:[animation-duration:10.2s]"
        gridClassName="opacity-[0.08]"
      />
      <div className="flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/60 sm:text-[0.68rem] sm:tracking-[0.26em]">
        <span className="font-medium text-white/80">work / output</span>
        <span className="hidden text-center text-white/60 sm:block">scroll / inspect</span>
        <span className="flex items-center gap-1.5 font-bold text-white/80">
          <WorkClock /> <span>IST</span>
        </span>
      </div>

      <div className="mt-6 grid gap-5 sm:mt-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-end lg:gap-12">
        <h1 className="font-doto text-[clamp(3.4rem,13vw,8rem)] font-black uppercase leading-[0.8] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
          work
        </h1>
        <div className="max-w-[60ch] space-y-2 lg:justify-self-end lg:pb-2">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.14em] text-white sm:text-base">
            AI/ML &amp; Systems Engineer
          </p>
          <p className="font-mono text-[0.86rem] leading-relaxed text-white/72 sm:text-[0.95rem]">
            I build isolated execution sandboxes, hybrid retrieval engines, asynchronous agent
            runtimes, and the evaluation harnesses that keep them honest.
          </p>
        </div>
      </div>
    </header>
  );
}
