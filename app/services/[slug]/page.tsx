import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, Clock, Phone, Quote, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getService, paymentInfo, services, site, treatments } from "@/lib/site";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

function titleCase(value: string) {
  return value
    .toLowerCase()
    .replace(/\b\w/g, (character) => character.toUpperCase())
    .replace(/\b(3d|cbct|sdf|pfm|tmj|iv|dds)\b/gi, (acronym) => acronym.toUpperCase());
}

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service not found" };
  }

  return {
    title: service.name,
    description: service.description,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} | SmileQuest Dental`,
      description: service.description,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const relatedTreatments = treatments.filter((treatment) =>
    treatment.href.startsWith(`/services/${service.slug}`),
  );
  const otherServices = services.filter((item) => item.slug !== service.slug);
  const totalLinks = service.sections.length + 2;

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        title={
          (() => {
            const words = service.name.split(" ");
            const first = words[0] ?? service.name;
            const rest = words.slice(1).join(" ");

            if (!rest) {
              return <span className="italic text-gold">{first}</span>;
            }

            return (
              <>
                {first}
                <br />
                <span className="italic text-gold">{rest}</span>
              </>
            );
          })()
        }
        description={service.description}
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="/request-appointment">
              Request an appointment
              <ArrowUpRight />
            </Link>
          </Button>
          <Button asChild variant="outlineLight">
            <a href={site.phoneHref}>
              <Phone />
              {site.phone}
            </a>
          </Button>
        </div>
      </PageHero>

      <div className="relative h-[18rem] overflow-hidden bg-sage-pale sm:h-[24rem] lg:h-[30rem]">
        <Image
          src={service.image}
          alt={`${service.name} at SmileQuest Dental`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/70 via-transparent to-transparent" />
        <div className="page-shell absolute inset-x-0 bottom-0 z-10 pb-6 sm:pb-9">
          <div className="flex items-end justify-between gap-4">
            <div className="flex items-center gap-3 rounded-2xl border border-cream/20 bg-forest-deep/55 px-4 py-3 backdrop-blur-xl">
              <Image
                src={service.icon}
                alt=""
                width={40}
                height={40}
                className="h-8 w-8 object-contain"
              />
              <div>
                <p className="text-[0.6rem] tracking-[0.18em] text-gold uppercase">
                  SmileQuest Dental
                </p>
                <p className="font-display text-lg text-cream">{service.name}</p>
              </div>
            </div>
            <p className="hidden max-w-[16rem] text-right text-xs leading-5 text-cream/60 sm:block">
              {service.eyebrow}
            </p>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.42fr_1fr] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-eyebrow text-oxblood">On this page</p>
              <nav aria-label={`${service.name} sections`} className="mt-5">
                <ol className="space-y-1">
                  {service.sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-forest/70 transition-colors hover:bg-ivory hover:text-forest"
                      >
                        <span className="font-mono text-[0.6rem] tracking-[0.12em] text-forest/65">
                          {pad(index)}
                        </span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a
                      href="#payment"
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-forest/70 transition-colors hover:bg-ivory hover:text-forest"
                    >
                      <span className="font-mono text-[0.6rem] tracking-[0.12em] text-forest/65">
                        {pad(service.sections.length)}
                      </span>
                      Payment &amp; insurance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#care"
                      className="group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-forest/70 transition-colors hover:bg-ivory hover:text-forest"
                    >
                      <span className="font-mono text-[0.6rem] tracking-[0.12em] text-forest/65">
                        {pad(totalLinks - 1)}
                      </span>
                      How we care for you
                    </a>
                  </li>
                </ol>
              </nav>

              <div className="mt-7 rounded-2xl border border-forest/10 bg-ivory p-5">
                <p className="text-eyebrow text-oxblood">Ready when you are</p>
                <p className="mt-2 font-display text-2xl leading-tight">
                  Let’s talk about your smile.
                </p>
                <Button asChild size="sm" className="mt-4 w-full">
                  <Link href="/request-appointment">Request appointment</Link>
                </Button>
                <a
                  href={site.phoneHref}
                  className="mt-3 flex items-center justify-center gap-2 text-xs text-forest/70 transition-colors hover:text-forest"
                >
                  <Phone className="size-3.5" />
                  {site.phone}
                </a>
                <p className="mt-3 flex items-center justify-center gap-1.5 text-[0.65rem] text-forest/65">
                  <Clock className="size-3" />
                  {site.hoursSummary}
                </p>
              </div>
            </aside>

            <div>
              <Reveal>
                <p className="text-eyebrow text-oxblood">{service.lead.title}</p>
                <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] sm:text-5xl">
                  {service.eyebrow}
                </h2>
                <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-forest/65">
                  {service.lead.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {service.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2.5 rounded-2xl border border-forest/10 bg-ivory p-4 text-xs leading-5 text-forest/70"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-forest text-cream">
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      {titleCase(benefit)}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <div className="mt-12 space-y-4">
                {service.sections.map((section, index) => (
                  <Reveal key={section.id} delay={0.04 * index} amount={0.08}>
                    <article
                      id={section.id}
                      className="group relative overflow-hidden rounded-3xl border border-forest/10 bg-ivory p-6 transition-colors hover:border-forest/20 sm:p-8"
                    >
                      <div className="flex items-start justify-between gap-6">
                        <div className="w-full">
                          <p className="font-mono text-[0.62rem] tracking-[0.18em] text-forest/65">
                            {pad(index)}
                          </p>
                          {section.tagline ? (
                            <p className="mt-2 text-eyebrow text-oxblood">{section.tagline}</p>
                          ) : null}
                          <h3 className="mt-2 text-2xl leading-tight sm:text-3xl">
                            {section.title}
                          </h3>
                          <div className="mt-3 max-w-2xl space-y-3 text-sm leading-7 text-forest/70">
                            {section.paragraphs.map((paragraph) => (
                              <p key={paragraph}>{paragraph}</p>
                            ))}
                          </div>

                          {section.bullets && section.bullets.length > 0 ? (
                            <ul className="mt-4 space-y-2.5 border-t border-forest/10 pt-4">
                              {section.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-2.5 text-sm leading-6 text-forest/70"
                                >
                                  <Check className="mt-1 size-3.5 shrink-0 text-oxblood" />
                                  {bullet}
                                </li>
                              ))}
                            </ul>
                          ) : null}

                          {section.testimonial ? (
                            <figure className="mt-5 rounded-2xl border border-forest/10 bg-bone/70 p-5">
                              <Quote className="size-4 text-oxblood" />
                              <blockquote className="mt-2 text-sm leading-7 text-forest/75 italic">
                                “{section.testimonial.quote}”
                              </blockquote>
                              <figcaption className="mt-3 text-[0.65rem] tracking-[0.16em] text-forest/65 uppercase">
                                {section.testimonial.author} · Google review
                              </figcaption>
                            </figure>
                          ) : null}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal className="mt-12">
                <div
                  id="payment"
                  className="rounded-3xl border border-forest/10 bg-bone p-6 sm:p-8"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-forest text-cream">
                      <ShieldCheck className="size-4" />
                    </span>
                    <p className="text-eyebrow text-oxblood">Payment &amp; insurance</p>
                  </div>
                  <h3 className="mt-4 text-2xl leading-tight">{paymentInfo.title}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-forest/70">
                    {paymentInfo.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild variant="dark" size="sm">
                      <a href={site.phoneHref}>
                        <Phone />
                        Call our team
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="/request-appointment">
                        Request an appointment
                        <ArrowUpRight />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Reveal>

              <Reveal className="mt-12">
                <div
                  id="care"
                  className="grid gap-6 rounded-3xl bg-forest p-6 text-cream sm:grid-cols-[1fr_auto] sm:items-center sm:p-8"
                >
                  <div>
                    <p className="text-eyebrow text-gold">{service.closing.title}</p>
                    <div className="mt-2 space-y-3">
                      {service.closing.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="font-display text-xl leading-snug text-cream/90">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <Button asChild variant="light">
                    <Link href="/request-appointment">
                      Book a visit
                      <ArrowUpRight />
                    </Link>
                  </Button>
                </div>
              </Reveal>

              {relatedTreatments.length > 0 ? (
                <div className="mt-12">
                  <p className="text-eyebrow text-oxblood">Related care</p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {relatedTreatments.map((treatment) => (
                      <Link
                        key={treatment.name}
                        href={treatment.href}
                        className="group flex items-start gap-4 rounded-2xl border border-forest/10 bg-ivory p-4 transition-colors hover:border-forest/20"
                      >
                        <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-bone">
                          <Image
                            src={treatment.icon}
                            alt=""
                            width={32}
                            height={32}
                            className="h-7 w-7 object-contain"
                          />
                        </span>
                        <span>
                          <span className="block text-sm font-medium text-forest">
                            {treatment.name}
                          </span>
                          <span className="mt-1 block text-xs leading-5 text-forest/65">
                            {treatment.description}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-16 border-t border-forest/10 pt-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-eyebrow text-oxblood">Keep exploring</p>
                <h2 className="mt-2 text-3xl">Other ways we can help</h2>
              </div>
              <Button asChild variant="outline" size="sm">
                <Link href="/services">
                  All services
                  <ArrowUpRight />
                </Link>
              </Button>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {otherServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-forest/10 bg-ivory px-5 py-4 transition-colors hover:border-forest/20"
                >
                  <div>
                    <p className="text-sm font-medium text-forest">{item.name}</p>
                    <p className="mt-0.5 text-[0.65rem] tracking-[0.08em] text-forest/65 uppercase">
                      {item.eyebrow}
                    </p>
                  </div>
                  <ArrowUpRight className="size-4 text-forest/65 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-oxblood" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={`${service.name} in Devils Lake`}
        title={
          <>
            Ready to take the next step?{" "}
            <span className="italic text-gold">We’re here to help.</span>
          </>
        }
        description="Request an appointment online or call our team. We’ll help you find the right care for your smile."
      />
    </>
  );
}
