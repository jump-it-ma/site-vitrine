"use client";

import { ProgramData } from "@/types/training";
import { useTrainingFilters } from "@/hooks/useTrainingFilters";
import FilterSidebar from "./FilterSidebar";
import TrainingCard from "./TrainingCard";
import { montserratFont, latoFont } from "@/utils/fonts";
import { HiArrowLeft } from "react-icons/hi2";
import Link from "next/link";

interface TrainingCatalogProps {
  programData: ProgramData;
}

export default function TrainingCatalog({ programData }: TrainingCatalogProps) {
  const {
    filters,
    filteredTrainings,
    setSearchQuery,
    toggleFilter,
    clearFilters,
    hasActiveFilters,
  } = useTrainingFilters(programData.trainings);

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 px-4 pb-12 pt-8">
        <div className="mx-auto max-w-7xl">
          {/* Back button */}
          <Link
            href="/formations"
            className="mb-6 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/20"
          >
            <HiArrowLeft className="h-4 w-4" />
            Retour aux programmes
          </Link>

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

          {/* Category chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {programData.program.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <FilterSidebar
            filters={programData.filters}
            activeFilters={filters}
            onSearchChange={setSearchQuery}
            onToggleCategory={(category) =>
              toggleFilter("selectedCategories", category)
            }
            onToggleDuration={(duration) =>
              toggleFilter("selectedDurations", duration)
            }
            onToggleLanguage={(language) =>
              toggleFilter("selectedLanguages", language)
            }
            onClearFilters={clearFilters}
            hasActiveFilters={hasActiveFilters}
            resultsCount={filteredTrainings.length}
          />

          {/* Training Grid */}
          <div className="flex-1">
            {filteredTrainings.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredTrainings.map((training) => (
                  <TrainingCard key={training.id} training={training} />
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
      </div>
    </div>
  );
}
