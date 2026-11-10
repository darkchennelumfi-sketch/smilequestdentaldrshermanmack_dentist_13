import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-eyebrow",
          align === "center" && "justify-center",
          tone === "dark" ? "text-oxblood" : "text-gold",
        )}
      >
        <span
          className={cn(
            "h-px w-8",
            tone === "dark" ? "bg-oxblood/60" : "bg-gold/60",
          )}
        />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "mt-5 text-balance text-4xl leading-[1.04] sm:text-5xl lg:text-6xl",
          tone === "dark" ? "text-forest" : "text-cream",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 max-w-2xl text-base leading-7",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-forest/65" : "text-cream/65",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
