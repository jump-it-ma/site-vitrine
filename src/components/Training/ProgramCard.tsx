"use client";

import { Program } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import {
  HiArrowRight,
  HiShieldCheck,
  HiCpuChip,
  HiDocumentCheck,
  HiLightBulb,
  HiClipboardDocumentList,
  HiCog6Tooth,
  HiRocketLaunch,
  HiCodeBracket,
  HiBuildingOffice2,
} from "react-icons/hi2";
import { IconType } from "react-icons";

interface ProgramCardProps {
  program: Program;
  onClick: () => void;
  variant?:
    | "ai"
    | "security"
    | "privacy"
    | "agile"
    | "agile2"
    | "project"
    | "itsm"
    | "software"
    | "governance";
}

// Variant styles configuration
const variantStyles: Record<
  string,
  {
    gradient: string;
    glow: string;
    icon: string;
    badge: string;
    cta: string;
    Icon: IconType;
  }
> = {
  ai: {
    gradient:
      "bg-gradient-to-br from-purple-600/20 via-transparent to-blue-600/20",
    glow: "bg-purple-500/30",
    icon: "bg-gradient-to-br from-purple-500 to-purple-700",
    badge: "bg-purple-500/20 text-purple-200",
    cta: "text-purple-400",
    Icon: HiCpuChip,
  },
  security: {
    gradient:
      "bg-gradient-to-br from-emerald-600/20 via-transparent to-cyan-600/20",
    glow: "bg-emerald-500/30",
    icon: "bg-gradient-to-br from-emerald-500 to-emerald-700",
    badge: "bg-emerald-500/20 text-emerald-200",
    cta: "text-emerald-400",
    Icon: HiShieldCheck,
  },
  privacy: {
    gradient:
      "bg-gradient-to-br from-rose-600/20 via-transparent to-pink-600/20",
    glow: "bg-rose-500/30",
    icon: "bg-gradient-to-br from-rose-500 to-rose-700",
    badge: "bg-rose-500/20 text-rose-200",
    cta: "text-rose-400",
    Icon: HiDocumentCheck,
  },
  agile: {
    gradient:
      "bg-gradient-to-br from-amber-600/20 via-transparent to-orange-600/20",
    glow: "bg-amber-500/30",
    icon: "bg-gradient-to-br from-amber-500 to-amber-700",
    badge: "bg-amber-500/20 text-amber-200",
    cta: "text-amber-400",
    Icon: HiLightBulb,
  },
  agile2: {
    gradient:
      "bg-gradient-to-br from-orange-600/20 via-transparent to-red-600/20",
    glow: "bg-orange-500/30",
    icon: "bg-gradient-to-br from-orange-500 to-orange-700",
    badge: "bg-orange-500/20 text-orange-200",
    cta: "text-orange-400",
    Icon: HiRocketLaunch,
  },
  project: {
    gradient:
      "bg-gradient-to-br from-indigo-600/20 via-transparent to-violet-600/20",
    glow: "bg-indigo-500/30",
    icon: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    badge: "bg-indigo-500/20 text-indigo-200",
    cta: "text-indigo-400",
    Icon: HiClipboardDocumentList,
  },
  itsm: {
    gradient:
      "bg-gradient-to-br from-cyan-600/20 via-transparent to-teal-600/20",
    glow: "bg-cyan-500/30",
    icon: "bg-gradient-to-br from-cyan-500 to-cyan-700",
    badge: "bg-cyan-500/20 text-cyan-200",
    cta: "text-cyan-400",
    Icon: HiCog6Tooth,
  },
  software: {
    gradient:
      "bg-gradient-to-br from-lime-600/20 via-transparent to-green-600/20",
    glow: "bg-lime-500/30",
    icon: "bg-gradient-to-br from-lime-500 to-lime-700",
    badge: "bg-lime-500/20 text-lime-200",
    cta: "text-lime-400",
    Icon: HiCodeBracket,
  },
  governance: {
    gradient:
      "bg-gradient-to-br from-slate-500/20 via-transparent to-gray-600/20",
    glow: "bg-slate-500/30",
    icon: "bg-gradient-to-br from-slate-500 to-slate-700",
    badge: "bg-slate-500/20 text-slate-200",
    cta: "text-slate-400",
    Icon: HiBuildingOffice2,
  },
};

export default function ProgramCard({
  program,
  onClick,
  variant = "ai",
}: ProgramCardProps) {
  const styles = variantStyles[variant];
  const IconComponent = styles.Icon;

  return (
    <button
      onClick={onClick}
      className="group relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/20"
    >
      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${styles.gradient}`}
      />

      {/* Glow Effect */}
      <div
        className={`absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-all duration-500 group-hover:scale-150 ${styles.glow}`}
      />

      <div className="relative z-10 flex flex-col items-start gap-6">
        {/* Icon */}
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${styles.icon} shadow-lg`}
        >
          <IconComponent className="h-7 w-7 text-white" />
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
              className={`rounded-full px-3 py-1 text-xs font-medium ${styles.badge}`}
            >
              {category}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${styles.cta}`}
        >
          <span>Explorer les formations</span>
          <HiArrowRight className="h-4 w-4" />
        </div>
      </div>
    </button>
  );
}
