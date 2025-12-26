"use client";

import { useRouter } from "next/navigation";
import { ProgramCard } from "@/components/Training";
import { ProgramData } from "@/types/training";
import { montserratFont } from "@/utils/fonts";

// Import JSON data
import aiGovernanceData from "@/data/programs/ai-governance.json";
import digitalTrustData from "@/data/programs/digital-trust.json";
import agileManagementData from "@/data/programs/agile-management.json";
import projectManagementData from "@/data/programs/project-management.json";
import itsmData from "@/data/programs/it-service-management.json";
import softwareEngineeringData from "@/data/programs/software-engineering.json";
import itGovernanceData from "@/data/programs/it-governance.json";

const programs: {
  data: ProgramData;
  variant:
    | "ai"
    | "security"
    | "agile"
    | "project"
    | "itsm"
    | "software"
    | "governance";
}[] = [
  { data: aiGovernanceData as ProgramData, variant: "ai" },
  { data: digitalTrustData as ProgramData, variant: "security" },
  { data: agileManagementData as ProgramData, variant: "agile" },
  { data: projectManagementData as ProgramData, variant: "project" },
  { data: itsmData as ProgramData, variant: "itsm" },
  { data: softwareEngineeringData as ProgramData, variant: "software" },
  { data: itGovernanceData as ProgramData, variant: "governance" },
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
            program={data.program}
            variant={variant}
            onClick={() => router.push(`/formations/${data.program.id}`)}
          />
        ))}
      </div>
    </section>
  );
}
