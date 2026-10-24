import React from 'react';

import GlassSheen from './GlassSheen';

interface PanelEffectsProps {
  sheenClassName?: string;
  gridClassName?: string;
}

// Glass panel layers: sweeping sheen, 28px mesh grid, and soft radial lighting.
export function PanelEffects({
  sheenClassName = 'left-[-40%] bg-white/[0.035]',
  gridClassName = 'opacity-[0.06]',
}: PanelEffectsProps) {
  return (
    <>
      <GlassSheen className={sheenClassName} />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px] ${gridClassName}`}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.09),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.04),transparent_42%)]"
      />
    </>
  );
}

// Card layers: top specular edge and soft radial lighting.
export function CardEffects() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(circle_at_16%_16%,rgba(255,255,255,.08),transparent_35%),radial-gradient(circle_at_84%_84%,rgba(255,255,255,.03),transparent_42%)]"
      />
    </>
  );
}
