"use client";

import { useRouter } from "next/navigation";
import { ProgramCard } from "@/components/Training";
import { ProgramData } from "@/types/training";
import { montserratFont } from "@/utils/fonts";

// Import JSON data
import aiGovernanceData from "@/data/programs/ai-governance.json";
import digitalTrustData from "@/data/programs/digital-trust.json";

const programs: { data: ProgramData; variant: "ai" | "security" }[] = [
  { data: aiGovernanceData as ProgramData, variant: "ai" },
  { data: digitalTrustData as ProgramData, variant: "security" },
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
