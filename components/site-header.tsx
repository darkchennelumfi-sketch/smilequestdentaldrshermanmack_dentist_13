"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, MapPin, Menu, Phone } from "lucide-react";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { navigation, services, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const initial = window.setTimeout(onScroll, 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(initial);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500",
        scrolled
          ? "bg-cream/90 shadow-[0_1px_0_rgba(27,42,34,0.08)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div
        className={cn(
          "border-b transition-all duration-500",
          scrolled
            ? "max-h-0 border-transparent opacity-0"
            : "max-h-12 border-cream/15 opacity-100",
        )}
      >
        <div className="page-shell flex h-10 items-center justify-between text-[0.7rem] tracking-[0.08em] text-cream/70">
          <div className="flex items-center gap-5">
            <span className="hidden items-center gap-1.5 sm:flex">
              <MapPin className="size-3" />
              {site.address.full}
            </span>
            <span className="hidden items-center gap-1.5 md:flex">
              <Clock className="size-3" />
              {site.hoursSummary}
            </span>
          </div>
          <Link
            href="/request-appointment"
            className="group inline-flex items-center gap-1.5 text-cream transition-colors hover:text-gold"
          >
            Now booking appointments
            <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div className="page-shell flex h-[4.75rem] items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="SmileQuest Dental home"
          className="relative z-10 shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <Logo
            variant={scrolled ? "dark" : "light"}
            priority
            className="h-10 transition-all duration-300 sm:h-11"
          />
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuTrigger
                      className={cn(
                        "text-sm",
                        scrolled
                          ? "text-forest/80 hover:text-forest"
                          : "text-cream/80 hover:bg-cream/10 hover:text-cream",
                      )}
                    >
                      {item.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[34rem] grid-cols-1 gap-1 p-3 sm:grid-cols-2">
                        <Link
                          href="/services"
                          className="group flex items-center justify-between gap-3 rounded-2xl bg-forest p-4 text-cream transition-colors hover:bg-forest-soft sm:col-span-2"
                        >
                          <div>
                            <p className="text-eyebrow text-gold">All services</p>
                            <p className="mt-1 font-display text-xl">
                              Dentistry under one roof
                            </p>
                          </div>
                          <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                        {item.children.map((child) => {
                          const service = services.find(
                            (s) => `/services/${s.slug}` === child.href,
                          );
                          return (
                            <NavigationMenuLink asChild key={child.href}>
                              <Link
                                href={child.href}
                                className="group flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-forest/5"
                              >
                                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-bone">
                                  {service ? (
                                    <Image
                                      src={service.icon}
                                      alt=""
                                      width={32}
                                      height={32}
                                      className="h-6 w-6 object-contain"
                                    />
                                  ) : null}
                                </span>
                                <span>
                                  <span className="block text-sm font-medium text-forest">
                                    {child.label}
                                  </span>
                                  <span className="mt-0.5 block text-xs leading-5 text-forest/70">
                                    {child.description}
                                  </span>
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          );
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.label}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative inline-flex h-10 items-center rounded-full px-4 text-sm font-medium transition-colors",
                        scrolled
                          ? "text-forest/80 hover:bg-forest/5 hover:text-forest"
                          : "text-cream/80 hover:bg-cream/10 hover:text-cream",
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ),
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className={cn(
              "hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors md:inline-flex",
              scrolled
                ? "text-forest/70 hover:bg-forest/5 hover:text-forest"
                : "text-cream/75 hover:bg-cream/10 hover:text-cream",
            )}
          >
            <Phone className="size-3.5" />
            {site.phone}
          </a>
          <Button
            asChild
            size="sm"
            variant={scrolled ? "primary" : "light"}
            className="hidden h-11 px-5 sm:inline-flex"
          >
            <Link href="/request-appointment">
              Request Appointment
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "grid size-11 place-items-center rounded-full border transition-colors lg:hidden",
              scrolled
                ? "border-forest/15 text-forest hover:bg-forest hover:text-cream"
                : "border-cream/25 text-cream hover:bg-cream hover:text-forest",
            )}
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      <Dialog open={mobileOpen} onOpenChange={setMobileOpen}>
        <DialogContent
          showClose={false}
          className="top-0 left-0 h-dvh w-full max-w-none translate-x-0 translate-y-0 rounded-none border-0 bg-forest p-0 text-cream data-[state=open]:animate-none data-[state=closed]:animate-none"
        >
          <DialogTitle className="sr-only">Site navigation</DialogTitle>
          <DialogDescription className="sr-only">
            Navigate SmileQuest Dental
          </DialogDescription>
          <div className="flex h-full flex-col overflow-y-auto">
            <div className="flex h-[4.75rem] items-center justify-between border-b border-cream/10 px-5">
              <Link href="/" onClick={() => setMobileOpen(false)}>
                <Logo variant="light" className="h-10" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="rounded-full border border-cream/20 px-4 py-2 text-xs tracking-[0.16em] uppercase transition-colors hover:bg-cream hover:text-forest"
              >
                Close
              </button>
            </div>

            <nav className="flex-1 px-5 py-8" aria-label="Mobile navigation">
              <div className="space-y-1">
                {navigation
                  .filter((item) => !item.children)
                  .map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between border-b border-cream/10 py-4 font-display text-3xl text-cream transition-colors hover:text-gold"
                    >
                      {item.label}
                      <ArrowUpRight className="size-5 opacity-50" />
                    </Link>
                  ))}
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between border-b border-cream/10 py-4 font-display text-3xl text-cream transition-colors hover:text-gold"
                >
                  Services
                  <ArrowUpRight className="size-5 opacity-50" />
                </Link>
                <div className="grid grid-cols-2 gap-x-4 pb-3">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="border-b border-cream/5 py-3 text-sm text-cream/60 transition-colors hover:text-gold"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <Button asChild variant="light" size="lg">
                  <Link href="/request-appointment" onClick={() => setMobileOpen(false)}>
                    Request Appointment
                    <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outlineLight" size="lg">
                  <a href={site.phoneHref}>
                    <Phone className="size-4" />
                    {site.phone}
                  </a>
                </Button>
              </div>
            </nav>

            <div className="border-t border-cream/10 px-5 py-6 text-xs leading-6 text-cream/60">
              <p>{site.address.full}</p>
              <p>{site.hoursSummary}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
