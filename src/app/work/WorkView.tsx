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
    <main className="min-h-screen relative pb-36 bg-[#94130b] text-white selection:bg-white selection:text-[#94130b]">
      {/* Atmospheric Crimson Glow & Grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-15 [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />
        <div
          aria-hidden="true"
          className="absolute -left-28 top-20 h-[38rem] w-[38rem] rounded-full bg-white/10 blur-[130px]"
        />
        <div
          aria-hidden="true"
          className="absolute -right-32 top-[40rem] h-[40rem] w-[40rem] rounded-full bg-black/40 blur-[140px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pt-8 sm:pt-12">
        {/* 1. WORK HEADER CARD (Ohshin Crimson Glass Style) */}
        <header className="relative isolate overflow-hidden rounded-[2rem] bg-black/35 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7 lg:rounded-[2.5rem] lg:p-9 mb-10">
          <GlassSheen className="left-[-35%] bg-white/[0.045]" />

          {/* Top Metadata Row */}
          <div className="flex items-center justify-between font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/60 border-b border-white/15 pb-4 mb-8 sm:mb-12">
            <span className="text-white font-semibold">work / output</span>
            <span className="hidden sm:block text-center">scroll / inspect</span>
            <span className="flex items-center gap-1.5 font-bold text-white">
              <WorkClock /> <span>IST</span>
            </span>
          </div>

          <div className="pt-10 sm:pt-14 lg:pt-18">
            <h1 className="font-doto text-[clamp(4.2rem,21vw,19rem)] font-black lowercase leading-[0.72] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
              work
            </h1>
          </div>
        </header>

        {/* 2. DELIVERABLES & IMPACT METRICS STRIP (Ohshin 3D Bevel Surface) */}
        <section className="relative isolate overflow-hidden rounded-[2rem] bg-black/35 p-6 sm:p-8 mb-10 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe lg:rounded-[2.5rem]">
          <GlassSheen className="left-[-40%] bg-white/[0.04]" />

          <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-white/15 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-200 font-semibold mb-1">
                Project &amp; Work Performance
              </p>
              <h2 className="font-doto text-2xl sm:text-3xl font-black lowercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                deliverables &amp; impact
              </h2>
            </div>
            <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200 font-bold hidden sm:inline">
              Production Benchmarks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {reachMetricsContent.map((metric, idx) => (
              <div
                key={metric.id}
                className="relative overflow-hidden rounded-2xl p-6 ring-1 ring-white/15 bg-black/40 shadow-[0_16px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:scale-[1.015] hover:ring-white/25"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25" />
                <div className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/60 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-rose-300" />
                    <span>{metric.label}</span>
                  </span>
                  <span className="text-white/40">{`0${idx + 1}`}</span>
                </div>

                <div>
                  <div className="font-doto text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 drop-shadow-[0_0_16px_rgba(255,255,255,0.16)]">
                    {metric.prefix}
                    {metric.value.toLocaleString()}
                    {metric.suffix}
                  </div>
                  <p className="font-mono text-[11px] text-white/70 leading-relaxed">
                    {metric.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. AUTO-SCROLLING TECH STACK SECTION (Ohshin Direct Adaption) */}
        <TechStackSection />

        {/* 4. TWO-COLUMN CORE: EXPERIENCE (Left) & PROJECTS (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(20rem,0.6fr)_minmax(0,1fr)] gap-8 mb-12 items-start">
          {/* LEFT: EXPERIENCE TIMELINE */}
          <aside className="relative isolate overflow-hidden rounded-[2rem] bg-black/35 p-6 sm:p-8 ring-1 ring-white/15 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl motion-safe:animate-glass-breathe lg:rounded-[2.25rem] lg:sticky lg:top-8">
            <GlassSheen className="left-[-40%] bg-white/[0.035]" />
            <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-white/15 pb-4">
              <h2 className="font-doto text-2xl sm:text-3xl font-black lowercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                experience
              </h2>
              <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200 font-semibold">
                Timeline
              </span>
            </div>

            <div className="space-y-4">
              {workExperienceContent.map((exp) => (
                <div
                  key={exp.id}
                  className="relative overflow-hidden rounded-2xl p-5 ring-1 ring-white/10 bg-black/40 shadow-[0_12px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-200 hover:ring-white/25 hover:scale-[1.01]"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1.5 font-mono text-[10px] text-white/60 uppercase tracking-wider">
                    <span className="text-rose-300 font-bold">{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:base text-white mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs text-white/70 mb-3 font-semibold">
                    {exp.company}
                  </p>

                  <ul className="space-y-1.5 mb-3">
                    {exp.highlights.slice(0, 2).map((h, i) => (
                      <li
                        key={i}
                        className="font-mono text-[11px] text-white/85 leading-relaxed flex items-start gap-1.5"
                      >
                        <span className="text-rose-300 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-2.5 border-t border-white/15">
                    {exp.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT: PROJECTS BUILD LOG */}
          <main className="relative isolate overflow-hidden rounded-[2rem] bg-black/35 p-6 sm:p-8 ring-1 ring-white/15 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-2xl motion-safe:animate-glass-breathe lg:rounded-[2.25rem]">
            <GlassSheen className="left-[-40%] bg-white/[0.035]" />
            <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-white/15 pb-4">
              <h2 className="font-doto text-2xl sm:text-3xl font-black lowercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                projects
              </h2>
              <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200 font-semibold">
                Build Log
              </span>
            </div>

            <div className="space-y-4">
              {curatedProjectsContent.map((project, idx) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl p-6 ring-1 ring-white/10 bg-black/40 shadow-[0_12px_28px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-200 hover:ring-white/25 hover:bg-black/50 hover:scale-[1.01]"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-doto text-base sm:text-lg font-black text-rose-300">
                        {`0${idx + 1}`}
                      </span>
                      <h3 className="font-doto text-lg sm:text-xl font-black text-white lowercase tracking-tight group-hover:text-rose-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} GitHub repository`}
                          className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                          className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-mono text-xs text-white/85 leading-relaxed mb-3.5 max-w-2xl">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 ring-1 ring-white/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>

        {/* 5. REACH OUT SECTION (Ohshin Style 3 Channels with 3D Bevel) */}
        <section className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black/35 p-6 sm:p-10 lg:p-12 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe">
          <GlassSheen className="left-[-40%] bg-white/[0.045]" />

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-white/15 pb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-rose-200 font-semibold mb-2">
                Open Channels
              </p>
              <h2 className="font-doto text-4xl sm:text-5xl md:text-6xl font-black lowercase tracking-tight text-white drop-shadow-[0_2px_16px_rgba(255,255,255,0.15)]">
                reach out
              </h2>
            </div>
            <p className="font-mono text-xs sm:text-sm text-white/70 max-w-md leading-relaxed">
              Whether you are looking to collaborate, hire for AI systems, seek architecture advice,
              or simply start a conversation, choose the channel that matches your intent.
            </p>
          </div>

          {/* 3 Channels Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Channel 01: Team */}
            <div className="rounded-2xl p-6 ring-1 ring-white/15 bg-black/40 shadow-[0_16px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl flex flex-col justify-between space-y-6 transition-all duration-200 hover:ring-white/25 hover:scale-[1.01]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300 font-bold">
                  01 / Team Channel
                </span>
                <h3 className="font-doto text-xl sm:text-2xl font-black text-white lowercase tracking-tight mt-2 mb-3">
                  want me on your team?
                </h3>
                <p className="font-mono text-xs text-white/75 leading-relaxed">
                  For AI systems engineering, agent swarms, LLMOps pipelines, and production backend
                  infrastructure that need equal attention to speed and reliability.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  <a
                    href="mailto:anmolsharma152.dev@gmail.com?subject=Hiring%20Anmol%20-%20Engineering%20Role"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-semibold lowercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-sm"
                  >
                    <span>send message</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-semibold lowercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ring-1 ring-white/20"
                  >
                    <span>get resume</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <p className="font-doto text-sm font-bold text-white lowercase tracking-tight mb-2">
                    ship the idea
                  </p>
                  <p className="font-mono text-[11px] text-white/60 mb-3">
                    Need help architecting from zero to shipped prototype?
                  </p>
                  <a
                    href="mailto:anmolsharma152.dev@gmail.com?subject=Ship%20an%20Idea%20-%20Architecture%20Discussion"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-rose-200 hover:text-white underline cursor-pointer"
                  >
                    <span>Start Discussion &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Channel 02: Advisory / Contract */}
            <div className="rounded-2xl p-6 ring-1 ring-white/15 bg-black/40 shadow-[0_16px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl flex flex-col justify-between space-y-6 transition-all duration-200 hover:ring-white/25 hover:scale-[1.01]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300 font-bold">
                  02 / Advisory &amp; Contracts
                </span>
                <h3 className="font-doto text-xl sm:text-2xl font-black text-white lowercase tracking-tight mt-2 mb-3">
                  want to work with me?
                </h3>
                <p className="font-mono text-xs text-white/75 leading-relaxed">
                  I partner with founders and engineering leaders on low-latency voice pipelines,
                  LangGraph state machine designs, PEFT/QLoRA, and production AI system evaluations.
                </p>
              </div>

              <div>
                <a
                  href="mailto:anmolsharma152.dev@gmail.com?subject=Advisory%20%2F%20Contract%20Inquiry"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-mono text-xs font-semibold lowercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-sm"
                >
                  <span>send message / advisory</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Channel 03: Casual DM */}
            <div className="rounded-2xl p-6 ring-1 ring-white/15 bg-black/40 shadow-[0_16px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl flex flex-col justify-between space-y-6 transition-all duration-200 hover:ring-white/25 hover:scale-[1.01]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-rose-300 font-bold">
                  03 / Casual Channel
                </span>
                <h3 className="font-doto text-xl sm:text-2xl font-black text-white lowercase tracking-tight mt-2 mb-3">
                  want to send a fun dm?
                </h3>
                <p className="font-mono text-xs text-white/75 leading-relaxed">
                  For technical banter, ArXiv research paper discussions, sharing flow state Spotify
                  playlists, Hyprland/Linux configs, or anything else interesting.
                </p>
              </div>

              <div>
                <a
                  href="https://x.com/ozymandias152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full font-mono text-xs font-semibold lowercase tracking-wider bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer ring-1 ring-white/20"
                >
                  <span>dm on x</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default WorkView;
