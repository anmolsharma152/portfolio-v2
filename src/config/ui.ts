export const layout = {
  pageContainer:
    'mx-auto min-h-screen w-full max-w-[1460px] px-4 py-6 pb-[calc(var(--site-nav-height,61px)+2rem+env(safe-area-inset-bottom))] sm:px-8 sm:py-8 lg:px-10 lg:py-10',
  homeContainer:
    'mx-auto min-h-screen-nav w-full max-w-[1460px] px-4 py-6 pb-[calc(var(--site-nav-height,61px)+2rem+env(safe-area-inset-bottom))] sm:px-8 sm:py-8 lg:px-10 lg:py-10',
};

export const textStyles = {
  headerMeta:
    'grid gap-2 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-white/48 sm:grid-cols-3 sm:items-start sm:gap-3 sm:text-[0.62rem] sm:tracking-[0.28em]',
  sectionKicker:
    'motion-safe:animate-work-reveal font-mono text-[0.64rem] uppercase tracking-[0.16em] text-white/48 sm:text-[0.74rem] sm:tracking-[0.24em]',
  displayTitle:
    'mt-5 motion-safe:animate-work-reveal font-doto text-[clamp(4.2rem,21vw,19rem)] font-black uppercase leading-[0.72] tracking-tight text-white [animation-delay:90ms] sm:text-[clamp(5.8rem,21vw,19rem)]',
  panelTitle:
    'font-doto text-[1.9rem] font-black uppercase leading-none tracking-tight text-white sm:text-[3.2rem]',
  accentLabel:
    'font-mono text-[0.58rem] uppercase tracking-[0.2em] text-rose-300 sm:text-[0.62rem] sm:tracking-[0.28em]',
};

export const surfaces = {
  workHeader:
    'relative isolate overflow-hidden rounded-[2rem] bg-theme-black/34 p-5 shadow-[0_28px_100px_rgba(0,0,0,0.30),0_0_70px_rgba(211,23,10,0.20),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-1.1s] motion-safe:[animation-duration:12.5s] sm:p-7 lg:rounded-[2.5rem] lg:p-9',
  workPanel:
    'relative isolate overflow-hidden rounded-[2rem] bg-theme-black/32 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26),0_0_52px_rgba(211,23,10,0.14),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/10 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-6 lg:rounded-[2.5rem]',
  reachPanel:
    'relative isolate overflow-hidden rounded-[2.5rem] bg-theme-black/30 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7',
  reachOutPanel:
    'relative isolate overflow-hidden rounded-[2.5rem] bg-theme-black/32 p-5 shadow-[0_30px_120px_rgba(0,0,0,0.30),0_0_74px_rgba(211,23,10,0.18),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/12 backdrop-blur-2xl motion-safe:animate-glass-breathe motion-safe:[animation-delay:-4.9s] motion-safe:[animation-duration:13.8s] sm:p-7 lg:p-8',
};

export const effects = {
  glassSheen:
    'pointer-events-none absolute inset-y-0 -z-10 w-1/2 motion-safe:animate-glass-sheen',
};

export function staggerDelay(index: number, base: number, step: number) {
  return `${base + index * step}ms`;
}
