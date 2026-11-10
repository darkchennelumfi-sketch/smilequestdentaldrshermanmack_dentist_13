import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full text-sm font-medium tracking-[-0.01em] whitespace-nowrap transition-[color,background-color,border-color,transform,box-shadow] duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-oxblood text-cream shadow-[0_10px_30px_-12px_rgba(104,58,61,0.65)] hover:-translate-y-0.5 hover:bg-rose hover:shadow-[0_18px_40px_-16px_rgba(104,58,61,0.7)]",
        dark: "bg-forest text-cream hover:-translate-y-0.5 hover:bg-forest-soft",
        light:
          "bg-cream text-forest shadow-[0_10px_30px_-14px_rgba(18,29,23,0.5)] hover:-translate-y-0.5 hover:bg-white",
        outline:
          "border border-forest/25 bg-transparent text-forest hover:border-forest hover:bg-forest hover:text-cream",
        outlineLight:
          "border border-cream/35 bg-transparent text-cream hover:border-cream hover:bg-cream hover:text-forest",
        ghost: "bg-transparent text-forest hover:bg-forest/5",
        link: "h-auto rounded-none bg-transparent p-0 text-forest underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-4 text-xs",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-[0.95rem]",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
