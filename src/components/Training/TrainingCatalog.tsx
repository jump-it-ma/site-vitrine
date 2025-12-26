"use client";

import { useState, useMemo, useEffect } from "react";
import {
  HierarchicalProgramData,
  Category,
  flattenCategoryTrainings,
} from "@/types/training";
import { useTrainingFilters } from "@/hooks/useTrainingFilters";
import FilterSidebar from "./FilterSidebar";
import TrainingCard from "./TrainingCard";
import CategoryCard from "./CategoryCard";
import { montserratFont, latoFont } from "@/utils/fonts";
import {
  HiArrowLeft,
  HiSquares2X2,
  HiMagnifyingGlass,
  HiXMark,
} from "react-icons/hi2";
import Link from "next/link";

interface TrainingCatalogProps {
  programData: HierarchicalProgramData;
  initialCategoryId?: string;
}

export default function TrainingCatalog({
  programData,
  initialCategoryId,
}: TrainingCatalogProps) {
  // Find initial category from props
  const initialCategory = initialCategoryId
    ? programData.categories.find((c) => c.id === initialCategoryId) || null
    : null;

  // State for selected category
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    initialCategory
  );

  // Flatten trainings from selected category for filtering
  const categoryTrainings = useMemo(() => {
    if (!selectedCategory) return [];
    return flattenCategoryTrainings(selectedCategory);
  }, [selectedCategory]);

  // Filter state for trainings
  const {
    filters,
    filteredTrainings,
    setSearchQuery,
    toggleFilter,
    clearFilters,
    hasActiveFilters,
  } = useTrainingFilters(categoryTrainings);

  // Category-specific filters based on selected category
  const categoryFilters = useMemo(() => {
    if (!selectedCategory) return programData.filters;
    const trainings = flattenCategoryTrainings(selectedCategory);
    return {
      categories: [selectedCategory.name],
      editors: Array.from(new Set(trainings.map((t) => t.editor))),
      durations: Array.from(
        new Set(trainings.map((t) => t.duration_days))
      ).sort((a, b) => a - b),
      levels: Array.from(new Set(trainings.map((t) => t.level))),
      languages: Array.from(new Set(trainings.flatMap((t) => t.languages))),
    };
  }, [selectedCategory, programData.filters]);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-700 to-purple-600 px-4 pb-12 pt-8">
        <div className="mx-auto max-w-7xl">
          {/* Back button */}
          {selectedCategory ? (
            <button
              onClick={() => {
                setSelectedCategory(null);
                clearFilters();
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <HiArrowLeft className="h-4 w-4" />
              Retour aux catégories
            </button>
          ) : (
            <Link
              href="/formations"
              className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/20"
            >
              <HiArrowLeft className="h-4 w-4" />
              Retour aux programmes
            </Link>
          )}

          <h1
            className={`${montserratFont.className} text-3xl font-bold text-white sm:text-4xl lg:text-5xl`}
          >
            {programData.program.title}
          </h1>
          <p
            className={`${latoFont.className} mt-4 max-w-2xl text-lg text-purple-200`}
          >
            {programData.program.description}
          </p>

          {/* Category chips - show current category or all categories */}
          <div className="mt-6 flex flex-wrap gap-2">
            {selectedCategory ? (
              <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
                {selectedCategory.name} - {selectedCategory.reference}
              </span>
            ) : (
              programData.program.categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
                >
                  {category}
                </span>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        {!selectedCategory ? (
          /* CATEGORIES VIEW */
          <div>
            <div className="mb-8 flex items-center gap-3">
              <HiSquares2X2 className="h-6 w-6 text-purple-600" />
              <h2
                className={`${montserratFont.className} text-2xl font-bold text-gray-900`}
              >
                Sélectionnez une catégorie
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {programData.categories.map((category) => (
                <CategoryCard
                  key={category.id}
                  category={category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>
          </div>
        ) : (
          /* TRAININGS VIEW */
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Simplified Filter Sidebar for category */}
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
                    value={filters.searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-100"
                  />
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Duration */}
              <div>
                <h4
                  className={`${montserratFont.className} mb-3 text-sm font-semibold text-gray-700`}
                >
                  Durée
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categoryFilters.durations.map((duration) => (
                    <button
                      key={duration}
                      onClick={() =>
                        toggleFilter("selectedDurations", duration)
                      }
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        filters.selectedDurations.includes(duration)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700"
                      }`}
                    >
                      {duration} jours
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Levels */}
              <div>
                <h4
                  className={`${montserratFont.className} mb-3 text-sm font-semibold text-gray-700`}
                >
                  Niveau
                </h4>
                <div className="flex flex-wrap gap-2">
                  {categoryFilters.levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => toggleFilter("selectedLevels", level)}
                      className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                        filters.selectedLevels.includes(level)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-700"
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Languages */}
              <div>
                <h4
                  className={`${montserratFont.className} mb-3 text-sm font-semibold text-gray-700`}
                >
                  Langue
                </h4>
                <div className="flex gap-2">
                  {categoryFilters.languages.map((language) => (
                    <button
                      key={language}
                      onClick={() =>
                        toggleFilter("selectedLanguages", language)
                      }
                      className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                        filters.selectedLanguages.includes(language)
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
                  <span className="font-semibold text-purple-600">
                    {filteredTrainings.length}
                  </span>{" "}
                  formation{filteredTrainings.length !== 1 ? "s" : ""} trouvée
                  {filteredTrainings.length !== 1 ? "s" : ""}
                </p>

                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 py-2 text-sm font-medium text-gray-600 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                  >
                    <HiXMark className="h-4 w-4" />
                    Réinitialiser les filtres
                  </button>
                )}
              </div>
            </aside>

            {/* Training Grid */}
            <div className="flex-1">
              {/* Category Header */}
              <div className="mb-6">
                <h2
                  className={`${montserratFont.className} text-2xl font-bold text-gray-900`}
                >
                  {selectedCategory.name}
                </h2>
                <p className={`${latoFont.className} mt-1 text-gray-500`}>
                  {selectedCategory.description} • {selectedCategory.reference}
                </p>
              </div>

              {filteredTrainings.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-2">
                  {filteredTrainings.map((training) => (
                    <TrainingCard
                      key={training.id}
                      training={training}
                      programId={programData.program.id}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white px-8 py-16 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3
                    className={`${montserratFont.className} mb-2 text-lg font-semibold text-gray-900`}
                  >
                    Aucune formation trouvée
                  </h3>
                  <p
                    className={`${latoFont.className} mb-4 text-sm text-gray-500`}
                  >
                    Essayez de modifier vos critères de recherche ou de
                    réinitialiser les filtres.
                  </p>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
                    >
                      Réinitialiser les filtres
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
