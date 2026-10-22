export interface Project {
  id: string;
  number: string;
  title: string;
  date: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  featured?: boolean;
  objective: string;
  approach: string;
  role: string;
  keyFeatures: string[];
  results: string[];
  github?: string;
  liveDemo?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  detail: string;
  year: string;
  badge?: string;
}
