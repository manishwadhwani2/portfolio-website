export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  points: string[];
}

export interface Project {
  title: string;
  description: string;
  tech?: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ResearchPaper {
  title: string;
  link: string;
  description: string;
  year: string;
}

export interface Education {
  institution: string;
  degree: string;
  cgpa: string;
  period: string;
  coursework: string;
}

export interface Achievement {
  title: string;
}
