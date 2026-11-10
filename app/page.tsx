import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { AboutPreview } from "@/components/home/about-preview";
import { HomeHero } from "@/components/home/home-hero";
import { ServiceMarquee } from "@/components/home/service-marquee";
import { ServicesSection } from "@/components/home/services-section";
import { TeamSection } from "@/components/home/team-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TreatmentsSection } from "@/components/home/treatments-section";
import { ValuesSection } from "@/components/home/values-section";
import { VisitSection } from "@/components/home/visit-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "SmileQuest Dental — Comprehensive Dentistry in Devils Lake, ND",
  },
  description: site.description,
  alternates: { canonical: "/" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  description: site.description,
  url: "https://sqdental.com",
  telephone: site.phone,
  image: "https://sqdental.com/images/main-hero.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:00",
    },
  ],
  sameAs: [site.facebook],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomeHero />
      <ServiceMarquee />
      <ValuesSection />
      <AboutPreview />
      <ServicesSection />
      <TreatmentsSection />
      <TestimonialsSection />
      <TeamSection />
      <VisitSection />
      <CtaBand />
    </>
  );
}
