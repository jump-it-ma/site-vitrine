"use client";

import { Category } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import { HiArrowRight, HiAcademicCap, HiDocumentText } from "react-icons/hi2";

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export default function CategoryCard({ category, onClick }: CategoryCardProps) {
  const trainingCount = category.trainings.length;
  const bestSellerCount = category.trainings.filter(
    (t) => t.is_best_seller,
  ).length;

  return (
    <button
      onClick={onClick}
      className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-xl hover:shadow-purple-100/50"
    >
      {/* Best seller indicator */}
      {bestSellerCount > 0 && (
        <div className="absolute right-4 top-4 rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
          {bestSellerCount} Best Seller{bestSellerCount > 1 ? "s" : ""}
        </div>
      )}

      {/* Category Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg transition-transform group-hover:scale-110">
        <HiDocumentText className="h-6 w-6 text-white" />
      </div>

      {/* Category Name */}
      <h3
        className={`${montserratFont.className} mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-purple-600`}
      >
        {category.name}
      </h3>

      {/* Description */}
      <p className={`${latoFont.className} mb-3 text-sm text-gray-500`}>
        {category.description}
      </p>

      {/* Reference Badge */}
      <div className="mb-4 flex items-center gap-2">
        <span className="rounded bg-purple-100 px-2 py-0.5 text-xs font-medium text-purple-700">
          {category.reference}
        </span>
      </div>

      {/* Training count */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-sm text-gray-500">
          <HiAcademicCap className="h-4 w-4" />
          <span>
            {trainingCount} formation{trainingCount > 1 ? "s" : ""}
          </span>
        </div>

        {/* CTA Arrow */}
        <div className="flex items-center gap-2 text-sm font-semibold text-purple-600 transition-all duration-300 group-hover:gap-3">
          <span>Voir</span>
          <HiArrowRight className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
}
