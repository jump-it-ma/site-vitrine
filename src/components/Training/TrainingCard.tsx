"use client";

import { Training } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import {
  HiClock,
  HiAcademicCap,
  HiLanguage,
  HiCurrencyEuro,
} from "react-icons/hi2";

interface TrainingCardProps {
  training: Training;
}

export default function TrainingCard({ training }: TrainingCardProps) {
  const levels = Array.isArray(training.level)
    ? training.level.join(" / ")
    : training.level;

  const totalPrice =
    (training.price.lms || 0) + (training.price.exam_voucher || 0);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-100/50">
      {/* Category Badge + Availability */}
      <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 px-5 py-3">
        <span
          className={`${montserratFont.className} rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700`}
        >
          {training.category}
        </span>
        {training.availability && (
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            {training.availability}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        {/* Editor Badge */}
        <span className="w-fit rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-600">
          {training.editor}
        </span>

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
              <span>{levels}</span>
            </div>
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
                  {lang}
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
            {training.price.lms && `LMS: ${training.price.lms}€`}
            {training.price.lms && training.price.exam_voucher && " + "}
            {training.price.exam_voucher &&
              `Exam: ${training.price.exam_voucher}€`}
          </span>
        </div>
        <span
          className={`${montserratFont.className} text-lg font-bold text-purple-600`}
        >
          {totalPrice}€
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 border-t border-gray-100 px-5 py-3">
        {training.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-500"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
