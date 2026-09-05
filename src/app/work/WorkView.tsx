'use client';

import { Github, ArrowUpRight, Download, Terminal } from 'lucide-react';
import React from 'react';

import GlassSheen from '@/components/widgets/GlassSheen';
import TechStackSection from '@/components/widgets/TechStackSection';
import WorkClock from '@/components/widgets/WorkClock';
import {
  curatedProjectsContent,
  workExperienceContent,
  reachMetricsContent,
} from '@/content/loaders';

export const WorkView: React.FC = () => {
  return (
    <main className="min-h-screen relative pb-36 bg-[#D3170A] text-white selection:bg-white selection:text-[#D3170A]">
      {/* Atmospheric Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-24 -z-10 h-[34rem] w-[34rem] rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-[44rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-black/30 blur-3xl"
        />
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-12 relative z-10">
        {/* 1. WORK HEADER CARD */}
        <header className="relative isolate overflow-hidden rounded-[2rem] bg-black/34 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-8 lg:rounded-[2.5rem] lg:p-10 mb-10">
          <GlassSheen className="left-[-35%] bg-white/[0.045] motion-safe:[animation-delay:-2.4s] motion-safe:[animation-duration:10.2s]" />

          {/* Top Metadata Row */}
          <div className="flex items-center justify-between font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/60 border-b border-white/10 pb-4 mb-8 sm:mb-12">
            <span className="text-white/90 font-semibold">work / output</span>
            <span className="hidden sm:block text-center text-white/50">scroll / inspect</span>
            <span className="flex items-center gap-1.5 font-bold text-white/90">
              <WorkClock /> <span>IST</span>
            </span>
          </div>

          <div className="pt-10 sm:pt-14 lg:pt-18">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/55 mb-3 sm:text-[0.74rem]">
              teams, roles and projects
            </p>
            <h1 className="font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              work
            </h1>
          </div>
        </header>

        {/* 2. DELIVERABLES & IMPACT METRICS STRIP */}
        <section className="relative isolate overflow-hidden rounded-[2rem] bg-black/30 p-6 sm:p-8 lg:p-10 mb-10 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe lg:rounded-[2.5rem]">
          <GlassSheen className="left-[-40%] bg-white/[0.04]" />

          <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-white/10 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-200/90 font-semibold mb-1">
                Project &amp; Work Performance
              </p>
              <h2 className="font-doto text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                deliverables &amp; impact
              </h2>
            </div>
            <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200/80 font-semibold hidden sm:inline">
              Production Benchmarks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {reachMetricsContent.map((metric, idx) => (
              <div
                key={metric.id}
                className="relative overflow-hidden rounded-2xl p-5 sm:p-6 ring-1 ring-white/10 bg-black/34 shadow-[0_16px_40px_rgba(0,0,0,0.22),0_0_40px_rgba(211,23,10,0.12),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:scale-[1.015] hover:ring-white/20 hover:bg-black/40"
              >
                {/* Inner radial warm glow for rich red-obsidian vibe */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 -z-10 h-32 w-32 rounded-full bg-[#D3170A]/20 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.07),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(211,23,10,.18),transparent_45%)]"
                />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/35" />

                <div className="flex items-center justify-between font-mono text-[0.66rem] uppercase tracking-[0.16em] text-white/60 mb-4">
                  <span className="flex items-center gap-1.5 font-semibold text-white/85">
                    <Terminal className="w-3.5 h-3.5 text-rose-300" />
                    <span>{metric.label}</span>
                  </span>
                  <span className="text-rose-300/80 font-mono">{`0${idx + 1}`}</span>
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

        {/* 3. AUTO-SCROLLING TECH STACK SECTION */}
        <div className="mb-10">
          <TechStackSection />
        </div>

        {/* 4. TWO-COLUMN CORE: EXPERIENCE (0.56fr) & PROJECTS (1fr) */}
        <div className="grid gap-8 py-4 lg:grid-cols-[minmax(18rem,0.56fr)_minmax(0,1fr)] lg:gap-8 lg:py-6 items-start mb-12">
          {/* LEFT: EXPERIENCE TIMELINE (Sticky Sync Scrolling on Desktop) */}
          <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-black/32 p-5 sm:p-7 ring-1 ring-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl motion-safe:animate-glass-breathe">
              <GlassSheen className="left-[-40%] bg-white/[0.035]" />
              <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                  experience
                </h2>
                <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200/80 font-semibold">
                  Timeline
                </span>
              </div>

              <div className="space-y-3.5">
                {workExperienceContent.map((exp) => (
                  <article
                    key={exp.id}
                    className="relative overflow-hidden rounded-[1.35rem] p-4 sm:p-5 ring-1 ring-white/8 bg-black/28 shadow-[0_12px_38px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-200 hover:ring-white/15 hover:bg-black/36"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-[0.68rem] uppercase tracking-wider text-white/50">
                      <span className="text-rose-300 font-bold">{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>

                    <h3 className="font-mono text-[0.94rem] sm:text-[1rem] font-bold text-white mb-0.5 tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs text-white/80 mb-3 font-semibold">
                      {exp.company}
                    </p>

                    <ul className="space-y-1.5 mb-3.5">
                      {exp.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="font-mono text-[0.74rem] sm:text-xs text-white/70 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-rose-300 mt-0.5 select-none font-bold">▹</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/8">
                      {exp.techBadges.map((badge) => (
                        <span
                          key={badge}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-white/75 border border-white/10"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>

          {/* RIGHT: PROJECTS BUILD LOG (All 8 Projects Rendered Inline, No Toggle Buttons) */}
          <main className="min-w-0">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-black/32 p-5 sm:p-7 ring-1 ring-white/10 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-2xl motion-safe:animate-glass-breathe">
              <GlassSheen className="left-[-40%] bg-white/[0.035]" />
              <div className="flex items-baseline justify-between gap-3 mb-6 border-b border-white/10 pb-4">
                <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                  projects
                </h2>
                <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200/80 font-semibold">
                  Build Log ({curatedProjectsContent.length})
                </span>
              </div>

              <div className="space-y-3">
                {curatedProjectsContent.map((project, idx) => (
                  <article
                    key={project.id}
                    className="group relative overflow-hidden rounded-[1.35rem] p-4 sm:p-5 ring-1 ring-white/6 bg-black/24 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-200 hover:ring-white/15 hover:bg-black/32 sm:grid sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center gap-4"
                  >
                    {/* Left Serial Number */}
                    <div className="hidden sm:block font-doto text-[1.45rem] font-black leading-none text-rose-300/80 pr-2 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>

                    {/* Middle Content */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="sm:hidden font-doto text-[1.2rem] font-black leading-none text-rose-300/80 select-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <h3 className="min-w-0 break-words font-doto text-[1.05rem] sm:text-[1.2rem] font-black uppercase tracking-tight text-white group-hover:text-rose-200 transition-colors">
                          {project.title}
                        </h3>
                      </div>

                      <p className="font-mono text-[0.74rem] sm:text-[0.8rem] text-white/68 leading-relaxed mb-2.5">
                        {project.summary}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/[0.05] text-white/70 border border-white/8"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Action Icons */}
                    <div className="flex items-center gap-2 pt-3 sm:pt-0 sm:self-center shrink-0 justify-end text-white/80">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-2 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="p-2 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <ArrowUpRight className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </main>
        </div>

        {/* 5. OPEN CHANNELS / REACH OUT SECTION */}
        <section className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black/32 p-6 sm:p-10 lg:p-12 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe">
          <GlassSheen className="left-[-40%] bg-white/[0.035] motion-safe:[animation-delay:-6.4s] motion-safe:[animation-duration:12.7s]" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#D3170A]/20 blur-3xl motion-safe:animate-reach-pulse"
          />

          {/* Section Header: Left Stacked REACH OUT, Right Context Paragraph */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-end mb-10 border-b border-white/10 pb-8">
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
            <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/36 p-5 sm:p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:ring-white/20 hover:bg-black/42">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/40" />
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
            <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/36 p-5 sm:p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:ring-white/20 hover:bg-black/42">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/40" />
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
            <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/36 p-5 sm:p-6 shadow-[0_18px_70px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:ring-white/20 hover:bg-black/42">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/40" />
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
      </div>
    </main>
  );
};

export default WorkView;
