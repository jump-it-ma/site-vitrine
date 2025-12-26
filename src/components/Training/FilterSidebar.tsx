"use client";

import { ProgramFilters, TrainingFilterState } from "@/types/training";
import { montserratFont } from "@/utils/fonts";
import { HiMagnifyingGlass, HiXMark } from "react-icons/hi2";

interface FilterSidebarProps {
  filters: ProgramFilters;
  activeFilters: TrainingFilterState;
  onSearchChange: (query: string) => void;
  onToggleCategory: (category: string) => void;
  onToggleDuration: (duration: number) => void;
  onToggleLanguage: (language: string) => void;
  onClearFilters: () => void;
  hasActiveFilters: boolean;
  resultsCount: number;
}

export default function FilterSidebar({
  filters,
  activeFilters,
  onSearchChange,
  onToggleCategory,
  onToggleDuration,
  onToggleLanguage,
  onClearFilters,
  hasActiveFilters,
  resultsCount,
}: FilterSidebarProps) {
  return (
    <aside className="w-full space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:w-72">
      {/* Search */}
      <div>
        <label
          htmlFor="search"
          className={`${montserratFont.className} mb-2 block text-sm font-semibold text-gray-700`}
        >
          Rechercher
        </label>
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            id="search"
            type="text"
            placeholder="Rechercher une formation..."
            value={activeFilters.searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100"
          />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Categories */}
      <div>
        <h4
          className={`${montserratFont.className} mb-3 text-sm font-semibold text-gray-700`}
        >
          Standards / Frameworks
        </h4>
        <div className="space-y-2">
          {filters.categories.map((category) => (
            <label
              key={category}
              className="flex cursor-pointer items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
            >
              <input
                type="checkbox"
                checked={activeFilters.selectedCategories.includes(category)}
                onChange={() => onToggleCategory(category)}
                className="h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Duration */}
      <div>
        <h4
          className={`${montserratFont.className} mb-3 text-sm font-semibold text-gray-700`}
        >
          Durée
        </h4>
        <div className="flex flex-wrap gap-2">
          {filters.durations.map((duration) => (
            <button
              key={duration}
              onClick={() => onToggleDuration(duration)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                activeFilters.selectedDurations.includes(duration)
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700"
              }`}
            >
              {duration} jours
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Languages */}
      <div>
        <h4
          className={`${montserratFont.className} mb-3 text-sm font-semibold text-gray-700`}
        >
          Langue
        </h4>
        <div className="flex gap-2">
          {filters.languages.map((language) => (
            <button
              key={language}
              onClick={() => onToggleLanguage(language)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                activeFilters.selectedLanguages.includes(language)
                  ? "bg-purple-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700"
              }`}
            >
              {language === "FR" ? "🇫🇷 Français" : "🇬🇧 English"}
            </button>
          ))}
        </div>
      </div>

      {/* Results & Clear */}
      <div className="space-y-3 pt-2">
        <p className="text-center text-sm text-gray-500">
          <span className="font-semibold text-purple-600">{resultsCount}</span>{" "}
          formation{resultsCount !== 1 ? "s" : ""} trouvée
          {resultsCount !== 1 ? "s" : ""}
        </p>

        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <HiXMark className="h-4 w-4" />
            Réinitialiser les filtres
          </button>
        )}
      </div>
    </aside>
  );
}
