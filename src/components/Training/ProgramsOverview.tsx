"use client";

import { useRouter } from "next/navigation";
import { ProgramCard } from "@/components/Training";
import { HierarchicalProgramData, Program } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";

// Import JSON data
import digitalTrustData from "@/data/programs/digital-trust.json";
import technicalTrainingData from "@/data/programs/technical-training.json";

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
  {
    data: technicalTrainingData as HierarchicalProgramData,
    variant: "software",
  },
];

export default function ProgramsOverview() {
  const router = useRouter();

  return (
    <section className="mx-auto w-full max-w-6xl">
      {/* Programs Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
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
