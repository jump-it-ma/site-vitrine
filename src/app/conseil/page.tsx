import { latoFont, montserratFont } from "../../utils/fonts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ReturnToTop from "../../components/ReturnToTop";
import { pageMetadata } from "../../content/general";
import { conseil } from "../../content/pages";
import Script from "next/script";
import {
  HiCheckCircle,
  HiCloudArrowUp,
  HiShieldCheck,
  HiGlobeAlt,
} from "react-icons/hi2";

export const metadata = {
  title: "JumpIT - Conseil & Audit IT",
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: "/conseil",
    languages: {
      fr: "/conseil",
    },
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: pageMetadata.siteName,
    url: "https://www.jumpit.ma",
    images: { url: "/icones.png", width: 48, height: 48 },
    locale: "fr",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": "large",
      "max-image-preview": "large",
      "max-snippet": 1024,
    },
  },
  themeColor: "#644E9B",
  category: "technology",
};

export default function Conseil() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6L5ZVZDMVJ" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-6L5ZVZDMVJ');
        `}
      </Script>

      <ReturnToTop />
      <Navbar />

      {/* Hero Section - Same style as Formations page */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-600 px-4 pb-16 pt-16 sm:px-8 md:px-16 lg:px-24">
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

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Expertise IT & Accompagnement
          </span>

          <h1
            className={`${montserratFont.className} mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl`}
          >
            Conseil & Audit
          </h1>

          <p
            className={`${latoFont.className} mx-auto max-w-2xl text-lg text-slate-100 sm:text-xl`}
          >
            {conseil.hero}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-slate-50 px-4 py-16 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mb-16 text-center">
            <h2
              className={`${montserratFont.className} mb-4 text-3xl font-bold text-slate-900 sm:text-4xl`}
            >
              Nos Solutions
            </h2>
            <p
              className={`${latoFont.className} mx-auto max-w-2xl text-lg text-slate-600`}
            >
              Une approche sur-mesure pour accompagner votre transformation
              numérique
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1: Audit */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                <HiCloudArrowUp className="h-8 w-8 text-purple-600" />
              </div>
              <div className="mb-3 inline-block rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
                Stratégie
              </div>
              <h3
                className={`${montserratFont.className} mb-4 text-xl font-bold text-slate-900`}
              >
                Développement des solutions
              </h3>
              <p className={`${latoFont.className} mb-6 text-slate-600`}>
                {conseil.audit}
              </p>
              <ul className="space-y-3">
                {[
                  "Analyse de l'existant",
                  "Identification des risques",
                  "Recommandations stratégiques",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <HiCheckCircle className="h-4 w-4 flex-shrink-0 text-purple-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 2: Prestation */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100">
                <HiShieldCheck className="h-8 w-8 text-emerald-600" />
              </div>
              <div className="mb-3 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                Expertise
              </div>
              <h3
                className={`${montserratFont.className} mb-4 text-xl font-bold text-slate-900`}
              >
                Consulting
              </h3>
              <p className={`${latoFont.className} mb-6 text-slate-600`}>
                {conseil.prestation}
              </p>
              <ul className="space-y-3">
                {[
                  "Développement sur mesure",
                  "Renforcement d'équipes",
                  "Technologies de pointe",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <HiCheckCircle className="h-4 w-4 flex-shrink-0 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Card 3: Off-Shore */}
            <div className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                <HiGlobeAlt className="h-8 w-8 text-blue-600" />
              </div>
              <div className="mb-3 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                International
              </div>
              <h3
                className={`${montserratFont.className} mb-4 text-xl font-bold text-slate-900`}
              >
                Services nearshore
              </h3>
              <p className={`${latoFont.className} mb-6 text-slate-600`}>
                {conseil.offshore}
              </p>
              <ul className="space-y-3">
                {[
                  "Optimisation des coûts",
                  "Flexibilité opérationnelle",
                  "Qualité garantie",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <HiCheckCircle className="h-4 w-4 flex-shrink-0 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Stats Section */}
      <section className="bg-gradient-to-br from-purple-700 to-purple-600 px-4 py-16 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2
              className={`${montserratFont.className} mb-4 text-3xl font-bold text-white sm:text-4xl`}
            >
              Pourquoi nous choisir ?
            </h2>
            <p
              className={`${latoFont.className} mx-auto max-w-2xl text-lg text-purple-100`}
            >
              Des résultats concrets et mesurables pour votre entreprise
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "100%", label: "Engagement qualité" },
              { value: "Sur-mesure", label: "Solutions adaptées" },
              { value: "Agile", label: "Méthodologie moderne" },
              { value: "24/7", label: "Support disponible" },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-sm"
              >
                <div
                  className={`${montserratFont.className} mb-2 text-3xl font-bold text-white`}
                >
                  {stat.value}
                </div>
                <div className={`${latoFont.className} text-purple-100`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 px-4 py-20 sm:px-8 md:px-16 lg:px-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className={`${montserratFont.className} mb-6 text-3xl font-bold text-slate-900 sm:text-4xl`}
          >
            Prêt à transformer votre IT ?
          </h2>
          <p className={`${latoFont.className} mb-10 text-lg text-slate-600`}>
            Contactez-nous dès aujourd&apos;hui pour discuter de vos besoins et
            découvrir comment nous pouvons vous accompagner.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-purple-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-purple-500 hover:shadow-purple-500/25"
            >
              Nous contacter
            </a>
            <a
              href="mailto:contact@jumpit.ma"
              className="rounded-full border border-slate-300 bg-transparent px-8 py-3.5 text-sm font-semibold text-slate-700 transition-all hover:bg-slate-100"
            >
              contact@jumpit.ma
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
