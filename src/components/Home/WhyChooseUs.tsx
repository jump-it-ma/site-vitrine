"use client";

import React from "react";
import Image from "next/image";
import { latoFont, montserratFont } from "@/utils/fonts";
import {
  HiLightBulb,
  HiBolt,
  HiChartBar,
  HiAcademicCap,
} from "react-icons/hi2";

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="z-10 max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-32 relative z-20">
          <div className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4">
            Pourquoi Nous ?
          </div>
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            L&apos;Excellence Tech
          </h2>
          <p
            className={`${latoFont.className} text-slate-600 text-lg max-w-xl mx-auto font-light`}
          >
            Une méthodologie éprouvée et une expertise certifiée pour propulser
            la réussite de vos projets et de vos équipes.
          </p>
        </div>

        {/* Integration Grid (Hub) */}
        <div className="relative max-w-5xl mx-auto">
          {/* Axis Lines */}
          <div className="absolute top-1/2 left-[-50%] right-[-50%] h-[1px] bg-gradient-to-r from-transparent via-slate-300/50 to-transparent -translate-y-1/2"></div>
          <div className="absolute left-1/2 top-[-50%] bottom-[-50%] w-[1px] bg-gradient-to-b from-transparent via-slate-300/50 to-transparent -translate-x-1/2"></div>

          {/* Center Hub */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative w-[260px] h-[260px]">
              {/* 3 filled concentric circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="center-circle center-circle--3 w-56 h-56 rounded-full bg-purple-100/50"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="center-circle center-circle--2 w-40 h-40 rounded-full bg-purple-200/50"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="center-circle w-24 h-24 rounded-full bg-purple-300/50"></div>
              </div>

              {/* Rays */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="center-ray-horizontal center-ray-left bg-gradient-to-l from-purple-500/50 via-purple-400/20 to-transparent w-14 h-[1px] absolute right-1/2 translate-x-[-40px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="center-ray-horizontal center-ray-right bg-gradient-to-r from-purple-500/50 via-purple-400/20 to-transparent w-14 h-[1px] absolute left-1/2 translate-x-[40px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="center-ray-vertical center-ray-top bg-gradient-to-t from-purple-500/50 via-purple-400/20 to-transparent h-14 w-[1px] absolute bottom-1/2 translate-y-[-40px]"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="center-ray-vertical center-ray-bottom bg-gradient-to-b from-purple-500/50 via-purple-400/20 to-transparent h-14 w-[1px] absolute top-1/2 translate-y-[40px]"></div>
              </div>

              {/* Core Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex bg-white w-20 h-20 rounded-full ring-slate-50 ring-8 relative shadow-xl shadow-purple-200 items-center justify-center z-30">
                  <Image
                    src="/Homepage/icon-jumpit.png"
                    alt="Jump It Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-32 relative z-10">
            {/* Item 1 (Top Left) - Expertise */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-all duration-300 z-10 relative shadow-sm">
                <HiLightBulb className="w-7 h-7 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3
                className={`${montserratFont.className} text-slate-900 text-lg font-bold mb-2`}
              >
                Expertise reconnue
              </h3>
              <p
                className={`${latoFont.className} text-sm text-slate-500 max-w-[240px]`}
              >
                Une équipe d&apos;experts
              </p>
            </div>

            {/* Item 2 (Top Right) - Agility */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-all duration-300 z-10 relative shadow-sm">
                <HiBolt className="w-7 h-7 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3
                className={`${montserratFont.className} text-slate-900 text-lg font-bold mb-2`}
              >
                Approche agile
              </h3>
              <p
                className={`${latoFont.className} text-sm text-slate-500 max-w-[240px]`}
              >
                Des méthodes flexibles pour s&apos;adapter à vos besoins
                évolutifs.
              </p>
            </div>

            {/* Item 3 (Bottom Left) - Results */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-all duration-300 z-10 relative shadow-sm">
                <HiChartBar className="w-7 h-7 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3
                className={`${montserratFont.className} text-slate-900 text-lg font-bold mb-2`}
              >
                Résultats Mesurables
              </h3>
              <p
                className={`${latoFont.className} text-sm text-slate-500 max-w-[240px]`}
              >
                Un focus constant sur le ROI et la performance.
              </p>
            </div>

            {/* Item 4 (Bottom Right) - Certification */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-purple-500 group-hover:shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-all duration-300 z-10 relative shadow-sm">
                <HiAcademicCap className="w-7 h-7 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3
                className={`${montserratFont.className} text-slate-900 text-lg font-bold mb-2`}
              >
                Certifications
              </h3>
              <p
                className={`${latoFont.className} text-sm text-slate-500 max-w-[240px]`}
              >
                Formations accréditées et reconnues (PMP, ISO, etc.).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
