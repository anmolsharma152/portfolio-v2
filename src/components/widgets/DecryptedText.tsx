'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*';

interface DecryptedTextProps {
  text: string;
  className?: string;
  parentClassName?: string;
  encryptedClassName?: string;
  speed?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end';
  animateOn?: 'view' | 'hover';
}

function getRandomCharacter(): string {
  return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
}

function scramble(segment: string): string {
  return segment.replace(/\S/g, () => getRandomCharacter());
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function DecryptedText({
  text,
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  speed = 36,
  sequential = true,
  revealDirection = 'start',
  animateOn = 'view',
}: DecryptedTextProps) {
  // null = idle (plain text, which is also what SSR renders); a number = characters revealed so far
  const [progress, setProgress] = useState<number | null>(null);
  const hasPlayedRef = useRef(false);
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const total = text.length;
  const isAnimating = progress !== null;

  const start = useCallback(() => {
    if (prefersReducedMotion()) {
      return;
    }
    setProgress(0);
  }, []);

  useEffect(() => {
    if (animateOn !== 'view' || !containerRef.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting || hasPlayedRef.current) {
          return;
        }

        hasPlayedRef.current = true;
        observer.disconnect();
        start();
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [animateOn, start]);

  useEffect(() => {
    if (!isAnimating) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setProgress((current) => (current === null || current >= total ? null : current + 1));
    }, speed);

    return () => window.clearInterval(intervalId);
  }, [isAnimating, speed, total]);

  // Render at most two text nodes per frame instead of one animated element per character.
  let revealed = text;
  let encrypted = '';
  let encryptedFirst = false;

  if (progress !== null) {
    if (!sequential) {
      if (progress <= total / 2) {
        revealed = '';
        encrypted = scramble(text);
      }
    } else if (revealDirection === 'start') {
      revealed = text.slice(0, progress);
      encrypted = scramble(text.slice(progress));
    } else {
      encryptedFirst = true;
      encrypted = scramble(text.slice(0, total - progress));
      revealed = text.slice(total - progress);
    }
  }

  const revealedNode = revealed && <span className={className || undefined}>{revealed}</span>;
  const encryptedNode = encrypted && (
    <span className={`${className} ${encryptedClassName}`.trim() || undefined}>{encrypted}</span>
  );

  return (
    <span
      ref={containerRef}
      className={parentClassName || undefined}
      onMouseEnter={animateOn === 'hover' ? start : undefined}
    >
      {encryptedFirst ? encryptedNode : revealedNode}
      {encryptedFirst ? revealedNode : encryptedNode}
    </span>
  );
}
