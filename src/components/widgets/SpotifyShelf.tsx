'use client';

import { Music, ExternalLink } from 'lucide-react';
import React from 'react';

import GlassSheen from './GlassSheen';

interface SpotifyShelfProps {
  embedUrl?: string | null;
  profileUrl?: string | null;
  title?: string;
}

export const SpotifyShelf: React.FC<SpotifyShelfProps> = ({
  embedUrl,
  profileUrl,
  title = 'Coding & Systems Flow',
}) => {
  if (!embedUrl && !profileUrl) {
    return null;
  }

  return (
    <div className="relative isolate overflow-hidden rounded-2xl glass p-6 sm:p-8 motion-safe:animate-glass-breathe">
      <GlassSheen />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#1DB954] mb-1">
            <Music className="w-4 h-4 animate-pulse" />
            <span>Soundtrack &amp; Flow State</span>
          </div>
          <h3 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Spotify Records
          </h3>
        </div>

        {profileUrl && (
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-mono text-xs bg-[#1DB954]/15 text-[#1DB954] hover:bg-[#1DB954]/25 transition-colors border border-[#1DB954]/30"
          >
            <span>Open Profile</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>

      {embedUrl ? (
        <div className="overflow-hidden rounded-xl bg-card border border-border/60 shadow-sm">
          <iframe
            title={title}
            src={embedUrl}
            className="block w-full h-[152px] border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="p-6 rounded-xl border border-dashed border-border/80 text-center font-mono text-xs text-muted-foreground">
          <p>Ready to sync your real Spotify playlist or profile.</p>
          <p className="mt-1 text-[11px] opacity-70">
            Provide your Spotify playlist link (e.g., https://open.spotify.com/playlist/...) to
            display your live player here.
          </p>
        </div>
      )}
    </div>
  );
};

export default SpotifyShelf;
