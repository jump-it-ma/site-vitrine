import { Metadata } from "next";
import { notFound } from "next/navigation";
import TrainingDetailPage from "@/components/Training/TrainingDetailPage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import digitalTrustData from "@/data/programs/digital-trust.json";
import technicalTrainingData from "@/data/programs/technical-training.json";
import { HierarchicalProgramData, FlattenedTraining } from "@/types/training";

// Type assertion for the imported JSON
const programsMap: Record<string, HierarchicalProgramData> = {
  "digital-trust": digitalTrustData as unknown as HierarchicalProgramData,
  "technical-training":
    technicalTrainingData as unknown as HierarchicalProgramData,
};

// Find training by ID in program data
function findTrainingById(
  programData: HierarchicalProgramData,
  trainingId: string
): FlattenedTraining | null {
  for (const category of programData.categories) {
    const training = category.trainings.find((t) => t.id === trainingId);
    if (training) {
      return {
        ...training,
        category: category.name,
        categoryId: category.id,
      };
    }
  }
  return null;
}

// Generate static params for all trainings
export async function generateStaticParams() {
  const params: { slug: string; trainingId: string }[] = [];

  for (const [slug, programData] of Object.entries(programsMap)) {
    for (const category of programData.categories) {
      for (const training of category.trainings) {
        params.push({
          slug,
          trainingId: training.id,
        });
      }
    }
  }

  return params;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; trainingId: string }>;
}): Promise<Metadata> {
  const { slug, trainingId } = await params;
  const programData = programsMap[slug];

  if (!programData) {
    return { title: "Formation non trouvée" };
  }

  const training = findTrainingById(programData, trainingId);

  if (!training) {
    return { title: "Formation non trouvée" };
  }

  return {
    title: `${training.title} | ${programData.program.title} | Jump It`,
    description:
      training.details?.description ||
      `Formation ${training.title} - ${training.category} - ${training.duration_days} jours`,
    keywords: [
      training.title,
      training.category,
      training.editor,
      ...training.tags,
      "formation",
      "certification",
      "PECB",
    ],
    openGraph: {
      title: training.title,
      description:
        training.details?.description || `Formation ${training.title}`,
      type: "website",
    },
  };
}

// Get other trainings from same category
function getOtherTrainings(
  programData: HierarchicalProgramData,
  trainingId: string,
  categoryId: string
): FlattenedTraining[] {
  const category = programData.categories.find((c) => c.id === categoryId);
  if (!category) return [];

  return category.trainings
    .filter((t) => t.id !== trainingId)
    .map((t) => ({
      ...t,
      category: category.name,
      categoryId: category.id,
    }));
}

// Page component
export default async function TrainingPage({
  params,
}: {
  params: Promise<{ slug: string; trainingId: string }>;
}) {
  const { slug, trainingId } = await params;
  const programData = programsMap[slug];

  if (!programData) {
    notFound();
  }

  const training = findTrainingById(programData, trainingId);

  if (!training) {
    notFound();
  }

  const otherTrainings = getOtherTrainings(
    programData,
    trainingId,
    training.categoryId
  );

  return (
    <>
      <Navbar />
      <TrainingDetailPage
        training={training}
        programId={slug}
        otherTrainings={otherTrainings}
      />
      <Footer />
    </>
  );
}
