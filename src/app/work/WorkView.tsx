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
          className="pointer-events-none absolute -right-32 top-[44rem] -z-10 h-[38rem] w-[38rem] rounded-full bg-black/20 blur-3xl"
        />
      </div>

      <div className="mx-auto min-h-screen w-full max-w-[1460px] px-4 py-6 pb-28 sm:px-8 sm:py-8 lg:px-10 lg:py-10 relative z-10">
        {/* 1. WORK HEADER CARD (Ohshin Crimson Glass Parity) */}
        <div className="motion-safe:animate-work-reveal mb-10">
          <header className="relative isolate overflow-hidden rounded-[2rem] bg-black/34 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-1.1s] motion-safe:[animation-duration:12.5s] sm:p-7 lg:rounded-[2.5rem] lg:p-9">
            <GlassSheen className="left-[-35%] bg-white/[0.045] motion-safe:[animation-delay:-2.4s] motion-safe:[animation-duration:10.2s]" />

            {/* Top Metadata Row */}
            <div className="grid gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/48 sm:grid-cols-3 sm:items-start sm:gap-3 sm:text-[0.62rem] sm:tracking-[0.28em]">
              <p className="text-white">work / output</p>
              <p className="hidden text-center sm:block">scroll / inspect</p>
              <p className="sm:text-right">
                <WorkClock /> IST
              </p>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-20">
              <p className="motion-safe:animate-work-reveal font-mono text-[0.64rem] uppercase tracking-[0.16em] text-white/48 sm:text-[0.74rem] sm:tracking-[0.24em]">
                teams, roles and projects
              </p>
              <h1 className="mt-5 motion-safe:animate-work-reveal font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tight text-white [animation-delay:90ms] sm:text-[clamp(5.8rem,21vw,19rem)]">
                work
              </h1>
            </div>
          </header>
        </div>

        {/* 2. REACH STRIP */}
        <div className="motion-safe:animate-work-reveal mb-10 [animation-delay:160ms]">
          <section className="relative isolate overflow-hidden rounded-[2.5rem] bg-black/30 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-8.4s] motion-safe:[animation-duration:14.2s] sm:p-7">
            <GlassSheen className="left-[-42%] bg-white/[0.04] motion-safe:[animation-delay:-1.8s] motion-safe:[animation-duration:13.1s]" />
            <div
              aria-hidden="true"
              className="absolute -left-24 -top-28 -z-10 h-72 w-72 rounded-full bg-[#D3170A]/28 blur-3xl motion-safe:animate-reach-pulse motion-safe:[animation-delay:-2.2s]"
            />
            <div
              aria-hidden="true"
              className="absolute -right-20 top-10 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl motion-safe:animate-reach-pulse motion-safe:[animation-delay:-5.6s]"
            />

            <SectionHeadingRow
              label="live-ish"
              labelClassName="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#D3170A] sm:text-[0.62rem] sm:tracking-[0.28em]"
              title="reach"
              titleClassName="font-doto text-[2.25rem] font-black uppercase leading-none tracking-tight text-white sm:text-[4.5rem]"
            />

            <div className="mt-6 grid min-w-0 gap-3 sm:mt-7 sm:gap-4 lg:grid-cols-3">
              {REACH_STATS.map((stat, index) => {
                const Icon = stat.icon;
                const content = (
                  <div
                    key={stat.id}
                    className="relative isolate grid min-h-[11rem] min-w-0 overflow-hidden rounded-[1.5rem] bg-black/38 px-4 py-4 shadow-[0_22px_80px_rgba(0,0,0,0.28),0_0_44px_rgba(211,23,10,0.12),inset_0_1px_0_rgba(255,255,255,0.11)] ring-1 ring-white/10 motion-safe:animate-work-reveal sm:min-h-[13rem] sm:rounded-[1.75rem] sm:px-6 sm:py-5 transition-transform duration-200 hover:scale-[1.015]"
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

                    <div className="relative flex items-center justify-between gap-4 font-mono text-[0.74rem] uppercase tracking-[0.18em] text-white/56 sm:text-[0.82rem]">
                      <div className="flex items-center gap-3">
                        <Icon className="h-6 w-6 text-white/78" />
                        <span>{stat.label}</span>
                      </div>
                      <span className="font-mono text-[0.58rem] text-[#D3170A]">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="relative mt-10 min-w-0 overflow-hidden">
                      <p className="truncate font-metric text-[clamp(1.8rem,4.8vw,4.1rem)] font-semibold uppercase leading-none tracking-[-0.08em] text-white drop-shadow-[0_0_18px_rgba(255,255,255,0.26)]">
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
        <div className="grid gap-8 py-4 lg:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)] lg:gap-8 lg:py-6 mb-10 items-start">
          {/* LEFT: EXPERIENCE TIMELINE */}
          <aside className="motion-safe:animate-work-reveal min-w-0 [animation-delay:220ms]">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-black/32 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-3.7s] motion-safe:[animation-duration:12.9s] sm:p-6">
              <GlassSheen className="left-[-45%] bg-white/[0.035] motion-safe:[animation-delay:-7.1s] motion-safe:[animation-duration:12.4s]" />
              <SectionHeadingRow
                label="timeline"
                labelClassName="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#D3170A] sm:text-[0.62rem] sm:tracking-[0.28em]"
                title="experience"
                titleClassName="font-doto text-[1.9rem] font-black uppercase leading-none tracking-tight text-white sm:text-[3.2rem]"
              />

              <div className="mt-6 space-y-3">
                {workExperienceContent.map((item) => (
                  <article
                    key={item.id}
                    className="relative overflow-hidden rounded-[1.35rem] bg-black/32 p-4 sm:p-5 font-mono text-[0.82rem] leading-5 text-white/75 shadow-[0_12px_38px_rgba(0,0,0,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-white/8 motion-safe:animate-work-reveal transition-all hover:bg-black/40 sm:text-[0.88rem]"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-2 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-white/46">
                      <span className="text-[#D3170A] font-semibold">{item.period}</span>
                      <span>{item.location}</span>
                    </div>

                    <h3 className="font-mono text-[0.96rem] font-semibold text-white sm:text-[1.02rem]">
                      {item.role}
                    </h3>
                    <p className="mt-0.5 text-white/86 text-xs sm:text-[0.88rem]">
                      {item.company}
                    </p>

                    <ul className="mt-3 space-y-2 font-mono text-[11px] sm:text-xs text-white/68 leading-relaxed">
                      {item.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#D3170A] mt-0.5 select-none font-bold">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/8">
                      {item.techBadges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] text-white/68 uppercase tracking-wider"
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
          <main className="motion-safe:animate-work-reveal min-w-0 [animation-delay:280ms]">
            <div className="relative isolate overflow-hidden rounded-[2rem] bg-black/32 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-6.2s] motion-safe:[animation-duration:13.4s] sm:p-6">
              <GlassSheen className="left-[-45%] bg-white/[0.035] motion-safe:[animation-delay:-4.8s] motion-safe:[animation-duration:11.6s]" />
              <SectionHeadingRow
                label="build log"
                labelClassName="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-[#D3170A] sm:text-[0.62rem] sm:tracking-[0.28em]"
                title="projects"
                titleClassName="font-doto text-[1.9rem] font-black uppercase leading-none tracking-tight text-white sm:text-[3.2rem]"
              />

              <div className="mt-6 space-y-3">
                {curatedProjectsContent.map((project, index) => (
                  <article
                    key={project.id}
                    className="grid gap-4 rounded-[1.35rem] bg-black/24 px-4 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ring-1 ring-white/6 motion-safe:animate-work-reveal sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center sm:px-5 transition-all hover:bg-black/35"
                  >
                    <div className="hidden pr-3 font-doto text-[1.6rem] font-black leading-none text-[#D3170A]/80 sm:block">
                      {String(index + 1).padStart(2, '0')}
                    </div>

                    <div className="min-w-0">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="font-doto text-[1.4rem] font-black leading-none text-[#D3170A]/80 sm:hidden">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="min-w-0 break-words font-doto text-[1.22rem] font-black uppercase leading-none tracking-tight text-white sm:text-[1.82rem]">
                          {project.title}
                        </h3>
                      </div>
                      <p className="mt-3 max-w-[50ch] font-mono text-[0.74rem] leading-6 text-white/68 sm:text-[0.8rem]">
                        {project.summary}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/8 bg-white/[0.035] px-2.5 py-0.5 font-mono text-[9px] sm:text-[10px] text-white/60 uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-full items-center gap-3 self-center justify-end text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.18)] sm:justify-start">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub`}
                          className="text-white hover:text-white/80 transition-colors"
                        >
                          <Github className="h-6 w-6 sm:h-7 sm:w-7" />
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
                          <ArrowUpRight className="h-6 w-6" />
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
        <div className="motion-safe:animate-work-reveal [animation-delay:340ms]">
          <section className="relative isolate overflow-hidden rounded-[2.5rem] bg-black/32 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-4.9s] motion-safe:[animation-duration:13.8s] sm:p-7 lg:p-8">
            <GlassSheen className="left-[-40%] bg-white/[0.035] motion-safe:[animation-delay:-6.4s] motion-safe:[animation-duration:12.7s]" />
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-[#D3170A]/24 blur-3xl motion-safe:animate-reach-pulse motion-safe:[animation-delay:-3.1s]"
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
              <p className="max-w-[58ch] font-mono text-[0.82rem] leading-7 text-white/68 sm:text-[0.9rem] lg:justify-self-end">
                Whether you are looking to collaborate, hire for AI systems, seek architecture advice,
                or simply start a conversation, choose the channel that matches your intent.
              </p>
            </div>

            {/* 3 Channels Cards Grid */}
            <div className="mt-7 grid gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-3">
              {/* Channel 01: Team */}
              <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] bg-black/40 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 motion-safe:animate-work-reveal sm:rounded-[1.75rem] sm:p-6 flex flex-col justify-between hover:bg-black/50 transition-all">
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
                      <p className="mt-5 font-mono text-[0.76rem] leading-6 text-white/62">
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
                      <p className="mt-4 font-mono text-[0.76rem] leading-6 text-white/62">
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
              <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] bg-black/40 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 motion-safe:animate-work-reveal sm:rounded-[1.75rem] sm:p-6 flex flex-col justify-between hover:bg-black/50 transition-all">
                <div>
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/48" />
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[#D3170A] font-semibold mb-3">
                    02 / advisory &amp; contracts
                  </p>

                  <div className="mt-5">
                    <h3 className="font-doto text-[2.25rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[2.7rem]">
                      want to work with me?
                    </h3>
                    <p className="mt-5 font-mono text-[0.76rem] leading-6 text-white/62">
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
              <article className="relative min-w-0 overflow-hidden rounded-[1.5rem] bg-black/40 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/10 motion-safe:animate-work-reveal sm:rounded-[1.75rem] sm:p-6 flex flex-col justify-between hover:bg-black/50 transition-all">
                <div>
                  <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-white/48" />
                  <p className="font-mono text-[0.58rem] uppercase tracking-[0.24em] text-[#D3170A] font-semibold mb-3">
                    03 / casual channel
                  </p>

                  <div className="mt-5">
                    <h3 className="font-doto text-[2.25rem] font-black uppercase leading-[0.9] tracking-tight text-white sm:text-[2.7rem]">
                      want to send a fun dm?
                    </h3>
                    <p className="mt-5 font-mono text-[0.76rem] leading-6 text-white/62">
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

