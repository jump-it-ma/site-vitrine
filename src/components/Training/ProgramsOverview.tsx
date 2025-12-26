"use client";

import { useRouter } from "next/navigation";
import { ProgramCard } from "@/components/Training";
import { HierarchicalProgramData, Program } from "@/types/training";
import { montserratFont } from "@/utils/fonts";

// Import JSON data - only digital-trust exists for now
import digitalTrustData from "@/data/programs/digital-trust.json";

// Type assertion helper to extract Program from hierarchical data
const extractProgram = (data: HierarchicalProgramData): Program => data.program;

const programs: {
  data: HierarchicalProgramData;
  variant:
    | "ai"
    | "security"
    | "agile"
    | "project"
    | "itsm"
    | "software"
    | "governance"
    | "digital";
}[] = [
  { data: digitalTrustData as HierarchicalProgramData, variant: "security" },
  // Other programs can be added here as they are created
];

export default function ProgramsOverview() {
  const router = useRouter();

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2
          className={`${montserratFont.className} mb-4 text-3xl font-bold text-white sm:text-4xl`}
        >
          Nos Programmes de Formation
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-300">
          Explorez nos programmes certifiants en gouvernance de l&apos;IA et
          cybersécurité, conçus pour les professionnels souhaitant acquérir des
          compétences de pointe.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-2">
        {programs.map(({ data, variant }) => (
          <ProgramCard
            key={data.program.id}
            program={extractProgram(data)}
            variant={variant}
            onClick={() => router.push(`/formations/${data.program.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
