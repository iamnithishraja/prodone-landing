import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://prodone.online";
const siteName = "Prodone";
const siteDescription = "Launch AI products in weeks, not months. We design and ship AI-powered products, agents, and platforms that help startups launch faster and enterprises automate at scale. Production-ready in weeks.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#DC2626" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prodone | AI Product Development Studio - Launch in Weeks, Not Months",
    template: "%s | Prodone",
  },
  description: siteDescription,
  keywords: [
    "AI development agency",
    "AI product development",
    "AI agents development",
    "custom AI solutions",
    "AI-powered apps",
    "full-stack development",
    "startup MVP development",
    "enterprise AI solutions",
    "AI automation",
    "machine learning development",
    "web app development",
    "mobile app development",
    "AI consulting",
    "product studio",
    "software development agency",
    "AI integration services",
    "chatbot development",
    "AI workflow automation",
  ],
  authors: [{ name: "Prodone", url: siteUrl }],
  creator: "Prodone",
  publisher: "Prodone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: "Prodone | AI Product Development Studio - Launch in Weeks, Not Months",
    description: siteDescription,
    images: [
      {
        url: "/images/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Prodone - AI Product Development Studio",
        type: "image/jpeg",
      },
      {
        url: "/images/logo-nobg.png",
        width: 512,
        height: 512,
        alt: "Prodone Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prodone | AI Product Development Studio",
    description: "Launch AI products in weeks, not months. We build AI-powered products, agents, and platforms for startups and enterprises.",
    images: ["/images/logo.jpeg"],
    creator: "@prodone",
    site: "@prodone",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo-nobg.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo-nobg.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo.jpeg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/images/logo-nobg.png",
    apple: [
      { url: "/images/logo.jpeg", sizes: "180x180", type: "image/jpeg" },
      { url: "/images/logo.jpeg", sizes: "152x152", type: "image/jpeg" },
      { url: "/images/logo.jpeg", sizes: "120x120", type: "image/jpeg" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/images/logo-nobg.png",
        color: "#DC2626",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "technology",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  other: {
    "msapplication-TileColor": "#DC2626",
    "msapplication-TileImage": "/images/logo.jpeg",
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Prodone",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.jpeg`,
        width: 512,
        height: 512,
      },
      image: `${siteUrl}/images/logo.jpeg`,
      description: siteDescription,
      email: "hello@prodone.online",
      sameAs: [
        "https://twitter.com/prodone",
        "https://linkedin.com/company/prodone",
        "https://github.com/prodone",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9663614603",
        contactType: "sales",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Prodone",
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Prodone | AI Product Development Studio",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#organization`,
      },
      description: siteDescription,
      inLanguage: "en-US",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Prodone AI Development Services",
      description: "Full-cycle AI product development, AI agents, web & mobile apps, and cloud infrastructure services.",
      provider: {
        "@id": `${siteUrl}/#organization`,
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 0,
          longitude: 0,
        },
        geoRadius: "40000 km",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "AI Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Cycle AI Product Development",
              description: "End-to-end AI products from concept to launch. Design, build, deploy.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI-Powered Web & Mobile Apps",
              description: "Smart apps with AI features that users actually engage with.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI Agents & Automation",
              description: "Autonomous agents that handle workflows and customer interactions 24/7.",
            },
          },
        ],
      },
      priceRange: "$2,500 - $10,000+",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How long does it take to build an AI product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We typically deliver production-ready AI products in 4-8 weeks, depending on complexity. Our streamlined process ensures fast delivery without compromising quality.",
          },
        },
        {
          "@type": "Question",
          name: "What types of AI products do you build?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We build AI-powered web and mobile apps, custom AI agents, automation systems, data intelligence platforms, and enterprise AI solutions. From MVPs to full-scale products.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer ongoing development support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! Our ProDev monthly retainer program provides dedicated developers for ongoing development, starting at $2,000/month with 50% off the first month.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script src="https://assets.calendly.com/assets/external/widget.js" async />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
