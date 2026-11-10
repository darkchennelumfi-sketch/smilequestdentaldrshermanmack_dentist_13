import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { TreatmentsSection } from "@/components/home/treatments-section";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "General, cosmetic, restorative, children’s, and endodontic dentistry at SmileQuest Dental in Devils Lake, ND — all under one roof.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
        title={
          <>
            Dentistry
            <br />
            <span className="italic text-gold">under one roof.</span>
          </>
        }
        description="From preventive dental care to oral surgery and endodontics, the SmileQuest team is equipped to handle all your dentistry needs."
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="page-shell space-y-4">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={0.04 * index} amount={0.12}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid overflow-hidden rounded-3xl border border-forest/10 bg-ivory transition-all duration-500 hover:border-forest/20 hover:shadow-soft lg:grid-cols-[0.82fr_1.18fr]"
              >
                <div className="relative min-h-[16rem] overflow-hidden bg-sage-pale lg:min-h-[20rem]">
                  <Image
                    src={service.image}
                    alt={`${service.name} at SmileQuest Dental`}
                    fill
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    className="object-cover transition-transform duration-[1.1s] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/35 to-transparent lg:bg-gradient-to-r" />
                  <span className="absolute top-5 left-5 grid size-14 place-items-center rounded-2xl border border-cream/20 bg-cream/15 backdrop-blur-md">
                    <Image
                      src={service.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="h-8 w-8 object-contain"
                    />
                  </span>
                </div>

                <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-eyebrow text-oxblood">{service.eyebrow}</p>
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-forest/65">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
                    {service.name}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-forest/70">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.sections.map((section) => (
                      <span
                        key={section.id}
                        className="rounded-full border border-forest/10 bg-bone px-3 py-1.5 text-[0.68rem] text-forest/70"
                      >
                        {section.title}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-forest/65 transition-colors group-hover:text-oxblood">
                    Explore {service.name.toLowerCase()}
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <TreatmentsSection />
      <CtaBand
        eyebrow="Not sure where to start?"
        title={
          <>
            Tell us what’s on your mind.{" "}
            <span className="italic text-gold">We’ll help you find the way.</span>
          </>
        }
        description="Request an appointment and our team will listen first, explain your options clearly, and build a plan around your needs."
      />
    </>
  );
}
