import { readableDate } from "@/utils/functions";
import { montserratFont, latoFont } from "@/utils/fonts";
import Script from "next/script";
import { pageMetadata } from "@/content/general";
import { blogsData } from "@/data/blogsData";
import { Graph } from "schema-dts";
import BlogCard from "../../components/Blog/BlogCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ReturnToTop from "../../components/ReturnToTop";

export const metadata = {
  title: "JumpIT - Le Blog",
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: "/blogs",
    languages: {
      fr: "/blogs",
    },
  },
  icons: {
    icon: { url: "/icones.png", type: "image/x-icon", sizes: "48x48" },
    // ... preserved icon settings
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
  // ... preserved OG and robots
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

export default function Blogs() {
  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": blogsData.map((blog) => {
      const firstParagraph = blog.body.find(
        (section) =>
          section.type === "paragraph" ||
          section.type === "header1" ||
          section.type === "header2"
      );
      return {
        "@type": "BlogPosting",
        "@id": "https://www.jumpit.ma/blogs/" + blog.id + "#",
        headline: blog.title,
        description: firstParagraph ? firstParagraph.text : "",
        dateCreated: readableDate(blog.date),
        articleBody: firstParagraph ? firstParagraph.text : "",
        articleSection: "Technology",
        author: {
          "@type": "Person",
          name: blog.author.name,
          url: blog.author.contact,
          jobTitle: blog.author.job,
        },
        publisher: {
          "@type": "Organization",
          name: "JumpIT",
          image: {
            "@type": "ImageObject",
            url: "/icones.png",
          },
        },
        audience: {
          "@type": "Audience",
          audienceType: "Developers, IT Professionals",
        },
        image: {
          "@type": "ImageObject",
          url: "/icones.png",
        },
      };
    }),
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>

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

        <div className="relative mx-auto max-w-7xl px-4 py-16 pt-36 sm:px-6 lg:px-8 text-center">
          <h1
            className={`${montserratFont.className} mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl`}
          >
            Le Blog JumpIT
          </h1>
          <p
            className={`${latoFont.className} mx-auto max-w-2xl text-lg text-purple-100 sm:text-xl`}
          >
            Découvrez nos articles, veille technologique et retours
            d&apos;expérience sur le développement et l&apos;agilité.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              body={blog.body}
              author={blog.author}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
