'use client';

import React from 'react';
import { Terminal } from 'lucide-react';
import GlassSheen from '@/components/widgets/GlassSheen';
import { reachMetricsContent } from '@/content/loaders';

export default function DeliverablesSection() {
  return (
    <section className="work-panel p-5 sm:p-7 lg:p-9 motion-safe:animate-glass-breathe">
      <GlassSheen className="left-[-40%] bg-white/[0.04]" />

      {/* 28px Mesh Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.06] mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.09),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.04),transparent_42%)]"
      />

      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60 font-semibold mb-1">
            Project &amp; Work Performance
          </p>
          <h2 className="font-doto text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
            deliverables &amp; impact
          </h2>
        </div>
        <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-white/50 font-semibold hidden sm:inline">
          Production Benchmarks
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {reachMetricsContent.map((metric, idx) => (
          <div
            key={metric.id}
            className="work-card p-5 sm:p-6 flex flex-col justify-between hover:scale-[1.015]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.08),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.03),transparent_45%)]"
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

            <div className="flex items-center justify-between font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/60 mb-4">
              <span className="flex items-center gap-1.5 font-semibold text-white/85">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>{metric.label}</span>
              </span>
              <span className="text-white/40 font-mono">{`0${idx + 1}`}</span>
            </div>

            <div>
              <div className="font-doto text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 drop-shadow-[0_0_16px_rgba(255,255,255,0.18)]">
                {metric.prefix}
                {metric.value.toLocaleString()}
                {metric.suffix}
              </div>
              <p className="font-mono text-xs text-white/70 leading-relaxed">
                {metric.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
