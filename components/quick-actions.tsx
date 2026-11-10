"use client";

import Link from "next/link";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { site } from "@/lib/site";

const actions = [
  { label: "Call", href: site.phoneHref, icon: Phone, external: true },
  { label: "Book", href: "/request-appointment", icon: CalendarDays, external: false },
  { label: "Directions", href: site.mapsHref, icon: MapPin, external: true },
] as const;

export function QuickActions() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed right-4 bottom-5 z-30 hidden flex-col gap-2 md:flex"
      >
        {actions.map((action) => {
          const Icon = action.icon;
          const content = (
            <>
              <span className="grid size-11 place-items-center rounded-full bg-forest text-cream shadow-soft transition-colors group-hover:bg-oxblood">
                <Icon className="size-4" />
              </span>
              <span className="pointer-events-none max-w-0 overflow-hidden rounded-full bg-cream pr-0 text-xs font-medium whitespace-nowrap text-forest opacity-0 shadow-soft transition-all duration-300 group-hover:max-w-32 group-hover:pr-4 group-hover:opacity-100">
                {action.label}
              </span>
            </>
          );

          return action.external ? (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={action.label}
              className="group flex items-center justify-end"
            >
              {content}
            </a>
          ) : (
            <Link
              key={action.label}
              href={action.href}
              aria-label={action.label}
              className="group flex items-center justify-end"
            >
              {content}
            </Link>
          );
        })}
      </motion.div>

      <div className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-3 overflow-hidden rounded-2xl border border-cream/15 bg-forest/95 shadow-[0_18px_50px_-12px_rgba(18,29,23,0.7)] backdrop-blur-xl md:hidden">
        {actions.map((action) => {
          const Icon = action.icon;
          const className =
            "flex flex-col items-center gap-1.5 py-2.5 text-[0.62rem] font-medium tracking-[0.12em] uppercase text-cream/75 transition-colors hover:text-gold";
          return action.external ? (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noreferrer" : undefined}
              className={className}
            >
              <Icon className="size-4" />
              {action.label}
            </a>
          ) : (
            <Link key={action.label} href={action.href} className={className}>
              <Icon className="size-4" />
              {action.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
