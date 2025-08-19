import type { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar';

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Experience {
  role: string;
  period: string;
}

export interface Project {
  id: number;
  titleKey: string;
  year: number;
  thumbnail: string;
  url: string;
  type: 'video' | 'photo';
  categories: string[];
  aiHint?: string;
}

export interface ProjectCategory {
  key: string;
  name: string;
}

export interface PortfolioData {
  [key: string]: any;
}
