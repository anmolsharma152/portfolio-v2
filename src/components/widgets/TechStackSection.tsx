'use client';

import React from 'react';
import { FaAws, FaDatabase } from 'react-icons/fa6';
import { RiOpenaiFill } from 'react-icons/ri';
import {
  SiClaude,
  SiDocker,
  SiFastapi,
  SiFigma,
  SiGithub,
  SiGooglecloud,
  SiGraphql,
  SiHuggingface,
  SiKubernetes,
  SiLangchain,
  SiLanggraph,
  SiLinux,
  SiN8N,
  SiNeo4J,
  SiNextdotjs,
  SiNvidia,
  SiOllama,
  SiOnnx,
  SiOpentelemetry,
  SiPostgresql,
  SiPytorch,
  SiQdrant,
  SiReact,
  SiRedis,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVllm,
  SiPython,
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
  { id: 'langgraph', label: 'LangGraph', accent: true },
  { id: 'openai', label: 'OpenAI', accent: true },
  { id: 'claude', label: 'Claude', accent: true },
  { id: 'ollama', label: 'Ollama', accent: true },
  { id: 'huggingface', label: 'Hugging Face', accent: true },
  { id: 'vllm', label: 'vLLM', accent: true },
  { id: 'onnx', label: 'ONNX Runtime', accent: true },
  { id: 'mcp', label: 'MCP Protocol', accent: true },
  { id: 'python', label: 'Python', accent: true },
  { id: 'rust', label: 'Rust', accent: true },
  { id: 'linux', label: 'Linux PAM', accent: true },
  { id: 'gcp', label: 'Google Cloud', accent: true },
  { id: 'aws', label: 'AWS', accent: true },
  { id: 'cuda', label: 'CUDA', accent: true },
  { id: 'tensorrt', label: 'TensorRT-LLM', accent: true },
];

const ROW_2_ITEMS: TechStackItem[] = [
  { id: 'docker', label: 'Docker', accent: true },
  { id: 'kubernetes', label: 'Kubernetes', accent: true },
  { id: 'n8n', label: 'n8n Automation', accent: true },
  { id: 'postgres', label: 'PostgreSQL / pgvector', accent: true },
  { id: 'qdrant', label: 'Qdrant Vector DB', accent: true },
  { id: 'redis', label: 'Redis Semantic Cache', accent: true },
  { id: 'opentelemetry', label: 'OpenTelemetry', accent: true },
  { id: 'langchain', label: 'LangChain', accent: true },
  { id: 'fastapi', label: 'FastAPI', accent: true },
  { id: 'neo4j', label: 'Neo4j GraphRAG', accent: true },
  { id: 'sql', label: 'SQL', accent: true },
  { id: 'nextjs', label: 'Next.js', accent: true },
  { id: 'typescript', label: 'TypeScript', accent: true },
  { id: 'react', label: 'React', accent: true },
  { id: 'tailwind', label: 'Tailwind CSS', accent: true },
  { id: 'github', label: 'GitHub', accent: true },
  { id: 'graphql', label: 'GraphQL', accent: false },
  { id: 'vite', label: 'Vite', accent: false },
  { id: 'figma', label: 'Figma', accent: false },
];

function TechMark({ id }: { id: string }) {
  const iconClass = 'h-5 w-5 text-white/86 sm:h-6 sm:w-6 shrink-0';

  switch (id) {
    case 'pytorch':
      return <SiPytorch className={iconClass} />;
    case 'langgraph':
      return <SiLanggraph className={iconClass} />;
    case 'openai':
      return <RiOpenaiFill className={iconClass} />;
    case 'claude':
      return <SiClaude className={iconClass} />;
    case 'ollama':
      return <SiOllama className={iconClass} />;
    case 'huggingface':
      return <SiHuggingface className={iconClass} />;
    case 'vllm':
      return <SiVllm className={iconClass} />;
    case 'onnx':
      return <SiOnnx className={iconClass} />;
    case 'mcp':
      return (
        <svg
          className={iconClass}
          viewBox="0 0 180 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.6 85.3L86.2 22.7c8.6-8.6 22.7-8.6 31.3 0s8.6 22.7 0 31.3L70.2 101.2"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M70.9 100.6L117.5 54c8.6-8.6 22.7-8.6 31.3 0l0.3 0.3c8.6 8.6 8.6 22.7 0 31.3l-56.6 56.6c-2.9 2.9-2.9 7.6 0 10.4l11.6 11.7"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="round"
          />
          <path
            d="M101.9 38.3L55.6 84.6c-8.6 8.6-8.6 22.7 0 31.3s22.7 8.6 31.3 0L133.2 69.6"
            stroke="currentColor"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'python':
      return <SiPython className={iconClass} />;
    case 'rust':
      return <SiRust className={iconClass} />;
    case 'linux':
      return <SiLinux className={iconClass} />;
    case 'gcp':
      return <SiGooglecloud className={iconClass} />;
    case 'aws':
      return <FaAws className={iconClass} />;
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
    case 'docker':
      return <SiDocker className={iconClass} />;
    case 'kubernetes':
      return <SiKubernetes className={iconClass} />;
    case 'n8n':
      return <SiN8N className={iconClass} />;
    case 'postgres':
      return <SiPostgresql className={iconClass} />;
    case 'qdrant':
      return <SiQdrant className={iconClass} />;
    case 'redis':
      return <SiRedis className={iconClass} />;
    case 'opentelemetry':
      return <SiOpentelemetry className={iconClass} />;
    case 'langchain':
      return <SiLangchain className={iconClass} />;
    case 'fastapi':
      return <SiFastapi className={iconClass} />;
    case 'neo4j':
      return <SiNeo4J className={iconClass} />;
    case 'sql':
      return <FaDatabase className={iconClass} />;
    case 'nextjs':
      return <SiNextdotjs className={iconClass} />;
    case 'typescript':
      return <SiTypescript className={iconClass} />;
    case 'react':
      return <SiReact className={iconClass} />;
    case 'tailwind':
      return <SiTailwindcss className={iconClass} />;
    case 'github':
      return <SiGithub className={iconClass} />;
    case 'graphql':
      return <SiGraphql className={iconClass} />;
    case 'vite':
      return <SiVite className={iconClass} />;
    case 'figma':
      return <SiFigma className={iconClass} />;
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
        'flex h-10 items-center gap-2 rounded-full border px-3 font-mono text-[0.58rem] uppercase tracking-[0.16em] shadow-[0_8px_20px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)] sm:h-11 sm:px-4 sm:text-[0.62rem] transition-all',
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
    <section className="work-panel p-5 sm:p-6 motion-safe:animate-glass-breathe">
      <GlassSheen className="left-[-35%] bg-white/[0.035]" />

      {/* 28px Mesh Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.06] mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.09),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.04),transparent_42%)]"
      />

      <div className="grid gap-4 lg:grid-cols-[12rem_minmax(0,1fr)] lg:items-center">
        <div>
          <p className="font-mono text-[0.56rem] uppercase tracking-[0.22em] text-white/60 font-semibold sm:text-[0.62rem]">
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
