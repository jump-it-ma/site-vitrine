import { montserratFont, latoFont } from "@/utils/fonts";
import Script from "next/script";
import { Graph } from "schema-dts";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ReturnToTop from "../../components/ReturnToTop";
import { pageMetadata } from "../../content/general";
import { formations } from "../../content/pages";
import { formationsData } from "../../data/formationsData";
import { ProgramsOverview } from "@/components/Training";

export const metadata = {
  title: "JumpIT - Formations",
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: "/formations",
    languages: {
      fr: "/formations",
    },
  },
  icons: {
    icon: { url: "/icones.png", type: "image/x-icon", sizes: "48x48" },
    shortcut: [
      { url: "/icones.png", sizes: "128x128" },
      { url: "/icones.png", sizes: "192x192" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/icones.png",
        sizes: "180x180",
      },
      { rel: "apple-touch-icon", url: "/icones.png", sizes: "76x76" },
      { rel: "apple-touch-icon", url: "/icones.png", sizes: "120x120" },
      { rel: "apple-touch-icon", url: "/icones.png", sizes: "152x152" },
      { rel: "apple-touch-icon", url: "/icones.png", sizes: "180x180" },
      { rel: "icon", url: "/icones.png", type: "image/x-icon", sizes: "16x16" },
      { rel: "icon", url: "/icones.png", type: "image/x-icon", sizes: "32x32" },
    ],
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

// Structured data for SEO
const graph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ItemList",
      itemListElement: formationsData.map((formation, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Course",
          url: `https://www.jumpit.ma/formations/${formation.formation_id}`,
          name: `Formation ${formation.title}`,
          description: formation.hero,
          provider: {
            "@type": "Organization",
            name: "JumpIT",
            sameAs: "https://www.jumpit.ma",
          },
        },
      })),
    },
  ],
};

export default function Formations() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      {/* Google Analytics */}
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

      {/* Hero Section - Clean, professional design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-600 px-4 pb-20 pt-32 sm:px-8 md:px-16 lg:px-24">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur">
            Centre de Formation Professionnelle
          </span>

          <h1
            className={`${montserratFont.className} mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl`}
          >
            Nos Formations
          </h1>

          <p
            className={`${latoFont.className} mx-auto max-w-2xl text-lg text-slate-100 sm:text-xl`}
          >
            {formations.hero}
          </p>
        </div>
      </section>

      {/* Programs Section - Clean neutral background */}
      <section
        id="formations"
        className="bg-slate-50 px-4 py-20 sm:px-8 md:px-16 lg:px-24"
      >
        <ProgramsOverview />
      </section>

      <Footer />
    </div>
  );
}
