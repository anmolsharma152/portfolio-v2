'use client';

import { ExternalLink, Radio, Disc3 } from 'lucide-react';
import React from 'react';

import GlassSheen from './GlassSheen';
import type { SpotifyConfig } from '@/content/schemas';

interface SpotifyShelfProps {
  config?: SpotifyConfig;
  embedUrl?: string | null;
  profileUrl?: string | null;
  title?: string;
}

export const SpotifyShelf: React.FC<SpotifyShelfProps> = ({
  config,
  embedUrl,
  profileUrl,
  title,
}) => {
  const activeConfig: SpotifyConfig = config || {
    enabled: true,
    username: 'Anmol',
    userId: '31fzcv4ts52untro5xsamjhddtre',
    profileUrl: profileUrl || 'https://open.spotify.com/user/31fzcv4ts52untro5xsamjhddtre',
    avatarUrl: 'https://i.scdn.co/image/ab6775700000ee85148002f2172385d78f372b08',
    embedPlaylistUrl: embedUrl,
    title: title || 'Soundtrack & Flow State',
  };

  if (!activeConfig.enabled || !activeConfig.profileUrl) {
    return null;
  }

  return (
    <div className="relative isolate overflow-hidden rounded-2xl glass p-6 sm:p-8 motion-safe:animate-glass-breathe">
      <GlassSheen />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#1DB954] mb-1">
            <Radio className="w-4 h-4 animate-pulse text-[#1DB954]" />
            <span>Soundtrack &amp; Flow State</span>
          </div>
          <h3 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Spotify Records
          </h3>
        </div>

        <a
          href={activeConfig.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold bg-[#1DB954] text-black hover:bg-[#1ed760] transition-all duration-200 shadow-md shadow-[#1DB954]/20 self-start sm:self-auto cursor-pointer"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.29a.75.75 0 01-1.033.248c-2.83-1.73-6.393-2.12-10.59-1.163a.75.75 0 11-.334-1.462c4.593-1.047 8.528-.6 11.71 1.344a.75.75 0 01.247 1.033zm1.464-3.253a.938.938 0 01-1.29.31c-3.238-1.99-8.175-2.566-12.005-1.403a.938.938 0 11-.548-1.793c4.38-1.33 9.818-.69 13.533 1.596a.938.938 0 01.31 1.29zm.125-3.385c-3.882-2.306-10.29-2.518-14.01-1.39a1.125 1.125 0 11-.645-2.155c4.275-1.298 11.34-1.043 15.82 1.616a1.125 1.125 0 11-1.165 1.929z" />
          </svg>
          <span>Open Spotify Profile</span>
          <ExternalLink size={13} />
        </a>
      </div>

      {/* Profile Card Showcase */}
      <div className="relative overflow-hidden rounded-xl border border-border/70 bg-card/80 dark:bg-zinc-900/80 backdrop-blur-md p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-6 shadow-sm">
        {/* Ambient Emerald Aura */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#1DB954]/15 blur-2xl" />

        {/* Real Spotify Avatar */}
        <div className="relative flex-none">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-[#1DB954]/40 shadow-lg ring-4 ring-[#1DB954]/10 bg-black/40">
            {activeConfig.avatarUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={activeConfig.avatarUrl}
                alt={`${activeConfig.username} Spotify Profile`}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-zinc-900 text-[#1DB954]">
                <Disc3 className="w-10 h-10 animate-spin" />
              </div>
            )}
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#1DB954] flex items-center justify-center shadow-md">
            <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.29a.75.75 0 01-1.033.248c-2.83-1.73-6.393-2.12-10.59-1.163a.75.75 0 11-.334-1.462c4.593-1.047 8.528-.6 11.71 1.344a.75.75 0 01.247 1.033zm1.464-3.253a.938.938 0 01-1.29.31c-3.238-1.99-8.175-2.566-12.005-1.403a.938.938 0 11-.548-1.793c4.38-1.33 9.818-.69 13.533 1.596a.938.938 0 01.31 1.29zm.125-3.385c-3.882-2.306-10.29-2.518-14.01-1.39a1.125 1.125 0 11-.645-2.155c4.275-1.298 11.34-1.043 15.82 1.616a1.125 1.125 0 11-1.165 1.929z" />
            </svg>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex-1 text-center sm:text-left min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mb-2">
            <h4 className="font-doto text-xl sm:text-2xl font-black text-foreground uppercase tracking-tight">
              {activeConfig.username}
            </h4>
            <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-[#1DB954]/15 text-[#1DB954] border border-[#1DB954]/30 w-fit mx-auto sm:mx-0">
              Verified User
            </span>
          </div>

          <p className="font-mono text-xs text-muted-foreground mb-3 truncate">
            spotify.com/user/{activeConfig.userId}
          </p>

          <p className="font-mono text-xs sm:text-sm text-foreground/80 leading-relaxed max-w-xl">
            Ambient synthesizer soundscapes, deep techno, atmospheric phonk, and algorithmic focus
            playlists powering late-night AI systems engineering.
          </p>
        </div>
      </div>

      {/* Optional Embedded Playlist Player */}
      {activeConfig.embedPlaylistUrl && (
        <div className="mt-5 overflow-hidden rounded-xl bg-card border border-border/60 shadow-sm">
          <iframe
            title={activeConfig.title || 'Spotify Playlist'}
            src={activeConfig.embedPlaylistUrl}
            className="block w-full h-[152px] border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
};

export default SpotifyShelf;
