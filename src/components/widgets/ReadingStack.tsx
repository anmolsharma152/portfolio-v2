'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles } from 'lucide-react';
import React, { useState } from 'react';

import GlassSheen from './GlassSheen';
import { booksContent } from '@/content/loaders';
import type { BookItem } from '@/content/schemas';

const CATEGORY_LABELS: Record<string, string> = {
  all: 'All Shelves',
  'systems-ai': 'Systems & AI',
  'research-papers': 'Research Papers',
  'economics-policy': 'Economics & Policy',
  'sci-fi-vision': 'Sci-Fi & Vision',
};

export const ReadingStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredBooks =
    activeCategory === 'all'
      ? booksContent
      : booksContent.filter((b) => b.category === activeCategory);

  return (
    <div className="relative isolate overflow-hidden rounded-2xl glass p-6 sm:p-8 motion-safe:animate-glass-breathe">
      <GlassSheen />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 border-b border-border/40 pb-5">
        <div>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Curated Reading Stack</span>
          </div>
          <h3 className="font-doto text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground">
            Books &amp; Influences
          </h3>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveCategory(key)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Books Grid - strictly responsive: 1-col on mobile, 2-col on half-screen tiled (940px), 3-col on full screen */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filteredBooks.map((book: BookItem) => (
            <motion.article
              layout
              key={book.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative min-h-[9.5rem] overflow-hidden rounded-xl p-3.5 shadow-sm hover:shadow-md border border-border/60 bg-card/80 dark:bg-zinc-900/80 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between"
            >
              {/* Subtle ambient accent aura */}
              <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/10 blur-xl" />

              <div className="relative flex items-start gap-3">
                {/* Book cover image */}
                <div className="relative h-24 w-16 flex-none overflow-hidden rounded-md bg-muted shadow-sm border border-border/50">
                  {book.coverIsbn ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={`https://covers.openlibrary.org/b/isbn/${book.coverIsbn}-M.jpg`}
                      alt={book.title}
                      className="h-full w-full object-cover saturate-[1.1] contrast-[1.05]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-[0.6rem] font-mono uppercase tracking-widest text-muted-foreground text-center p-1">
                      {book.title.slice(0, 10)}
                    </div>
                  )}
                </div>

                {/* Book Details */}
                <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold leading-snug text-foreground line-clamp-2">
                      {book.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {book.authors.join(', ')}
                    </p>
                  </div>

                  {book.takeaway && (
                    <p className="text-[0.72rem] text-foreground/80 line-clamp-2 italic mt-2 border-l-2 border-primary/40 pl-2">
                      &ldquo;{book.takeaway}&rdquo;
                    </p>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/50 pt-2 font-mono text-[0.62rem] uppercase tracking-wider text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-primary" />
                  <span>{CATEGORY_LABELS[book.category] ?? book.category}</span>
                </span>
                <span>{book.publishedDate}</span>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ReadingStack;
