"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion(props: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b border-forest/15", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group flex flex-1 items-center justify-between gap-6 py-6 text-left font-display text-xl leading-snug text-forest transition-colors hover:text-oxblood focus-visible:outline-none sm:text-2xl",
          className,
        )}
        {...props}
      >
        <span>{children}</span>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-forest/20 transition-[background-color,border-color] duration-300 group-hover:border-oxblood group-hover:bg-oxblood group-hover:text-cream group-data-[state=open]:rotate-45 group-data-[state=open]:border-oxblood group-data-[state=open]:bg-oxblood group-data-[state=open]:text-cream">
          <Plus className="size-4 transition-transform duration-300" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden data-[state=closed]:animate-[accordion-up_260ms_ease-out] data-[state=open]:animate-[accordion-down_320ms_ease-out]"
      {...props}
    >
      <div className={cn("max-w-2xl pb-7 text-sm leading-7 text-forest/70", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
