import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";

import { JsonLd } from "@/components/seo/json-ld";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { brand } from "@/config/brand";
import { siteUrl } from "@/config/site";
import { organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SpeakUp English — CEFR English Courses A1–C2",
    template: `%s | ${brand.name}`,
  },
  description:
    "Learn English online with structured CEFR courses for Urdu and Hindi speakers. Practise grammar, listening, speaking, pronunciation, vocabulary, reading and writing.",
  keywords: [
    "English courses for Urdu speakers",
    "English courses for Hindi speakers",
    "CEFR English courses",
    "learn English online",
    "English grammar",
    "English speaking practice",
    "English pronunciation",
    "online English lessons",
  ],
  openGraph: {
    title: "SpeakUp English — CEFR English Courses A1–C2",
    description:
      "Structured English courses for Urdu and Hindi speakers, from A1 foundations to C2 mastery.",
    siteName: brand.name,
    locale: "en_US",
    type: "website",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeakUp English — CEFR English Courses A1–C2",
    description:
      "Learn English online with structured CEFR courses for Urdu and Hindi speakers.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "_OZnCgstk2ZifabivG3kKS_hx-kDNsUNW652VPBxy18",
  },
};

export const viewport: Viewport = {
  themeColor: "#142B4A",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
