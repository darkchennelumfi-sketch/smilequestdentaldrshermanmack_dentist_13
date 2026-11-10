import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site";

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-12",
];

export function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-28 lg:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute top-24 -left-40 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(92,112,100,0.38),transparent_70%)]"
      />
      <div className="page-shell relative z-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              tone="light"
              title={
                <>
                  Care that covers
                  <br />
                  all your{" "}
                  <span className="italic text-gold">oral health</span> needs
                </>
              }
              description="From preventive dental care to oral surgery and endodontics, the SmileQuest team is equipped to handle all your dentistry needs."
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild variant="outlineLight">
              <Link href="/services">
                Explore all services
                <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={0.06 * index}
              amount={0.12}
              className={spans[index]}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative flex h-full min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl border border-cream/12 sm:min-h-[24rem]"
              >
                <Image
                  src={service.image}
                  alt={`${service.name} at SmileQuest Dental`}
                  fill
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/95 via-forest-deep/45 to-forest-deep/5" />
                <div className="absolute inset-0 bg-forest/10 transition-colors duration-500 group-hover:bg-forest/0" />

                <div className="relative z-10 flex items-start justify-between p-6 sm:p-8">
                  <span className="grid size-14 place-items-center rounded-2xl border border-cream/15 bg-cream/10 backdrop-blur-md">
                    <Image
                      src={service.icon}
                      alt=""
                      width={48}
                      height={48}
                      className="h-8 w-8 object-contain"
                    />
                  </span>
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-cream/60">
                    0{index + 1}
                  </span>
                </div>

                <div className="relative z-10 mt-auto p-6 pt-4 sm:p-8 sm:pt-6">
                  <p className="text-eyebrow text-gold">{service.eyebrow}</p>
                  <h3 className="mt-2 text-3xl leading-tight text-cream sm:text-4xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-cream/65">
                    {service.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-xs font-medium tracking-[0.06em] text-cream/85 transition-colors group-hover:border-gold group-hover:text-gold">
                    Learn about {service.name.toLowerCase()}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
