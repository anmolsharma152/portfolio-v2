'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import GlassSheen from './widgets/GlassSheen';
import { contactContent } from '@/content/loaders';
import { toast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
  honeypot: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      honeypot: '',
    },
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: contactContent.email,
      link: `mailto:${contactContent.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/anmolsharma152',
      link: 'https://github.com/anmolsharma152',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/anmolsharma152',
      link: 'https://www.linkedin.com/in/anmolsharma152/',
    },
    {
      icon: ({ className }: { className?: string }) => (
        <svg className={className || 'w-5 h-5'} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: 'X (Twitter)',
      value: 'x.com/ozymandias152',
      link: 'https://x.com/ozymandias152',
    },
    {
      icon: ({ className }: { className?: string }) => (
        <svg className={className || 'w-5 h-5'} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.29a.75.75 0 01-1.033.248c-2.83-1.73-6.393-2.12-10.59-1.163a.75.75 0 11-.334-1.462c4.593-1.047 8.528-.6 11.71 1.344a.75.75 0 01.247 1.033zm1.464-3.253a.938.938 0 01-1.29.31c-3.238-1.99-8.175-2.566-12.005-1.403a.938.938 0 11-.548-1.793c4.38-1.33 9.818-.69 13.533 1.596a.938.938 0 01.31 1.29zm.125-3.385c-3.882-2.306-10.29-2.518-14.01-1.39a1.125 1.125 0 11-.645-2.155c4.275-1.298 11.34-1.043 15.82 1.616a1.125 1.125 0 11-1.165 1.929z" />
        </svg>
      ),
      label: 'Spotify',
      value: 'spotify.com/user/31fzcv4ts52untro5xsamjhddtre',
      link: 'https://open.spotify.com/user/31fzcv4ts52untro5xsamjhddtre',
    },
  ];

  const handleContactClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    label: string,
    value: string
  ) => {
    if (label === 'Email') {
      e.preventDefault();
      navigator.clipboard.writeText(value);
      toast({
        title: 'Copied to Clipboard',
        description: 'Email address has been copied to your clipboard.',
      });
    }
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: 'Message Sent',
        description: "I'll get back to you soon!",
        variant: 'default',
      });

      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: 'Error',
        description:
          error instanceof Error ? error.message : 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative z-10 isolate overflow-hidden">
      {/* Background ambient lighting & dot-matrix raster */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-10 [background-image:radial-gradient(rgba(255,255,255,0.52)_0.62px,transparent_0.62px)] [background-size:6px_6px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_12%,rgba(211,23,10,0.12),transparent_28%),radial-gradient(circle_at_78%_72%,rgba(255,255,255,0.055),transparent_30%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#d3170a]/12 blur-3xl"
      />

      <div className="max-w-[1460px] mx-auto px-4 sm:px-8 lg:px-10">
        {/* Dedicated Contact Header Card (Matches About Header 1-to-1) */}
        <header className="relative isolate overflow-hidden rounded-[2rem] bg-white/[0.075] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.42),0_0_74px_rgba(211,23,10,0.16),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe sm:p-7 lg:rounded-[2.5rem] lg:p-9 mb-10">
          <GlassSheen className="left-[-35%] bg-white/[0.045]" />

          <div className="flex items-center justify-between font-mono text-[0.56rem] sm:text-[0.62rem] uppercase tracking-[0.18em] sm:tracking-[0.28em] text-white/50">
            <p className="text-white/80">contact / reach out</p>
            <p className="sm:text-right">jaipur &bull; remote &bull; global</p>
          </div>

          <div ref={ref} className="pt-10 sm:pt-14 lg:pt-18">
            <h2 className="font-doto text-[clamp(4.2rem,21vw,19rem)] font-black lowercase leading-[0.72] tracking-tighter text-white">
              contact
            </h2>
          </div>
        </header>

        {/* Intent Channels / Lanes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {contactContent.lanes.map((lane, index) => (
            <motion.div
              key={lane.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
              className={`relative overflow-hidden rounded-[1.5rem] bg-white/[0.07] p-6 sm:p-7 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe transition-all duration-300 hover:ring-white/28 hover:scale-[1.01] ${
                lane.isPrimary ? 'ring-white/30 bg-white/[0.09]' : ''
              }`}
            >
              <GlassSheen className="left-[-40%] bg-white/[0.03]" />
              <div>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/60 font-semibold">
                  {lane.label}
                </span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-3 text-white">
                  {lane.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
                  {lane.description}
                </p>
              </div>

              <div>
                <a
                  href={lane.actionHref}
                  target={lane.actionHref.startsWith('http') ? '_blank' : undefined}
                  rel={lane.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-full font-doto text-xs sm:text-sm font-black lowercase tracking-[0.06em] transition-all duration-200 cursor-pointer ${
                    lane.isPrimary
                      ? 'bg-white text-black hover:bg-white/90 shadow-md'
                      : 'border border-white/20 bg-white/[0.06] text-white hover:bg-white/15'
                  }`}
                >
                  <span>{lane.actionLabel.toLowerCase()}</span>
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          {/* Left Column: Direct Info & Offerings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] bg-white/[0.07] p-6 sm:p-7 shadow-[0_24px_80px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.12)] ring-1 ring-white/15 backdrop-blur-2xl motion-safe:animate-glass-breathe">
              <GlassSheen className="left-[-40%] bg-white/[0.03]" />
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 text-white">
                Direct Communication
              </h3>
              <p className="font-mono text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Click any channel below to copy or open direct connection:
              </p>

              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleContactClick(e, info.label, info.value)}
                    className="flex items-center space-x-3.5 p-3.5 rounded-[1.2rem] bg-black/35 border border-white/10 hover:border-white/25 hover:bg-black/50 transition-all duration-200 cursor-pointer group"
                  >
                    <div className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/15 transition-colors">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[0.62rem] font-mono uppercase tracking-[0.16em] text-white/50">
                        {info.label}
                      </div>
                      <div className="text-sm font-mono font-medium text-white truncate">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form with Honeypot */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="scroll-mt-28 relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] bg-white/[0.075] p-6 sm:p-8 lg:p-9 shadow-[0_30px_100px_rgba(0,0,0,0.42),0_0_60px_rgba(211,23,10,0.1),inset_0_1px_0_rgba(255,255,255,0.14)] ring-1 ring-white/14 backdrop-blur-2xl motion-safe:animate-glass-breathe"
          >
            <GlassSheen className="left-[-40%] bg-white/[0.035]" />
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 text-white">
              Send a Direct Message
            </h3>
            <p className="font-mono text-xs sm:text-sm text-white/60 mb-6">
              Delivered immediately to my primary inbox via Resend.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Hidden honeypot field for bot spam detection */}
              <input
                type="text"
                {...register('honeypot')}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-[0.14em] font-medium mb-1.5 text-white/70"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/14 focus:border-white/40 focus:ring-1 focus:ring-white/30 outline-none transition-colors text-sm text-white placeholder-white/40 font-mono"
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400 mt-1 block font-mono">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-[0.14em] font-medium mb-1.5 text-white/70"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/14 focus:border-white/40 focus:ring-1 focus:ring-white/30 outline-none transition-colors text-sm text-white placeholder-white/40 font-mono"
                    placeholder="jane@company.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1 block font-mono">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-[0.14em] font-medium mb-1.5 text-white/70"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/14 focus:border-white/40 focus:ring-1 focus:ring-white/30 outline-none transition-colors text-sm text-white placeholder-white/40 font-mono"
                  placeholder="AI Engineering / Systems Collaboration"
                />
                {errors.subject && (
                  <span className="text-xs text-red-400 mt-1 block font-mono">
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-[0.14em] font-medium mb-1.5 text-white/70"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/14 focus:border-white/40 focus:ring-1 focus:ring-white/30 outline-none transition-colors text-sm text-white placeholder-white/40 font-mono resize-none"
                  placeholder="Tell me about your project, system architecture requirements, or timeline..."
                />
                {errors.message && (
                  <span className="text-xs text-red-400 mt-1 block font-mono">
                    {errors.message.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-white text-black hover:bg-white/90 rounded-full font-doto text-sm sm:text-base font-black lowercase tracking-[0.06em] transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>sending message...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>send message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
