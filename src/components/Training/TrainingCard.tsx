"use client";

import { FlattenedTraining } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import Link from "next/link";
import {
  HiClock,
  HiAcademicCap,
  HiLanguage,
  HiCurrencyEuro,
  HiStar,
  HiDocumentCheck,
  HiArrowRight,
} from "react-icons/hi2";

interface TrainingCardProps {
  training: FlattenedTraining;
  programId: string;
}

export default function TrainingCard({
  training,
  programId,
}: TrainingCardProps) {
  return (
    <Link
      href={`/formations/${programId}/${training.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50"
    >
      {/* Header with Category + Best Seller */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-5 py-3">
        <span
          className={`${montserratFont.className} rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700`}
        >
          {training.category}
        </span>
        {training.is_best_seller && (
          <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
            <HiStar className="h-3 w-3" />
            Best Seller
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Editor & Reference */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
            {training.editor}
          </span>
          <span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
            {training.reference}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`${montserratFont.className} text-lg font-bold text-gray-900 transition-colors group-hover:text-purple-600`}
        >
          {training.title}
        </h3>

        {/* Meta Info */}
        <div className="mt-auto flex flex-col gap-2">
          {/* Duration & Level */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1.5">
              <HiClock className="h-4 w-4 text-gray-400" />
              <span>{training.duration_days} jours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <HiAcademicCap className="h-4 w-4 text-gray-400" />
              <span>{training.level}</span>
            </div>
          </div>

          {/* Evaluation */}
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <HiDocumentCheck className="h-4 w-4 text-gray-400" />
            <span>Évaluation: {training.evaluation}</span>
          </div>

          {/* Languages */}
          <div className="flex items-center gap-1.5 text-sm text-gray-600">
            <HiLanguage className="h-4 w-4 text-gray-400" />
            <div className="flex gap-1">
              {training.languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium"
                >
                  {lang === "FR" ? "🇫🇷" : "🇬🇧"} {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Price */}
      <div className="flex items-center justify-between border-t border-gray-100 bg-gradient-to-r from-purple-50 to-indigo-50 px-5 py-3">
        <div className="flex items-center gap-1.5">
          <HiCurrencyEuro className="h-4 w-4 text-purple-600" />
          <span className={`${latoFont.className} text-sm text-gray-600`}>
            Voucher examen
          </span>
        </div>
        <span
          className={`${montserratFont.className} text-lg font-bold text-purple-600`}
        >
          {training.price_voucher}€
        </span>
      </div>

      {/* View Details Indicator */}
      <div className="flex items-center justify-center gap-2 border-t border-gray-100 bg-white py-3 text-sm font-medium text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
        <span>Voir les détails</span>
        <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
