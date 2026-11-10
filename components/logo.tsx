import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "dark", className, priority = false }: LogoProps) {
  return (
    <Image
      src={variant === "light" ? "/images/smile-quest-logo-footer.svg" : "/images/smile-quest-logo-nav.svg"}
      alt="SmileQuest Dental"
      width={689}
      height={300}
      priority={priority}
      className={cn("h-11 w-auto", className)}
    />
  );
}
