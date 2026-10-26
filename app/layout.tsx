import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { SoundProvider } from "@/components/providers/SoundProvider";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Digital Marketing Agency Chhattisgarh — ${site.name}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  category: "Digital Marketing",
  classification: "Digital Marketing Agency",
  creator: site.name,
  publisher: site.name,
  keywords: [
    "digital marketing agency Chhattisgarh",
    "digital marketing agency Bilaspur",
    "marketing agency Ambikapur",
    "social media marketing Korba",
    "Instagram ads agency",
    "Google ads agency Chhattisgarh",
    "content creation branding Bilaspur",
    "website management Chhattisgarh",
    "FreeKit Media",
  ],
  openGraph: {
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    description: site.description,
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  viewportFit: "cover",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: site.name,
  url: site.url,
  description: site.description,
  slogan: site.tagline,
  image: `${site.url}${site.logo.src}`,
  telephone: site.phone.primary.number,
  email: site.email,
  sameAs: [site.instagram.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line,
    addressLocality: site.cities[0],
    addressRegion: "Chhattisgarh",
    addressCountry: "IN",
  },
  areaServed: site.cities.map((city) => ({
    "@type": "City",
    name: city,
  })),
  openingHours: "Mo-Su 10:00-19:00",
  makesOffer: [
    "Content Creation & Branding",
    "Meta Ads & Google Ads",
    "Website & Social Media Management",
    "Personal Branding & Influencer Marketing",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <LenisProvider>
          <SoundProvider>{children}</SoundProvider>
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
