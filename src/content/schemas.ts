import { z } from 'zod';

export const HeroContentSchema = z.object({
  name: z.string().min(1),
  headlinePrefix: z.string().min(1),
  headlineGradient: z.string().min(1),
  headlineSuffix: z.string().min(1),
  typewriterTitles: z.array(z.string().min(1)).min(1),
  summary: z.string().min(1),
  primaryCta: z.object({
    label: z.string().min(1),
    href: z.string().min(1),
  }),
  secondaryCta: z.object({
    label: z.string().min(1),
    href: z.string().min(1),
  }),
});

export const CapabilityCardSchema = z.object({
  id: z.string().min(1),
  icon: z.enum(['brain', 'terminal', 'cpu', 'globe', 'database', 'gitBranch']),
  iconColor: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  tools: z.array(z.string()).optional(),
});

export const AboutContentSchema = z.object({
  sectionTitle: z.string().min(1),
  profileImage: z.string().min(1),
  introText: z.string().min(1),
  missionTitle: z.string().min(1),
  missionStatement: z.string().min(1),
  capabilities: z.array(CapabilityCardSchema).min(1),
  beyondCodeTitle: z.string().min(1),
  beyondCodeParagraphs: z.array(z.string().min(1)).min(1),
  quote: z.string().min(1),
});

export const WorkExperienceItemSchema = z.object({
  id: z.string().min(1),
  role: z.string().min(1),
  company: z.string().min(1),
  period: z.string().min(1),
  location: z.string().min(1),
  summary: z.string().optional(),
  highlights: z.array(z.string().min(1)).min(1),
  techBadges: z.array(z.string().min(1)).min(1),
  featured: z.boolean().default(false),
  sortOrder: z.number().int().nonnegative(),
});

export const EducationItemSchema = z.object({
  id: z.string().min(1),
  degree: z.string().min(1),
  institution: z.string().min(1),
  period: z.string().min(1),
  grade: z.string().min(1),
  description: z.string().optional(),
  honors: z.array(z.string()).optional(),
  sortOrder: z.number().int().nonnegative(),
});

export const CuratedProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  summary: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
  githubUrl: z.string().url(),
  liveUrl: z.string().url().nullable().optional(),
  featured: z.boolean().default(false),
  sortOrder: z.number().int().nonnegative(),
  category: z.enum(['ai-agent', 'ml-vision', 'systems', 'platform']),
});

export const BookSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  authors: z.array(z.string().min(1)).min(1),
  category: z.enum(['systems-ai', 'research-papers', 'economics-policy', 'sci-fi-vision']),
  publishedDate: z.string().min(1),
  coverId: z.string().optional(),
  coverIsbn: z.string().optional(),
  toneGradient: z.string().min(1),
  takeaway: z.string().optional(),
});

export const SpotifyConfigSchema = z
  .object({
    enabled: z.boolean().default(true),
    username: z.string().default('Anmol'),
    userId: z.string().optional(),
    profileUrl: z.string().url(),
    avatarUrl: z.string().url().nullable().optional(),
    embedPlaylistUrl: z.string().url().nullable().optional(),
    title: z.string().optional(),
  })
  .optional();

export const ReachMetricSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  value: z.number().nonnegative(),
  prefix: z.string().optional(),
  suffix: z.string().min(1),
  description: z.string().min(1),
  category: z.string().optional(),
});

export const ContactLaneSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
  actionLabel: z.string().min(1),
  actionHref: z.string().min(1),
  isPrimary: z.boolean().default(false),
});

export const ContactContentSchema = z.object({
  sectionTitle: z.string().min(1),
  sectionSubtitle: z.string().min(1),
  email: z.string().email(),
  location: z.string().min(1),
  lanes: z.array(ContactLaneSchema).min(1),
  offerings: z.array(z.string().min(1)).min(1),
});

export type HeroContent = z.infer<typeof HeroContentSchema>;
export type CapabilityCard = z.infer<typeof CapabilityCardSchema>;
export type AboutContent = z.infer<typeof AboutContentSchema>;
export type WorkExperienceItem = z.infer<typeof WorkExperienceItemSchema>;
export type EducationItem = z.infer<typeof EducationItemSchema>;
export type CuratedProject = z.infer<typeof CuratedProjectSchema>;
export type BookItem = z.infer<typeof BookSchema>;
export type SpotifyConfig = z.infer<typeof SpotifyConfigSchema>;
export type ReachMetric = z.infer<typeof ReachMetricSchema>;
export type ContactLane = z.infer<typeof ContactLaneSchema>;
export type ContactContent = z.infer<typeof ContactContentSchema>;
