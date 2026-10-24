'use client';

import { ExternalLink, Play } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

import { PanelEffects } from './PanelEffects';
import type { SpotifyConfig } from '@/content/schemas';

interface SpotifyShelfProps {
  config?: SpotifyConfig;
}

export const SpotifyShelf: React.FC<SpotifyShelfProps> = ({ config }) => {
  const playlists = config?.playlists ?? [];
  // The Spotify player is only loaded once a visitor picks a playlist.
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = playlists.find((p) => p.id === activeId);

  return (
    <section
      className="work-panel flex h-full flex-col p-5 [contain:paint] motion-safe:animate-glass-breathe sm:p-7"
      aria-labelledby="playlists-heading"
    >
      <PanelEffects sheenClassName="left-[-42%] bg-white/[0.032]" />
      <header className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/60">
            on rotation · {playlists.length} playlists
          </p>
          <h3
            id="playlists-heading"
            className="mt-1 font-doto text-[2rem] font-black lowercase leading-none tracking-tight text-white sm:text-[2.6rem] drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]"
          >
            playlists
          </h3>
        </div>
        {config?.profileUrl && (
          <a
            href={config.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-1.5 rounded-full bg-[#1DB954] px-3 py-1.5 font-mono text-[11px] font-semibold text-black transition-colors hover:bg-[#1ed760]"
          >
            <span>Spotify</span>
            <ExternalLink aria-hidden="true" className="h-3 w-3" />
          </a>
        )}
      </header>

      <ul className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {playlists.map((playlist) => {
          const isActive = playlist.id === activeId;
          return (
            <li key={playlist.id} className="min-w-0">
              <button
                type="button"
                onClick={() => setActiveId(isActive ? null : playlist.id)}
                aria-pressed={isActive}
                aria-label={`${isActive ? 'Close' : 'Play'} ${playlist.title}`}
                className={`group relative block aspect-square w-full overflow-hidden rounded-xl bg-white/5 shadow-[0_14px_30px_-8px_rgba(0,0,0,0.7)] ring-1 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  isActive ? 'ring-[#1DB954]' : 'ring-white/10'
                }`}
              >
                {playlist.coverImage && (
                  <Image
                    src={playlist.coverImage}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 45vw, 150px"
                    className="object-cover"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/30"
                />
                <span
                  aria-hidden="true"
                  className={`absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-[#1DB954] text-black shadow-lg transition-all duration-200 ${
                    isActive
                      ? 'opacity-100'
                      : 'translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100'
                  }`}
                >
                  <Play className="ml-0.5 h-4 w-4 fill-current" />
                </span>
              </button>
              <p className="mt-2.5 truncate text-[0.78rem] font-semibold text-white">
                {playlist.title}
              </p>
              {playlist.subtitle && (
                <p className="truncate text-[0.7rem] text-white/60">{playlist.subtitle}</p>
              )}
            </li>
          );
        })}
      </ul>

      {active && (
        <div className="mt-5 overflow-hidden rounded-xl ring-1 ring-white/10">
          <iframe
            key={active.id}
            title={`Spotify player: ${active.title}`}
            src={active.embedUrl}
            className="block h-[152px] w-full border-0"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
};

export default SpotifyShelf;
