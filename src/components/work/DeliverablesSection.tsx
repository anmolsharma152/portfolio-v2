import { Terminal } from 'lucide-react';
import React from 'react';

import { CardEffects, PanelEffects } from '@/components/widgets/PanelEffects';
import { reachMetricsContent } from '@/content/loaders';

export default function DeliverablesSection() {
  return (
    <section className="work-panel p-5 motion-safe:animate-glass-breathe sm:p-7 lg:p-9">
      <PanelEffects sheenClassName="left-[-40%] bg-white/[0.04]" />

      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/60">
            Project &amp; Work Performance
          </p>
          <h2 className="font-doto text-2xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)] sm:text-3xl lg:text-4xl">
            deliverables &amp; impact
          </h2>
        </div>
        <span className="hidden font-mono text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-white/60 sm:inline">
          Verified in the repos
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {reachMetricsContent.map((metric, idx) => (
          <div
            key={metric.id}
            className="work-card flex flex-col justify-between p-5 hover:scale-[1.015] sm:p-6"
          >
            <CardEffects />

            <div className="mb-4 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.16em] text-white/60">
              <span className="flex items-center gap-1.5 font-semibold text-white/85">
                <Terminal aria-hidden="true" className="h-3.5 w-3.5 text-emerald-400" />
                <span>{metric.label}</span>
              </span>
              <span className="font-mono text-white/60">{`0${idx + 1}`}</span>
            </div>

            <div>
              <div className="mb-2 font-doto text-3xl font-black tracking-tight text-white drop-shadow-[0_0_16px_rgba(255,255,255,0.18)] sm:text-4xl lg:text-5xl">
                {metric.prefix}
                {metric.value.toLocaleString('en-US')}
                {metric.suffix}
              </div>
              <p className="font-mono text-xs leading-relaxed text-white/70">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
