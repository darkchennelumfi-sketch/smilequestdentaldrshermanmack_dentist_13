import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, FileText, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getLegalContent } from "@/lib/legal";
import { getLegalPage, legalPages, site } from "@/lib/site";

type LegalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return legalPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLegalPage(slug);

  if (!page) {
    return { title: "Page not found" };
  }

  return {
    title: page.title,
    description: page.summary,
    alternates: { canonical: `/legal/${page.slug}` },
  };
}

export default async function LegalPage({ params }: LegalPageProps) {
  const { slug } = await params;
  const page = getLegalPage(slug);
  const blocks = getLegalContent(slug);

  if (!page || !blocks) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Legal & privacy"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: page.title },
        ]}
        title={page.title}
        description={page.summary}
      />

      <section className="relative overflow-hidden bg-cream py-16 sm:py-20 lg:py-24">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.5fr] lg:gap-16">
            <Reveal>
              <article className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-ivory px-3.5 py-1.5 text-[0.65rem] tracking-[0.14em] text-forest/70 uppercase">
                  <FileText className="size-3.5" />
                  {page.title}
                </div>

                <div className="mt-8 space-y-5">
                  {blocks.map((block, index) => {
                    if (block.type === "h2") {
                      return (
                        <h2
                          key={`${block.type}-${index}`}
                          className="mt-10 text-2xl leading-tight text-forest sm:text-3xl"
                        >
                          {block.text}
                        </h2>
                      );
                    }

                    if (block.type === "h3") {
                      return (
                        <h3
                          key={`${block.type}-${index}`}
                          className="mt-7 text-lg leading-snug text-forest"
                        >
                          {block.text}
                        </h3>
                      );
                    }

                    if (block.type === "ul") {
                      return (
                        <ul key={`${block.type}-${index}`} className="space-y-2.5">
                          {block.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm leading-7 text-forest/70"
                            >
                              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-oxblood" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    return (
                      <p
                        key={`${block.type}-${index}`}
                        className="text-sm leading-7 text-forest/70"
                      >
                        {block.text}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-10 grid gap-3 border-t border-forest/10 pt-6 sm:grid-cols-2">
                  <a
                    href={site.phoneHref}
                    className="group flex items-start gap-3 rounded-2xl border border-forest/10 bg-ivory p-4 transition-colors hover:border-forest/20"
                  >
                    <Phone className="mt-0.5 size-4 text-oxblood" />
                    <span className="text-sm text-forest/70">
                      <span className="block text-[0.62rem] tracking-[0.14em] text-forest/70 uppercase">
                        Call us
                      </span>
                      {site.phone}
                    </span>
                  </a>
                  <a
                    href={site.mapsHref}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start gap-3 rounded-2xl border border-forest/10 bg-ivory p-4 transition-colors hover:border-forest/20"
                  >
                    <MapPin className="mt-0.5 size-4 text-oxblood" />
                    <span className="text-sm text-forest/70">
                      <span className="block text-[0.62rem] tracking-[0.14em] text-forest/70 uppercase">
                        Visit us
                      </span>
                      {site.address.full}
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.1}>
              <aside className="rounded-3xl border border-forest/10 bg-ivory p-6 lg:sticky lg:top-28">
                <p className="text-eyebrow text-oxblood">Other policies</p>
                <ul className="mt-4 space-y-1">
                  {legalPages
                    .filter((item) => item.slug !== page.slug)
                    .map((item) => (
                      <li key={item.slug}>
                        <Link
                          href={`/legal/${item.slug}`}
                          className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm text-forest/70 transition-colors hover:bg-bone hover:text-forest"
                        >
                          {item.title}
                          <ArrowUpRight className="size-3.5 text-forest/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </Link>
                      </li>
                    ))}
                </ul>
                <div className="mt-5 border-t border-forest/10 pt-5">
                  <Button asChild variant="dark" size="sm" className="w-full">
                    <Link href="/request-appointment">
                      Request an appointment
                      <ArrowUpRight />
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
