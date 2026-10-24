import {
  AboutContentSchema,
  CuratedProjectSchema,
  EducationItemSchema,
  ReachMetricSchema,
  BookSchema,
  SpotifyConfigSchema,
  WorkExperienceItemSchema,
  type AboutContent,
  type CuratedProject,
  type EducationItem,
  type ReachMetric,
  type BookItem,
  type SpotifyConfig,
  type WorkExperienceItem,
} from './schemas';
import aboutData from './site/about.json';
import educationData from './site/education.json';
import experienceData from './site/experience.json';
import personalData from './site/personal.json';
import projectsData from './site/projects.json';
import reachData from './site/reach.json';

// Validated singleton constants
export const aboutContent: AboutContent = AboutContentSchema.parse(aboutData);
export const workExperienceContent: WorkExperienceItem[] =
  WorkExperienceItemSchema.array().parse(experienceData);
export const educationContent: EducationItem[] = EducationItemSchema.array().parse(educationData);
export const curatedProjectsContent: CuratedProject[] =
  CuratedProjectSchema.array().parse(projectsData);
export const booksContent: BookItem[] = BookSchema.array().parse(personalData.books);
export const spotifyConfig: SpotifyConfig = SpotifyConfigSchema.parse(personalData.spotify);
export const reachMetricsContent: ReachMetric[] = ReachMetricSchema.array().parse(reachData);
