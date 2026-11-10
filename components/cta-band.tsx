import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

type CtaBandProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
};

export function CtaBand({
  eyebrow = "Your next step",
  title = (
    <>
      Are you looking for a dental office that can provide you and your family
      with <span className="italic text-gold">comprehensive care?</span>
    </>
  ),
  description = "Get in touch with our team, and we can schedule your next dental appointment.",
}: CtaBandProps) {
  return (
    <section className="relative overflow-hidden bg-forest-deep py-20 text-cream sm:py-28">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-48 left-1/2 size-[46rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.16),transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -bottom-40 size-[30rem] rounded-full border border-cream/8"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -bottom-28 size-[22rem] rounded-full border border-cream/8"
      />

      <div className="page-shell relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3 text-eyebrow text-gold">
              <span className="h-px w-8 bg-gold/60" />
              {eyebrow}
              <span className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="mt-6 text-4xl leading-[1.04] text-cream sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-cream/60">
              {description}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light">
                <Link href="/request-appointment">
                  Request an appointment
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href={site.phoneHref}>
                  <Phone />
                  Call {site.phone}
                </a>
              </Button>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-cream/10 pt-7 text-xs text-cream/60 sm:flex-row sm:gap-8">
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-cream"
              >
                <MapPin className="size-3.5 text-gold" />
                {site.address.full}
              </a>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-3.5 text-gold" />
                {site.hoursSummary}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
