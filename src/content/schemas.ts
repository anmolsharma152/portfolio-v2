import { z } from 'zod';

export const AboutContentSchema = z.object({
  profileImage: z.string().min(1),
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
  division: z.string().optional(),
  period: z.string().min(1),
  grade: z.string().min(1),
  description: z.string().optional(),
  curriculum: z.string().optional(),
  honors: z.array(z.string()).optional(),
  sortOrder: z.number().int().nonnegative(),
});

export const CuratedProjectSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  summary: z.string().min(1),
  tech: z.array(z.string().min(1)).min(1),
  githubUrl: z.string().url().nullable().optional(),
  liveUrl: z.string().url().nullable().optional(),
  featured: z.boolean().default(false),
  sortOrder: z.number().int().nonnegative(),
  category: z.enum(['ai-agent', 'ml-vision', 'systems', 'platform']),
});

export const BookSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  authors: z.array(z.string().min(1)).min(1),
  category: z
    .enum(['systems-ai', 'research-papers', 'economics-policy', 'sci-fi-vision'])
    .optional(),
  publishedDate: z.string().min(1),
  coverId: z.string().optional(),
  coverIsbn: z.string().optional(),
  coverUrl: z.string().optional(),
  thumbnail: z.string().optional(),
  url: z.string().url().optional(),
  paperId: z.string().optional(),
  tag: z.string().optional(),
  toneGradient: z.string().optional(),
  takeaway: z.string().optional(),
});

export const SpotifyPlaylistSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  embedUrl: z.string().url(),
  externalUrl: z.string().url().optional(),
  coverImage: z.string().min(1).optional(),
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
    playlists: z.array(SpotifyPlaylistSchema).optional(),
  })
  .optional();

export const ReachMetricSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  value: z.number().nonnegative(),
  prefix: z.string().optional(),
  suffix: z.string().optional(),
  description: z.string().min(1),
  category: z.string().optional(),
});

export type AboutContent = z.infer<typeof AboutContentSchema>;
export type WorkExperienceItem = z.infer<typeof WorkExperienceItemSchema>;
export type EducationItem = z.infer<typeof EducationItemSchema>;
export type CuratedProject = z.infer<typeof CuratedProjectSchema>;
export type BookItem = z.infer<typeof BookSchema>;
export type SpotifyPlaylist = z.infer<typeof SpotifyPlaylistSchema>;
export type SpotifyConfig = z.infer<typeof SpotifyConfigSchema>;
export type ReachMetric = z.infer<typeof ReachMetricSchema>;
