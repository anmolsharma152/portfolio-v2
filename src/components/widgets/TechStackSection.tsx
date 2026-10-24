import React from 'react';
import { FaDatabase } from 'react-icons/fa6';
import {
  SiCplusplus,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHuggingface,
  SiLangchain,
  SiLanggraph,
  SiLinux,
  SiN8N,
  SiNextdotjs,
  SiOnnx,
  SiOpentelemetry,
  SiPostgresql,
  SiPytest,
  SiPython,
  SiPytorch,
  SiReact,
  SiRedis,
  SiRust,
  SiTokio,
  SiTypescript,
  SiUv,
  SiVllm,
  SiWeightsandbiases,
  SiZapier,
} from 'react-icons/si';

import { PanelEffects } from './PanelEffects';
import { cn } from '@/lib/utils';

export interface TechStackItem {
  id: TechId;
  label: string;
  accent?: boolean;
}

// Every entry is listed in the Technical Skills section of the resume.
const TECH_ICONS = {
  pytorch: SiPytorch,
  langgraph: SiLanggraph,
  langchain: SiLangchain,
  huggingface: SiHuggingface,
  vllm: SiVllm,
  onnx: SiOnnx,
  wandb: SiWeightsandbiases,
  python: SiPython,
  rust: SiRust,
  tokio: SiTokio,
  cpp: SiCplusplus,
  linux: SiLinux,
  pytest: SiPytest,
  docker: SiDocker,
  redis: SiRedis,
  postgres: SiPostgresql,
  fastapi: SiFastapi,
  opentelemetry: SiOpentelemetry,
  sql: FaDatabase,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  react: SiReact,
  n8n: SiN8N,
  zapier: SiZapier,
  uv: SiUv,
  git: SiGit,
} as const;

type TechId = keyof typeof TECH_ICONS;

const ROW_1_ITEMS: TechStackItem[] = [
  { id: 'pytorch', label: 'PyTorch', accent: true },
  { id: 'langgraph', label: 'LangGraph', accent: true },
  { id: 'langchain', label: 'LangChain', accent: true },
  { id: 'huggingface', label: 'Transformers', accent: true },
  { id: 'vllm', label: 'vLLM', accent: true },
  { id: 'onnx', label: 'ONNX', accent: true },
  { id: 'wandb', label: 'Weights & Biases', accent: true },
  { id: 'python', label: 'Python', accent: true },
  { id: 'rust', label: 'Rust', accent: true },
  { id: 'tokio', label: 'Tokio', accent: true },
  { id: 'cpp', label: 'C++', accent: false },
  { id: 'linux', label: 'Linux', accent: true },
  { id: 'pytest', label: 'Pytest', accent: true },
];

const ROW_2_ITEMS: TechStackItem[] = [
  { id: 'docker', label: 'Docker', accent: true },
  { id: 'redis', label: 'Redis', accent: true },
  { id: 'postgres', label: 'PostgreSQL / pgvector', accent: true },
  { id: 'fastapi', label: 'FastAPI', accent: true },
  { id: 'opentelemetry', label: 'Langfuse', accent: true },
  { id: 'sql', label: 'SQL', accent: true },
  { id: 'typescript', label: 'TypeScript', accent: true },
  { id: 'nextjs', label: 'Next.js', accent: true },
  { id: 'react', label: 'React', accent: true },
  { id: 'n8n', label: 'n8n', accent: true },
  { id: 'zapier', label: 'Zapier', accent: false },
  { id: 'uv', label: 'uv', accent: false },
  { id: 'git', label: 'Git', accent: false },
];

function TechMark({ id }: { id: TechId }) {
  const Icon = TECH_ICONS[id];
  return <Icon aria-hidden="true" className="h-5 w-5 text-white/86 sm:h-6 sm:w-6 shrink-0" />;
}

function TechPill({ item }: { item: TechStackItem }) {
  return (
    <span
      className={cn(
        'flex h-10 items-center gap-2 rounded-full border px-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] shadow-[0_8px_20px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-11 sm:px-4 sm:text-[0.7rem] transition-all',
        item.accent
          ? 'border-white/20 bg-white/[0.10] text-white'
          : 'border-white/10 bg-white/[0.05] text-white/75'
      )}
    >
      <TechMark id={item.id} />
      <span>{item.label}</span>
    </span>
  );
}

function TechMarquee({ items, reverse = false }: { items: TechStackItem[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden rounded-full border border-white/14 bg-white/[0.04] shadow-[inset_0_2px_8px_rgba(255,255,255,0.04),0_4px_16px_rgba(0,0,0,0.20)]">
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
    <section className="work-panel p-5 motion-safe:animate-glass-breathe sm:p-6">
      <PanelEffects sheenClassName="left-[-35%] bg-white/[0.035]" />
      <div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.22em] text-white/60 font-semibold sm:text-[0.7rem]">
            stack overload
          </p>
          <h2 className="mt-2 font-doto text-[2rem] font-black uppercase leading-none tracking-tight text-white sm:text-[2.65rem] drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
            tech
            <br />
            stack
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
