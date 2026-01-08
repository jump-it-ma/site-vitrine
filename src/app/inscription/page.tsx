"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { montserratFont, latoFont } from "@/utils/fonts";
import {
  HiCheckCircle,
  HiUser,
  HiCalendarDays,
  HiCreditCard,
  HiPaperAirplane,
  HiPhone,
  HiEnvelope,
} from "react-icons/hi2";

function InscriptionContent() {
  const searchParams = useSearchParams();
  const trainingTitle = searchParams.get("title") || "Formation";
  // const trainingId = searchParams.get("trainingId");

  const [formData, setFormData] = useState({
    // Participant
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    // Session
    preferredDate: "",
    mode: "remote", // remote, presential
    // Funding
    fundingType: "company", // company, personal, cpf
    message: "",
    acceptPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

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

        {/* Floating circles */}
        <div className="absolute left-[10%] top-[20%] h-3 w-3 rounded-full bg-white/20" />
        <div className="absolute right-[20%] top-[70%] h-3 w-3 rounded-full bg-white/15" />
        <div className="absolute right-[30%] top-[15%] h-2 w-2 rounded-full bg-white/20" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 pt-24 sm:px-6 lg:px-8 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-purple-200">
            Inscription à la formation
          </p>
          <h1
            className={`${montserratFont.className} mb-6 text-2xl font-bold text-white sm:text-3xl lg:text-4xl`}
          >
            {trainingTitle}
          </h1>
          <p
            className={`${latoFont.className} mx-auto max-w-2xl text-lg text-purple-100`}
          >
            Réservez votre place dès maintenant. Une fois votre inscription
            envoyée, un conseiller vous contactera pour finaliser les détails.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column: Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <HiCheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h2
                    className={`${montserratFont.className} mb-2 text-2xl font-bold text-gray-900`}
                  >
                    Pré-inscription validée !
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Votre demande d&apos;inscription pour &quot;{trainingTitle}
                    &quot; a bien été enregistrée. Notre équipe administrative
                    va revenir vers vous sous 24h pour confirmer votre dossier.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-medium text-purple-600 hover:text-purple-700"
                  >
                    Retour au formulaire
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Fieldset 1: Participant */}
                  <fieldset>
                    <legend
                      className={`${montserratFont.className} mb-6 flex items-center gap-2 text-xl font-bold text-gray-900`}
                    >
                      <HiUser className="h-6 w-6 text-purple-600" />
                      Informations Participant
                    </legend>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Prénom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="Ex: Sarah"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="Ex: Connor"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Email professionnel{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="sarah.connor@sky.net"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Téléphone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="+212 6 34 56 78 90"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="company"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Entreprise (Optionnel)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="Nom de votre société"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Fieldset 2: Session */}
                  <fieldset>
                    <legend
                      className={`${montserratFont.className} mb-6 flex items-center gap-2 text-xl font-bold text-gray-900`}
                    >
                      <HiCalendarDays className="h-6 w-6 text-purple-600" />
                      Préférences de Session
                    </legend>
                    <div className="space-y-6">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-gray-700">
                          Format souhaité{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-4">
                          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:bg-gray-50 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50">
                            <input
                              type="radio"
                              name="mode"
                              value="remote"
                              checked={formData.mode === "remote"}
                              onChange={handleInputChange}
                              className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <div>
                              <span className="block font-medium text-gray-900">
                                À distance (Online)
                              </span>
                              <span className="text-sm text-gray-500">
                                Classe virtuelle live
                              </span>
                            </div>
                          </label>
                          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-200 p-4 transition-all hover:bg-gray-50 has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50">
                            <input
                              type="radio"
                              name="mode"
                              value="presential"
                              checked={formData.mode === "presential"}
                              onChange={handleInputChange}
                              className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <div>
                              <span className="block font-medium text-gray-900">
                                En présentiel
                              </span>
                              <span className="text-sm text-gray-500">
                                Dans nos locaux
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="preferredDate"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Période souhaitée{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="preferredDate"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        >
                          <option value="">Sélectionnez une période</option>
                          <option value="asap">Dès que possible</option>
                          <option value="next-month">Mois prochain</option>
                          <option value="q1">1er Trimestre</option>
                          <option value="q2">2ème Trimestre</option>
                          <option value="later">
                            Plus tard dans l&apos;année
                          </option>
                        </select>
                      </div>
                    </div>
                  </fieldset>

                  {/* Fieldset 3: Funding */}
                  <fieldset>
                    <legend
                      className={`${montserratFont.className} mb-6 flex items-center gap-2 text-xl font-bold text-gray-900`}
                    >
                      <HiCreditCard className="h-6 w-6 text-purple-600" />
                      Financement
                    </legend>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="fundingType"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Mode de financement
                        </label>
                        <select
                          id="fundingType"
                          name="fundingType"
                          value={formData.fundingType}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        >
                          <option value="company">Entreprise</option>
                          <option value="personal">Personnel</option>
                          <option value="other">Autre / Ne sais pas</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Message ou besoins spécifiques (Optionnel)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="Questions particulières, handicap, etc."
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Submit Area */}
                  <div className="pt-4">
                    <div className="mb-6 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="acceptPolicy"
                        name="acceptPolicy"
                        required
                        checked={formData.acceptPolicy}
                        onChange={handleCheckboxChange}
                        className="mt-1 h-4 w-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                      <label
                        htmlFor="acceptPolicy"
                        className="text-sm text-gray-600"
                      >
                        En soumettant ce formulaire, j&apos;accepte que Jump iT
                        traite mes données pour gérer mon inscription.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 py-4 font-bold text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-12"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Traitement...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <span>Valider mon inscription</span>
                          <HiPaperAirplane className="h-5 w-5" />
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Trust Sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3
                className={`${montserratFont.className} mb-4 text-lg font-bold text-gray-900`}
              >
                Inclus dans votre formation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <HiCheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-gray-600">
                    Support de cours officiel et accrédité
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <HiCheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-gray-600">
                    Voucher de certification (examen inclus)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <HiCheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-gray-600">
                    Attestation de participation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <HiCheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-gray-600">
                    Pauses café et déjeuner (présentiel)
                  </span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-6 text-white shadow-lg">
              <h3
                className={`${montserratFont.className} mb-4 text-lg font-bold`}
              >
                Des questions ?
              </h3>
              <p className="mb-6 text-sm text-indigo-100">
                Notre équipe pédagogique est à votre écoute pour vous
                conseiller.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:+212520000000"
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2 transition-colors hover:bg-white/20"
                >
                  <HiPhone className="h-5 w-5" />
                  <span className="font-semibold">+212 6 62 88 28 41</span>
                </a>
                <a
                  href="mailto:contact@jumpit.ma"
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-2 transition-colors hover:bg-white/20"
                >
                  <HiEnvelope className="h-5 w-5" />
                  <span className="font-semibold">contact@jumpit.ma</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InscriptionPage() {
  return (
    <Suspense>
      <InscriptionContent />
    </Suspense>
  );
}
