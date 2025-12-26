"use client";

import { Program } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import { HiArrowRight, HiShieldCheck, HiCpuChip } from "react-icons/hi2";

interface ProgramCardProps {
  program: Program;
  onClick: () => void;
  variant?: "ai" | "security";
}

export default function ProgramCard({
  program,
  onClick,
  variant = "ai",
}: ProgramCardProps) {
  const isAI = variant === "ai";

  return (
    <button
      onClick={onClick}
      className="group relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isAI
            ? "bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20"
            : "bg-gradient-to-br from-emerald-600/20 via-transparent to-cyan-600/20"
        }`}
      />

      {/* Glow Effect */}
      <div
        className={`absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-all duration-500 group-hover:scale-150 ${
          isAI ? "bg-purple-500/30" : "bg-emerald-500/30"
        }`}
      />

      <div className="relative z-10 flex flex-col items-start gap-6">
        {/* Icon */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${
            isAI
              ? "bg-gradient-to-br from-purple-500 to-purple-700"
              : "bg-gradient-to-br from-emerald-500 to-emerald-700"
          } shadow-lg`}
        >
          {isAI ? (
            <HiCpuChip className="h-7 w-7 text-white" />
          ) : (
            <HiShieldCheck className="h-7 w-7 text-white" />
          )}
        </div>

        {/* Title */}
        <h3
          className={`${montserratFont.className} text-left text-xl font-bold text-white sm:text-2xl`}
        >
          {program.title}
        </h3>

        {/* Description */}
        <p
          className={`${latoFont.className} text-left text-sm text-gray-300 sm:text-base`}
        >
          {program.description}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {program.categories.map((category) => (
            <span
              key={category}
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                isAI
                  ? "bg-purple-500/20 text-purple-200"
                  : "bg-emerald-500/20 text-emerald-200"
              }`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${
            isAI ? "text-purple-400" : "text-emerald-400"
          }`}
        >
          <span>Explorer les formations</span>
          <HiArrowRight className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
}
