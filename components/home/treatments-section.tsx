import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { treatments } from "@/lib/site";

export function TreatmentsSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-bone/60 to-transparent"
      />
      <div className="page-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <p className="text-eyebrow text-oxblood">Everything you need is right here…</p>
            <h2 className="mt-5 text-4xl leading-[1.03] sm:text-5xl lg:text-6xl">
              More than a
              <br />
              <span className="italic text-oxblood">checkup.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-8 text-forest/65 lg:ml-auto">
              From in-house oral surgery to clear aligners and complete smile
              makeovers, our team brings advanced training and a gentle touch to
              the treatments you need — all in one place.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((treatment, index) => (
            <Reveal key={treatment.name} delay={0.05 * index} amount={0.12}>
              <Link
                href={treatment.href}
                className="group relative flex h-full min-h-[19rem] flex-col overflow-hidden rounded-3xl border border-forest/10 bg-ivory p-6 transition-all duration-500 hover:-translate-y-1 hover:border-forest hover:bg-forest hover:shadow-soft sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-5 font-display text-7xl leading-none text-forest/[0.045] transition-colors duration-500 group-hover:text-cream/[0.06]"
                >
                  0{index + 1}
                </span>

                <div className="flex items-start justify-between">
                  <span className="grid size-16 place-items-center rounded-2xl bg-bone transition-colors duration-500 group-hover:bg-cream/10">
                    <Image
                      src={treatment.icon}
                      alt=""
                      width={56}
                      height={56}
                      className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </span>
                  <ArrowUpRight className="size-4 text-forest/65 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>

                <p className="mt-8 text-eyebrow text-oxblood transition-colors duration-500 group-hover:text-gold">
                  {treatment.group}
                </p>
                <h3 className="mt-2 text-2xl leading-tight text-forest transition-colors duration-500 group-hover:text-cream">
                  {treatment.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-forest/70 transition-colors duration-500 group-hover:text-cream/60">
                  {treatment.description}
                </p>

                <span className="mt-auto flex items-center gap-2 pt-6 text-xs font-medium text-forest/65 transition-colors duration-500 group-hover:text-cream/70">
                  Explore this treatment
                  <span className="h-px w-5 bg-current transition-all duration-500 group-hover:w-8" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
