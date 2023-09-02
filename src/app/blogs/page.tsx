import { Jost } from 'next/font/google';
import Script from 'next/script';
import BlogCard from '../../components/Blog/BlogCard';
import BlogPageTitle from '../../components/Blog/BlogPageTitle';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import ReturnToTop from '../../components/ReturnToTop';
import { pageMetadata } from '../../content/general';
import { blogsData } from '../../data/blogsData';

const jostFont = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Alee Conseil - Blogs",
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: '/blogs',
    languages: {
      'fr-MA': '/blogs',
    },
  },
  icons: {
    icon: 'https://www.aleeconseil.com/favicon.ico',
    apple: 'https://www.aleeconseil.com/apple-icon.png',
    shortcut: ['https://www.aleeconseil.com/favicons/shortcut-icon-128.png', 'https://www.aleeconseil.com/favicons/shortcut-icon-192.png'],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-precomposed.png',
      },
      {
        rel: 'apple-touch-icon',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-76.png',
      },
      {
        rel: 'apple-touch-icon',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-120.png',
      },
      {
        rel: 'apple-touch-icon',
        url: 'https://www.aleeconseil.com/favicons/apple-touch-icon-152.png',
      },
      {
        rel: 'icon',
        url: 'https://www.aleeconseil.com/favicons/icon-16.png',
      },
      {
        rel: 'icon',
        url: 'https://www.aleeconseil.com/favicons/icon-32.png',
      },
      {
        rel: 'icon',
        url: 'https://www.aleeconseil.com/favicons/icon-48.png',
      }
    ],
  },
  openGraph: {
    title: pageMetadata.title,
    description: pageMetadata.description,
    siteName: pageMetadata.siteName,
    url: 'https://www.aleeconseil.com',
    images: {
      url: 'https://www.aleeconseil.com/favicon.ico',
      width: 96,
      height: 96,
    },
    locale: 'fr-MA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'large',
      'max-image-preview': 'large',
      'max-snippet': 1024,
    }
  },
  themeColor: "#644E9B",
  category: 'technology'
}

type Props = {}


export default function Blogs({ }: Props) {
  return (
    <div className="flex flex-col justify-between items-center w-full h-full min-h-[100vh] bg-ac-gray">
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
      <div className="flex flex-col justify-start items-center w-full h-full  bg-ac-gray">
        <Navbar />
        {/* Blogs Hero */}
        <div className="relative parallax-blogs flex justify-start items-center w-full py-36 px-12 sm:px-24">
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full z-20 bg-[#00000050]"></div>
          <h1 className={jostFont.className + " text-white font-bold text-4xl xs:text-5xl text-left z-30"}>Alee Conseil Blogs</h1>
        </div>
        <div className="rounded-t-xl flex flex-col justify-start items-center w-full bg-ac-gray gap-24 mb-24 -translate-y-5 z-30">
          <BlogPageTitle />
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-48">
            {blogsData.map(blog => {
              return (
                <BlogCard key={blog.id} id={blog.id} title={blog.title} body={blog.body} author={blog.author} />
              )
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}