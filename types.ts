
export type MainCategory = 'ARCHITECTURE' | 'INTERIORS' | 'LANDSCAPE' | 'PLANNING' | 'PRODUCTS';

export type ProjectCategory = 
  | 'Culture' 
  | 'Education' 
  | 'Work' 
  | 'Hospitality' 
  | 'Residential' 
  | 'Infrastructure' 
  | 'Space' 
  | 'Sports' 
  | 'Health'
  | 'Institutional'
  | 'Hospital'
  | 'Heritage'
  | 'PMC'
  | 'Industrial'
  | 'Commercial';

export interface Project {
  id: string;
  title: string;
  location: string;
  mainCategory: MainCategory;
  category: string; // Dynamic categories including 'Heritage Conservation & Hospitality'
  year?: string;
  image: string;
  gallery?: string[];
  description: string;
  status?: 'Completed' | 'Ongoing';
  client?: string;
  size?: string;
  typology?: string;
  details?: string[];
  // Extended fields
  area?: string;
  cost?: string;
  rooms?: string;
  heritageDetails?: string;
  builtYear?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  // Extended team details
  qualification?: string;
  almaMater?: string;
  experience?: string;
  featuredProjects?: string[];
}

export type View = 'home' | 'projects' | 'team' | 'contact' | 'project-detail' | 'search' | 'news' | 'about' | 'sustainability' | 'careers';
