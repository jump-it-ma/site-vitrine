"use client";

import { useMemo, useState, useCallback } from "react";
import { FlattenedTraining, TrainingFilterState } from "@/types/training";

const initialFilterState: TrainingFilterState = {
  searchQuery: "",
  selectedCategories: [],
  selectedDurations: [],
  selectedLanguages: [],
  selectedEditors: [],
  selectedLevels: [],
};

export function useTrainingFilters(trainings: FlattenedTraining[]) {
  const [filters, setFilters] = useState<TrainingFilterState>(initialFilterState);

  // Toggle a value in an array filter (for checkboxes)
  const toggleFilter = useCallback(
    <K extends keyof TrainingFilterState>(
      key: K,
      value: TrainingFilterState[K] extends (infer U)[] ? U : never
    ) => {
      setFilters((prev) => {
        const currentArray = prev[key] as unknown[];
        const newArray = currentArray.includes(value)
          ? currentArray.filter((v) => v !== value)
          : [...currentArray, value];
        return { ...prev, [key]: newArray };
      });
    },
    []
  );

  // Set search query
  const setSearchQuery = useCallback((query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }));
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters(initialFilterState);
  }, []);

  // Check if any filters are active
  const hasActiveFilters = useMemo(() => {
    return (
      filters.searchQuery.length > 0 ||
      filters.selectedCategories.length > 0 ||
      filters.selectedDurations.length > 0 ||
      filters.selectedLanguages.length > 0 ||
      filters.selectedEditors.length > 0 ||
      filters.selectedLevels.length > 0
    );
  }, [filters]);

  // Filtered trainings based on all active filters
  const filteredTrainings = useMemo(() => {
    return trainings.filter((training) => {
      // Search filter
      if (filters.searchQuery) {
        const query = filters.searchQuery.toLowerCase();
        const searchableText = [
          training.title,
          training.category,
          ...training.tags,
          ...training.search_keywords,
        ]
          .join(" ")
          .toLowerCase();

        if (!searchableText.includes(query)) {
          return false;
        }
      }

      // Category filter
      if (
        filters.selectedCategories.length > 0 &&
        !filters.selectedCategories.includes(training.category)
      ) {
        return false;
      }

      // Duration filter
      if (
        filters.selectedDurations.length > 0 &&
        !filters.selectedDurations.includes(training.duration_days)
      ) {
        return false;
      }

      // Language filter
      if (filters.selectedLanguages.length > 0) {
        const hasMatchingLanguage = training.languages.some((lang) =>
          filters.selectedLanguages.includes(lang)
        );
        if (!hasMatchingLanguage) {
          return false;
        }
      }

      // Editor filter
      if (
        filters.selectedEditors.length > 0 &&
        !filters.selectedEditors.includes(training.editor)
      ) {
        return false;
      }

      // Level filter
      if (
        filters.selectedLevels.length > 0 &&
        !filters.selectedLevels.includes(training.level)
      ) {
        return false;
      }

      return true;
    });
  }, [trainings, filters]);

  return {
    filters,
    filteredTrainings,
    setSearchQuery,
    toggleFilter,
    clearFilters,
    hasActiveFilters,
  };
}
