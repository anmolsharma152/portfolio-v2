'use client';

import React from 'react';
import {
  SiDocker,
  SiFastapi,
  SiGithubactions,
  SiLangchain,
  SiLinux,
  SiNextdotjs,
  SiNvidia,
  SiPostgresql,
  SiPytorch,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVllm,
} from 'react-icons/si';

import GlassSheen from './GlassSheen';
import { cn } from '@/lib/utils';

export interface TechStackItem {
  id: string;
  label: string;
  accent?: boolean;
}

const ROW_1_ITEMS: TechStackItem[] = [
  { id: 'pytorch', label: 'PyTorch', accent: true },
  { id: 'cuda', label: 'CUDA', accent: true },
  { id: 'tensorrt', label: 'TensorRT-LLM', accent: true },
  { id: 'vllm', label: 'vLLM', accent: true },
  { id: 'langgraph', label: 'LangGraph', accent: true },
  { id: 'python', label: 'Python', accent: true },
  { id: 'rust', label: 'Rust', accent: true },
  { id: 'linux', label: 'Linux PAM', accent: true },
];

const ROW_2_ITEMS: TechStackItem[] = [
  { id: 'docker', label: 'Docker', accent: true },
  { id: 'fastapi', label: 'FastAPI', accent: true },
  { id: 'postgres', label: 'PostgreSQL / pgvector', accent: true },
  { id: 'nextjs', label: 'Next.js', accent: true },
  { id: 'typescript', label: 'TypeScript', accent: true },
  { id: 'react', label: 'React', accent: true },
  { id: 'tailwind', label: 'Tailwind CSS', accent: true },
  { id: 'github', label: 'GitHub CI/CD', accent: true },
];

function TechMark({ id }: { id: string }) {
  const iconClass = 'h-5 w-5 text-white/86 sm:h-6 sm:w-6 shrink-0';

  switch (id) {
    case 'pytorch':
      return <SiPytorch className={iconClass} />;
    case 'cuda':
      return <SiNvidia className={iconClass} />;
    case 'tensorrt':
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
        </svg>
      );
    case 'vllm':
      return <SiVllm className={iconClass} />;
    case 'langgraph':
      return <SiLangchain className={iconClass} />;
    case 'python':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.91 0c-3.13 0-5.02.32-6.19 1.39C4.6 2.41 4.5 3.93 4.5 5.86V8.1h7.55v1.07H2.82C1.48 9.17.41 10.3.16 11.69c-.31 1.74-.32 3.42 0 5.16.23 1.25 1.13 2.19 2.37 2.39.99.16 2.05.26 3.16.26v-2.82c0-1.84.82-3.48 2.34-4.22 1.34-.66 2.87-.7 4.29-.11 1.23.51 2.08 1.69 2.08 3.03v2.85h1.89c1.94 0 3.45-.1 4.47-1.22 1.07-1.17 1.39-3.06 1.39-6.19v-2.7h-7.55V8.1h9.23c1.34 0 2.41-1.13 2.66-2.52.31-1.74.32-3.42 0-5.16-.23-1.25-1.13-2.19-2.37-2.39C20.14.32 16.03 0 11.91 0zM8.36 2.53a1.18 1.18 0 110 2.36 1.18 1.18 0 010-2.36z" />
          <path d="M12.09 24c3.13 0 5.02-.32 6.19-1.39 1.12-1.02 1.22-2.54 1.22-4.47v-2.24h-7.55v-1.07h9.23c1.34 0 2.41-1.13 2.66-2.52.31-1.74.32-3.42 0-5.16-.23-1.25-1.13-2.19-2.37-2.39-.99-.16-2.05-.26-3.16-.26v2.82c0 1.84-.82 3.48-2.34 4.22-1.34.66-2.87.7-4.29.11-1.23-.51-2.08-1.69-2.08-3.03V5.82H7.63c-1.94 0-3.45.1-4.47 1.22C2.09 8.21 1.77 10.1 1.77 13.23v2.7h7.55v1.07H.09c-1.34 0-2.41 1.13-2.66 2.52-.31 1.74-.32 3.42 0 5.16.23 1.25 1.13 2.19 2.37 2.39 1.99.29 6.1.53 12.29.53zm3.55-2.53a1.18 1.18 0 110-2.36 1.18 1.18 0 010 2.36z" />
        </svg>
      );
    case 'rust':
      return <SiRust className={iconClass} />;
    case 'linux':
      return <SiLinux className={iconClass} />;
    case 'docker':
      return <SiDocker className={iconClass} />;
    case 'fastapi':
      return <SiFastapi className={iconClass} />;
    case 'postgres':
      return <SiPostgresql className={iconClass} />;
    case 'nextjs':
      return <SiNextdotjs className={iconClass} />;
    case 'typescript':
      return <SiTypescript className={iconClass} />;
    case 'react':
      return <SiReact className={iconClass} />;
    case 'tailwind':
      return <SiTailwindcss className={iconClass} />;
    case 'github':
      return <SiGithubactions className={iconClass} />;
    default:
      return (
        <span className="grid h-6 min-w-6 place-items-center rounded-md bg-white/12 px-1.5 font-doto text-[0.68rem] font-black uppercase text-white">
          {id.slice(0, 2)}
        </span>
      );
  }
}

function TechPill({ item }: { item: TechStackItem }) {
  return (
    <span
      className={cn(
        'flex h-10 items-center gap-2 rounded-full border px-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] shadow-[0_10px_26px_rgba(0,0,0,0.18)] sm:h-11 sm:px-4 sm:text-[0.62rem]',
        item.accent
          ? 'border-white/20 bg-white/[0.08] text-white'
          : 'border-white/10 bg-white/[0.045] text-white/75'
      )}
    >
      <TechMark id={item.id} />
      <span>{item.label}</span>
    </span>
  );
}

function TechMarquee({
  items,
  reverse = false,
}: {
  items: TechStackItem[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-black/24">
      <div
        className={cn(
          'flex w-max transform-gpu gap-2 py-2 will-change-transform motion-safe:animate-stack-marquee motion-reduce:animate-none hover:[animation-play-state:paused]',
          reverse && 'motion-safe:[animation-direction:reverse]'
        )}
      >
        {[...items, ...items].map((item, index) => (
          <TechPill key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export const TechStackSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] bg-black/32 p-4 sm:p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe">
      <GlassSheen className="left-[-35%] bg-white/[0.035]" />

      {/* Radial lighting from ohshin-site */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-45 [background:radial-gradient(circle_at_16%_14%,rgba(255,255,255,.08),transparent_28%),radial-gradient(circle_at_86%_60%,rgba(211,23,10,.13),transparent_36%)]"
      />

      <div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-rose-200 font-semibold sm:text-[0.62rem]">
            stack overload
          </p>
          <h2 className="mt-2 font-doto text-[2rem] font-black uppercase leading-none tracking-tight text-white sm:text-[2.65rem]">
            tech<br />stack
          </h2>
        </div>

        <div className="min-w-0 space-y-2">
          <TechMarquee items={ROW_1_ITEMS} />
          <TechMarquee items={ROW_2_ITEMS} reverse />
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
