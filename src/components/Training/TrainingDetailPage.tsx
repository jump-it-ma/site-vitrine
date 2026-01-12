"use client";

import { useState } from "react";
import { FlattenedTraining, CurriculumDay } from "@/types/training";
import { montserratFont, latoFont } from "@/utils/fonts";
import Link from "next/link";
import {
  HiArrowLeft,
  HiCheckBadge,
  HiClock,
  HiAcademicCap,
  HiLanguage,
  HiStar,
  HiCheckCircle,
  HiChevronDown,
  HiChevronUp,
  HiUserGroup,
  HiBookOpen,
  HiQuestionMarkCircle,
  HiDocumentCheck,
  HiCalendarDays,
  HiEnvelope,
  HiPhone,
} from "react-icons/hi2";

interface TrainingDetailPageProps {
  training: FlattenedTraining;
  programId: string;
  otherTrainings?: FlattenedTraining[];
}

export default function TrainingDetailPage({
  training,
  programId,
  otherTrainings = [],
}: TrainingDetailPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openDay, setOpenDay] = useState<number>(1);

  const details = training.details;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-600">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -left-4 -top-24 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -right-12 top-20 h-80 w-80 rounded-full bg-purple-300 blur-3xl" />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-transparent" />

        {/* Floating orbs - Left side */}
        <div className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
        <div className="absolute left-10 top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl" />

        {/* Floating orbs - Right side */}
        <div className="absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute right-20 bottom-20 h-40 w-40 rounded-full bg-pink-400/10 blur-2xl" />

        {/* Geometric shapes - Floating circles */}
        <div className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <div className="absolute left-[15%] top-[60%] h-2 w-2 rounded-full bg-white/30" />
        <div className="absolute left-[25%] top-[80%] h-4 w-4 rounded-full bg-white/10" />
        <div className="absolute right-[10%] top-[30%] h-2 w-2 rounded-full bg-white/25" />
        <div className="absolute right-[20%] top-[70%] h-3 w-3 rounded-full bg-white/15" />
        <div className="absolute right-[30%] top-[15%] h-2 w-2 rounded-full bg-white/20" />

        <div className="relative mx-auto max-w-7xl pb-16 pt-36">
          {/* Back Button */}
          <Link
            href={`/formations/${programId}?category=${encodeURIComponent(
              training.categoryId
            )}`}
            className="mb-8 inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/20"
          >
            <HiArrowLeft className="h-4 w-4" />
            Retour au catalogue
          </Link>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Badges */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  {training.category}
                </span>
                <span className="rounded-full bg-blue-500/80 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  {training.reference}
                </span>
                {training.is_best_seller && (
                  <span className="flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-sm font-semibold text-amber-900">
                    <HiStar className="h-4 w-4" />
                    Best Seller
                  </span>
                )}
              </div>

              {/* Title */}
              <h1
                className={`${montserratFont.className} mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl`}
              >
                {training.title}
              </h1>

              {/* Description */}
              {details?.description && (
                <p
                  className={`${latoFont.className} mb-6 text-lg leading-relaxed text-purple-100`}
                >
                  {details.description}
                </p>
              )}

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-purple-200">
                <div className="flex items-center gap-2">
                  <HiClock className="h-5 w-5" />
                  <span>{training.duration_days} jours</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiAcademicCap className="h-5 w-5" />
                  <span>{training.level}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiDocumentCheck className="h-5 w-5" />
                  <span>{training.evaluation}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiLanguage className="h-5 w-5" />
                  <div className="flex gap-1">
                    {training.languages.map((lang) => (
                      <span
                        key={lang}
                        className="rounded bg-white/20 px-2 py-0.5 text-sm"
                      >
                        {lang === "FR" ? "🇫🇷" : "🇬🇧"} {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Info Card */}
            <div className="lg:row-span-1">
              <div className="rounded-2xl bg-white p-6 shadow-xl">
                <h3
                  className={`${montserratFont.className} mb-4 text-center font-bold text-gray-900`}
                >
                  Votre formation inclut
                </h3>

                <div className="mb-6 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <HiCheckCircle className="h-5 w-5 text-green-500" />
                    <span>{training.package_includes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <HiCheckCircle className="h-5 w-5 text-green-500" />
                    <span>Formateur certifié et expérimenté</span>
                  </div>
                </div>

                <Link
                  href={`/inscription?trainingId=${
                    training.id
                  }&title=${encodeURIComponent(training.title)}`}
                  className="mb-3 block w-full rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 py-3 text-center font-semibold text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl"
                >
                  S&apos;inscrire maintenant
                </Link>

                <Link
                  href="/demander-un-devis"
                  className="block w-full rounded-xl border-2 border-purple-200 py-3 text-center font-semibold text-purple-600 transition-all hover:border-purple-300 hover:bg-purple-50"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Content - 2 columns */}
          <div className="space-y-8 lg:col-span-2">
            {/* Objectives Section */}
            {details?.objectives && details.objectives.length > 0 && (
              <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    <HiCheckCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2
                    className={`${montserratFont.className} text-xl font-bold text-gray-900 sm:text-2xl`}
                  >
                    Objectifs de la formation
                  </h2>
                </div>
                <ul className="space-y-3">
                  {details.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-600">
                        {index + 1}
                      </span>
                      <span className={`${latoFont.className} text-gray-700`}>
                        {objective}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Prerequisites Section */}
            {details?.prerequisites && details.prerequisites.length > 0 && (
              <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-100">
                    <HiCheckBadge className="h-5 w-5 text-purple-600" />
                  </div>
                  <h2
                    className={`${montserratFont.className} text-xl font-bold text-gray-900 sm:text-2xl`}
                  >
                    Prérequis
                  </h2>
                </div>
                <ul className="space-y-3">
                  {details.prerequisites.map((prerequisite, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-600" />
                      <span className={`${latoFont.className} text-gray-700`}>
                        {prerequisite}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Target Audience Section */}
            {details?.target_audience && details.target_audience.length > 0 && (
              <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100">
                    <HiUserGroup className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2
                    className={`${montserratFont.className} text-xl font-bold text-gray-900 sm:text-2xl`}
                  >
                    À qui s&apos;adresse cette formation ?
                  </h2>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {details.target_audience.map((audience, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 p-3"
                    >
                      <HiCheckCircle className="h-5 w-5 flex-shrink-0 text-indigo-500" />
                      <span
                        className={`${latoFont.className} text-sm text-gray-700`}
                      >
                        {audience}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Curriculum Section */}
            {details?.curriculum && details.curriculum.length > 0 && (
              <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
                    <HiBookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <h2
                    className={`${montserratFont.className} text-xl font-bold text-gray-900 sm:text-2xl`}
                  >
                    Programme de formation
                  </h2>
                </div>

                <div className="space-y-3">
                  {details.curriculum.map((day: CurriculumDay) => (
                    <div
                      key={day.day}
                      className="overflow-hidden rounded-xl border border-gray-200 transition-all hover:border-purple-200"
                    >
                      <button
                        onClick={() =>
                          setOpenDay(openDay === day.day ? 0 : day.day)
                        }
                        className="flex w-full items-center justify-between bg-gray-50 p-4 text-left transition-colors hover:bg-purple-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-600 text-sm font-bold text-white">
                            J{day.day}
                          </span>
                          <span
                            className={`${montserratFont.className} font-semibold text-gray-900`}
                          >
                            {day.title}
                          </span>
                        </div>
                        {openDay === day.day ? (
                          <HiChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <HiChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>

                      {openDay === day.day && (
                        <div className="border-t border-gray-100 bg-white p-4">
                          <ul className="space-y-2">
                            {day.topics.map((topic, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400" />
                                <span
                                  className={`${latoFont.className} text-gray-600`}
                                >
                                  {topic}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs Section */}
            {details?.faqs && details.faqs.length > 0 && (
              <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100">
                    <HiQuestionMarkCircle className="h-5 w-5 text-amber-600" />
                  </div>
                  <h2
                    className={`${montserratFont.className} text-xl font-bold text-gray-900 sm:text-2xl`}
                  >
                    Questions fréquentes
                  </h2>
                </div>

                <div className="space-y-3">
                  {details.faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="overflow-hidden rounded-xl border border-gray-200 transition-all hover:border-amber-200"
                    >
                      <button
                        onClick={() =>
                          setOpenFaq(openFaq === index ? null : index)
                        }
                        className="flex w-full items-center justify-between p-4 text-left"
                      >
                        <span
                          className={`${montserratFont.className} font-medium text-gray-900`}
                        >
                          {faq.question}
                        </span>
                        {openFaq === index ? (
                          <HiChevronUp className="h-5 w-5 flex-shrink-0 text-gray-500" />
                        ) : (
                          <HiChevronDown className="h-5 w-5 flex-shrink-0 text-gray-500" />
                        )}
                      </button>

                      {openFaq === index && (
                        <div className="border-t border-gray-100 bg-amber-50/50 p-4">
                          <p className={`${latoFont.className} text-gray-600`}>
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="sticky top-24 space-y-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3
                  className={`${montserratFont.className} mb-4 font-bold text-gray-900`}
                >
                  Informations pratiques
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <HiCalendarDays className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-gray-900">Durée</p>
                      <p className="text-gray-500">
                        {training.duration_days} jours (
                        {training.duration_days * 7}h)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiDocumentCheck className="h-5 w-5 text-purple-500" />
                    <div>
                      <p className="font-medium text-gray-900">Évaluation</p>
                      <p className="text-gray-500">{training.evaluation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white shadow-lg">
                <h3 className={`${montserratFont.className} mb-2 font-bold`}>
                  Besoin d&apos;aide ?
                </h3>
                <p className="mb-4 text-sm text-purple-200">
                  Notre équipe est là pour répondre à vos questions.
                </p>
                <div className="space-y-2">
                  <a
                    href="mailto:contact@jumpit.ma"
                    className="flex items-center gap-2 text-sm hover:text-purple-200"
                  >
                    <HiEnvelope className="h-4 w-4" />
                    contact@jumpit.ma
                  </a>
                  <a
                    href="tel:+212520000000"
                    className="flex items-center gap-2 text-sm hover:text-purple-200"
                  >
                    <HiPhone className="h-4 w-4" />
                    +212 6 62 88 28 41
                  </a>
                </div>
              </div>

              {/* Editor Badge */}
              <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <p className="mb-2 text-xs uppercase tracking-wider text-gray-500">
                  Certification officielle
                </p>
                <p
                  className={`${montserratFont.className} text-2xl font-bold text-gray-900`}
                >
                  {training.editor}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Organisme certificateur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Autres Formations Section */}
      {otherTrainings.length > 0 && (
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <h2
                className={`${montserratFont.className} mb-3 text-2xl font-bold text-gray-900 sm:text-3xl`}
              >
                Autres Formations
              </h2>
              <p
                className={`${latoFont.className} mx-auto max-w-2xl text-gray-600`}
              >
                Découvrez nos autres formations dans la catégorie{" "}
                {training.category}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherTrainings.slice(0, 3).map((otherTraining) => (
                <Link
                  key={otherTraining.id}
                  href={`/formations/${programId}/${otherTraining.id}`}
                  scroll={true}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3">
                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">
                      {otherTraining.category}
                    </span>
                    {otherTraining.is_best_seller && (
                      <span className="flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-700">
                        <HiStar className="h-3 w-3" />
                        Best Seller
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3
                      className={`${montserratFont.className} mb-3 text-lg font-bold text-gray-900 transition-colors group-hover:text-purple-600`}
                    >
                      {otherTraining.title}
                    </h3>

                    <div className="mb-4 flex flex-wrap gap-3 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <HiClock className="h-4 w-4 text-gray-400" />
                        <span>{otherTraining.duration_days} jours</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <HiAcademicCap className="h-4 w-4 text-gray-400" />
                        <span>{otherTraining.level}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <span className="text-sm font-medium text-purple-600 transition-colors group-hover:text-purple-700">
                        Voir détails →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-10 text-center">
              <Link
                href={`/formations/${programId}?category=${encodeURIComponent(
                  training.categoryId
                )}`}
                className="inline-flex items-center gap-2 rounded-xl border-2 border-purple-600 px-6 py-3 font-semibold text-purple-600 transition-all hover:bg-purple-600 hover:text-white"
              >
                Voir toutes les formations {training.category}
                <HiArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
