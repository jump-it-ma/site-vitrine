"use client";

import { montserratFont, latoFont } from "@/utils/fonts";
import technicalTrainingData from "@/data/programs/technical-training.json"; // Import new JSON
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight, HiClock, HiAcademicCap } from "react-icons/hi2";

const FEATURED_IDS = ["cypress", "selenium", "reactjs", "playwright"]; // Select specific popular formations

export default function FeaturedTrainings() {
  // Extract all trainings from categories into a flat list for filtering
  const allTrainings = technicalTrainingData.categories.flatMap((cat) =>
    cat.trainings.map((t) => ({ ...t, categoryName: cat.name }))
  );

  const featuredTrainings = allTrainings.filter((t) =>
    FEATURED_IDS.includes(t.id)
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4">
            Catalogue 2025
          </span>
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            Formations à la Une
          </h2>
          <p
            className={`${latoFont.className} text-lg text-slate-600 max-w-2xl mx-auto`}
          >
            Développez vos compétences avec nos programmes les plus demandés,
            alliant théorie et pratique pour une maîtrise immédiate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTrainings.map((training) => (
            <Link
              key={training.id}
              href={`/formations/technical-training/${training.id}`}
              className="group flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-slate-50 overflow-hidden group">
                <div className="absolute inset-0 bg-purple-900/5 group-hover:bg-transparent transition-colors z-10" />
                {/* Fallback image or nice placeholder since JSON doesn't define image_url directly, 
                    but previously we used /Formations/[id].png. We can try to construct it. */}
                <Image
                  src={`/Formations/${training.id}.png`}
                  alt={training.title}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                    <HiAcademicCap className="w-3 h-3" />
                    {training.categoryName}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-600">
                    <HiClock className="w-3 h-3" />
                    {training.duration_days} jours
                  </span>
                </div>

                <h3
                  className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors`}
                >
                  {training.title}
                </h3>

                <p
                  className={`${latoFont.className} text-slate-600 text-sm mb-6 line-clamp-3`}
                >
                  {training.details?.description}
                </p>

                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="inline-flex items-center text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors gap-1 group/link">
                    Voir le programme
                    <HiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
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
