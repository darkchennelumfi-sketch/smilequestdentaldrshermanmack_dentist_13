"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote, Star } from "lucide-react";

import { reviews } from "@/lib/site";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 7000;
const ease = [0.22, 1, 0.36, 1] as const;

export function TestimonialsSection() {
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const prefersReducedMotion = useReducedMotion();

  const next = React.useCallback(
    () => setIndex((value) => (value + 1) % reviews.length),
    [],
  );
  const previous = React.useCallback(
    () => setIndex((value) => (value - 1 + reviews.length) % reviews.length),
    [],
  );

  React.useEffect(() => {
    if (paused || prefersReducedMotion) return;
    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [next, paused, prefersReducedMotion]);

  const review = reviews[index] ?? reviews[0]!;

  return (
    <section
      className="relative isolate overflow-hidden bg-forest py-20 text-cream sm:py-28 lg:py-32"
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") next();
        if (event.key === "ArrowLeft") previous();
      }}
    >
      <Image
        src="/images/main-testimonial-bg.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-forest-deep/85" />
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent"
      />

      <div className="page-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-eyebrow text-gold">
              <span className="h-px w-8 bg-gold/60" />
              Patient voices
            </div>
            <h2 className="mt-5 text-4xl leading-[1.03] text-cream sm:text-5xl lg:text-6xl">
              Trusted
              <br />
              <span className="italic text-gold">in Devils Lake.</span>
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/60">
              Real experiences from patients who trust SmileQuest with their
              smiles.
            </p>

            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 p-4 backdrop-blur-md">
              <div className="flex gap-0.5 text-gold" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-cream/60">Reviews from Google</p>
            </div>

            <div className="mt-10 flex gap-2">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous review"
                className="grid size-12 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-forest"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next review"
                className="grid size-12 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-forest"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          <div className="relative min-h-[25rem] sm:min-h-[23rem]">
            <Quote
              aria-hidden="true"
              className="absolute -top-5 -left-1 size-20 text-cream/[0.06] sm:size-28"
            />
            <AnimatePresence mode="wait" initial={false}>
              <motion.figure
                key={review.name}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease }}
                aria-live="polite"
                className="relative flex h-full flex-col justify-between border-t border-cream/15 pt-8"
              >
                <blockquote className="font-display text-2xl leading-[1.35] text-cream/90 sm:text-3xl lg:text-[2.1rem]">
                  “{review.quote}”
                </blockquote>

                <figcaption className="mt-10 flex flex-wrap items-end justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <span className="grid size-12 place-items-center rounded-full border border-gold/30 bg-gold/15 font-display text-lg text-gold">
                      {review.name.charAt(0).toUpperCase()}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-cream">{review.name}</p>
                      <p className="mt-0.5 text-xs text-cream/60">{review.meta}</p>
                    </div>
                  </div>
                  <a
                    href={review.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 border-b border-cream/20 pb-1 text-xs text-cream/60 transition-colors hover:border-gold hover:text-gold"
                  >
                    Read review on Google
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-cream/10 pt-6">
          <div className="flex items-center gap-2" role="tablist" aria-label="Choose a review">
            {reviews.map((item, reviewIndex) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={index === reviewIndex}
                aria-label={`Review ${reviewIndex + 1} by ${item.name}`}
                onClick={() => setIndex(reviewIndex)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500",
                  index === reviewIndex
                    ? "w-10 bg-gold"
                    : "w-3 bg-cream/25 hover:bg-cream/45",
                )}
              />
            ))}
          </div>
          <p className="font-mono text-[0.65rem] tracking-[0.2em] text-cream/60">
            0{index + 1} / 0{reviews.length}
          </p>
        </div>
      </div>
    </section>
  );
}
