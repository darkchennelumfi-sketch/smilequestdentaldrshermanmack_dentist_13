import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  breadcrumb: { label: string; href?: string }[];
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-forest pt-32 pb-16 text-cream sm:pb-20 lg:pt-40 lg:pb-24",
        className,
      )}
    >
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="absolute -top-32 right-[-8%] size-[38rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(92,112,100,0.45),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-48 left-[-10%] size-[32rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(104,58,61,0.35),transparent_70%)]"
      />
      <div className="page-shell relative z-10">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.68rem] tracking-[0.08em] text-cream/60 uppercase">
            {breadcrumb.map((item, index) => (
              <li key={item.label} className="flex items-center gap-2">
                {item.href ? (
                  <Link href={item.href} className="transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-cream/80">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 ? (
                  <ChevronRight className="size-3 text-cream/60" />
                ) : null}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-20">
          <div>
            <div className="flex items-center gap-3 text-eyebrow text-gold">
              <span className="h-px w-8 bg-gold/60" />
              {eyebrow}
            </div>
            <h1 className="mt-5 text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.98] font-light text-cream">
              {title}
            </h1>
          </div>
          <div className="lg:pb-2">
            {description ? (
              <p className="max-w-xl text-base leading-8 text-cream/60">{description}</p>
            ) : null}
            {children ? <div className="mt-6">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
