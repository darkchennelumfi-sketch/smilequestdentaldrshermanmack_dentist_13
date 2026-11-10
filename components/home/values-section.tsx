import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { values } from "@/lib/site";

export function ValuesSection() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 h-px w-1/2 bg-gradient-to-l from-forest/20 to-transparent"
      />
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="Why SmileQuest"
              title={
                <>
                  Uncompromising
                  <br />
                  <span className="italic text-oxblood">excellence</span> in
                  dentistry
                </>
              }
            />
          </Reveal>
          <Reveal delay={0.12}>
            <div className="relative max-w-xl lg:pb-2">
              <Quote className="mb-4 size-8 text-gold" aria-hidden="true" />
              <p className="text-lg leading-8 text-forest/70">
                We take the time to understand where you’ve been and where you
                want your smile to go, because dentistry requires a tailored and
                personalized approach for long-lasting results.
              </p>
              <Button asChild variant="link" className="mt-5 text-sm font-medium">
                <Link href="/about" className="group inline-flex items-center gap-2">
                  Our approach to care
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3 lg:mt-20">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={0.08 * index} amount={0.15}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-forest/10 bg-ivory p-7 transition-all duration-500 hover:-translate-y-1 hover:border-oxblood/20 hover:shadow-soft sm:p-9">
                <div
                  aria-hidden="true"
                  className="absolute -top-20 -right-20 size-52 rounded-full bg-sage-pale/60 blur-2xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
                />
                <div className="relative flex items-start justify-between">
                  <span className="grid size-20 place-items-center rounded-2xl bg-bone transition-colors duration-500 group-hover:bg-sage-pale/70">
                    <Image
                      src={value.icon}
                      alt=""
                      width={64}
                      height={64}
                      className="h-12 w-12 object-contain"
                    />
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-forest/65">
                    {value.index}
                  </span>
                </div>
                <h3 className="relative mt-10 max-w-[15rem] text-2xl leading-tight text-forest sm:text-[1.7rem]">
                  {value.title}
                </h3>
                <p className="relative mt-4 text-sm leading-7 text-forest/70">
                  {value.description}
                </p>
                <div className="relative mt-8 h-px w-full bg-forest/10">
                  <div className="h-px w-0 bg-oxblood transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
