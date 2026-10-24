import { ArrowUpRight, Download } from 'lucide-react';
import React from 'react';

import { PanelEffects } from '@/components/widgets/PanelEffects';

const buttonClass =
  'inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.14em] transition-colors';

export default function ReachOutSection() {
  return (
    <section
      className="work-panel flex flex-col gap-5 p-5 motion-safe:animate-glass-breathe motion-safe:[animation-delay:-4.9s] motion-safe:[animation-duration:13.8s] sm:p-7 lg:flex-row lg:items-center lg:justify-between"
      aria-labelledby="reach-heading"
    >
      <PanelEffects sheenClassName="left-[-40%] bg-white/[0.035] motion-safe:[animation-delay:-6.4s] motion-safe:[animation-duration:12.7s]" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-white/[0.04] blur-3xl motion-safe:animate-reach-pulse"
      />
      <div className="max-w-[60ch]">
        <h2
          id="reach-heading"
          className="font-doto text-3xl font-black uppercase tracking-tight text-white sm:text-4xl drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]"
        >
          reach out
        </h2>
        <p className="mt-2 font-mono text-[0.84rem] leading-relaxed text-white/72">
          Open to AI/ML and systems engineering roles, plus advisory or contract work on agent
          runtimes, retrieval, fine-tuning, and LLM evaluation.
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5">
        <a
          href="mailto:anmolsharma152.dev@gmail.com"
          className={`${buttonClass} bg-white text-black hover:bg-neutral-200`}
        >
          <span>email me</span>
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
        <a
          href="/resume.pdf"
          download="Anmol_Sharma_Resume.pdf"
          className={`${buttonClass} border border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12]`}
        >
          <span>resume</span>
          <Download aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
        <a
          href="https://x.com/ozymandias152"
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} border border-white/20 bg-white/[0.06] text-white hover:bg-white/[0.12]`}
        >
          <span>dm on x</span>
          <ArrowUpRight aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
