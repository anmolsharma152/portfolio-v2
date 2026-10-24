import Image from 'next/image';
import React from 'react';

import { PanelEffects } from './PanelEffects';
import { booksContent } from '@/content/loaders';
import type { BookItem } from '@/content/schemas';

const books = booksContent.filter((book): book is BookItem & { thumbnail: string } =>
  Boolean(book.thumbnail)
);

export const ReadingStack: React.FC = () => {
  return (
    <section
      className="work-panel flex h-full flex-col p-5 [contain:paint] motion-safe:animate-glass-breathe sm:p-7"
      aria-labelledby="books-heading"
    >
      <PanelEffects sheenClassName="left-[-42%] bg-white/[0.03]" />
      <header className="flex items-end justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-white/60">
            reading stack · {books.length} volumes
          </p>
          <h3
            id="books-heading"
            className="mt-1 font-doto text-[2rem] font-black lowercase leading-none tracking-tight text-white sm:text-[2.6rem] drop-shadow-[0_2px_12px_rgba(255,255,255,0.12)]"
          >
            books
          </h3>
        </div>
      </header>

      <ul className="mt-5 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-5">
        {books.map((book) => (
          <li key={book.id} className="group min-w-0">
            <div className="relative aspect-[2/3] overflow-hidden rounded-[0.35rem] bg-white/5 shadow-[0_14px_30px_-8px_rgba(0,0,0,0.7)] ring-1 ring-white/10 transition-transform duration-300 ease-out group-hover:-translate-y-1">
              <Image
                src={book.thumbnail}
                alt={`Cover of ${book.title}`}
                fill
                sizes="(max-width: 640px) 30vw, 140px"
                className="object-cover"
              />
              {/* Spine crease on the left edge and a soft gloss from the top-left */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/40 via-white/10 to-transparent"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent"
              />
            </div>
            <p className="mt-2.5 line-clamp-2 text-[0.78rem] font-semibold leading-snug text-white">
              {book.title}
            </p>
            <p className="mt-0.5 line-clamp-1 text-[0.7rem] text-white/60">
              {book.authors.join(', ')}
            </p>
            <p className="mt-0.5 font-mono text-[0.7rem] text-white/60">{book.publishedDate}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReadingStack;
