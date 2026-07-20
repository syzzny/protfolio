export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  coverImage: string;
  images: string[];
  summary: string;
  description: string;
  tools: string[];
  link?: string;
}

export interface SkillItem {
  name: string;
  level: number;
}

export interface Skill {
  category: string;
  items: SkillItem[];
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}
