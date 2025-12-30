"use client";

import { Program } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import {
  HiArrowRight,
  HiShieldCheck,
  HiCodeBracket,
  HiCpuChip,
  HiDocumentCheck,
  HiLightBulb,
  HiClipboardDocumentList,
  HiCog6Tooth,
  HiRocketLaunch,
  HiBuildingOffice2,
  HiCloud,
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
    | "governance"
    | "digital"
    | "ea"
    | "sweng";
}

// Clean, professional variant styles for light backgrounds
const variantStyles: Record<
  string,
  {
    iconBg: string;
    iconColor: string;
    badge: string;
    accent: string;
    border: string;
    Icon: IconType;
  }
> = {
  ai: {
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    badge: "bg-purple-50 text-purple-700 ring-purple-200",
    accent: "text-purple-600",
    border: "hover:border-purple-300",
    Icon: HiCpuChip,
  },
  security: {
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    accent: "text-emerald-600",
    border: "hover:border-emerald-300",
    Icon: HiShieldCheck,
  },
  privacy: {
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
    badge: "bg-rose-50 text-rose-700 ring-rose-200",
    accent: "text-rose-600",
    border: "hover:border-rose-300",
    Icon: HiDocumentCheck,
  },
  agile: {
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    badge: "bg-amber-50 text-amber-700 ring-amber-200",
    accent: "text-amber-600",
    border: "hover:border-amber-300",
    Icon: HiLightBulb,
  },
  agile2: {
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    badge: "bg-orange-50 text-orange-700 ring-orange-200",
    accent: "text-orange-600",
    border: "hover:border-orange-300",
    Icon: HiRocketLaunch,
  },
  project: {
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    badge: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    accent: "text-indigo-600",
    border: "hover:border-indigo-300",
    Icon: HiClipboardDocumentList,
  },
  itsm: {
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-600",
    badge: "bg-cyan-50 text-cyan-700 ring-cyan-200",
    accent: "text-cyan-600",
    border: "hover:border-cyan-300",
    Icon: HiCog6Tooth,
  },
  software: {
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    badge: "bg-violet-50 text-violet-700 ring-violet-200",
    accent: "text-violet-600",
    border: "hover:border-violet-300",
    Icon: HiCodeBracket,
  },
  governance: {
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600",
    badge: "bg-slate-50 text-slate-700 ring-slate-200",
    accent: "text-slate-600",
    border: "hover:border-slate-300",
    Icon: HiBuildingOffice2,
  },
  digital: {
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "bg-blue-50 text-blue-700 ring-blue-200",
    accent: "text-blue-600",
    border: "hover:border-blue-300",
    Icon: HiCloud,
  },
  ea: {
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    badge: "bg-teal-50 text-teal-700 ring-teal-200",
    accent: "text-teal-600",
    border: "hover:border-teal-300",
    Icon: HiBuildingOffice2,
  },
  sweng: {
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-600",
    badge: "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
    accent: "text-fuchsia-600",
    border: "hover:border-fuchsia-300",
    Icon: HiDocumentCheck,
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
      className={`group flex w-full flex-col items-start rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${styles.border}`}
    >
      {/* Icon */}
      <div
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg}`}
      >
        <IconComponent className={`h-6 w-6 ${styles.iconColor}`} />
      </div>

      {/* Title */}
      <h3
        className={`${montserratFont.className} mb-3 text-lg font-bold text-slate-900`}
      >
        {program.title}
      </h3>

      {/* Description */}
      <p
        className={`${latoFont.className} mb-5 line-clamp-3 text-sm leading-relaxed text-slate-600 sm:text-base`}
      >
        {program.description}
      </p>

      {/* Categories */}
      <div className="mb-6 flex flex-wrap gap-2">
        {program.categories.map((category) => (
          <span
            key={category}
            className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${styles.badge}`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* CTA - Pushed to bottom with margin-top auto */}
      <div
        className={`mt-auto flex items-center gap-2 text-sm font-semibold transition-all duration-300 group-hover:gap-3 ${styles.accent}`}
      >
        <span>Explorer les formations</span>
        <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </button>
  );
}
