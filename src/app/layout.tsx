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
      'fr-MA': '/',
    },
  },
  icons: {
    icon: 'https://www.aleeconseil.com/favicon.ico',
    apple: 'https://www.aleeconseil.com/apple-icon.png',
    shortcut: 'https://www.aleeconseil.com/shortcut-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://www.aleeconseil.com/apple-touch-icon-precomposed.png',
    },
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
  category: 'technology',
}

const graph: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.aleeconseil.com',
      name: 'Alee Conseil',
      alternateName: 'Alee conseil',
      url: 'https://www.aleeconseil.com',
      offers: [
        {
          '@type': 'Offer',
          name: 'Formations',
          description: 'Nous proposons des formations en différentes technologies en automatisation des tests'
        },
        {
          '@type': 'Offer',
          name: 'Qualité Logicielle',
          description: 'Nous vous aidons à accroitre votre confiance dans la qualité de vos produits logiciels'
        },
      ],
      author: {
        '@type': 'Organization',
        name: 'Alee Conseil',
        image: 'https://www.aleeconseil.com/logo.png',
        legalName: 'Alee Conseil',
        logo: 'https://www.aleeconseil.com/logo.png',
        url: 'https://www.aleeconseil.com',
        keywords: ['Formation', 'Conseil', 'Blog', 'Contact'],
        address: 'Rue Al Borj, Résidence Zineb, Appt12, Rabat 10020, Maroc',
        telephone: '+212 6 62 88 28 41',
        email: 'contact@aleeconseil.com'
      }
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
