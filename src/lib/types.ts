import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  type: 'Web' | 'Mobile' | 'Full-stack';
  category: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Web' | 'Mobile' | 'Design' | 'Outils';
}

export interface ProcessStep {
  title: string;
  description: string;
  icon: LucideIcon;
}