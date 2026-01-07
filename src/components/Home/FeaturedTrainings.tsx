"use client";

import { montserratFont, latoFont } from "@/utils/fonts";
import technicalTrainingData from "@/data/programs/technical-training.json"; // Import new JSON
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiClock, HiAcademicCap } from "react-icons/hi2";

import { CypressIcon, PlaywrightIcon, ReactIcon, SeleniumIcon } from "../icons";

const FEATURED_IDS = ["cypress", "selenium", "reactjs", "playwright"];

const ICON_MAP: Record<
  string,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  cypress: CypressIcon,
  selenium: SeleniumIcon,
  reactjs: ReactIcon,
  playwright: PlaywrightIcon,
};

export default function FeaturedTrainings() {
  // Extract all trainings from categories into a flat list for filtering
  const allTrainings = technicalTrainingData.categories.flatMap((cat) =>
    cat.trainings.map((t) => ({ ...t, categoryName: cat.name }))
  );

  const featuredTrainings = allTrainings.filter((t) =>
    FEATURED_IDS.includes(t.id)
  );

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4">
            Catalogue 2026
          </span>
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            Formations à la une
          </h2>
          <p
            className={`${latoFont.className} text-lg text-slate-600 max-w-2xl mx-auto`}
          >
            Développez vos compétences avec nos programmes les plus demandés,
            alliant théorie et pratique pour une maîtrise immédiate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTrainings.map((training) => {
            const IconComponent = ICON_MAP[training.id];
            return (
              <Link
                key={training.id}
                href={`/formations/technical-training/${training.id}`}
                className="group flex flex-col bg-white rounded-xl p-8 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    {IconComponent ? (
                      <IconComponent className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-110 transition-transform duration-500" />
                    ) : (
                      <Image
                        src={`/Formations/${training.id}.png`}
                        alt={training.title}
                        fill
                        className="object-contain group-hover:scale-110 transition-transform duration-500"
                      />
                    )}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-200/50 text-slate-600">
                    <HiAcademicCap className="w-3.5 h-3.5" />
                    {training.categoryName}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                    <HiClock className="w-3.5 h-3.5" />
                    {training.duration_days} jours
                  </span>
                </div>

                {/* Content */}
                <div className="text-center flex-grow">
                  <h3
                    className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors`}
                  >
                    {training.title}
                  </h3>

                  <p
                    className={`${latoFont.className} text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3`}
                  >
                    {training.details?.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="mt-auto pt-2 text-center">
                  <span className="inline-flex items-center text-sm font-bold text-purple-600 hover:text-purple-800 transition-colors gap-1 group/link">
                    Voir le programme
                    <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/formations"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-purple-600 hover:bg-purple-700 md:text-lg md:px-10 transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95"
          >
            Voir toutes nos formations
          </Link>
        </div>
      </div>
    </section>
  );
}
