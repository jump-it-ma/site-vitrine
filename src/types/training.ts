// TypeScript interfaces for the Program → Categories → Trainings structure

export interface TrainingPrice {
  lms?: number;
  exam_voucher?: number;
}

export interface Training {
  id: string;
  category: string;
  title: string;
  editor: string;
  duration_days: number;
  level: string | string[];
  languages: string[];
  availability?: string;
  price: TrainingPrice;
  tags: string[];
  search_keywords: string[];
}

export interface Program {
  id: string;
  title: string;
  description: string;
  categories: string[];
}

export interface ProgramFilters {
  categories: string[];
  editors: string[];
  durations: number[];
  levels: string[];
  languages: string[];
}

export interface ProgramData {
  program: Program;
  filters: ProgramFilters;
  trainings: Training[];
}

// Filter state for the training catalog
export interface TrainingFilterState {
  searchQuery: string;
  selectedCategories: string[];
  selectedDurations: number[];
  selectedLanguages: string[];
  selectedEditors: string[];
  selectedLevels: string[];
}
