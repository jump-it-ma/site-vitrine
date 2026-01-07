import type { Metadata } from "next";
import { jostFont, montserratFont, latoFont } from "@/utils/fonts";
import Image from "next/image";
import Script from "next/script";
import { AiFillLinkedin } from "react-icons/ai";
import { Graph } from "schema-dts";
import CodeViewer from "../../../components/Blog/CodeViewer";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import ReturnToTop from "../../../components/ReturnToTop";
import { pageMetadata } from "../../../content/general";
import { blogsData } from "../../../data/blogsData";
import { readableDate } from "../../../utils/functions";
import { HiCalendarDays, HiUser } from "react-icons/hi2";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog_id = params.slug;
  const blog = blogsData.find((blog) => blog.id === blog_id);

  return {
    title: blog ? blog.title : "Jump iT - 404",
    description: pageMetadata.description,
    metadataBase: new URL(pageMetadata.baseUrl),
    alternates: {
      canonical: "/blogs/" + blog_id,
      languages: {
        fr: "/blogs/" + blog_id,
      },
    },
    // ... preserve existing icons configuration
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
        {
          rel: "icon",
          url: "/icones.png",
          type: "image/x-icon",
          sizes: "16x16",
        },
        {
          rel: "icon",
          url: "/icones.png",
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
}

export default function Blog({ params }: Props) {
  const blog_id = params.slug;
  const blog = blogsData.find((blog) => blog.id === blog_id);

  if (!blog) {
    return (
      <div className="flex flex-col justify-center items-center gap-6 w-screen h-screen bg-black text-white text-center">
        <p className="text-5xl font-bold">404</p>
        <p className="text-3xl font-medium">Article Non trouvé</p>
        <a
          href="/blogs"
          className="text-purple-400 hover:text-purple-300 underline"
        >
          Retour aux blogs
        </a>
      </div>
    );
  }

  const firstParagraph = blog.body.find(
    (section) =>
      section.type === "paragraph" ||
      section.type === "header1" ||
      section.type === "header2"
  );

  const graph: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": "https://www.jumpit.ma/blogs/" + blog_id + "#",
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
          name: "Jump iT",
          image: {
            "@type": "ImageObject",
            url: "/icones.png",
          },
        },
        audience: {
          "@type": "Audience",
          audienceType: blog.author.job,
        },
        image: {
          "@type": "ImageObject",
          url: "/icones.png",
        },
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

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

        <div className="relative mx-auto max-w-5xl px-4 py-16 pt-36 sm:px-6 lg:px-8 text-center">
          <h1
            className={`${montserratFont.className} mb-8 text-3xl font-bold text-white sm:text-4xl lg:text-5xl leading-tight`}
          >
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-purple-100">
            <div className="flex items-center gap-2">
              <HiCalendarDays className="h-5 w-5" />
              <span className="font-medium">{readableDate(blog.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <HiUser className="h-5 w-5" />
              <span className="font-medium">Par {blog.author.name}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Article Column */}
          <div className="lg:col-span-2">
            <article className="rounded-2xl bg-white p-6 shadow-sm sm:p-10 md:p-12">
              <div
                className={`space-y-8 ${latoFont.className} text-gray-700 leading-relaxed text-lg`}
              >
                {blog.body.map((section, index) => {
                  if (section.type === "image" && section.url) {
                    return (
                      <figure
                        key={index}
                        className="my-8 flex flex-col items-center justify-center"
                      >
                        <div className="relative overflow-hidden rounded-xl shadow-md w-full">
                          <Image
                            className="w-full h-auto object-cover"
                            width={800}
                            height={500}
                            src={section.url}
                            alt={section.imageCaption || blog.title}
                          />
                        </div>
                        {section.imageCaption && (
                          <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                            {section.imageCaption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                  if (section.type === "paragraph" && section.text) {
                    return (
                      <p key={index} className="mb-4">
                        {section.text}
                      </p>
                    );
                  }
                  if (section.type === "dangerousParagraph" && section.text) {
                    return (
                      <div
                        key={index}
                        dangerouslySetInnerHTML={{ __html: section.text }}
                        className="mb-4"
                      />
                    );
                  }
                  if (section.type === "header1" && section.text) {
                    return (
                      <h2
                        key={index}
                        className={`${montserratFont.className} mt-12 mb-6 text-2xl font-bold text-gray-900 border-l-4 border-purple-500 pl-4`}
                      >
                        {section.text}
                      </h2>
                    );
                  }
                  if (section.type === "header2" && section.text) {
                    return (
                      <h3
                        key={index}
                        className={`${montserratFont.className} mt-8 mb-4 text-xl font-bold text-gray-900`}
                      >
                        {section.text}
                      </h3>
                    );
                  }
                  if (section.type === "itemize" && section.items) {
                    return (
                      <ul
                        key={index}
                        className="list-disc pl-6 space-y-2 mb-6 text-gray-700"
                      >
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            {item.title && (
                              <strong className="text-gray-900">
                                {item.title}:{" "}
                              </strong>
                            )}
                            {item.body}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  if (section.type === "enumerate" && section.items) {
                    return (
                      <ol
                        key={index}
                        className="list-decimal pl-6 space-y-2 mb-6 text-gray-700"
                      >
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            {item.title && (
                              <strong className="text-gray-900">
                                {item.title}:{" "}
                              </strong>
                            )}
                            {item.body}
                          </li>
                        ))}
                      </ol>
                    );
                  }
                  if (section.type === "link" && section.text) {
                    return (
                      <a
                        key={index}
                        target="_blank"
                        rel="noopener"
                        href={section.text}
                        className="text-purple-600 underline hover:text-purple-800 break-words"
                      >
                        {section.text}
                      </a>
                    );
                  }
                  if (section.type === "code" && section.code) {
                    return (
                      <div
                        key={index}
                        className="my-6 overflow-hidden rounded-lg shadow-sm"
                      >
                        <CodeViewer code={section.code} showLines={true} />
                      </div>
                    );
                  }
                  if (section.type === "iframe" && section.url) {
                    return (
                      <div
                        key={index}
                        className="my-8 aspect-video w-full overflow-hidden rounded-xl bg-gray-100"
                      >
                        <iframe
                          className="w-full h-full"
                          src={section.url}
                          allowFullScreen
                          title="Embedded content"
                        />
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </article>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Author Card */}
              <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
                <div className="relative mx-auto mb-4 h-24 w-24">
                  <div className="absolute inset-0 rounded-full bg-purple-100" />
                  <Image
                    className="relative h-24 w-24 rounded-full border-4 border-white object-cover shadow-md"
                    src={blog.author.image}
                    width={96}
                    height={96}
                    alt={blog.author.name}
                  />
                </div>

                <h3
                  className={`${montserratFont.className} mb-1 text-lg font-bold text-gray-900`}
                >
                  {blog.author.name}
                </h3>
                <p className="mb-4 text-sm font-medium text-purple-600">
                  {blog.author.job}
                </p>

                {blog.author.contact && (
                  <a
                    href={blog.author.contact}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
                  >
                    <AiFillLinkedin className="h-4 w-4" />
                    Connecter
                  </a>
                )}
              </div>

              {/* Share/CTA Placeholder - Optional addition for engagement */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-700 to-purple-600 p-6 text-white text-center shadow-lg">
                <h4 className={`${montserratFont.className} mb-2 font-bold`}>
                  Vous avez aimé cet article ?
                </h4>
                <p className="text-sm text-purple-200 mb-4">
                  Découvrez nos programmes de formation pour aller plus loin.
                </p>
                <a
                  href="/formations"
                  className="block w-full rounded-lg bg-white py-2 text-sm font-bold text-purple-900 transition hover:bg-purple-50"
                >
                  Voir les formations
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
