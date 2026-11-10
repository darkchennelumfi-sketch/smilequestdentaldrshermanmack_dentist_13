"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock, MapPin, Navigation, Phone } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

type OpenState = {
  label: string;
  detail: string;
  open: boolean;
};

function getOpenState(): OpenState {
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(now);

  const weekday = parts.find((part) => part.type === "weekday")?.value ?? "Monday";
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");

  const isWeekday = !["Saturday", "Sunday"].includes(weekday);
  const minutes = hour * 60 + minute;
  const isOpen = isWeekday && minutes >= 8 * 60 && minutes < 16 * 60;
  const timeLabel = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    hour: "numeric",
    minute: "2-digit",
  }).format(now);

  return {
    label: isOpen ? "Open now" : "Closed now",
    detail: isOpen ? `It’s ${timeLabel} in Devils Lake` : `It’s ${timeLabel} in Devils Lake`,
    open: isOpen,
  };
}

const steps = [
  {
    number: "01",
    icon: CalendarDays,
    title: "Connect with our team.",
    description:
      "Give us a call or request an appointment online—we’ll help you take the first step toward care that lasts.",
    href: "/request-appointment",
    label: "Request an appointment",
    external: false,
  },
  {
    number: "02",
    icon: MapPin,
    title: "Find Us",
    description:
      "Our dental office is easily accessible and conveniently located at 206 5th Avenue SE, Devils Lake, ND 58301.",
    href: site.mapsHref,
    label: "View map",
    external: true,
  },
  {
    number: "03",
    icon: Navigation,
    title: "Plan Your Visit",
    description:
      "Find out what you can expect at your first appointment with SmileQuest Dental.",
    href: "/plan-your-visit",
    label: "Plan your visit",
    external: false,
  },
];

export function VisitSection() {
  const [state, setState] = React.useState<OpenState | null>(null);

  React.useEffect(() => {
    const initial = window.setTimeout(() => setState(getOpenState()), 0);
    const timer = window.setInterval(() => setState(getOpenState()), 60_000);
    return () => {
      window.clearTimeout(initial);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-bone py-20 sm:py-28 lg:py-32">
      <div className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Reveal>
            <div className="flex items-center gap-3 text-eyebrow text-oxblood">
              <span className="h-px w-8 bg-oxblood/60" />
              How does it work?
            </div>
            <h2 className="mt-5 text-4xl leading-[1.03] sm:text-5xl lg:text-6xl">
              Start your
              <br />
              <span className="italic text-oxblood">SmileQuest.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-xl text-base leading-8 text-forest/65 lg:ml-auto">
              Three simple steps to care that lasts — from your first call to
              your first visit. We’re right here in Devils Lake.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const content = (
                <article className="group flex h-full flex-col rounded-3xl border border-forest/10 bg-ivory p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-forest/20 hover:shadow-soft sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-full bg-bone text-forest transition-colors group-hover:bg-oxblood group-hover:text-cream">
                      <Icon className="size-4" />
                    </span>
                    <span className="font-mono text-[0.65rem] tracking-[0.2em] text-forest/65">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl leading-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-forest/70">
                    {step.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-forest/70 transition-colors group-hover:text-oxblood">
                    {step.label}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </article>
              );

              return (
                <Reveal key={step.title} delay={0.06 * index} amount={0.1}>
                  {step.external ? (
                    <a href={step.href} target="_blank" rel="noreferrer" className="block h-full">
                      {content}
                    </a>
                  ) : (
                    <Link href={step.href} className="block h-full">
                      {content}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12} className="min-h-[28rem]">
            <div className="relative h-full min-h-[28rem] overflow-hidden rounded-3xl border border-forest/10 bg-sage-pale">
              <iframe
                title="Map to SmileQuest Dental at 206 5th Avenue SE, Devils Lake, ND"
                src={site.mapEmbedHref}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.25] contrast-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-forest-deep/30 via-transparent to-transparent" />

              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-cream/20 bg-cream/95 p-5 shadow-lift backdrop-blur-xl sm:inset-x-6 sm:bottom-6 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-eyebrow text-oxblood">Find us</p>
                    <p className="mt-1.5 font-display text-2xl leading-tight text-forest">
                      206 5th Avenue SE
                    </p>
                    <p className="text-sm text-forest/70">Devils Lake, ND 58301</p>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white px-3 py-1.5 text-xs">
                      <span
                        className={cn(
                          "size-2 rounded-full",
                          state?.open ? "bg-emerald-600" : "bg-oxblood/60",
                        )}
                      />
                      <span className="font-medium text-forest/75">
                        {state?.label ?? "Office hours"}
                      </span>
                    </div>
                    <p className="mt-2 text-[0.68rem] text-forest/65">
                      {state?.detail ?? "Monday–Friday · 8:00am–4:00pm"}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Button asChild size="sm" variant="dark">
                    <a href={site.mapsHref} target="_blank" rel="noreferrer">
                      <Navigation className="size-3.5" />
                      Get directions
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline">
                    <a href={site.phoneHref}>
                      <Phone className="size-3.5" />
                      {site.phone}
                    </a>
                  </Button>
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-forest/10 pt-3 text-[0.68rem] text-forest/65">
                  <Clock className="size-3.5" />
                  Monday to Friday, 8:00am–4:00pm
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
