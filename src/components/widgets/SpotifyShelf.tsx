'use client';

import { ExternalLink, Disc3, Radio } from 'lucide-react';
import React from 'react';

import GlassSheen from './GlassSheen';
import type { SpotifyConfig } from '@/content/schemas';

interface SpotifyShelfProps {
  config?: SpotifyConfig;
}

export const SpotifyShelf: React.FC<SpotifyShelfProps> = ({ config }) => {
  const playlists = config?.playlists ?? [];
  const profileUrl =
    config?.profileUrl || 'https://open.spotify.com/user/31fzcv4ts52untro5xsamjhddtre';

  return (
    <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe [contain:paint] flex flex-col justify-between h-full">
      <GlassSheen className="left-[-42%] bg-white/[0.032]" />

      {/* 28px Mesh Grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.06] mix-blend-screen [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:28px_28px]"
      />

      {/* Specular Radial Lighting Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.09),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,.04),transparent_42%)]"
      />

      {/* Header Row (Ohshin Style) */}
      <div>
        <div className="flex items-end justify-between gap-4 border-b border-white/12 pb-4 mb-5">
          <div>
            <p className="font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.24em] text-white/46 mb-1">
              records shelf &bull; 4 playlists
            </p>
            <h3 className="font-doto text-[2rem] sm:text-[2.8rem] font-black lowercase leading-none tracking-tight text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]">
              playlists
            </h3>
          </div>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-[10px] sm:text-[11px] font-semibold bg-[#1DB954] text-black hover:bg-[#1ed760] transition-colors shadow-sm shrink-0 cursor-pointer"
          >
            <Disc3 className="w-3.5 h-3.5 animate-spin [animation-duration:8s]" />
            <span>Profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* 4 Playlists in a 2x2 Grid — All 4 Completely Visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
          {playlists.map((playlist, idx) => (
            <div key={playlist.embedUrl} className="space-y-1.5">
              <div className="flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-[0.18em] text-white/60 px-1">
                <span className="text-[#1DB954] font-semibold">{`0${idx + 1}`}</span>
                <span className="truncate max-w-[12rem] text-right text-white/80">
                  {playlist.title.replace(/^Playlist \d+\s*\/\/\s*/i, '')}
                </span>
              </div>
              <div className="overflow-hidden rounded-[1.25rem] bg-black/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_8px_24px_rgba(0,0,0,0.3)] ring-1 ring-white/10 hover:ring-white/25 transition-all">
                <iframe
                  title={playlist.title}
                  src={playlist.embedUrl}
                  className="block w-full h-[152px] border-0"
                  width="100%"
                  height="152"
                  sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info Row */}
      <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2 font-mono text-[0.62rem] sm:text-[0.68rem] text-white/46">
        <span className="flex items-center gap-1.5">
          <Radio className="w-3 h-3 text-[#1DB954] animate-pulse" />
          <span>algorithmic focus &amp; flow mixes</span>
        </span>
        <span className="text-white/30 hidden sm:inline">spotify verified</span>
      </div>
    </div>
  );
};

export default SpotifyShelf;
