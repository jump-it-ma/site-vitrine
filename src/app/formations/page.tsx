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
  title: "Jump iT - Formations",
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
            name: "Jump iT",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-700 to-purple-600 px-4 pb-16 pt-16 sm:px-8 md:px-16 lg:px-24">
        {/* Background decorations */}

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
        <div className="relative z-10 mx-auto max-w-4xl text-center pt-24">
          <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            Centre de formation professionnelle
          </span>

          <h1
            className={`${montserratFont.className} mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl`}
          >
            NOS FORMATIONS
          </h1>

          <p
            className={`${latoFont.className} mx-auto max-w-2xl text-lg text-slate-100 sm:text-xl`}
          >
            {formations.hero}
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section
        id="formations"
        className="bg-slate-50 px-4 py-10 sm:px-8 md:px-16 lg:px-24"
      >
        <ProgramsOverview />
      </section>

      <Footer />
    </div>
  );
}
