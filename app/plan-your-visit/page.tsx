import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  Phone,
  Quote,
  ScanLine,
  Sparkles,
} from "lucide-react";

import { CtaBand } from "@/components/cta-band";
import { FaqSection } from "@/components/faq-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Plan Your Visit",
  description:
    "Find out what you can expect at your first appointment with SmileQuest Dental in Devils Lake, ND — a thorough 90-minute evaluation, advanced imaging, location, office hours, and how to request an appointment.",
  alternates: { canonical: "/plan-your-visit" },
};

const firstVisitChecklist = [
  "A conversation about your dental history, current concerns, and overall health",
  "Digital full-mouth X-rays (including bitewings) to assess your current oral health and establish a baseline for future comparison",
  "A periodontal assessment (including probing) to evaluate your gum health",
  "A complete oral evaluation, including screening for cavities, bite issues, signs of grinding, and more",
  "Periodontal charting and documentation of gum measurements for long-term monitoring",
  "A presentation of findings, including intraoral photos and radiographs, so you can see exactly what we see",
  "A comprehensive treatment plan tailored to your needs",
  "A private financial consultation to review costs, insurance coverage, and available payment options",
];

export default function PlanYourVisitPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan your visit"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Plan Your Visit" }]}
        title={
          <>
            Your first visit,
            <br />
            <span className="italic text-gold">made simple.</span>
          </>
        }
        description="Find out what you can expect at your first appointment with SmileQuest Dental. We’re conveniently located in Devils Lake, ND."
      >
        <Button asChild variant="light">
          <Link href="/request-appointment">
            Request an appointment
            <ArrowUpRight />
          </Link>
        </Button>
      </PageHero>

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="page-shell">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: MapPin,
                label: "Where to find us",
                value: site.address.full,
                href: site.mapsHref,
                external: true,
              },
              {
                icon: Clock,
                label: "Office hours",
                value: site.hoursSummary,
                href: "/request-appointment",
                external: false,
              },
              {
                icon: Phone,
                label: "Talk with our team",
                value: site.phone,
                href: site.phoneHref,
                external: true,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              const content = (
                <div className="group flex h-full flex-col rounded-3xl border border-forest/10 bg-ivory p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-soft sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-full bg-bone text-forest transition-colors group-hover:bg-oxblood group-hover:text-cream">
                      <Icon className="size-4" />
                    </span>
                    <ArrowUpRight className="size-4 text-forest/65 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-oxblood" />
                  </div>
                  <p className="mt-6 text-eyebrow text-oxblood">{item.label}</p>
                  <p className="mt-2 text-sm leading-6 text-forest/70">{item.value}</p>
                </div>
              );

              return (
                <Reveal key={item.label} delay={0.06 * index} amount={0.15}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} className="block h-full">
                      {content}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <SectionHeading
                eyebrow="We welcome smiles from patients of all ages"
                title={
                  <>
                    A first visit built
                    <br />
                    around <span className="italic text-oxblood">you.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-5 text-base leading-8 text-forest/65">
                <p>
                  At SmileQuest, we’re honored to care for individuals and
                  families within our community, including young children. While
                  our primary focus is on providing comprehensive restorative
                  care, we also welcome patients who need general and preventive
                  care, cosmetic dentistry, and endodontic care. Whether it’s your
                  first visit altogether or your first visit in a while, we’re
                  here to help you—with no judgment and a plan to move forward
                  together.
                </p>
                <p>
                  Our goal is to make every visit as comfortable and informative
                  as possible. To our team, your first appointment with us is more
                  than an evaluation; it’s the beginning of a long-term
                  relationship built on trust, education, and personalized care.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild variant="dark">
                  <Link href="/request-appointment">
                    Book your first visit
                    <ArrowUpRight />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={site.phoneHref}>
                    <Phone />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-forest py-20 text-cream sm:py-28">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="absolute -top-40 right-0 size-[36rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(92,112,100,0.42),transparent_70%)]"
        />
        <div className="page-shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="What to expect at your first visit"
                tone="light"
                title={
                  <>
                    A thorough evaluation
                    <br />
                    to build a <span className="italic text-gold">clear plan.</span>
                  </>
                }
                description="Your initial appointment is designed to give us a full understanding of your oral health, your goals, and how we can support you going forward. This visit typically takes about 90 minutes."
              />
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm text-cream/70 backdrop-blur-md">
                <Clock className="size-4 text-gold" />
                About 90 minutes, start to finish
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ul className="grid gap-2.5">
                {firstVisitChecklist.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-cream/10 bg-cream/5 p-4 text-sm leading-6 text-cream/70 backdrop-blur-md"
                  >
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold/15 text-[0.6rem] font-medium text-gold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex items-start gap-2">
                      <Check className="mt-1 size-3.5 shrink-0 text-gold" />
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-cream/60">
                In most cases, your hygienist will perform a professional dental
                cleaning at the first visit as well, but not always. If we
                determine that scaling or root planing is needed, that will be
                scheduled as a separate appointment. This ensures you receive the
                right type of cleaning based on your specific gum health and
                allows us to deliver more focused care.
              </p>

              <figure className="mt-6 rounded-2xl border border-cream/10 bg-cream/5 p-5 backdrop-blur-md">
                <Quote className="size-4 text-gold" />
                <blockquote className="mt-2 text-sm leading-7 text-cream/75 italic">
                  “My first time there and people were so kind, polite and love
                  the care they provided. They make one feel at home, like
                  belong. I’m happy to go back.”
                </blockquote>
                <figcaption className="mt-3 text-[0.65rem] tracking-[0.16em] text-cream/60 uppercase">
                  Marlene S. · Google review
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="rounded-3xl border border-forest/10 bg-ivory p-6 sm:p-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-bone text-forest">
                  <ScanLine className="size-5" />
                </span>
                <h2 className="mt-6 text-3xl leading-tight">
                  Advanced Imaging &amp; Diagnostic Tools
                </h2>
                <p className="mt-2 text-eyebrow text-oxblood">
                  High-quality images with minimal radiation
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-forest/70">
                  <p>
                    We use digital radiography for all standard X-rays, which
                    significantly reduces radiation exposure and eliminates
                    waiting time for image processing. Additionally, our panoramic
                    X-ray machine captures detailed, full-arch images. With this
                    technology, patients can see what we see as we evaluate their
                    oral health and inform them about exactly what we’re seeing.
                  </p>
                  <p>
                    When needed, we also have cone-beam imaging technology (CBCT)
                    available. This 3D scan provides incredibly detailed views of
                    bone structure, nerves, and tooth roots, and we often use it
                    for cases involving implants, endodontics, or complex
                    treatment planning.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-forest/10 bg-ivory p-6 sm:p-8">
                <span className="grid size-12 place-items-center rounded-2xl bg-bone text-forest">
                  <Sparkles className="size-5" />
                </span>
                <h2 className="mt-6 text-3xl leading-tight">After Your Evaluation</h2>
                <p className="mt-2 text-eyebrow text-oxblood">A plan designed just for you</p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-forest/70">
                  <p>
                    Once we’ve completed your full oral health evaluation, we’ll
                    sit down with you to review the findings and talk through your
                    next steps. It’s important you have a clear understanding of
                    your oral health. We will also discuss your short-term and
                    long-term dental goals, as well as our treatment
                    recommendations.
                  </p>
                  <p>
                    You’ll leave our office with a comprehensive treatment plan, a
                    timeline that works for you, and a financial overview that
                    outlines your options. At SmileQuest, our goal is to empower
                    you to make informed decisions and to feel supported every
                    step of the way.
                  </p>
                </div>
                <Button asChild variant="dark" size="sm" className="mt-6">
                  <Link href="/request-appointment">
                    Start your SmileQuest
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bone py-20 sm:py-28">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <Reveal>
              <div className="relative min-h-[26rem] overflow-hidden rounded-3xl border border-forest/10 bg-sage-pale">
                <iframe
                  title="Map to SmileQuest Dental"
                  src={site.mapEmbedHref}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[0.25]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/25 to-transparent" />
                <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-cream/20 bg-cream/95 p-4 shadow-lift backdrop-blur-xl">
                  <p className="text-eyebrow text-oxblood">SmileQuest Dental</p>
                  <p className="mt-1 font-display text-xl text-forest">
                    {site.address.street}
                  </p>
                  <p className="text-sm text-forest/70">
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </p>
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-forest underline-offset-4 hover:underline"
                  >
                    Get directions
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <SectionHeading
                eyebrow="Find us"
                title={
                  <>
                    Right here in
                    <br />
                    <span className="italic text-oxblood">Devils Lake.</span>
                  </>
                }
                description="Our dental office is easily accessible and conveniently located at 206 5th Avenue SE. We’re open Monday through Friday."
              />

              <div className="mt-8 rounded-3xl border border-forest/10 bg-ivory p-2">
                {site.hours.map((entry) => {
                  const closed = !entry.open;
                  return (
                    <div
                      key={entry.day}
                      className="flex items-center justify-between border-b border-forest/8 px-4 py-3 text-sm last:border-0"
                    >
                      <span className="text-forest/65">{entry.day}</span>
                      <span
                        className={
                          closed
                            ? "rounded-full bg-forest/5 px-2.5 py-1 text-[0.65rem] tracking-[0.08em] text-forest/65 uppercase"
                            : "font-medium text-forest"
                        }
                      >
                        {closed ? "Closed" : `${entry.open} – ${entry.close}`}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="dark">
                  <a href={site.phoneHref}>
                    <Phone />
                    Call {site.phone}
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/request-appointment">
                    Request appointment
                    <ArrowUpRight />
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <FaqSection />

      <CtaBand
        eyebrow="We’re ready when you are"
        title={
          <>
            Setting the stage for lifelong dental health.{" "}
            <span className="italic text-gold">Start your SmileQuest.</span>
          </>
        }
        description="Call the team at SmileQuest and book an appointment today—we’ll help you take the first step toward care that lasts."
      />
    </>
  );
}
