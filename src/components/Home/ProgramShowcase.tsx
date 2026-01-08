"use client";

import React from "react";
import Link from "next/link";
import { HiChatBubbleBottomCenterText, HiAcademicCap } from "react-icons/hi2";
import { montserratFont, latoFont } from "@/utils/fonts";

// Import data
import technicalData from "@/data/programs/technical-training.json";
import managementData from "@/data/programs/project-management.json";
import securityData from "@/data/programs/digital-trust.json";

// Type definition for a simplified program item
interface ProgramItem {
  id: string;
  title: string;
  category: string;
  description: string;
  editor: string;
  duration: number;
}

export default function ProgramShowcase() {
  // Helper to extract trainings
  const extractTrainings = (data: any, sourceName: string): ProgramItem[] => {
    return data.categories.flatMap((cat: any) =>
      cat.trainings.map((t: any) => ({
        id: t.id,
        title: t.title,
        category: cat.name,
        // Use details description if available, otherwise fallback
        description: t.details?.description || t.title,
        editor: t.editor || sourceName,
        duration: t.duration_days,
      }))
    );
  };

  const technicalTrainings = extractTrainings(technicalData, "Technical");
  const managementTrainings = extractTrainings(managementData, "Management");
  const securityTrainings = extractTrainings(securityData, "Security");

  // Mix and slice to get interesting columns
  // Column 1: A mix of technical
  const column1 = [...technicalTrainings].slice(0, 10);

  // Column 2: Management & Agile
  const column2 = [
    ...managementTrainings,
    ...technicalTrainings.slice(10, 15),
  ].slice(0, 10); // Mix a bit

  // Column 3: Security & Enterprise
  const column3 = [...securityTrainings].slice(0, 10);

  // Function to duplicate items for seamless loop if needed,
  // but looking at the CSS, duplicate items *in* the render map is usually easier
  // or we just render the list twice in the column div.
  // The CSS animation expects the content to be long enough.
  // Let's just render the list 3 times to be safe for the "translateY(-33.33%)" effect.
  // Actually, usually you render [items, items, items] so 1/3 is exactly one set.

  const renderColumn = (items: ProgramItem[], scrollClass: string) => (
    <div className="overflow-hidden h-[600px] relative">
      {" "}
      {/* Fixed height window */}
      <div className={`${scrollClass} space-y-6`}>
        {/* Render 3 sets for smooth looping */}
        {[...items, ...items, ...items].map((program, idx) => (
          <div
            key={`${program.id}-${idx}`}
            className="rounded-2xl border p-6 border-slate-200 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
          >
            <blockquote
              className={`${latoFont.className} text-base text-slate-600 mb-4`}
            >
              <span className="inline-flex gap-2">
                <HiChatBubbleBottomCenterText className="w-5 h-5 text-purple-200 flex-shrink-0" />
                <span className="line-clamp-3">{program.description}</span>
              </span>
            </blockquote>

            <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
              <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-600">
                <HiAcademicCap className="w-5 h-5" />
              </div>
              <div>
                <Link
                  href={`/formations/${program.id}`}
                  className="hover:underline hover:text-purple-600 transition-colors"
                >
                  <div
                    className={`${montserratFont.className} text-sm font-bold text-slate-900 line-clamp-1`}
                  >
                    {program.title}
                  </div>
                </Link>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  {program.editor} • {program.duration} jours
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold tracking-wider uppercase mb-4">
            Aperçu des Programmes
          </span>
          <h2
            className={`${montserratFont.className} text-3xl sm:text-4xl font-bold text-slate-900 mb-4`}
          >
            Découvrez nos parcours d&apos;excellence
          </h2>
          <p
            className={`${latoFont.className} text-lg text-slate-600 max-w-2xl mx-auto`}
          >
            Une sélection de nos formations les plus impactantes, conçues pour
            transformer vos compétences et celles de vos équipes.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {renderColumn(column1, "scrollColumn1")}
          {renderColumn(column2, "scrollColumn2")}
          {renderColumn(column3, "scrollColumn3")}
        </div>
      </div>
    </section>
  );
}
