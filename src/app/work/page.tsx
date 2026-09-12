import { Metadata } from 'next';

import WorkStation from '@/components/work/WorkStation';

export const metadata: Metadata = {
  title: 'Work & Systems // Anmol Sharma — Agentic AI & Systems Engineer',
  description:
    'Production AI architectures, stateful multi-agent systems, document intelligence RAG, and engineering career timeline.',
};

export default function WorkPage() {
  return (
    <main className="min-h-screen relative pb-36 sm:pb-40 bg-black text-white selection:bg-white selection:text-black">
      {/* Deep Atmospheric Glow & Subtle Grid Raster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-12 [background-image:radial-gradient(rgba(255,255,255,0.45)_0.62px,transparent_0.62px)] [background-size:6px_6px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.06),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.04),transparent_30%)]"
      />
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-28 top-20 -z-10 h-[38rem] w-[38rem] rounded-full bg-white/[0.055] blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-[42rem] -z-10 h-[42rem] w-[42rem] rounded-full bg-white/[0.045] blur-[150px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/3 bottom-24 -z-10 h-[32rem] w-[32rem] rounded-full bg-white/[0.04] blur-[130px]"
        />
      </div>

      <WorkStation />
    </main>
  );
}
