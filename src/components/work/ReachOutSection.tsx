'use client';

import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import GlassSheen from '@/components/widgets/GlassSheen';

export default function ReachOutSection() {
  return (
    <section className="work-panel p-6 sm:p-9 lg:p-10 motion-safe:animate-glass-breathe">
      <GlassSheen className="left-[-40%] bg-white/[0.035] motion-safe:[animation-delay:-6.4s] motion-safe:[animation-duration:12.7s]" />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#D3170A]/20 blur-3xl motion-safe:animate-reach-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.08),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(211,23,10,.18),transparent_42%)]"
      />

      {/* Section Header */}
      <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-end mb-8">
        <div>
          <p className="font-mono text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
            open channels
          </p>
          <h2 className="font-doto text-[clamp(3rem,13vw,7.5rem)] font-black uppercase leading-[0.82] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.30)]">
            reach<br />out
          </h2>
        </div>
        <p className="max-w-[58ch] font-mono text-[0.82rem] leading-7 text-white/70 sm:text-[0.9rem] lg:justify-self-end">
          Whether you are looking to collaborate, hire for AI systems, seek architecture advice,
          or simply start a conversation, choose the channel that matches your intent.
        </p>
      </div>

      {/* 3 Channels Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
        {/* Channel 01: Team */}
        <article className="work-card p-6 sm:p-7 flex flex-col justify-between">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.07),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(211,23,10,.16),transparent_42%)]"
          />
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
              01 / Team Channel
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-doto text-[1.85rem] sm:text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-3">
                  want me on your team?
                </h3>
                <p className="font-mono text-[0.76rem] sm:text-xs text-white/68 leading-relaxed mb-6">
                  For AI systems engineering, agent swarms, LLMOps pipelines, and production backend
                  infrastructure that need equal attention to speed and reliability.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href="mailto:anmolsharma152.dev@gmail.com?subject=Hiring%20Anmol%20-%20Engineering%20Role"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.66rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
                  >
                    <span>email me</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.66rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
                  >
                    <span>get resume</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h3 className="font-doto text-[1.45rem] sm:text-[1.7rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-2">
                  ship the idea
                </h3>
                <p className="font-mono text-[0.74rem] text-white/68 leading-relaxed mb-5">
                  Need help architecting from zero to shipped prototype?
                </p>
                <a
                  href="mailto:anmolsharma152.dev@gmail.com?subject=Ship%20an%20Idea%20-%20Architecture%20Discussion"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.66rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
                >
                  <span>start discussion</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Channel 02: Advisory / Contract */}
        <article className="work-card p-6 sm:p-7 flex flex-col justify-between">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.07),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(211,23,10,.16),transparent_42%)]"
          />
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
              02 / Advisory &amp; Contracts
            </p>
            <h3 className="font-doto text-[1.85rem] sm:text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-3">
              want to work with me?
            </h3>
            <p className="font-mono text-[0.76rem] sm:text-xs text-white/68 leading-relaxed mb-6">
              I partner with founders and engineering leaders on low-latency voice pipelines,
              LangGraph state machine designs, PEFT/QLoRA, and production AI system evaluations.
            </p>
          </div>

          <div>
            <a
              href="mailto:anmolsharma152.dev@gmail.com?subject=Advisory%20%2F%20Contract%20Inquiry"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-[0.66rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
            >
              <span>book a call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>

        {/* Channel 03: Casual DM */}
        <article className="work-card p-6 sm:p-7 flex flex-col justify-between">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/40" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.07),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(211,23,10,.16),transparent_42%)]"
          />
          <div>
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
              03 / Casual Channel
            </p>
            <h3 className="font-doto text-[1.85rem] sm:text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-3">
              want to send a fun dm?
            </h3>
            <p className="font-mono text-[0.76rem] sm:text-xs text-white/68 leading-relaxed mb-6">
              For technical banter, ArXiv research paper discussions, sharing flow state Spotify
              playlists, Hyprland/Linux configs, or anything else interesting.
            </p>
          </div>

          <div>
            <a
              href="https://x.com/ozymandias152"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-[0.66rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
            >
              <span>dm on x</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
