import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  HeartHandshake,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { TeamDirectory } from "@/components/team-directory";
import { Button } from "@/components/ui/button";
import { aboutContent, approach, dentists } from "@/lib/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the SmileQuest Dental team in Devils Lake, ND. Three dentists, a large supporting team, advanced training, gentle care, and a commitment to truly personalized dentistry.",
  alternates: { canonical: "/about" },
};

const teamFacts = [
  { value: "3", label: "Dentists", icon: Users },
  { value: "One", label: "Large supporting team", icon: HeartHandshake },
  { value: "1", label: "Practice, under one roof", icon: ShieldCheck },
];

function initials(name: string) {
  return name
    .replace(/,.*$/, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About SmileQuest"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "About Us" }]}
        title={
          <>
            Meet the
            <br />
            <span className="italic text-gold">SmileQuest</span> team.
          </>
        }
        description="The SmileQuest team brings together advanced training, gentle care, and a commitment to truly personalized dentistry — right here in Devils Lake."
      >
        <Button asChild variant="light">
          <Link href="/request-appointment">
            Request an appointment
            <ArrowUpRight />
          </Link>
        </Button>
      </PageHero>

      <section id="welcome" className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-32">
        <div className="page-shell">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <Reveal>
              <div className="relative">
                <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2.5rem] border border-forest/10 bg-sage-pale">
                  <Image
                    src="/images/smile-quest-small-team.jpg"
                    alt="SmileQuest dental team photo"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -right-4 -bottom-6 max-w-[15rem] rounded-2xl bg-oxblood p-5 text-cream shadow-lift sm:-right-8">
                  <p className="text-eyebrow text-gold">Our vision for your care</p>
                  <p className="mt-2 text-xs leading-6 text-cream/75">
                    We aim to exceed your expectations, ensuring you can enjoy a
                    positive experience each time you visit our practice.
                  </p>
                </div>
                <div className="absolute -top-6 -left-4 hidden rotate-[-6deg] rounded-xl border border-forest/10 bg-ivory px-4 py-3 shadow-soft sm:block">
                  <p className="font-display text-xl text-forest">Devils Lake, ND</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <SectionHeading
                eyebrow={aboutContent.eyebrow}
                title={
                  <>
                    More than just a
                    <br />
                    <span className="italic text-oxblood">dental office.</span>
                  </>
                }
              />
              <div className="mt-6 space-y-4 text-base leading-8 text-forest/65">
                {aboutContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <figure className="mt-7 rounded-2xl border border-forest/10 bg-ivory p-5">
                <Quote className="size-4 text-oxblood" />
                <blockquote className="mt-2 text-sm leading-7 text-forest/75 italic">
                  “{aboutContent.testimonial.quote}”
                </blockquote>
                <figcaption className="mt-3 text-[0.65rem] tracking-[0.16em] text-forest/65 uppercase">
                  {aboutContent.testimonial.author}
                </figcaption>
              </figure>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="dark">
                  <Link href="/request-appointment">
                    Request an appointment
                    <ArrowUpRight />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.phoneHref}>
                    Call {site.phone}
                    <ArrowUpRight />
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-3 lg:mt-24">
            {teamFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <Reveal key={fact.label} delay={0.06 * index} amount={0.15}>
                  <div className="group relative overflow-hidden rounded-3xl border border-forest/10 bg-ivory p-7 transition-colors duration-300 hover:border-forest/20">
                    <Icon className="size-5 text-oxblood" />
                    <p className="mt-8 font-display text-5xl leading-none text-forest">
                      {fact.value}
                    </p>
                    <p className="mt-2 text-[0.68rem] tracking-[0.14em] text-forest/65 uppercase">
                      {fact.label}
                    </p>
                    <div className="absolute right-0 bottom-0 size-24 rounded-tl-full bg-bone transition-colors duration-300 group-hover:bg-sage-pale/60" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="dentists" className="relative overflow-hidden bg-bone py-20 sm:py-28 lg:py-32">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our doctors"
              title={
                <>
                  Meet the
                  <br />
                  <span className="italic text-oxblood">Dentists.</span>
                </>
              }
              description="Three dentists, one shared standard: advanced training, careful diagnosis, and care that starts with listening."
            />
          </Reveal>

          <div className="mt-12 space-y-4">
            {dentists.map((dentist, index) => (
              <Reveal key={dentist.slug} delay={0.05 * index} amount={0.08}>
                <article
                  id={dentist.slug}
                  className="overflow-hidden rounded-3xl border border-forest/10 bg-ivory"
                >
                  <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.32fr_1fr] lg:gap-12 lg:p-10">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="grid size-20 place-items-center rounded-3xl bg-forest font-display text-2xl text-cream">
                          {initials(dentist.name)}
                        </span>
                        <span className="font-mono text-[0.65rem] tracking-[0.2em] text-forest/65">
                          0{index + 1}
                        </span>
                      </div>
                      <h3 className="mt-6 font-display text-3xl leading-tight text-forest">
                        {dentist.name}
                      </h3>
                      <p className="mt-1 text-[0.68rem] tracking-[0.14em] text-oxblood uppercase">
                        Dentist
                      </p>
                      <p className="mt-4 flex items-center gap-2 text-xs text-forest/65">
                        <GraduationCap className="size-3.5" />
                        Doctor of Dental Surgery
                      </p>
                    </div>

                    <div>
                      <div className="space-y-4 text-sm leading-7 text-forest/70">
                        {dentist.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <div className="mt-6 grid gap-5 border-t border-forest/10 pt-5 sm:grid-cols-2">
                        <div>
                          <h4 className="text-eyebrow text-oxblood">Education</h4>
                          <ul className="mt-3 space-y-2">
                            {dentist.education.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs leading-5 text-forest/70"
                              >
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-oxblood" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-eyebrow text-oxblood">Organizations</h4>
                          <ul className="mt-3 space-y-2">
                            {dentist.organizations.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-xs leading-5 text-forest/70"
                              >
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-oxblood" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="relative overflow-hidden bg-cream py-20 sm:py-28 lg:py-32">
        <div className="page-shell">
          <Reveal>
            <SectionHeading
              eyebrow="The people behind the care"
              title={
                <>
                  Meet the
                  <br />
                  <span className="italic text-oxblood">Team.</span>
                </>
              }
              description="Administration, hygienists, assistants, and support staff who keep every visit calm, clear, and personal."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-10">
              <TeamDirectory />
            </div>
          </Reveal>
        </div>
      </section>

      <section id="approach" className="relative overflow-hidden bg-forest py-20 text-cream sm:py-28">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute -top-40 right-0 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(92,112,100,0.42),transparent_70%)]"
        />
        <div className="page-shell relative z-10">
          <Reveal>
            <SectionHeading
              eyebrow="Our approach"
              tone="light"
              title={
                <>
                  Our Approach to
                  <br />
                  Your <span className="italic text-gold">Dental Care.</span>
                </>
              }
              description="Every smile comes with a story. These are the values that shape how we care for yours."
            />
          </Reveal>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {approach.map((item, index) => (
              <Reveal key={item.title} delay={0.06 * index} amount={0.15}>
                <article className="relative h-full overflow-hidden rounded-3xl border border-cream/10 bg-cream/5 p-6 backdrop-blur-md sm:p-8">
                  <span className="font-mono text-[0.65rem] tracking-[0.2em] text-cream/60">
                    0{index + 1}
                  </span>
                  <h3 className="mt-6 font-display text-3xl leading-tight text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-cream/60">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="vision" className="relative overflow-hidden bg-oxblood py-20 text-cream sm:py-28 lg:py-32">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute -top-40 right-0 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.18),transparent_70%)]"
        />
        <div className="page-shell relative z-10 grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">
          <Reveal>
            <p className="text-eyebrow text-gold">Our vision for your care</p>
            <div className="mt-6 h-px w-full bg-cream/15" />
            <p className="mt-6 max-w-xs text-sm leading-7 text-cream/60">
              The standard we hold ourselves to, every visit.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <blockquote className="font-display text-3xl leading-[1.35] text-cream/90 sm:text-4xl lg:text-[2.75rem]">
              “At SmileQuest, we feel privileged to serve you and your family. We
              earn your trust by providing uncompromising excellence in all that
              we do. We take the time to listen to each and every patient. We
              fully understand individual needs so we can develop tailored
              recommendations and treatment plans to help you achieve optimal
              oral health. We aim to exceed your expectations, ensuring you can
              enjoy a positive experience each time you visit our practice.”
            </blockquote>
            <div className="mt-8 flex items-center gap-3">
              <span className="h-px w-10 bg-gold/60" />
              <span className="text-eyebrow text-cream/60">SmileQuest Dental</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="page-shell">
          <div className="rounded-[2.5rem] border border-forest/10 bg-ivory p-7 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
              <Reveal>
                <SectionHeading
                  eyebrow="Thoughtful care"
                  title={
                    <>
                      Care that achieves
                      <br />
                      the <span className="italic text-oxblood">results you want.</span>
                    </>
                  }
                  description={aboutContent.closing.paragraph}
                />
              </Reveal>
              <Reveal delay={0.1}>
                <div className="space-y-3">
                  <Button asChild variant="dark" className="w-full justify-between sm:w-auto">
                    <Link href="/request-appointment">
                      Request an appointment
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-between sm:w-auto">
                    <Link href="/services">
                      Explore our services
                      <ArrowUpRight />
                    </Link>
                  </Button>
                  <a
                    href={site.phoneHref}
                    className="flex items-center justify-between rounded-full border border-forest/15 px-6 py-3 text-sm text-forest/70 transition-colors hover:border-forest hover:text-forest"
                  >
                    Call {site.phone}
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Come see us"
        title={
          <>
            Ready to meet the team?{" "}
            <span className="italic text-gold">We’d love to care for your smile.</span>
          </>
        }
        description="Request an appointment online or give us a call. Our team will help you take the first step toward care that lasts."
      />
    </>
  );
}
