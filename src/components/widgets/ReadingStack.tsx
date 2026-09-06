'use client';

import React from 'react';

import GlassSheen from './GlassSheen';
import { booksContent } from '@/content/loaders';
import type { BookItem } from '@/content/schemas';

export const ReadingStack: React.FC = () => {
  // Strict filter: only use books which have verified image thumbnails
  const booksWithImages = booksContent.filter((book): book is BookItem & { thumbnail: string } =>
    Boolean(book.thumbnail && book.thumbnail.length > 0)
  );

  return (
    <div className="work-panel p-5 sm:p-7 motion-safe:animate-glass-breathe [contain:paint] flex flex-col justify-between h-full">
      <GlassSheen className="left-[-42%] bg-white/[0.03]" />

      <div>
        {/* Header Row (Ohshin Style) */}
        <div className="flex items-end justify-between gap-4 border-b border-white/12 pb-4 mb-5">
          <div>
            <p className="font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.24em] text-white/46 mb-1">
              reading stack &bull; {booksWithImages.length} volumes
            </p>
            <h3 className="font-doto text-[2rem] sm:text-[2.8rem] font-black lowercase leading-none tracking-tight text-white">
              books
            </h3>
          </div>
          <span className="font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.2em] text-white/40">
            systems &bull; economics
          </span>
        </div>

        {/* 2-Column Book Grid Matching Ohshin Pattern */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
          {booksWithImages.map((book) => (
            <article
              key={book.id}
              className="relative min-h-[7.8rem] overflow-hidden rounded-[1.2rem] p-3 shadow-[0_16px_40px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.10)] ring-1 ring-white/15 hover:ring-white/25 bg-black/40 transition-all duration-200 hover:scale-[1.015]"
            >
              {/* Top Highlight & Ambient Subtle Glow */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25" />
              <div className="pointer-events-none absolute -right-10 -top-12 h-28 w-28 rounded-full bg-white/[0.06] blur-2xl" />

              <div className="relative flex h-full items-start gap-3">
                {/* Book Cover Image Container */}
                <div className="relative h-20 w-14 flex-none overflow-hidden rounded-md bg-black/40 shadow-[0_10px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] ring-1 ring-white/20">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.thumbnail}
                    alt={book.title}
                    className="h-full w-full object-cover saturate-[1.15] contrast-[1.04]"
                    loading="lazy"
                  />
                </div>

                {/* Metadata Column */}
                <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
                  <div className="space-y-1">
                    <p className="text-[0.82rem] font-semibold leading-snug text-white line-clamp-2">
                      {book.title}
                    </p>
                    <p className="text-[0.66rem] leading-snug text-white/65 line-clamp-1">
                      {book.authors.join(', ')}
                    </p>
                  </div>
                  <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-white/16 pt-1.5 font-mono text-[0.52rem] uppercase tracking-[0.2em] text-white/50">
                    <span>book</span>
                    <span>{book.publishedDate}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer Info Row */}
      <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2 font-mono text-[0.62rem] sm:text-[0.68rem] text-white/46">
        <span>systems engineering &bull; political economy</span>
        <span className="text-white/30 hidden sm:inline">curated library</span>
      </div>
    </div>
  );
};

export default ReadingStack;
