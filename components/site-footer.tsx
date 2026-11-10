import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { legalPages, navigation, services, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-forest-deep pb-16 text-cream md:pb-0">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-32 size-[32rem] rounded-full bg-sage/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-56 -left-32 size-[30rem] rounded-full bg-oxblood/20 blur-3xl"
      />

      <div className="page-shell relative z-10">
        <div className="grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-8 lg:py-20">
          <div>
            <Link href="/" aria-label="SmileQuest Dental home">
              <Logo variant="light" className="h-12" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-cream/60">
              Uncompromising excellence in dentistry — with a tailored,
              personalized approach for lasting results.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="SmileQuest Dental on Facebook"
                className="grid size-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-forest"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-4 fill-current"
                >
                  <path d="M13.5 21v-7.5h2.52l.38-2.93H13.5V8.7c0-.85.24-1.42 1.45-1.42h1.55V4.66c-.27-.04-1.19-.12-2.26-.12-2.24 0-3.77 1.37-3.77 3.88v2.16H7.94v2.93h2.53V21h3.03Z" />
                </svg>
              </a>
              <a
                href={site.phoneHref}
                aria-label={`Call ${site.phone}`}
                className="grid size-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-forest"
              >
                <Phone className="size-4" />
              </a>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Get directions to SmileQuest Dental"
                className="grid size-11 place-items-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:bg-gold hover:text-forest"
              >
                <MapPin className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-eyebrow text-gold">Explore</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/65">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="link-underline inline-flex transition-colors hover:text-cream"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-eyebrow text-gold">Services</h2>
            <ul className="mt-5 space-y-3 text-sm text-cream/65">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="link-underline inline-flex transition-colors hover:text-cream"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-eyebrow text-gold">Visit us</h2>
            <ul className="mt-5 space-y-4 text-sm text-cream/65">
              <li>
                <a
                  href={site.mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex gap-3 transition-colors hover:text-cream"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0 text-sage-light" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.state} {site.address.zip}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={site.phoneHref}
                  className="group flex items-center gap-3 transition-colors hover:text-cream"
                >
                  <Phone className="size-4 shrink-0 text-sage-light" />
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-sage-light" />
                <span>
                  Monday to Friday
                  <br />
                  8:00am–4:00pm
                </span>
              </li>
            </ul>
            <Link
              href="/request-appointment"
              className="group mt-7 inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-sm text-gold transition-colors hover:border-gold"
            >
              Request an appointment
              <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-cream/10 py-7 text-xs text-cream/60 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalPages.map((page) => (
              <Link
                key={page.slug}
                href={`/legal/${page.slug}`}
                className="transition-colors hover:text-cream"
              >
                {page.title}
              </Link>
            ))}
          </div>
          <p>
            © {new Date().getFullYear()} SmileQuest Dental. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
