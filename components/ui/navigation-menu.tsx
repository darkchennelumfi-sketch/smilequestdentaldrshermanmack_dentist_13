"use client";

import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function NavigationMenu({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root>) {
  return (
    <NavigationMenuPrimitive.Root
      className={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className)}
      {...props}
    >
      {children}
      <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      className={cn("group flex flex-1 list-none items-center justify-center gap-1", className)}
      {...props}
    />
  );
}

const NavigationMenuItem = NavigationMenuPrimitive.Item;

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      className={cn(
        "group/trigger inline-flex h-10 items-center gap-1.5 rounded-full px-4 text-sm font-medium text-forest/80 transition-colors hover:bg-forest/5 hover:text-forest focus-visible:outline-none data-[state=open]:bg-forest/5",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className="size-3.5 transition-transform duration-300 group-data-[state=open]/trigger:rotate-180" />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      className={cn(
        "top-0 left-0 w-full data-[motion^=from-]:animate-[menu-in_240ms_ease] data-[motion^=to-]:animate-[menu-out_200ms_ease] md:absolute md:w-auto",
        className,
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      className={cn("block select-none rounded-2xl p-3 leading-none no-underline outline-none", className)}
      {...props}
    />
  );
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div className="absolute top-full left-0 flex w-full justify-center">
      <NavigationMenuPrimitive.Viewport
        className={cn(
          "relative mt-3 h-[var(--radix-navigation-menu-viewport-height)] w-[min(34rem,calc(100vw-2rem))] origin-top overflow-hidden rounded-3xl border border-forest/10 bg-cream/95 shadow-lift backdrop-blur-xl transition-[width,height] duration-300 data-[state=closed]:animate-[fade-out_180ms_ease] data-[state=open]:animate-[fade-in_220ms_ease]",
          className,
        )}
        {...props}
      />
    </div>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuViewport,
};
