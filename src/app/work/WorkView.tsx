'use client';

import { Github, ArrowUpRight, Download, Terminal } from 'lucide-react';
import React, { useState } from 'react';

import GlassSheen from '@/components/widgets/GlassSheen';
import TechStackSection from '@/components/widgets/TechStackSection';
import WorkClock from '@/components/widgets/WorkClock';
import {
  curatedProjectsContent,
  workExperienceContent,
  reachMetricsContent,
} from '@/content/loaders';

export const WorkView: React.FC = () => {
  const [projectTab, setProjectTab] = useState<'featured' | 'all'>('featured');

  const displayedProjects =
    projectTab === 'featured'
      ? curatedProjectsContent.filter((p) => p.featured)
      : curatedProjectsContent;

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
          className="pointer-events-none absolute -right-32 top-[44rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-black/40 blur-3xl"
        />
      </div>

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-10 pt-8 sm:pt-12 relative z-10">
        {/* 1. WORK HEADER CARD */}
        <header className="relative isolate overflow-hidden rounded-[2rem] bg-black/45 p-6 shadow-[0_28px_100px_rgba(0,0,0,0.35),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-8 lg:rounded-[2.5rem] lg:p-10 mb-10">
          <GlassSheen className="left-[-35%] bg-white/[0.045] motion-safe:[animation-delay:-2.4s] motion-safe:[animation-duration:10.2s]" />

          {/* Top Metadata Row */}
          <div className="flex items-center justify-between font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/70 border-b border-white/12 pb-4 mb-8 sm:mb-12">
            <span className="text-white font-semibold">work / output</span>
            <span className="hidden sm:block text-center text-white/60">scroll / inspect</span>
            <span className="flex items-center gap-1.5 font-bold text-white">
              <WorkClock /> <span>IST</span>
            </span>
          </div>

          <div className="pt-10 sm:pt-14 lg:pt-18">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.24em] text-white/60 mb-3 sm:text-[0.74rem]">
              teams, roles and projects
            </p>
            <h1 className="font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.45)]">
              work
            </h1>
          </div>
        </header>

        {/* 2. DELIVERABLES & IMPACT METRICS STRIP */}
        <section className="relative isolate overflow-hidden rounded-[2rem] bg-black/45 p-6 sm:p-8 lg:p-10 mb-10 shadow-[0_28px_100px_rgba(0,0,0,0.35),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe lg:rounded-[2.5rem]">
          <GlassSheen className="left-[-40%] bg-white/[0.04]" />

          <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-white/12 pb-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-rose-200 font-semibold mb-1">
                Project &amp; Work Performance
              </p>
              <h2 className="font-doto text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                deliverables &amp; impact
              </h2>
            </div>
            <span className="font-mono text-[0.62rem] sm:text-[0.68rem] uppercase tracking-[0.2em] text-rose-200 font-bold hidden sm:inline">
              Production Benchmarks
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {reachMetricsContent.map((metric, idx) => (
              <div
                key={metric.id}
                className="relative overflow-hidden rounded-2xl p-6 ring-1 ring-white/12 bg-black/55 shadow-[0_16px_40px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.10)] backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:scale-[1.015] hover:ring-white/25 hover:bg-black/65"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
                <div className="flex items-center justify-between font-mono text-[0.68rem] uppercase tracking-[0.16em] text-white/70 mb-4">
                  <span className="flex items-center gap-1.5 font-semibold text-white/90">
                    <Terminal className="w-3.5 h-3.5 text-rose-300" />
                    <span>{metric.label}</span>
                  </span>
                  <span className="text-white/50">{`0${idx + 1}`}</span>
                </div>

                <div>
                  <div className="font-doto text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-2 drop-shadow-[0_0_16px_rgba(255,255,255,0.18)]">
                    {metric.prefix}
                    {metric.value.toLocaleString()}
                    {metric.suffix}
                  </div>
                  <p className="font-mono text-xs text-white/85 leading-relaxed">
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

        {/* 4. TWO-COLUMN CORE: EXPERIENCE (Left) & PROJECTS (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 items-start">
          {/* LEFT: EXPERIENCE TIMELINE */}
          <aside className="relative isolate overflow-hidden rounded-[2rem] bg-black/45 p-6 sm:p-8 ring-1 ring-white/12 shadow-[0_28px_100px_rgba(0,0,0,0.35),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl motion-safe:animate-glass-breathe sm:rounded-[2.25rem]">
            <GlassSheen className="left-[-40%] bg-white/[0.035]" />
            <div className="flex items-baseline justify-between gap-4 mb-6 border-b border-white/12 pb-4">
              <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
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
                  className="relative overflow-hidden rounded-2xl p-5 sm:p-6 ring-1 ring-white/10 bg-black/55 shadow-[0_12px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-200 hover:ring-white/25 hover:bg-black/65"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-xs uppercase tracking-wider text-white/70">
                    <span className="text-rose-300 font-bold">{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>

                  <h3 className="font-mono text-base sm:text-lg font-bold text-white mb-0.5 tracking-tight">
                    {exp.role}
                  </h3>
                  <p className="font-mono text-xs sm:text-sm text-white/80 mb-3 font-semibold">
                    {exp.company}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="font-mono text-xs text-white/85 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-rose-300 mt-0.5 select-none font-bold">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {exp.techBadges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/15"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* RIGHT: PROJECTS BUILD LOG (With Filter Tabs for Balanced Height) */}
          <main className="relative isolate overflow-hidden rounded-[2rem] bg-black/45 p-6 sm:p-8 ring-1 ring-white/12 shadow-[0_28px_100px_rgba(0,0,0,0.35),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl motion-safe:animate-glass-breathe sm:rounded-[2.25rem]">
            <GlassSheen className="left-[-40%] bg-white/[0.035]" />
            <div className="flex items-center justify-between gap-3 mb-6 border-b border-white/12 pb-4">
              <h2 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
                projects
              </h2>

              {/* Tabs to toggle between Featured (balanced with Experience) and All systems */}
              <div className="flex items-center gap-1 rounded-full bg-black/50 p-1 border border-white/15">
                <button
                  type="button"
                  onClick={() => setProjectTab('featured')}
                  className={`px-3 py-1 rounded-full font-mono text-[0.62rem] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    projectTab === 'featured'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  Featured (4)
                </button>
                <button
                  type="button"
                  onClick={() => setProjectTab('all')}
                  className={`px-3 py-1 rounded-full font-mono text-[0.62rem] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                    projectTab === 'all'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  All ({curatedProjectsContent.length})
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {displayedProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 ring-1 ring-white/10 bg-black/55 shadow-[0_12px_28px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition-all duration-200 hover:ring-white/25 hover:bg-black/65 hover:scale-[1.01]"
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2.5">
                      <span className="font-doto text-base sm:text-lg font-black text-rose-300">
                        {`0${idx + 1}`}
                      </span>
                      <h3 className="font-doto text-base sm:text-lg lg:text-xl font-black text-white uppercase tracking-tight group-hover:text-rose-200 transition-colors">
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
                          className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
                          className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="font-mono text-xs text-white/85 leading-relaxed mb-3.5 max-w-2xl">
                    {project.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2.5 border-t border-white/10">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-white/90 border border-white/15"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Toggle Helper */}
            <div className="pt-5 text-center">
              <button
                type="button"
                onClick={() => setProjectTab(projectTab === 'featured' ? 'all' : 'featured')}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-rose-300 hover:text-white font-semibold cursor-pointer transition-colors py-2 px-5 rounded-full border border-white/15 bg-black/40 hover:bg-black/60"
              >
                <span>
                  {projectTab === 'featured'
                    ? `View All Systems (+${curatedProjectsContent.length - 4}) →`
                    : '← Show Featured Only'}
                </span>
              </button>
            </div>
          </main>
        </div>

        {/* 5. OPEN CHANNELS / REACH OUT SECTION */}
        <section className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black/45 p-6 sm:p-10 lg:p-12 shadow-[0_30px_120px_rgba(0,0,0,0.35),0_0_74px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.16)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe">
          <GlassSheen className="left-[-40%] bg-white/[0.035] motion-safe:[animation-delay:-6.4s] motion-safe:[animation-duration:12.7s]" />
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-black/30 blur-3xl motion-safe:animate-reach-pulse"
          />

          {/* Section Header: Left Stacked REACH OUT, Right Context Paragraph */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:items-end mb-10 border-b border-white/12 pb-8">
            <div>
              <p className="font-mono text-[0.62rem] sm:text-[0.7rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
                open channels
              </p>
              <h2 className="font-doto text-[clamp(3rem,13vw,7.5rem)] font-black uppercase leading-[0.82] tracking-tighter text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
                reach<br />out
              </h2>
            </div>
            <p className="max-w-[58ch] font-mono text-[0.82rem] leading-7 text-white/80 sm:text-[0.92rem] lg:justify-self-end">
              Whether you are looking to collaborate, hire for AI systems, seek architecture advice,
              or simply start a conversation, choose the channel that matches your intent.
            </p>
          </div>

          {/* 3 Channels Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Channel 01: Team */}
            <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/55 p-6 sm:p-7 shadow-[0_18px_70px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/12 backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:ring-white/25 hover:bg-black/65">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/40" />
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
                  01 / Team Channel
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-doto text-[1.85rem] sm:text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-3">
                      want me on your team?
                    </h3>
                    <p className="font-mono text-[0.76rem] sm:text-xs text-white/80 leading-relaxed mb-6">
                      For AI systems engineering, agent swarms, LLMOps pipelines, and production backend
                      infrastructure that need equal attention to speed and reliability.
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                      <a
                        href="mailto:anmolsharma152.dev@gmail.com?subject=Hiring%20Anmol%20-%20Engineering%20Role"
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
                      >
                        <span>email me</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href="/resume.pdf"
                        download
                        className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
                      >
                        <span>get resume</span>
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/12">
                    <h3 className="font-doto text-[1.5rem] sm:text-[1.75rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-2">
                      ship the idea
                    </h3>
                    <p className="font-mono text-[0.74rem] text-white/75 leading-relaxed mb-5">
                      Need help architecting from zero to shipped prototype?
                    </p>
                    <a
                      href="mailto:anmolsharma152.dev@gmail.com?subject=Ship%20an%20Idea%20-%20Architecture%20Discussion"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
                    >
                      <span>start discussion</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Channel 02: Advisory / Contract */}
            <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/55 p-6 sm:p-7 shadow-[0_18px_70px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/12 backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:ring-white/25 hover:bg-black/65">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/40" />
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
                  02 / Advisory &amp; Contracts
                </p>
                <h3 className="font-doto text-[1.85rem] sm:text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-3">
                  want to work with me?
                </h3>
                <p className="font-mono text-[0.76rem] sm:text-xs text-white/80 leading-relaxed mb-6">
                  I partner with founders and engineering leaders on low-latency voice pipelines,
                  LangGraph state machine designs, PEFT/QLoRA, and production AI system evaluations.
                </p>
              </div>

              <div>
                <a
                  href="mailto:anmolsharma152.dev@gmail.com?subject=Advisory%20%2F%20Contract%20Inquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
                >
                  <span>book a call</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>

            {/* Channel 03: Casual DM */}
            <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/55 p-6 sm:p-7 shadow-[0_18px_70px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/12 backdrop-blur-xl flex flex-col justify-between transition-all duration-200 hover:ring-white/25 hover:bg-black/65">
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/40" />
              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-rose-300 font-semibold mb-3">
                  03 / Casual Channel
                </p>
                <h3 className="font-doto text-[1.85rem] sm:text-[2.2rem] font-black uppercase leading-[0.92] tracking-tight text-white mb-3">
                  want to send a fun dm?
                </h3>
                <p className="font-mono text-[0.76rem] sm:text-xs text-white/80 leading-relaxed mb-6">
                  For technical banter, ArXiv research paper discussions, sharing flow state Spotify
                  playlists, Hyprland/Linux configs, or anything else interesting.
                </p>
              </div>

              <div>
                <a
                  href="https://x.com/ozymandias152"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-mono text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.16em] text-black shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-neutral-200 transition-all hover:scale-105 cursor-pointer"
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

