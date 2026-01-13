"use client";

import { montserratFont, latoFont } from "@/utils/fonts";
import agileManagementData from "@/data/programs/agile-management.json";
import digitalTrustData from "@/data/programs/digital-trust.json";
import itServiceManagementData from "@/data/programs/it-service-management.json";
import projectManagementData from "@/data/programs/project-management.json";
import Link from "next/link";
import { HiArrowRight, HiClock, HiAcademicCap } from "react-icons/hi2";

const FEATURED_IDS = [
  "psm1",
  "ISO27001LI",
  "itil4-foundation",
  "pmp-preparation",
];

export default function FeaturedTrainings() {
  // Combine all training data from different programs
  const allPrograms = [
    agileManagementData,
    digitalTrustData,
    itServiceManagementData,
    projectManagementData,
  ];

  // Extract all trainings from all programs into a flat list
  const allTrainings = allPrograms.flatMap((program) =>
    program.categories.flatMap((cat) =>
      cat.trainings.map((t) => ({
        ...t,
        categoryName: cat.name,
        programId: program.program.id,
      }))
    )
  );

  // Filter to get only featured trainings and maintain the order of FEATURED_IDS
  const featuredTrainings = FEATURED_IDS.map((id) =>
    allTrainings.find((t) => t.id === id)
  ).filter(Boolean);

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
            if (!training) return null;
            return (
              <Link
                key={training.id}
                href={`/formations/${training.programId}/${training.id}`}
                className="group relative flex flex-col bg-white rounded-xl p-6 hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 transform hover:-translate-y-1 border border-slate-100"
              >
                {/* Best Seller Badge - Top Left */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-500 text-white shadow-md">
                    ⭐ Best Seller
                  </span>
                </div>

                {/* Content Section */}
                <div className="mt-12 mb-6 text-center">
                  <h3
                    className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-700 transition-colors`}
                  >
                    {training.title}
                  </h3>

                  <p
                    className={`${latoFont.className} text-slate-600 text-sm leading-relaxed line-clamp-3`}
                  >
                    {training.details?.description}
                  </p>
                </div>

                {/* Badges at Bottom */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    <HiAcademicCap className="w-3.5 h-3.5" />
                    {training.categoryName}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700">
                    <HiClock className="w-3.5 h-3.5" />
                    {training.duration_days} jours
                  </span>
                </div>

                {/* Footer Link */}
                <div className="mt-auto pt-4 text-center border-t border-slate-100">
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
