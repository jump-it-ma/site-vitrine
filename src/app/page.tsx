import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Graph } from "schema-dts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReturnToTop from "../components/ReturnToTop";
import UnicornHero from "../components/Home/UnicornHero";
import ServicesSection from "../components/Home/ServicesSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import TrustSection from "../components/Home/TrustSection";
import ContactSection from "../components/Home/ContactSection";
import FeaturedTrainings from "../components/Home/FeaturedTrainings";
import ProgramShowcase from "../components/Home/ProgramShowcase";
import { pageMetadata } from "../content/general";

export const metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
    },
  },
  icons: {
    icon: {
      url: "../../public/icone.png",
      type: "image/x-icon",
      sizes: "48x48",
    },
    shortcut: [
      { url: "../../public/icone.png", sizes: "128x128" },
      { url: ["../../public/icone.png"], sizes: "192x192" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "../../public/icone.png",
        sizes: "180x180",
      },
      {
        rel: "apple-touch-icon",
        url: "../../public/icone.png",
        sizes: "76x76",
      },
      {
        rel: "apple-touch-icon",
        url: "../../public/icone.png",
        sizes: "120x120",
      },
      {
        rel: "apple-touch-icon",
        url: "../../public/icone.png",
        sizes: "152x152",
      },
      {
        rel: "apple-touch-icon",
        url: "../../public/icone.png",
        sizes: "180x180",
      },
      {
        rel: "icon",
        url: "../../public/icone.png",
        type: "image/x-icon",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "../../public/icone.png",
        type: "image/x-icon",
        sizes: "32x32",
      },
    ],
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: pageMetadata.siteName,
    url: "https://www.jumpit.ma",
    images: { url: "../../public/icone.png", width: 48, height: 48 },
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

const graph: Graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.jumpit.ma",
      inLanguage: "fr",
      name: "JumpIT",
      alternateName: "JumpIT",
      url: "https://www.jumpit.ma",
      offers: [
        {
          "@type": "Offer",
          name: "Formations",
          description:
            "Nous proposons des formations en différentes technologies en automatisation des tests",
        },
        {
          "@type": "Offer",
          name: "Qualité Logicielle",
          description:
            "Nous vous aidons à accroitre votre confiance dans la qualité de vos produits logiciels",
        },
      ],
      author: {
        "@type": "Organization",
        name: "JumpIT",
        image: "/icones.png",
        legalName: "JumpIT",
        logo: "/icones.png",
        url: "https://www.jumpit.ma",
        keywords: ["Formation", "Conseil", "Blog", "Contact"],
        address: "Rue Al Borj, Résidence Zineb, Appt12, Rabat 10020, Maroc",
        telephone: "+212 6 62 88 28 41",
        email: "contact@jumpit.ma",
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      {/* Analytics */}
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

      <main className="flex-grow">
        <UnicornHero />
        <ServicesSection />
        <FeaturedTrainings />
        <ProgramShowcase />
        <WhyChooseUs />
        <TrustSection />
        <ContactSection />
      </main>

      <Footer />

      <ToastContainer
        className="mt-16"
        position="top-center"
        autoClose={2000}
        closeOnClick
        pauseOnHover={false}
        newestOnTop={true}
        theme="light"
      />
    </div>
  );
}
