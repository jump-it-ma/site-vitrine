"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ProgramCard } from "@/components/Training";
import { HierarchicalProgramData, Program } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import { HiMagnifyingGlass, HiFunnel, HiXMark } from "react-icons/hi2";

// Import JSON data
import digitalTrustData from "@/data/programs/digital-trust.json";
import technicalTrainingData from "@/data/programs/technical-training.json";

// Type assertion helper to extract Program from hierarchical data
const extractProgram = (data: HierarchicalProgramData): Program => data.program;

// Available filter categories
const filterCategories = [
  { id: "all", label: "Tous les programmes" },
  { id: "security", label: "Cybersécurité" },
  { id: "software", label: "Développement & Test" },
] as const;

type FilterCategory = (typeof filterCategories)[number]["id"];

const programs: {
  data: HierarchicalProgramData;
  variant:
    | "ai"
    | "security"
    | "agile"
    | "project"
    | "itsm"
    | "software"
    | "governance"
    | "digital";
  filterCategory: FilterCategory;
}[] = [
  {
    data: digitalTrustData as HierarchicalProgramData,
    variant: "security",
    filterCategory: "security",
  },
  {
    data: technicalTrainingData as HierarchicalProgramData,
    variant: "software",
    filterCategory: "software",
  },
];

export default function ProgramsOverview() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  // Filter and search programs
  const filteredPrograms = useMemo(() => {
    return programs.filter(({ data, filterCategory }) => {
      // Apply category filter
      if (activeFilter !== "all" && filterCategory !== activeFilter) {
        return false;
      }

      // Apply search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const program = extractProgram(data);
        const matchesTitle = program.title.toLowerCase().includes(query);
        const matchesDescription = program.description
          .toLowerCase()
          .includes(query);
        const matchesCategories = program.categories.some((cat) =>
          cat.toLowerCase().includes(query)
        );
        return matchesTitle || matchesDescription || matchesCategories;
      }

      return true;
    });
  }, [searchQuery, activeFilter]);

  return (
    <section className="mx-auto w-full max-w-7xl">
      {/* Search and Filter Bar */}
      <div className="mb-10 space-y-4">
        {/* Search Input */}
        <div className="relative">
          <HiMagnifyingGlass className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher une formation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`${latoFont.className} w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-200`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <HiXMark className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {filterCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`${
                latoFont.className
              } rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? "bg-purple-600 text-white shadow-sm"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className={`${latoFont.className} text-sm text-slate-500`}>
          {filteredPrograms.length} programme
          {filteredPrograms.length !== 1 ? "s" : ""} trouvé
          {filteredPrograms.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Programs Grid - 3 columns */}
      {filteredPrograms.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filteredPrograms.map(({ data, variant }) => (
            <ProgramCard
              key={data.program.id}
              program={extractProgram(data)}
              variant={variant}
              onClick={() => router.push(`/formations/${data.program.id}`)}
            />
          ))}
        </div>
      ) : (
        /* Empty state */
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white py-16 px-6 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
            <HiMagnifyingGlass className="h-6 w-6 text-slate-400" />
          </div>
          <h3
            className={`${montserratFont.className} mb-2 text-lg font-semibold text-slate-900`}
          >
            Aucun programme trouvé
          </h3>
          <p className={`${latoFont.className} mb-4 text-slate-500`}>
            Essayez de modifier vos critères de recherche
          </p>
        </div>
      )}
    </section>
  );
}
