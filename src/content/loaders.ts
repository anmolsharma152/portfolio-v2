import {
  AboutContentSchema,
  ContactContentSchema,
  CuratedProjectSchema,
  EducationItemSchema,
  HeroContentSchema,
  ReachMetricSchema,
  BookSchema,
  SpotifyPlaylistSchema,
  WorkExperienceItemSchema,
  type AboutContent,
  type ContactContent,
  type CuratedProject,
  type EducationItem,
  type HeroContent,
  type ReachMetric,
  type BookItem,
  type SpotifyPlaylist,
  type WorkExperienceItem,
} from './schemas';
import aboutData from './site/about.json';
import contactData from './site/contact.json';
import educationData from './site/education.json';
import experienceData from './site/experience.json';
import heroData from './site/hero.json';
import personalData from './site/personal.json';
import projectsData from './site/projects.json';
import reachData from './site/reach.json';

// Validated singleton constants
export const heroContent: HeroContent = HeroContentSchema.parse(heroData);
export const aboutContent: AboutContent = AboutContentSchema.parse(aboutData);
export const workExperienceContent: WorkExperienceItem[] =
  WorkExperienceItemSchema.array().parse(experienceData);
export const educationContent: EducationItem[] = EducationItemSchema.array().parse(educationData);
export const curatedProjectsContent: CuratedProject[] =
  CuratedProjectSchema.array().parse(projectsData);
export const booksContent: BookItem[] = BookSchema.array().parse(personalData.books);
export const spotifyPlaylistsContent: SpotifyPlaylist[] = SpotifyPlaylistSchema.array().parse(
  personalData.spotifyPlaylists
);
export const reachMetricsContent: ReachMetric[] = ReachMetricSchema.array().parse(reachData);
export const contactContent: ContactContent = ContactContentSchema.parse(contactData);
