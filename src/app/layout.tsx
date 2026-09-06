import type { Metadata, Viewport } from "next";
import { Caveat, Fraunces, Outfit } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://cerravoltalicante.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  applicationName: site.name,
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: site.name }],
  },
  twitter: {
    card: "summary",
    title: site.seo.title,
    description: site.seo.description,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#14110e",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["Locksmith", "Electrician", "LocalBusiness"],
  name: site.name,
  description: site.seo.description,
  image: `${siteUrl}/logo.png`,
  telephone: site.phoneTel,
  areaServed: {
    "@type": "AdministrativeArea",
    name: site.province,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: site.province,
    addressRegion: site.province,
    addressCountry: site.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-ES"
      className={`${outfit.variable} ${fraunces.variable} ${caveat.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-cream font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
