'use client';

import { Github, ArrowUpRight, Download, Terminal, Zap } from 'lucide-react';
import React from 'react';

import GlassSheen from '@/components/widgets/GlassSheen';
import SectionHeadingRow from '@/components/widgets/SectionHeadingRow';
import TechStackSection from '@/components/widgets/TechStackSection';
import WorkClock from '@/components/widgets/WorkClock';
import {
  curatedProjectsContent,
  workExperienceContent,
} from '@/content/loaders';

interface ReachStatItem {
  id: string;
  label: string;
  metricLabel: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const REACH_STATS: ReachStatItem[] = [
  {
    id: 'github',
    label: 'github',
    metricLabel: 'Shipped Repositories',
    value: '25+',
    icon: Github,
    href: 'https://github.com/anmolsharma152',
  },
  {
    id: 'dataset',
    label: 'sarvam-1 / llm',
    metricLabel: 'Distilled Instruction Pairs',
    value: '10,000+',
    icon: Terminal,
    href: 'https://github.com/anmolsharma152/Fine-tuning-Sarvam-1',
  },
  {
    id: 'latency',
    label: 'voice pipeline',
    metricLabel: 'Sub-150ms Edge Latency',
    value: '<150MS',
    icon: Zap,
    href: 'https://github.com/anmolsharma152',
  },
];

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
          className="pointer-events-none absolute -right-32 top-[44rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-black/25 blur-3xl"
        />
      </div>

      <div className="mx-auto min-h-screen w-full max-w-[1460px] px-4 py-6 pb-28 sm:px-8 sm:py-8 lg:px-10 lg:py-10 relative z-10">
        {/* 1. WORK HEADER CARD (Ohshin Crimson Glass Parity) */}
        <div className="motion-safe:animate-work-reveal mb-10">
          <header className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black/55 sm:bg-black/60 p-6 sm:p-8 lg:p-9 shadow-[0_32px_120px_rgba(0,0,0,0.55),0_12px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe">
            <GlassSheen className="left-[-35%] bg-white/[0.045]" />

            {/* Top Metadata Row */}
            <div className="grid gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/55 sm:grid-cols-3 sm:items-start sm:gap-3 sm:text-[0.62rem] sm:tracking-[0.28em]">
              <p className="text-white font-semibold">work / output</p>
              <p className="hidden text-center sm:block">scroll / inspect</p>
              <p className="sm:text-right font-bold text-white flex items-center justify-start sm:justify-end gap-1.5">
                <WorkClock /> <span>IST</span>
              </p>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-20">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-white/55 sm:text-[0.74rem] sm:tracking-[0.24em]">
                teams, roles and projects
              </p>
              <h1 className="mt-5 font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] sm:text-[clamp(5.8rem,21vw,19rem)]">
                work
              </h1>
            </div>
          </header>
        </div>

        {/* 2. REACH STRIP (Ohshin 3D Bevel Surface with Tektur Metric Font) */}
        <div className="motion-safe:animate-work-reveal mb-10">
          <section className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black/55 sm:bg-black/60 p-6 sm:p-8 lg:p-9 shadow-[0_32px_120px_rgba(0,0,0,0.55),0_12px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe">
            <GlassSheen className="left-[-42%] bg-white/[0.04]" />
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-[#D3170A]/28 blur-3xl motion-safe:animate-reach-pulse"
            />
            <div
              aria-hidden="true"
              className="absolute -right-20 top-10 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl motion-safe:animate-reach-pulse"
            />

            <SectionHeadingRow
              label="live-ish"
              title="reach"
              titleClassName="font-doto text-[2.25rem] font-black uppercase leading-none tracking-tight text-white sm:text-[4.5rem]"
            />

            <div className="mt-6 grid min-w-0 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-3">
              {REACH_STATS.map((stat, index) => {
                const Icon = stat.icon;
                const content = (
                  <div
                    key={stat.id}
                    className="relative isolate grid min-h-[11rem] min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/75 px-5 py-5 sm:px-6 sm:py-6 shadow-[0_20px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 motion-safe:animate-work-reveal sm:min-h-[13rem] group transition-all duration-200 hover:scale-[1.015] hover:bg-black/85"
                  >
                    <div
                      aria-hidden="true"
                      className="absolute -right-14 -top-16 -z-10 h-40 w-40 rounded-full bg-[#D3170A]/28 blur-2xl motion-safe:animate-reach-pulse"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-20 left-1/2 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-white/10 blur-3xl motion-safe:animate-reach-pulse"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_18%_18%,rgba(255,255,255,.10),transparent_34%),radial-gradient(circle_at_80%_90%,rgba(211,23,10,.24),transparent_42%)]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px bg-white/60 motion-safe:animate-reach-sweep"
                    />

                    <div className="relative flex items-center justify-between gap-4 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white/60 sm:text-[0.82rem]">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-white/80" />
                        <span>{stat.label}</span>
                      </div>
                      <span className="font-mono text-[0.58rem] text-[#D3170A] font-bold">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="relative mt-10 min-w-0 overflow-hidden">
                      <p className="truncate font-metric text-[clamp(1.8rem,4.8vw,4.1rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.3)]">
                        {stat.value}
                      </p>
                      <div className="mt-3 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-white/70">
                        <span>{stat.metricLabel}</span>
                      </div>
                    </div>
                  </div>
                );

                return stat.href ? (
                  <a key={stat.id} href={stat.href} target="_blank" rel="noreferrer">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>
          </section>
        </div>

        {/* 3. AUTO-SCROLLING TECH STACK SECTION */}
        <div className="mb-10">
          <TechStackSection />
        </div>

        {/* 4. TWO-COLUMN CORE: EXPERIENCE (Left) & PROJECTS (Right) */}
        <div className="grid gap-8 py-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-8 lg:py-6 mb-10 items-start">
          {/* LEFT: EXPERIENCE TIMELINE */}
          <aside className="motion-safe:animate-work-reveal min-w-0">
            <div className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] bg-black/55 sm:bg-black/60 p-6 sm:p-7 shadow-[0_32px_120px_rgba(0,0,0,0.55),0_12px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe">
              <GlassSheen className="left-[-45%] bg-white/[0.035]" />
              <SectionHeadingRow label="timeline" title="experience" />

              <div className="mt-6 space-y-4">
                {workExperienceContent.map((item) => (
                  <article
                    key={item.id}
                    className="relative overflow-hidden rounded-[1.35rem] bg-black/75 p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 motion-safe:animate-work-reveal transition-all hover:bg-black/85 hover:ring-white/20"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider text-white/50">
                      <span className="text-[#D3170A] font-bold">{item.period}</span>
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-mono text-[1rem] sm:text-[1.05rem] font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="font-mono text-xs text-white/70 font-semibold mb-3">
                      {item.company}
                    </p>

                    <ul className="space-y-2 mb-4">
                      {item.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="font-mono text-[11px] sm:text-xs text-white/75 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-[#D3170A] mt-0.5 select-none font-bold">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {item.techBadges.map((badge) => (
                        <span
                          key={badge}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/60 text-white/80 border border-white/10"
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

          {/* RIGHT: PROJECTS BUILD LOG */}
          <main className="motion-safe:animate-work-reveal min-w-0">
            <div className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.25rem] bg-black/55 sm:bg-black/60 p-6 sm:p-7 shadow-[0_32px_120px_rgba(0,0,0,0.55),0_12px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe">
              <GlassSheen className="left-[-45%] bg-white/[0.035]" />
              <SectionHeadingRow label="build log" title="projects" />

              <div className="mt-6 space-y-4">
                {curatedProjectsContent.map((project, index) => (
                  <article
                    key={project.id}
                    className="group relative overflow-hidden rounded-[1.35rem] bg-black/75 p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 motion-safe:animate-work-reveal transition-all hover:bg-black/85 hover:ring-white/20 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2.5">
                        <div className="flex items-center gap-3">
                          <span className="font-doto text-base sm:text-lg font-black text-[#D3170A]/90">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <h3 className="font-doto text-lg sm:text-xl font-black text-white uppercase tracking-tight group-hover:text-white/90 transition-colors">
                            {project.title}
                          </h3>
                        </div>

                        <div className="flex items-center gap-3 text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.18)]">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} GitHub`}
                              className="text-white hover:text-white/80 transition-colors"
                            >
                              <Github className="h-5 w-5" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`${project.title} live site`}
                              className="text-white hover:text-white/80 transition-colors"
                            >
                              <ArrowUpRight className="h-5 w-5" />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="font-mono text-xs text-white/70 leading-relaxed mb-4">
                        {project.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-black/60 text-white/80 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </main>
        </div>

        {/* 5. OPEN CHANNELS / REACH OUT SECTION (Ohshin Parity 1-to-1) */}
        <div className="motion-safe:animate-work-reveal">
          <section className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] bg-black/55 sm:bg-black/60 p-6 sm:p-8 lg:p-9 shadow-[0_32px_120px_rgba(0,0,0,0.55),0_12px_50px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe">
            <GlassSheen className="left-[-40%] bg-white/[0.035]" />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#D3170A]/24 blur-3xl motion-safe:animate-reach-pulse"
            />

            {/* Section Header: Left Stacked REACH OUT, Right Context Paragraph */}
            <div className="grid gap-6 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] lg:items-end mb-10">
              <div>
                <p className="font-mono text-[0.58rem] sm:text-[0.62rem] uppercase tracking-[0.2em] text-[#D3170A] font-semibold">
                  open channels
                </p>
                <h2 className="mt-4 font-doto text-[clamp(2.75rem,14vw,8rem)] font-black uppercase leading-[0.82] tracking-tight text-white">
                  reach<br />out
                </h2>
              </div>
              <p className="max-w-[58ch] font-mono text-[0.82rem] leading-7 text-white/70 sm:text-[0.9rem] lg:justify-self-end">
                Whether you are looking to collaborate, hire for AI systems, seek architecture advice,
                or simply start a conversation, choose the channel that matches your intent.
              </p>
            </div>

            {/* 3 Channels Cards Grid */}
            <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
              {/* Channel 01: Team */}
              <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/75 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 motion-safe:animate-work-reveal flex flex-col justify-between hover:bg-black/85 transition-all">
                <div>
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/48" />
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[#D3170A] font-semibold mb-3">
                    01 / team channel
                  </p>

                  <div className="grid gap-7">
                    <div>
                      <h3 className="font-doto text-[2.25rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[2.7rem]">
                        want me on your team?
                      </h3>
                      <p className="mt-5 font-mono text-[0.76rem] leading-6 text-white/65">
                        For AI systems engineering, agent swarms, LLMOps pipelines, and production backend
                        infrastructure that need equal attention to speed and reliability.
                      </p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        <a
                          href="mailto:anmolsharma152.dev@gmail.com?subject=Hiring%20Anmol%20-%20Engineering%20Role"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-black shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:bg-neutral-200 transition-transform hover:scale-105 cursor-pointer"
                        >
                          <span>email me</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                        <a
                          href="/resume.pdf"
                          download
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-black shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:bg-neutral-200 transition-transform hover:scale-105 cursor-pointer"
                        >
                          <span>get resume</span>
                          <Download className="h-3 w-3" />
                        </a>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                      <h3 className="font-doto text-[2rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[2.3rem]">
                        ship the idea
                      </h3>
                      <p className="mt-4 font-mono text-[0.76rem] leading-6 text-white/65">
                        Need help building something, where the idea needs to become a shipped prototype?
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        <a
                          href="mailto:anmolsharma152.dev@gmail.com?subject=Ship%20an%20Idea%20-%20Architecture%20Discussion"
                          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-black shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:bg-neutral-200 transition-transform hover:scale-105 cursor-pointer"
                        >
                          <span>book a call</span>
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Channel 02: Advisory / Contract */}
              <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/75 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 motion-safe:animate-work-reveal flex flex-col justify-between hover:bg-black/85 transition-all">
                <div>
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/48" />
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[#D3170A] font-semibold mb-3">
                    02 / advisory &amp; contracts
                  </p>

                  <div className="mt-5">
                    <h3 className="font-doto text-[2.25rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[2.7rem]">
                      want to work with me?
                    </h3>
                    <p className="mt-5 font-mono text-[0.76rem] leading-6 text-white/65">
                      I partner with founders and engineering leaders on low-latency voice pipelines,
                      LangGraph state machine designs, PEFT/QLoRA, and production AI system evaluations.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href="mailto:anmolsharma152.dev@gmail.com?subject=Advisory%20%2F%20Contract%20Inquiry"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-black shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:bg-neutral-200 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <span>book a call</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </article>

              {/* Channel 03: Casual DM */}
              <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] sm:rounded-[1.75rem] bg-black/75 p-5 sm:p-6 shadow-[0_20px_60px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 motion-safe:animate-work-reveal flex flex-col justify-between hover:bg-black/85 transition-all">
                <div>
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/48" />
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[#D3170A] font-semibold mb-3">
                    03 / casual channel
                  </p>

                  <div className="mt-5">
                    <h3 className="font-doto text-[2.25rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[2.7rem]">
                      want to send a fun dm?
                    </h3>
                    <p className="mt-5 font-mono text-[0.76rem] leading-6 text-white/65">
                      For technical banter, ArXiv research paper discussions, sharing flow state Spotify
                      playlists, Hyprland/Linux configs, or anything else interesting.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  <a
                    href="https://x.com/ozymandias152"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-mono text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-black shadow-[0_12px_32px_rgba(255,255,255,0.12)] hover:bg-neutral-200 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <span>dm on x</span>
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default WorkView;
