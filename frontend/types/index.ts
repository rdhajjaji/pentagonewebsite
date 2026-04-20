export type TrainingLevel = "Débutant" | "Intermédiaire" | "Avancé";
export type TrainingMode = "Présentiel" | "Distanciel" | "Hybride";
export type LeadStatus = "nouveau" | "contacté" | "qualifié" | "en attente" | "converti" | "perdu";

export interface Training {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  objectives: string[];
  program: string[];
  duration: string;
  price?: string;
  level: TrainingLevel;
  category: string;
  prerequisites: string;
  targetAudience: string;
  active: boolean;
}

export interface TrainingSession {
  id: string;
  trainingId: string;
  trainingTitle: string;
  date: string;
  time: string;
  location?: string;
  mode: TrainingMode;
  availableSeats: number;
  status: "Ouverte" | "Complète" | "Reportée";
}

export interface LeadHistoryEntry {
  at: string;
  from: LeadStatus | null;
  to: LeadStatus;
  note: string;
}

export interface Lead {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  source: string;
  type: "contact" | "quote";
  status: LeadStatus;
  createdAt: string;
  message: string;
  trainingWanted?: string;
  participants?: number;
  notes: string[];
  history: LeadHistoryEntry[];
}

export interface QuoteRequest extends Lead {
  type: "quote";
}

export interface DashboardStats {
  totalLeads: number;
  newLeads: number;
  quotes: number;
  activeTrainings: number;
  upcomingSessions: number;
}

export interface AdminUser {
  id: string;
  email: string;
  fullName: string;
  role: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
