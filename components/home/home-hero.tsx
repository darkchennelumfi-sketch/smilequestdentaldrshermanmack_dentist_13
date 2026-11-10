"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Phone, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function HomeHero() {
  const prefersReducedMotion = useReducedMotion();
  const initial = prefersReducedMotion ? false : { opacity: 0, y: 26 };

  return (
    <section className="relative isolate overflow-hidden bg-forest pt-28 pb-0 text-cream lg:pt-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-10%] size-[44rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(92,112,100,0.55),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-[-20%] size-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(104,58,61,0.42),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cream/20 to-transparent"
      />

      <div className="page-shell relative z-10">
        <div className="grid items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-24">
          <div className="max-w-3xl">
            <motion.div
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="inline-flex items-center gap-3 rounded-full border border-cream/15 bg-cream/5 py-2 pr-5 pl-2 backdrop-blur-md"
            >
              <span className="grid size-7 place-items-center rounded-full bg-gold/15 text-gold">
                <Sparkles className="size-3.5" />
              </span>
              <span className="text-eyebrow text-cream/70">
                Devils Lake, North Dakota
              </span>
            </motion.div>

            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease }}
              className="mt-8 text-[clamp(3.15rem,7.8vw,6.9rem)] leading-[0.93] font-light tracking-[-0.045em]"
            >
              Your dental
              <br />
              experts in{" "}
              <span className="italic text-gold">Devils Lake,</span>
              <br />
              ND
            </motion.h1>

            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease }}
              className="mt-8 max-w-xl text-base leading-7 text-cream/68 sm:text-lg sm:leading-8"
            >
              At SmileQuest Dental, we don’t do quick fixes or one-size-fits-all
              solutions. We believe in a tailored and personalized approach for
              lasting results.
            </motion.p>

            <motion.div
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26, ease }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild size="lg" variant="light" className="group">
                <Link href="/request-appointment">
                  Request an appointment
                  <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href={site.phoneHref}>
                  <Phone />
                  {site.phone}
                </a>
              </Button>
            </motion.div>

            <motion.dl
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38, ease }}
              className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-cream/12 pt-6"
            >
              {[
                { value: "3", label: "Dentists on our team" },
                { value: "5", label: "Care areas, one roof" },
                { value: "M–F", label: "8:00am – 4:00pm" },
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-4xl text-cream">{stat.value}</dt>
                  <dd className="mt-1 text-[0.68rem] leading-4 tracking-[0.08em] text-cream/60 uppercase">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="relative mx-auto w-full max-w-[34rem] lg:mr-0"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[999px_999px_2.5rem_2.5rem] border border-cream/10"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-8 rounded-[999px_999px_3rem_3rem] border border-cream/5"
            />

            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[999px_999px_2.25rem_2.25rem] border border-cream/15 bg-forest-soft">
              <Image
                src="/images/main-hero.jpg"
                alt="SmileQuest Dental practice"
                fill
                priority
                sizes="(min-width: 1024px) 34rem, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/75 via-forest-deep/5 to-transparent" />

              <div className="absolute inset-x-5 bottom-5">
                <div className="rounded-2xl border border-cream/15 bg-forest-deep/55 p-5 backdrop-blur-xl">
                  <p className="text-eyebrow text-gold">Our promise</p>
                  <p className="mt-2 font-display text-2xl leading-tight text-cream">
                    Uncompromising excellence in dentistry.
                  </p>
                  <Link
                    href="/about"
                    className="group mt-3 inline-flex items-center gap-1.5 text-xs text-cream/65 transition-colors hover:text-cream"
                  >
                    More about SmileQuest
                    <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute -top-7 -right-2 hidden size-28 place-items-center rounded-full border border-cream/15 bg-forest-deep/60 backdrop-blur-xl sm:grid lg:-right-10">
              <div className="absolute inset-2 animate-spin-slow">
                <svg viewBox="0 0 100 100" className="size-full" aria-hidden="true">
                  <defs>
                    <path
                      id="hero-circle"
                      d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-cream/60 text-[7.2px] tracking-[0.24em] uppercase">
                    <textPath href="#hero-circle">
                      SmileQuest Dental · Devils Lake ·{" "}
                    </textPath>
                  </text>
                </svg>
              </div>
              <Sparkles className="size-5 text-gold" />
            </div>

            <div className="absolute bottom-16 -left-4 hidden rounded-2xl border border-cream/15 bg-cream/95 p-4 text-forest shadow-lift backdrop-blur-md sm:block lg:-left-10">
              <p className="text-eyebrow text-oxblood">Comprehensive care</p>
              <p className="mt-1 max-w-[11rem] font-display text-lg leading-snug">
                All your dentistry needs, under one roof.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="relative flex items-center justify-between border-t border-cream/10 py-5 text-[0.65rem] tracking-[0.16em] text-cream/60 uppercase">
          <span className="flex items-center gap-2">
            <ArrowDown className="size-3.5 animate-bounce" />
            Scroll to explore
          </span>
          <span className="hidden sm:block">
            General · Cosmetic · Restorative · Children’s · Endodontics
          </span>
        </div>
      </div>
    </section>
  );
}
