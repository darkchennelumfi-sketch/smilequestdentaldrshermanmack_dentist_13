import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "h-12 w-full rounded-xl border border-forest/15 bg-white/70 px-4 text-sm text-ink placeholder:text-forest/65 transition-colors duration-200 focus:border-sage focus:bg-white focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-rose",
        className,
      )}
      {...props}
    />
  );
}

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full resize-y rounded-xl border border-forest/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-forest/65 transition-colors duration-200 focus:border-sage focus:bg-white focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-rose",
        className,
      )}
      {...props}
    />
  );
}

function Select({ className, children, ...props }: React.ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        data-slot="select"
        className={cn(
          "h-12 w-full appearance-none rounded-xl border border-forest/15 bg-white/70 px-4 pr-10 text-sm text-ink transition-colors duration-200 focus:border-sage focus:bg-white focus:outline-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 aria-[invalid=true]:border-rose",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        className="pointer-events-none absolute top-1/2 right-4 size-3.5 -translate-y-1/2 fill-none stroke-forest/60 stroke-2"
      >
        <path d="m3 6 5 5 5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export { Input, Textarea, Select };
