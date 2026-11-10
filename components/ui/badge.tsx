import * as React from "react";

import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-forest/15 bg-white/45 px-3.5 py-1.5 text-eyebrow text-forest/70 backdrop-blur-md",
        className,
      )}
      {...props}
    />
  );
}

export { Badge };
