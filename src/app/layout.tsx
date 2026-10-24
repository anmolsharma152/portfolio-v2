import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';

// Components
import Navigation from '@/components/Navigation';

// All fonts are self-hosted at build time: no render-blocking third-party requests.
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-plex-mono',
});

// Doto is newer than Next 14's Google font list, so its variable latin subset is vendored.
const doto = localFont({
  src: './fonts/Doto-Variable.woff2',
  weight: '400 900',
  display: 'swap',
  variable: '--font-doto',
});

export const metadata: Metadata = {
  title: 'Anmol Sharma | AI/ML & Systems Engineer',
  description:
    'Building Low-Latency AI Infra & Stateful Multi-Agent Backends. Architecting RAG pipelines, multi-agent state machines, and containerized execution runtimes.',
  metadataBase: new URL('https://anmolsharma152.vercel.app'),
  other: {
    'msapplication-TileColor': '#000000',
  },
  openGraph: {
    title: 'Anmol Sharma | AI/ML & Systems Engineer',
    description:
      'AI/ML & Systems Engineer building containerized execution sandboxes, hybrid retrieval engines, asynchronous agent runtimes, and automated LLM evaluation harnesses.',
    url: 'https://anmolsharma152.vercel.app',
    siteName: 'Anmol Sharma',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anmol Sharma | AI/ML & Systems Engineer',
    description:
      'AI/ML & Systems Engineer building containerized execution sandboxes, hybrid retrieval engines, asynchronous agent runtimes, and automated LLM evaluation harnesses.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anmol Sharma',
  url: 'https://anmolsharma152.vercel.app',
  sameAs: ['https://github.com/anmolsharma152', 'https://linkedin.com/in/anmolsharma152'],
  jobTitle: 'AI/ML & Systems Engineer',
  telephone: '+91-84128-80194',
  email: 'anmolsharma152.dev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jaipur',
    addressCountry: 'IN',
  },
  alumniOf: [
    { '@type': 'CollegeOrUniversity', name: 'Indian Institute of Technology Mandi' },
    { '@type': 'CollegeOrUniversity', name: 'Jaipur National University' },
  ],
  knowsAbout: [
    'Python',
    'Rust',
    'FastAPI',
    'Docker',
    'Container Security',
    'LangGraph',
    'Retrieval-Augmented Generation',
    'pgvector',
    'PyTorch',
    'QLoRA',
    'vLLM',
    'LLM Evaluation',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark bg-[#000000] text-[#ededed] ${inter.variable} ${plexMono.variable} ${doto.variable}`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <script
          type="application/ld+json"
          // Escape "<" so the JSON can never close the script tag early.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navigation />
        <div className="flex-1">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
