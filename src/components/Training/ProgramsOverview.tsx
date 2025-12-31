"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { ProgramCard } from "@/components/Training";
import { HierarchicalProgramData, Program } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import {
  HiMagnifyingGlass,
  HiFunnel,
  HiXMark,
  HiChevronDown,
} from "react-icons/hi2";

// Import JSON data
import digitalTrustData from "@/data/programs/digital-trust.json";
import technicalTrainingData from "@/data/programs/technical-training.json";
import agileManagementData from "@/data/programs/agile-management.json";
import projectManagementData from "@/data/programs/project-management.json";
import itServiceManagementData from "@/data/programs/it-service-management.json";
import enterpriseArchitectureData from "@/data/programs/enterprise-architecture.json";
import softwareEngineeringData from "@/data/programs/software-engineering.json";
import itGovernanceData from "@/data/programs/it-governance.json";
import processManagementData from "@/data/programs/process-management.json";
import qhseRiskCsrData from "@/data/programs/qhse-risk-csr.json";
import digitalManagementTechnologiesData from "@/data/programs/digital-management-technologies.json";
import aiGovernanceManagementData from "@/data/programs/ai-governance-management.json";

// Type assertion helper to extract Program from hierarchical data
const extractProgram = (data: HierarchicalProgramData): Program => data.program;

// Available filter categories
const filterCategories = [
  { id: "all", label: "Tous les programmes" },
  { id: "security", label: "Cybersécurité" },
  { id: "software", label: "Développement & Test" },
  { id: "agile", label: "Management & Agile" },
  { id: "project", label: "Gestion de Projet" },
  { id: "itsm", label: "IT Service Management" },
  { id: "ea", label: "Architecture d'Entreprise" },
  { id: "sweng", label: "Ingénierie Logicielle" },
  { id: "gov", label: "IT Governance" },
  { id: "process", label: "Process Management & Optimisation" },
  { id: "qhse", label: "QHSE & Risk Management" },
  { id: "digital-mgmt", label: "Digital Management & Tech" },
  { id: "ai-gov", label: "AI Governance & Compliance" },
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
    | "digital"
    | "ea"
    | "sweng"
    | "gov"
    | "process"
    | "qhse"
    | "cloud"
    | "ai-gov";
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
  {
    data: agileManagementData as HierarchicalProgramData,
    variant: "agile",
    filterCategory: "agile",
  },
  {
    data: projectManagementData as HierarchicalProgramData,
    variant: "project",
    filterCategory: "project",
  },
  {
    data: itServiceManagementData as HierarchicalProgramData,
    variant: "itsm",
    filterCategory: "itsm",
  },
  {
    data: enterpriseArchitectureData as HierarchicalProgramData,
    variant: "ea",
    filterCategory: "ea",
  },
  {
    data: softwareEngineeringData as HierarchicalProgramData,
    variant: "sweng",
    filterCategory: "sweng",
  },
  {
    data: itGovernanceData as HierarchicalProgramData,
    variant: "gov",
    filterCategory: "gov",
  },
  {
    data: processManagementData as HierarchicalProgramData,
    variant: "process",
    filterCategory: "process",
  },
  {
    data: qhseRiskCsrData as HierarchicalProgramData,
    variant: "qhse",
    filterCategory: "qhse",
  },
  {
    data: digitalManagementTechnologiesData as HierarchicalProgramData,
    variant: "cloud",
    filterCategory: "digital-mgmt",
  },
  {
    data: aiGovernanceManagementData as HierarchicalProgramData,
    variant: "ai-gov",
    filterCategory: "ai-gov",
  },
];

export default function ProgramsOverview() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      <div className="mb-10 relative z-20">
        <div
          className={`flex items-center rounded-2xl border bg-white p-2 shadow-sm transition-all duration-300 focus-within:border-purple-500 focus-within:ring-4 focus-within:ring-purple-500/10 ${
            activeFilter !== "all" ? "border-purple-200" : "border-slate-200"
          }`}
        >
          {/* Search Icon */}
          <div className="flex h-10 w-10 shrink-0 items-center justify-center text-slate-400">
            <HiMagnifyingGlass className="h-5 w-5" />
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Rechercher une formation..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`${latoFont.className} min-w-0 flex-1 border-none bg-transparent py-2 text-slate-900 placeholder:text-slate-400 focus:ring-0 outline-none`}
          />

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-2 pr-2">
            {/* Clear Search */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 focus:outline-none"
                aria-label="Effacer la recherche"
              >
                <HiXMark className="h-5 w-5" />
              </button>
            )}

            {/* Divider */}
            <div className="h-6 w-px bg-slate-200" />

            {/* Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none ${
                activeFilter !== "all"
                  ? "bg-purple-50 text-purple-700 ring-1 ring-purple-200 hover:bg-purple-100"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
              aria-label="Filtrer par catégorie"
              aria-expanded={isFilterOpen}
            >
              <span className="hidden sm:block">
                {activeFilter !== "all"
                  ? filterCategories.find((c) => c.id === activeFilter)?.label
                  : "Filtres"}
              </span>
              <HiChevronDown
                className={`h-5 w-5 transition-transform duration-200 ${
                  activeFilter !== "all" ? "text-purple-600" : "text-slate-500"
                } ${isFilterOpen ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Filters Dropdown */}
        {isFilterOpen && (
          <>
            {/* Backdrop to close on click outside */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setIsFilterOpen(false)}
            />

            {/* Menu */}
            <div className="absolute right-0 top-full z-20 mt-2 w-full max-w-sm origin-top-right rounded-2xl border border-slate-100 bg-white p-2 shadow-xl ring-1 ring-slate-900/5 sm:w-80">
              <div className="mb-2 px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Catégories
              </div>
              <div className="max-h-80 overflow-y-auto px-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-purple-200 hover:scrollbar-thumb-purple-300 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:rounded-full">
                {filterCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveFilter(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                      activeFilter === category.id
                        ? "bg-purple-50 text-purple-700"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span>{category.label}</span>
                    {activeFilter === category.id && (
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
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
