export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  tags: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: "Expert" | "Advanced" | "Proficient" | "Intermediate" | "Beginner";
    icon?: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName?: string;
  tags: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  year: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  certId?: string;
  verifyUrl?: string;
}

export interface Achievement {
  title: string;
  description: string;
  issuer: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}
