'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaRegEnvelope, FaXTwitter } from 'react-icons/fa6';

const ALEX_SKIN_URL =
  'https://cdn.jsdelivr.net/npm/minecraft-assets@1.17.0/minecraft-assets/data/1.21.8/entity/player/slim/alex.png';
const DIAMOND_PICKAXE_URL =
  'https://cdn.jsdelivr.net/npm/minecraft-assets@1.17.0/minecraft-assets/data/1.21.8/items/diamond_pickaxe.png';

interface SocialLink {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const Navigation: React.FC = () => {
  const pathname = usePathname();
  const isWork = pathname?.startsWith('/work');

  const socialLinks: SocialLink[] = [
    {
      label: 'X',
      href: 'https://x.com/ozymandias152',
      icon: <FaXTwitter className="h-5 w-5 sm:h-5.5 sm:w-5.5" />,
    },
    {
      label: 'Mail',
      href: 'mailto:anmolsharma152.dev@gmail.com',
      icon: <FaRegEnvelope className="h-5 w-5 sm:h-6 sm:w-6" />,
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/anmolsharma152/',
      icon: <FaLinkedinIn className="h-5 w-5 sm:h-6 sm:w-6" />,
    },
    {
      label: 'GitHub',
      href: 'https://github.com/anmolsharma152',
      icon: <FaGithub className="h-5 w-5 sm:h-6 sm:w-6" />,
    },
  ];

  // Handle smooth scroll to #about when landing from /work
  useEffect(() => {
    if (!isWork && typeof window !== 'undefined' && window.location.hash === '#about') {
      const timer = setTimeout(() => {
        const target = document.getElementById('about');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isWork, pathname]);

  const handleAbtClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isWork) {
      e.preventDefault();
      const target = document.getElementById('about');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState(null, '', '/#about');
      }
    }
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isWork) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className="pointer-events-none fixed inset-x-0 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 flex w-full justify-center px-2 sm:bottom-6 sm:px-3"
      data-site-nav
    >
      <div className="pointer-events-auto relative max-w-[calc(100vw-1rem)] overflow-hidden rounded-full border border-white/14 bg-[rgba(10,12,17,0.42)] p-1 shadow-nav-glass backdrop-blur-2xl sm:max-w-full sm:p-1.5">
        {/* Physical 3D Glass Specular Highlight */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18),rgba(255,255,255,0.045)_42%,rgba(0,0,0,0.12))]"
        />

        <nav
          aria-label="Primary Navigation"
          className="relative flex max-w-full items-center justify-start gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] sm:justify-center sm:gap-1.5 sm:overflow-visible [&::-webkit-scrollbar]:hidden"
        >
          {/* Page Tabs */}
          <div className="relative flex shrink-0 items-center justify-center gap-0.5 sm:gap-1">
            {/* Abt Me Tab */}
            <Link
              href="/#about"
              onClick={handleAbtClick}
              className={`relative z-10 min-w-[4.65rem] shrink-0 rounded-full px-2.5 py-2.5 text-center font-doto text-[10px] font-black tracking-[0.06em] outline-none focus-visible:ring-1 focus-visible:ring-white/30 sm:min-w-[7rem] sm:px-6 sm:py-3 sm:text-[14px] sm:tracking-[0.12em] ${
                !isWork ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {!isWork && (
                <motion.span
                  layoutId="dock-active-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-white/16 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                  transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.35 }}
                />
              )}
              <motion.span
                className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2"
                animate={{ y: !isWork ? -1 : 0, opacity: !isWork ? 1 : 0.78 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                <span aria-hidden="true" className="relative h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4">
                  <span
                    className="absolute inset-0 bg-no-repeat [image-rendering:pixelated]"
                    style={{
                      backgroundImage: `url(${ALEX_SKIN_URL})`,
                      backgroundSize: '128px 128px',
                      backgroundPosition: '-16px -16px',
                    }}
                  />
                  <span
                    className="absolute inset-0 bg-no-repeat [image-rendering:pixelated]"
                    style={{
                      backgroundImage: `url(${ALEX_SKIN_URL})`,
                      backgroundSize: '128px 128px',
                      backgroundPosition: '-80px -16px',
                    }}
                  />
                </span>
                <span>abt me</span>
              </motion.span>
            </Link>

            {/* Work Tab */}
            <Link
              href="/work"
              onClick={handleWorkClick}
              className={`relative z-10 min-w-[4.65rem] shrink-0 rounded-full px-2.5 py-2.5 text-center font-doto text-[10px] font-black tracking-[0.06em] outline-none focus-visible:ring-1 focus-visible:ring-white/30 sm:min-w-[7rem] sm:px-6 sm:py-3 sm:text-[14px] sm:tracking-[0.12em] ${
                isWork ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {isWork && (
                <motion.span
                  layoutId="dock-active-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-white/16 bg-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"
                  transition={{ type: 'spring', stiffness: 360, damping: 32, mass: 0.35 }}
                />
              )}
              <motion.span
                className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2"
                animate={{ y: isWork ? -1 : 0, opacity: isWork ? 1 : 0.78 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={DIAMOND_PICKAXE_URL}
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4"
                  style={{ imageRendering: 'pixelated' }}
                />
                <span>work</span>
              </motion.span>
            </Link>
          </div>

          {/* Vertical Divider */}
          <span aria-hidden="true" className="h-7 w-px shrink-0 bg-white/10 mx-0.5 sm:mx-1" />

          {/* Social Links Row */}
          <div className="flex shrink-0 items-center gap-0.5 pr-0.5 sm:gap-1 sm:pr-1">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white/68 transition-colors duration-150 hover:text-white sm:h-11 sm:w-11 cursor-pointer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
