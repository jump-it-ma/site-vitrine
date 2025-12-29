// TypeScript interfaces for the Program → Categories → Trainings structure

// ============================================
// HIERARCHICAL STRUCTURE (New Format)
// ============================================

/**
 * FAQ item for training details
 */
export interface TrainingFAQ {
  question: string;
  answer: string;
}

/**
 * Curriculum day with topics
 */
export interface CurriculumDay {
  day: number;
  title: string;
  topics: string[];
}

/**
 * Detailed training information for detail pages
 */
export interface TrainingDetails {
  description: string;
  target_audience: string[];
  objectives: string[];
  prerequisites?: string[];
  curriculum: CurriculumDay[];
  faqs: TrainingFAQ[];
}

/**
 * Training within a category (hierarchical format)
 * Used in program JSON files with categories → trainings structure
 */
export interface CategoryTraining {
  id: string;
  title: string;
  editor: string;
  reference: string;
  is_best_seller: boolean;
  duration_days: number;
  level: string;
  evaluation: string;
  package_includes: string;
  languages: string[];
  tags: string[];
  search_keywords: string[];
  details?: TrainingDetails;
}

/**
 * Category containing trainings
 */
export interface Category {
  id: string;
  name: string;
  description: string;
  reference: string;
  trainings: CategoryTraining[];
}

/**
 * Program metadata
 */
export interface Program {
  id: string;
  title: string;
  description: string;
  categories: string[];
}

/**
 * Filter options available for a program
 */
export interface ProgramFilters {
  categories: string[];
  editors: string[];
  durations: number[];
  levels: string[];
  languages: string[];
}

/**
 * Hierarchical program data structure
 * program → categories → trainings
 */
export interface HierarchicalProgramData {
  program: Program;
  categories: Category[];
  filters: ProgramFilters;
}

// ============================================
// FLATTENED STRUCTURE (For filtering/display)
// ============================================

/**
 * Flattened training with category info for filtering
 */
export interface FlattenedTraining {
  id: string;
  category: string;
  categoryId: string;
  title: string;
  editor: string;
  reference: string;
  is_best_seller: boolean;
  duration_days: number;
  level: string;
  evaluation: string;
  package_includes: string;
  languages: string[];
  tags: string[];
  search_keywords: string[];
  details?: TrainingDetails;
}

/**
 * Filter state for the training catalog
 */
export interface TrainingFilterState {
  searchQuery: string;
  selectedCategories: string[];
  selectedDurations: number[];
  selectedLanguages: string[];
  selectedEditors: string[];
  selectedLevels: string[];
}

// ============================================
// LEGACY SUPPORT (for backwards compatibility)
// ============================================

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

export interface ProgramData {
  program: Program;
  filters: ProgramFilters;
  trainings: Training[];
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Flatten hierarchical program data into array of trainings with category info
 */
export function flattenProgramData(
  data: HierarchicalProgramData
): FlattenedTraining[] {
  const trainings: FlattenedTraining[] = [];

  for (const category of data.categories) {
    for (const training of category.trainings) {
      trainings.push({
        ...training,
        category: category.name,
        categoryId: category.id,
      });
    }
  }

  return trainings;
}

/**
 * Flatten a single category's trainings
 */
export function flattenCategoryTrainings(
  category: Category
): FlattenedTraining[] {
  return category.trainings.map((training) => ({
    ...training,
    category: category.name,
    categoryId: category.id,
  }));
}

/**
 * Extract unique filter values from hierarchical data
 */
export function extractFilters(data: HierarchicalProgramData): ProgramFilters {
  const trainings = flattenProgramData(data);

  return {
    categories: Array.from(new Set(trainings.map((t) => t.category))),
    editors: Array.from(new Set(trainings.map((t) => t.editor))),
    durations: Array.from(new Set(trainings.map((t) => t.duration_days))).sort(
      (a, b) => a - b
    ),
    levels: Array.from(new Set(trainings.map((t) => t.level))),
    languages: Array.from(new Set(trainings.flatMap((t) => t.languages))),
  };
}
