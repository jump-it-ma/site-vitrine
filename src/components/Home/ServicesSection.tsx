"use client";

import { latoFont, montserratFont } from "@/utils/fonts";
import { homepage, conseil } from "@/content/pages";
import Link from "next/link";
import {
  HiArrowRight,
  HiOutlineAcademicCap,
  HiOutlineClipboardDocumentCheck, // Audit
  HiOutlineUserGroup, // Prestation
  HiOutlineGlobeAlt, // Offshore
} from "react-icons/hi2";

export default function ServicesSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            Nos services
          </h2>
          <p
            className={`${latoFont.className} text-lg text-slate-600 max-w-2xl mx-auto`}
          >
            Des solutions pour accompagner votre transformation digitale
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-8">
          {/* Card 1: Formation */}
          <div className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-start">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineAcademicCap className="w-7 h-7 text-purple-600" />
              </div>
              <h3
                className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors`}
              >
                Formation
              </h3>
              <p
                className={`${latoFont.className} text-slate-600 text-base mb-6 leading-relaxed flex-grow`}
              >
                {homepage.formations}
              </p>
              <Link
                href="/formations"
                className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all text-sm uppercase tracking-wide"
              >
                Notre catalogue
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 2: Audit & Analyse */}
          <div className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-start">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineClipboardDocumentCheck className="w-7 h-7 text-emerald-600" />
              </div>
              <h3
                className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors`}
              >
                Développement des solutions
              </h3>
              <p
                className={`${latoFont.className} text-slate-600 text-base mb-6 leading-relaxed flex-grow line-clamp-3`}
              >
                {conseil.audit}
              </p>
              <Link
                href="/conseil"
                className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all text-sm uppercase tracking-wide"
              >
                En savoir plus
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 3: Prestation */}
          <div className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-start">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineUserGroup className="w-7 h-7 text-blue-600" />
              </div>
              <h3
                className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors`}
              >
                Consulting
              </h3>
              <p
                className={`${latoFont.className} text-slate-600 text-base mb-6 leading-relaxed flex-grow line-clamp-3`}
              >
                {conseil.prestation}
              </p>
              <Link
                href="/conseil"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all text-sm uppercase tracking-wide"
              >
                Nos consultants
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Card 4: Offshore */}
          <div className="group relative bg-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="flex flex-col h-full items-start">
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <HiOutlineGlobeAlt className="w-7 h-7 text-orange-600" />
              </div>
              <h3
                className={`${montserratFont.className} text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors`}
              >
                Services nearshore
              </h3>
              <p
                className={`${latoFont.className} text-slate-600 text-base mb-6 leading-relaxed flex-grow line-clamp-3`}
              >
                {conseil.offshore}
              </p>
              <Link
                href="/conseil"
                className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all text-sm uppercase tracking-wide"
              >
                Voir l&apos;offre
                <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
