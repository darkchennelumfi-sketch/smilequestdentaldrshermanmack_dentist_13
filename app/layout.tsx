import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Instrument_Sans } from "next/font/google";

import { QuickActions } from "@/components/quick-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const instrument = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sqdental.com"),
  title: {
    default: "SmileQuest Dental — Comprehensive Dentistry in Devils Lake, ND",
    template: "%s | SmileQuest Dental",
  },
  description: site.description,
  keywords: [
    "dentist Devils Lake ND",
    "SmileQuest Dental",
    "general dentistry",
    "cosmetic dentistry",
    "restorative dentistry",
    "children's dentistry",
    "endodontics",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: site.name,
    title: "SmileQuest Dental — Comprehensive Dentistry in Devils Lake, ND",
    description: site.description,
    images: [
      {
        url: "/images/smile-quest-small-team.jpg",
        width: 722,
        height: 499,
        alt: "SmileQuest dental team photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileQuest Dental — Comprehensive Dentistry in Devils Lake, ND",
    description: site.description,
    images: ["/images/smile-quest-small-team.jpg"],
  },
  icons: {
    icon: "/icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b2a22",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${instrument.variable} ${plexMono.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only z-50 rounded-full bg-cream px-4 py-2 text-sm text-forest focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <QuickActions />
      </body>
    </html>
  );
}
