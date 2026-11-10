import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock, MapPin, Phone, ShieldCheck } from "lucide-react";

import { BookingForm } from "@/components/booking-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request an Appointment",
  description:
    "Request a dental appointment with SmileQuest Dental in Devils Lake, ND. Complete the form and our team will reach out to confirm your appointment time.",
  alternates: { canonical: "/request-appointment" },
};

export default function RequestAppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Request an appointment"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Request Appointment" },
        ]}
        title={
          <>
            Book an
            <br />
            <span className="italic text-gold">appointment</span> online.
          </>
        }
        description="Please complete the form below, and our team will reach out to confirm your appointment time."
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-40 size-[34rem] rounded-full border border-forest/5"
        />
        <div className="page-shell relative z-10">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.7fr] lg:items-start lg:gap-12">
            <Reveal>
              <BookingForm />
            </Reveal>

            <Reveal delay={0.12}>
              <aside className="space-y-4 lg:sticky lg:top-28">
                <div className="rounded-3xl border border-forest/10 bg-forest p-6 text-cream sm:p-7">
                  <p className="text-eyebrow text-gold">Rather talk it through?</p>
                  <p className="mt-3 font-display text-2xl leading-tight">
                    Call our team directly.
                  </p>
                  <a
                    href={site.phoneHref}
                    className="mt-5 flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/5 p-4 transition-colors hover:bg-cream/10"
                  >
                    <span className="grid size-11 place-items-center rounded-full bg-gold text-forest">
                      <Phone className="size-4" />
                    </span>
                    <span>
                      <span className="block text-[0.62rem] tracking-[0.16em] text-cream/60 uppercase">
                        SmileQuest Dental
                      </span>
                      <span className="font-display text-2xl text-cream">
                        {site.phone}
                      </span>
                    </span>
                    <ArrowUpRight className="ml-auto size-4 text-cream/60" />
                  </a>
                  <p className="mt-4 flex items-center gap-2 text-xs text-cream/60">
                    <Clock className="size-3.5 text-gold" />
                    {site.hoursSummary}
                  </p>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-ivory p-6 sm:p-7">
                  <p className="text-eyebrow text-oxblood">Visit us</p>
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group mt-3 flex items-start gap-3"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-bone text-forest">
                      <MapPin className="size-4" />
                    </span>
                    <span className="text-sm leading-6 text-forest/65">
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.state} {site.address.zip}
                      <span className="mt-1 flex items-center gap-1 text-xs text-forest/65 transition-colors group-hover:text-oxblood">
                        Get directions
                        <ArrowUpRight className="size-3" />
                      </span>
                    </span>
                  </a>
                </div>

                <div className="rounded-3xl border border-forest/10 bg-bone p-6 sm:p-7">
                  <p className="text-eyebrow text-oxblood">Good to know</p>
                  <ul className="mt-3 space-y-3">
                    {[
                      {
                        icon: CalendarDays,
                        text: "This form is a request. Our team will confirm the time with you.",
                      },
                      {
                        icon: ShieldCheck,
                        text: "Please don’t include private health details in the form.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.text} className="flex items-start gap-2.5 text-xs leading-5 text-forest/70">
                          <Icon className="mt-0.5 size-3.5 shrink-0 text-oxblood" />
                          {item.text}
                        </li>
                      );
                    })}
                  </ul>
                  <Button asChild variant="link" className="mt-4 text-xs font-medium">
                    <Link href="/plan-your-visit" className="inline-flex items-center gap-1.5">
                      Plan your visit
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
