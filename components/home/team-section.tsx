import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-oxblood py-20 text-cream sm:py-28 lg:py-32">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-48 right-1/4 size-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.18),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-32 size-[34rem] rounded-full border border-cream/8"
      />

      <div className="page-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 text-eyebrow text-gold">
              <span className="h-px w-8 bg-gold/60" />
              The people behind the care
            </div>
            <h2 className="mt-5 text-4xl leading-[1.03] text-cream sm:text-5xl lg:text-6xl">
              Meet the
              <br />
              <span className="italic text-gold">SmileQuest</span> team.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-cream/70">
              The SmileQuest team brings together advanced training, gentle
              care, and a commitment to truly personalized dentistry. From
              complex oral surgery to everyday checkups, our highly qualified
              team tailors every treatment to your unique needs.
            </p>
            <p className="mt-4 max-w-xl text-base leading-8 text-cream/70">
              We listen first, explain your options clearly, and ensure you feel
              comfortable every step of the way. With three dentists and a large
              supporting team, SmileQuest provides a range of dental services
              under one roof, right here in Devils Lake.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-cream/15 pt-7">
              <div>
                <p className="font-display text-4xl text-gold">3</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.14em] text-cream/60 uppercase">
                  Dentists
                </p>
              </div>
              <div>
                <p className="font-display text-4xl text-gold">One roof</p>
                <p className="mt-1 text-[0.65rem] tracking-[0.14em] text-cream/60 uppercase">
                  Comprehensive services
                </p>
              </div>
            </div>

            <Button asChild variant="light" className="mt-9">
              <Link href="/about">
                Meet the team
                <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="relative mx-auto max-w-[31rem]">
              <div className="absolute -inset-3 rounded-[999px_999px_2rem_2rem] border border-cream/15" />
              <div className="relative aspect-[4/4.15] overflow-hidden rounded-[999px_999px_1.75rem_1.75rem] border-[6px] border-cream/10 bg-forest">
                <Image
                  src="/images/smile-quest-small-team.jpg"
                  alt="SmileQuest dental team"
                  fill
                  sizes="(min-width: 1024px) 31rem, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oxblood/60 via-transparent to-transparent" />
              </div>

              <div className="absolute -right-3 bottom-8 max-w-[16rem] rounded-2xl border border-cream/15 bg-forest-deep/75 p-5 backdrop-blur-xl sm:-right-8">
                <p className="text-eyebrow text-gold">Our vision for your care</p>
                <p className="mt-2 text-xs leading-6 text-cream/70">
                  We earn your trust by providing uncompromising excellence in
                  all that we do.
                </p>
                <Link
                  href="/about#vision"
                  className="mt-3 inline-flex items-center gap-1.5 text-[0.7rem] text-cream/60 transition-colors hover:text-gold"
                >
                  Read our vision
                  <ArrowUpRight className="size-3" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
