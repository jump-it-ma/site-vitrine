import { pageMetadata } from '@/content/general'
import { Inter } from 'next/font/google'
import { Graph } from 'schema-dts'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: pageMetadata.title,
  description: pageMetadata.description,
  metadataBase: new URL(pageMetadata.baseUrl),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/',
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
      width: 48,
      height: 48,
    },
    locale: 'fr',
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
  category: 'technology',
}

const graph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.aleeconseil.com',
      inLanguage: 'fr',
      name: 'Alee Conseil',
      alternateName: 'Alee conseil',
      url: 'https://www.aleeconseil.com',
      author: {
        '@type': 'Organization',
        name: 'Alee Conseil',
        image: 'https://www.aleeconseil.com/favicon.ico',
        legalName: 'Alee Conseil',
        logo: 'https://www.aleeconseil.com/favicon.ico',
        url: 'https://www.aleeconseil.com',
        keywords: ['Formation', 'Conseil', 'Blog', 'Contact'],
        address: 'Rue Al Borj, Résidence Zineb, Appt12, Rabat 10020, Maroc',
        telephone: '+212 6 62 88 28 41',
        email: 'contact@aleeconseil.com'
      }
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          name: 'Alee Conseil - Formations',
          item: 'https://www.aleeconseil.com/formations',
          position: 1
        },
        {
          '@type': 'ListItem',
          name: 'Alee Conseil - Conseil',
          item: 'https://www.aleeconseil.com/conseil',
          position: 2
        },
        {
          '@type': 'ListItem',
          name: 'Alee Conseil - Blogs',
          item: 'https://www.aleeconseil.com/blogs',
          position: 3
        },
        {
          '@type': 'ListItem',
          name: 'Contactez-nous',
          item: 'https://www.aleeconseil.com/contactez-nous',
          position: 4
        },
      ]
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
