'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { motion, useInView } from 'framer-motion';
import { Mail, Github, Linkedin, Send, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
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
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              {contactContent.sectionTitle}
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6 rounded-full" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {contactContent.sectionSubtitle}
          </p>
        </motion.div>

        {/* Intent Channels / Lanes (Inspired by Ohshin) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {contactContent.lanes.map((lane, index) => (
            <motion.div
              key={lane.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
              className={`relative overflow-hidden rounded-2xl glass p-6 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md ${
                lane.isPrimary ? 'ring-2 ring-primary/40' : ''
              }`}
            >
              <GlassSheen />
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-primary font-semibold">
                  {lane.label}
                </span>
                <h3 className="font-heading text-xl font-bold mt-2 mb-3 text-foreground">
                  {lane.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {lane.description}
                </p>
              </div>

              <div>
                <a
                  href={lane.actionHref}
                  target={lane.actionHref.startsWith('http') ? '_blank' : undefined}
                  rel={lane.actionHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    lane.isPrimary
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:opacity-95 shadow-md shadow-blue-600/20'
                      : 'border border-border/80 text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span>{lane.actionLabel}</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Form and Contact Details Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Info & Offerings */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="glass p-6 sm:p-7 rounded-2xl shadow-sm">
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 text-foreground">
                Direct Communication
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Prefer email or social links? Click to copy or open direct links below:
              </p>

              <div className="space-y-3">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => handleContactClick(e, info.label, info.value)}
                    className="flex items-center space-x-3.5 p-3.5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/40 hover:bg-background/80 transition-all duration-200 cursor-pointer"
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs font-mono text-muted-foreground">{info.label}</div>
                      <div className="text-sm font-semibold text-foreground truncate">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Offerings card */}
            <div className="glass p-6 sm:p-7 rounded-2xl shadow-sm">
              <h4 className="font-heading text-lg font-bold mb-4 text-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span>Areas of Technical Focus</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                {contactContent.offerings.map((offering, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{offering}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column: Direct Message Form with Honeypot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass p-6 sm:p-8 rounded-2xl shadow-sm"
          >
            <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2 text-foreground">
              Send a Direct Message
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
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
                    className="block text-xs font-mono font-medium mb-1.5 text-foreground/80"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background/50 border border-border/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm text-foreground"
                    placeholder="Jane Doe"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono font-medium mb-1.5 text-foreground/80"
                  >
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background/50 border border-border/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm text-foreground"
                    placeholder="jane@company.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono font-medium mb-1.5 text-foreground/80"
                >
                  Subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register('subject')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background/50 border border-border/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm text-foreground"
                  placeholder="AI Engineering / Systems Collaboration"
                />
                {errors.subject && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.subject.message}</span>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-medium mb-1.5 text-foreground/80"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message')}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background/50 border border-border/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm text-foreground resize-none"
                  placeholder="Tell me about your project, system architecture requirements, or timeline..."
                />
                {errors.message && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-md hover:shadow-blue-600/20 hover:opacity-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
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
