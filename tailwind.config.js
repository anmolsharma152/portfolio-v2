/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx,json}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      colors: {
        theme: {
          blue: '#002855',
          black: '#000000',
          white: '#FFFFFF',
        },
        border: 'hsl(var(--border-h, 0) var(--border-s, 0%) var(--border-l, 0%))',
        input: 'hsl(var(--input-h, 0) var(--input-s, 0%) var(--input-l, 0%))',
        ring: 'hsl(var(--ring-h, 0) var(--ring-s, 0%) var(--ring-l, 0%))',
        background: 'hsl(var(--background-h, 0) var(--background-s, 0%) var(--background-l, 0%))',
        foreground: 'hsl(var(--foreground-h, 0) var(--foreground-s, 0%) var(--foreground-l, 0%))',
        primary: {
          DEFAULT: 'hsl(var(--primary-h, 0) var(--primary-s, 0%) var(--primary-l, 0%))',
          foreground:
            'hsl(var(--primary-foreground-h, 0) var(--primary-foreground-s, 0%) var(--primary-foreground-l, 0%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-h, 0) var(--secondary-s, 0%) var(--secondary-l, 0%))',
          foreground:
            'hsl(var(--secondary-foreground-h, 0) var(--secondary-foreground-s, 0%) var(--secondary-foreground-l, 0%))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive-h, 0) var(--destructive-s, 0%) var(--destructive-l, 0%))',
          foreground:
            'hsl(var(--destructive-foreground-h, 0) var(--destructive-foreground-s, 0%) var(--destructive-foreground-l, 0%))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted-h, 0) var(--muted-s, 0%) var(--muted-l, 0%))',
          foreground:
            'hsl(var(--muted-foreground-h, 0) var(--muted-foreground-s, 0%) var(--muted-foreground-l, 0%))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent-h, 0) var(--accent-s, 0%) var(--accent-l, 0%))',
          foreground:
            'hsl(var(--accent-foreground-h, 0) var(--accent-foreground-s, 0%) var(--accent-foreground-l, 0%))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover-h, 0) var(--popover-s, 0%) var(--popover-l, 0%))',
          foreground:
            'hsl(var(--popover-foreground-h, 0) var(--popover-foreground-s, 0%) var(--popover-foreground-l, 0%))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'nav-glass':
          '0 18px 60px rgba(0,0,0,0.34), inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(255,255,255,0.06)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-out': {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-top': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-out-to-bottom': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glass-breathe': {
          '0%, 100%': {
            boxShadow:
              '0 24px 90px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.11)',
          },
          '38%': {
            boxShadow:
              '0 30px 108px rgba(0,0,0,0.60), inset 0 1px 0 rgba(255,255,255,0.14)',
          },
          '68%': {
            boxShadow:
              '0 34px 124px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.16)',
          },
        },
        'glass-sheen': {
          '0%': { opacity: '0', transform: 'translateX(-150%) skewX(-18deg)' },
          '20%': { opacity: '0' },
          '45%': { opacity: '0.8' },
          '70%': { opacity: '0.15' },
          '100%': { opacity: '0', transform: 'translateX(170%) skewX(-18deg)' },
        },
        'work-reveal': {
          '0%': { opacity: '0', transform: 'translate3d(0,28px,0)' },
          '68%': { opacity: '1', transform: 'translate3d(0,-2px,0)' },
          '100%': { opacity: '1', transform: 'translate3d(0,0,0)' },
        },
        'reach-pulse': {
          '0%, 100%': { opacity: '0.25', transform: 'scale(0.985)' },
          '50%': { opacity: '0.6', transform: 'scale(1.025)' },
        },
        'reach-sweep': {
          '0%': { transform: 'translateX(-120%)' },
          '100%': { transform: 'translateX(120%)' },
        },
        'hero-static': {
          '0%': { transform: 'translate3d(0,0,0)' },
          '20%': { transform: 'translate3d(-1px,1px,0)' },
          '40%': { transform: 'translate3d(1px,-1px,0)' },
          '60%': { transform: 'translate3d(-1px,0,0)' },
          '80%': { transform: 'translate3d(1px,1px,0)' },
          '100%': { transform: 'translate3d(0,0,0)' },
        },
        'scan-roll': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'chroma-shake': {
          '0%, 100%': { transform: 'translate3d(0,0,0) skewX(0deg)' },
          '14%': { transform: 'translate3d(2px,-1px,0) skewX(-2deg)' },
          '28%': { transform: 'translate3d(-3px,1px,0) skewX(2deg)' },
          '42%': { transform: 'translate3d(1px,2px,0) skewX(-1deg)' },
          '70%': { transform: 'translate3d(-1px,-2px,0) skewX(1deg)' },
        },
        'stack-marquee': {
          '0%': { transform: 'translate3d(0,0,0)' },
          '100%': { transform: 'translate3d(-50%,0,0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.2s ease-out',
        'fade-out': 'fade-out 0.2s ease-out',
        'slide-in-from-top': 'slide-in-from-top 0.3s ease-out',
        'slide-out-to-top': 'slide-out-to-top 0.3s ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 0.3s ease-out',
        'slide-out-to-bottom': 'slide-out-to-bottom 0.3s ease-out',
        'work-reveal': 'work-reveal 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'glass-breathe': 'glass-breathe 11s cubic-bezier(0.45, 0, 0.2, 1) infinite',
        'glass-sheen': 'glass-sheen 8s cubic-bezier(0.45, 0, 0.2, 1) infinite',
        'reach-pulse': 'reach-pulse 7.2s ease-in-out infinite',
        'reach-sweep': 'reach-sweep 3.8s cubic-bezier(0.16, 1, 0.3, 1) infinite',
        'hero-static': 'hero-static 180ms steps(2, end) infinite',
        'scan-roll': 'scan-roll 5.8s linear infinite',
        'chroma-shake': 'chroma-shake 950ms steps(2, end) infinite',
        'stack-marquee': 'stack-marquee 24s linear infinite',
        'stack-marquee-slow': 'stack-marquee 32s linear infinite',
      },
      card: {
        DEFAULT: 'hsl(var(--card-h, 0) var(--card-s, 0%) var(--card-l, 0%))',
        foreground:
          'hsl(var(--card-foreground-h, 0) var(--card-foreground-s, 0%) var(--card-foreground-l, 0%))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        heading: ['var(--font-jakarta)', ...fontFamily.sans],
        doto: ['"Doto"', 'monospace'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
        metric: ['"Tektur"', 'monospace'],
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
