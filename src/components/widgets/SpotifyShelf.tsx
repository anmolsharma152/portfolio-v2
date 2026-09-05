'use client';

import { Music, Radio } from 'lucide-react';
import React from 'react';

import GlassSheen from './GlassSheen';
import { spotifyPlaylistsContent } from '@/content/loaders';

export const SpotifyShelf: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden rounded-2xl glass p-6 sm:p-8 motion-safe:animate-glass-breathe">
      <GlassSheen />

      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-5 border-b border-border/40 pb-4">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-1">
            <Radio className="w-4 h-4 text-emerald-500 animate-pulse" />
            <span>Audio &amp; Flow State</span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-foreground">
            Focus Playlists
          </h3>
        </div>
        <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground hidden sm:block">
          Embedded via Spotify
        </span>
      </div>

      {/* Playlists Horizontal Row - fits tiled half-screen windows seamlessly */}
      <div className="max-w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max max-w-none gap-4">
          {spotifyPlaylistsContent.map((playlist) => (
            <div
              key={playlist.id}
              className="w-[min(18.5rem,calc(100vw-5rem))] sm:w-80 flex-none space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground px-1">
                <span className="flex items-center gap-1.5 font-semibold text-foreground/80">
                  <Music className="w-3.5 h-3.5 text-primary" />
                  {playlist.title}
                </span>
                <span>{playlist.subtitle}</span>
              </div>
              <div className="overflow-hidden rounded-xl bg-background/50 border border-border/50 shadow-inner">
                <iframe
                  title={playlist.title}
                  src={playlist.embedUrl}
                  className="block h-[152px] w-full"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpotifyShelf;
