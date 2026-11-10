import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const points = [
  "Advanced training in oral surgery, endodontics, and periodontics",
  "Complex cases handled in-house, with personal attention",
  "Preventive care you can count on for the whole family",
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-bone py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute -right-40 top-1/3 size-[32rem] rounded-full border border-forest/5"
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 top-1/3 size-[24rem] rounded-full border border-forest/5"
      />
      <div className="page-shell">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem] border border-forest/10 bg-sage-pale shadow-soft">
                <Image
                  src="/images/office-ext.jpg"
                  alt="Exterior of the SmileQuest Dental building"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] hover:scale-[1.03]"
                />
              </div>

              <div className="absolute -right-2 -bottom-10 w-[46%] overflow-hidden rounded-3xl border-[6px] border-bone bg-bone shadow-lift sm:-right-6 sm:-bottom-14">
                <div className="relative aspect-[4/3.1] overflow-hidden rounded-[1.25rem]">
                  <Image
                    src="/images/smile-quest-small-team.jpg"
                    alt="SmileQuest dental team photo"
                    fill
                    sizes="(min-width: 1024px) 24vw, 46vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -top-5 -left-3 rounded-2xl bg-forest px-5 py-4 text-cream shadow-lift sm:-left-6">
                <p className="font-display text-4xl leading-none">3</p>
                <p className="mt-1 text-[0.6rem] tracking-[0.14em] text-cream/60 uppercase">
                  Dentists
                  <br />+ a large team
                </p>
              </div>

              <div className="absolute top-1/2 -right-10 hidden -translate-y-1/2 rotate-90 text-[0.6rem] tracking-[0.28em] text-forest/65 uppercase xl:block">
                Devils Lake · North Dakota
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="order-1 lg:order-2">
            <div className="flex items-center gap-3 text-eyebrow text-oxblood">
              <span className="h-px w-8 bg-oxblood/60" />
              Meet SmileQuest
            </div>
            <h2 className="mt-5 text-4xl leading-[1.04] sm:text-5xl lg:text-6xl">
              Personalized,
              <br />
              <span className="italic text-oxblood">quality care</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-forest/65">
              Our team listens first, provides tailored treatment plans, and
              ensures you receive high-quality dental care in our modern
              practice.
            </p>
            <p className="mt-4 text-base leading-8 text-forest/65">
              Whether you’re ready to rebuild your smile from the ground up or
              simply want preventive care you can count on for the whole family,
              our experienced team is here to help you.
            </p>

            <ul className="mt-8 space-y-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-forest/75">
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest text-cream">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button asChild>
                <Link href="/about">
                  Meet our team
                  <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/plan-your-visit">Plan your visit</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
