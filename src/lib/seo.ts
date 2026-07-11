import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/** Absolute URL to the pre-generated social card (public/og.png). */
const ogImage = {
  url: `${siteConfig.url}/og.png`,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — ${siteConfig.tagline}`,
};

const keywords = [
  "surgical AI",
  "surgical intelligence",
  "surgical video analysis",
  "computer-assisted surgery",
  "surgical scene understanding",
  "operating room AI",
  "surgical data science",
  "clinical decision support",
  "surgical phase recognition",
  "Critical View of Safety",
  "medical device AI",
  "surgical annotation platform",
];

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords,
  authors: [{ name: siteConfig.legalName }],
  creator: siteConfig.legalName,
  publisher: siteConfig.legalName,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    creator: "@theiasurgical",
    images: [ogImage.url],
  },
};

/** Per-page metadata helper. */
export function createMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — ${siteConfig.name}`,
      description,
      url: `${siteConfig.url}${path}`,
      images: [ogImage],
    },
    twitter: {
      title: `${title} — ${siteConfig.name}`,
      description,
      images: [ogImage.url],
    },
  };
}

/** JSON-LD Organization + Website graph for structured data. */
export function structuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.legalName,
        alternateName: siteConfig.name,
        url: siteConfig.url,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
        foundingDate: String(siteConfig.foundedYear),
        email: siteConfig.email,
        sameAs: [
          siteConfig.social.linkedin,
          siteConfig.social.x,
          siteConfig.social.github,
        ],
        knowsAbout: [
          "Surgical artificial intelligence",
          "Computer vision for surgery",
          "Surgical scene graphs",
          "Clinical decision support",
          "Medical device software",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}
