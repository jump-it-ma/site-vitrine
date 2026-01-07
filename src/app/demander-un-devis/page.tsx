"use client";

import { useState } from "react";
import { montserratFont, latoFont } from "@/utils/fonts";
import {
  HiCheckCircle,
  HiEnvelope,
  HiPhone,
  HiBuildingOffice2,
  HiUser,
  HiChatBubbleLeftRight,
  HiPaperAirplane,
} from "react-icons/hi2";

export default function DemanderUnDevis() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    requestType: "",
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
          <h1
            className={`${montserratFont.className} mb-6 text-3xl font-bold text-white sm:text-4xl lg:text-5xl`}
          >
            Demander un devis
          </h1>
          <p
            className={`${latoFont.className} mx-auto max-w-2xl text-lg text-purple-100`}
          >
            Décrivez votre projet de formation ou de conseil. Notre équipe vous
            répondra sous 24h ouvrées avec une proposition sur mesure.
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
                    Demande envoyée !
                  </h2>
                  <p className="mb-8 text-gray-600">
                    Merci de nous avoir contactés. Notre équipe a bien reçu
                    votre demande et reviendra vers vous très rapidement.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Envoyer une autre demande
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section: Identity */}
                  <fieldset>
                    <legend
                      className={`${montserratFont.className} mb-6 flex items-center gap-2 text-xl font-bold text-gray-900`}
                    >
                      <HiUser className="h-6 w-6 text-purple-600" />
                      Vos coordonnées
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
                          placeholder="Jean"
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
                          placeholder="Dupont"
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
                          placeholder="jean.dupont@entreprise.com"
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
                          placeholder="+212 6 12 34 56 78"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Section: Company */}
                  <fieldset>
                    <legend
                      className={`${montserratFont.className} mb-6 flex items-center gap-2 text-xl font-bold text-gray-900`}
                    >
                      <HiBuildingOffice2 className="h-6 w-6 text-purple-600" />
                      Votre entreprise
                    </legend>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="company"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Nom de l&apos;entreprise{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="Tech Solutions"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="role"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Fonction <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="role"
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="Responsable Formation"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Section: Project */}
                  <fieldset>
                    <legend
                      className={`${montserratFont.className} mb-6 flex items-center gap-2 text-xl font-bold text-gray-900`}
                    >
                      <HiChatBubbleLeftRight className="h-6 w-6 text-purple-600" />
                      Votre projet
                    </legend>
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="requestType"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Type de demande{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="requestType"
                          name="requestType"
                          required
                          value={formData.requestType}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                        >
                          <option value="">Sélectionnez une option</option>
                          <option value="formation-intra">
                            Formation Intra-entreprise
                          </option>
                          <option value="formation-inter">
                            Formation Inter-entreprise
                          </option>
                          <option value="conseil">Conseil / Audit</option>
                          <option value="partenariat">Partenariat</option>
                          <option value="autre">Autre</option>
                        </select>
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="mb-1.5 block text-sm font-medium text-gray-700"
                        >
                          Détails de votre demande{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                          placeholder="Décrivez vos besoins, le nombre de personnes à former, vos contraintes de dates, etc."
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
                        J&apos;accepte que Jump iT collecte mes données pour
                        traiter ma demande. Consultez notre{" "}
                        <a
                          href="/privacy"
                          className="text-purple-600 hover:underline"
                        >
                          politique de confidentialité
                        </a>{" "}
                        pour en savoir plus.
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
                          Envoi en cours...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-2">
                          <span>Envoyer ma demande</span>
                          <HiPaperAirplane className="h-5 w-5" />
                        </div>
                      )}
                    </button>
                    <p className="mt-4 text-center text-sm text-gray-500 sm:text-left">
                      * Champs obligatoires
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us Card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3
                className={`${montserratFont.className} mb-6 text-lg font-bold text-gray-900`}
              >
                Pourquoi choisir Jump iT ?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                    <HiCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Expertise reconnue
                    </p>
                    <p className="text-sm text-gray-500">
                      Formateurs certifiés et expérimentés
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600">
                    <HiCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sur mesure</p>
                    <p className="text-sm text-gray-500">
                      Programmes adaptés à vos besoins
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                    <HiCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Certifications
                    </p>
                    <p className="text-sm text-gray-500">
                      Partenaire accrédité (PECB, etc.)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Direct Contact Card */}
            <div className="rounded-2xl bg-gradient-to-br from-purple-600 to-purple-800 p-6 text-white shadow-lg">
              <h3
                className={`${montserratFont.className} mb-4 text-lg font-bold`}
              >
                Besoin d&apos;une réponse immédiate ?
              </h3>
              <p className="mb-6 text-sm text-purple-100">
                Nos conseillers sont disponibles du lundi au vendredi de 9h à
                18h.
              </p>
              <div className="space-y-4">
                <a
                  href="tel:+212520000000"
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
                >
                  <HiPhone className="h-5 w-5" />
                  <span className="font-semibold">+212 6 62 88 28 41</span>
                </a>
                <a
                  href="mailto:contact@jumpit.ma"
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 transition-colors hover:bg-white/20"
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
