import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import React from 'react';
import './globals.css';

// Components
import Navigation from '@/components/Navigation';
import { Toaster } from '@/components/ui/Toaster';
import { ThemeProvider } from '@/context/ThemeContext';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Anmol Sharma | Agentic AI & Systems Engineer',
  description:
    'Building Low-Latency AI Infra & Stateful Multi-Agent Backends. 3+ years experience architecting enterprise RAG pipelines, autonomous multi-agent state machines, and production LLMOps.',
  metadataBase: new URL('https://anmolsharma152.vercel.app'),
  other: {
    'msapplication-TileColor': '#000000',
  },
  openGraph: {
    title: 'Anmol Sharma | Agentic AI & Systems Engineer',
    description:
      'Building Low-Latency AI Infra & Stateful Multi-Agent Backends. 3+ years experience architecting enterprise RAG pipelines, autonomous multi-agent state machines, and production LLMOps.',
    url: 'https://anmolsharma152.vercel.app',
    siteName: 'Anmol Sharma',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anmol Sharma | Agentic AI & Systems Engineer',
    description:
      'Building Low-Latency AI Infra & Stateful Multi-Agent Backends. 3+ years experience architecting enterprise RAG pipelines, autonomous multi-agent state machines, and production LLMOps.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Anmol Sharma',
  url: 'https://anmolsharma152.vercel.app',
  sameAs: ['https://github.com/anmolsharma152', 'https://linkedin.com/in/anmolsharma152'],
  jobTitle: 'Agentic AI & Systems Engineer',
  telephone: '+91-84128-80194',
  email: 'anmolsharma152.dev@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jaipur',
    addressCountry: 'IN',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'The Bullseye',
  },
  knowsAbout: [
    'Agentic AI',
    'Multi-Agent Systems',
    'LangGraph',
    'Enterprise RAG',
    'pgvector',
    'LLMOps',
    'Langfuse',
    'LangSmith',
    'FastAPI',
    'Python',
    'PostgreSQL 16',
    'Docker',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark bg-[#000000] text-[#ededed] ${inter.variable} ${jakarta.variable}`}
      style={{ colorScheme: 'dark' }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/google-font-preconnect */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/doto/v3/t5t6IRMbNJ6TQG7Il_EKPqP9zTnvqouBWho.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font, @next/next/google-font-display, @next/next/google-font-preconnect */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Doto:wght@400..900&family=IBM+Plex+Mono:wght@400;500;600&family=Tektur:wght@500;600;700;800&display=block"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider>
          <Navigation />
          <div className="flex-1">{children}</div>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
