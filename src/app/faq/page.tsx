"use client";

import { useState } from "react";
import { montserratFont, latoFont } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReturnToTop from "@/components/ReturnToTop";
import { HiChevronDown } from "react-icons/hi2";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Quels types de formations proposez-vous ?",
    answer:
      "Nous proposons des formations en automatisation de tests, DevOps, développement web et mobile, cybersécurité, et bien plus. Nos programmes sont conçus pour tous les niveaux, du débutant à l'expert.",
  },
  {
    question: "Les formations sont-elles certifiantes ?",
    answer:
      "Oui, la plupart de nos formations préparent à des certifications reconnues internationalement (ISTQB, Scrum, ISO, etc.). Vous recevrez également une attestation de formation JumpIT.",
  },
  {
    question: "Proposez-vous des formations sur site ?",
    answer:
      "Absolument ! Nous offrons des formations en présentiel dans vos locaux, en inter-entreprises dans nos centres, ainsi qu'en format distanciel synchrone.",
  },
  {
    question: "Comment se déroule une mission de conseil ?",
    answer:
      "Notre approche conseil commence par un audit de votre situation actuelle, suivi de recommandations personnalisées et d'un accompagnement dans la mise en œuvre des solutions proposées.",
  },
  {
    question: "Quels sont vos tarifs ?",
    answer:
      "Nos tarifs varient selon le type de prestation, la durée et le nombre de participants. Contactez-nous pour obtenir un devis personnalisé adapté à vos besoins.",
  },
  {
    question: "Travaillez-vous avec les entreprises de toutes tailles ?",
    answer:
      "Oui, nous accompagnons aussi bien les startups que les grandes entreprises. Nos solutions sont adaptées à chaque contexte et budget.",
  },
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-6 text-left transition-colors hover:text-purple-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
        aria-expanded={isOpen}
      >
        <span
          className={`${montserratFont.className} text-lg font-semibold text-slate-900 group-hover:text-purple-600`}
        >
          {item.question}
        </span>
        <HiChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`${latoFont.className} pb-6 text-slate-600 leading-relaxed`}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <ReturnToTop />
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-600 px-4 pb-16 pt-16 sm:px-8 md:px-16 lg:px-24">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />

        {/* Floating circles */}
        <div className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <div className="absolute left-[15%] top-[60%] h-2 w-2 rounded-full bg-white/30" />
        <div className="absolute right-[10%] top-[30%] h-2 w-2 rounded-full bg-white/25" />
        <div className="absolute right-[20%] top-[70%] h-3 w-3 rounded-full bg-white/15" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl pt-24 text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Centre d&apos;aide
          </span>

          <h1
            className={`${montserratFont.className} mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl`}
          >
            Questions Fréquentes
          </h1>

          <p
            className={`${latoFont.className} mx-auto max-w-2xl text-lg text-purple-100`}
          >
            Trouvez rapidement les réponses à vos questions sur nos formations
            et services de conseil.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 px-4 py-16 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            {faqData.map((item, index) => (
              <FAQAccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className={`${latoFont.className} mb-4 text-slate-600`}>
              Vous ne trouvez pas la réponse à votre question ?
            </p>
            <a
              href="/contactez-nous"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-purple-500 hover:shadow-lg"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
