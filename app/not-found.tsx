import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 — Page not found"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Not found" }]}
        title={
          <>
            This page took a
            <br />
            <span className="italic text-gold">different path.</span>
          </>
        }
        description="The page you’re looking for isn’t here. Let’s get you back to something helpful."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="light">
            <Link href="/">
              <ArrowLeft />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outlineLight">
            <Link href="/services">
              Explore services
              <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </PageHero>
      <section className="bg-cream py-20">
        <div className="page-shell">
          <div className="mx-auto max-w-2xl rounded-3xl border border-forest/10 bg-ivory p-8 text-center">
            <p className="text-eyebrow text-oxblood">Need a hand?</p>
            <p className="mt-3 text-base leading-8 text-forest/70">
              Call our team at{" "}
              <a href="tel:+17016628191" className="font-medium text-forest underline">
                701-662-8191
              </a>{" "}
              and we’ll point you in the right direction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
