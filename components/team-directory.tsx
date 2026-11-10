"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { team, type TeamGroup } from "@/lib/team";
import { cn } from "@/lib/utils";

type Filter = "All" | TeamGroup;

const filters: { label: Filter; short: string }[] = [
  { label: "All", short: "Everyone" },
  { label: "Administration", short: "Administration" },
  { label: "Hygienists", short: "Hygienists" },
  { label: "Dental assistants", short: "Dental assistants" },
  { label: "Support", short: "Support" },
];

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");
}

export function TeamDirectory() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const members = filter === "All" ? team : team.filter((member) => member.group === filter);

  const toggle = (name: string) => {
    setExpanded((current) =>
      current.includes(name) ? current.filter((item) => item !== name) : [...current, name],
    );
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Filter team members by role"
        className="flex flex-wrap gap-2"
      >
        {filters.map((item) => {
          const count =
            item.label === "All"
              ? team.length
              : team.filter((member) => member.group === item.label).length;
          const active = filter === item.label;

          return (
            <Button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={active}
              variant={active ? "dark" : "outline"}
              size="sm"
              onClick={() => setFilter(item.label)}
              className={cn("gap-2", !active && "bg-ivory")}
            >
              {item.short}
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 font-mono text-[0.6rem] tracking-[0.08em]",
                  active ? "bg-cream/15 text-cream/70" : "bg-forest/5 text-forest/65",
                )}
              >
                {count}
              </span>
            </Button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => {
          const isExpanded = expanded.includes(member.name);
          const hasMore = member.bio.length > 1;
          const firstParagraph = member.bio[0] ?? "";

          return (
            <article
              key={member.name}
              className="flex h-full flex-col rounded-3xl border border-forest/10 bg-ivory p-6 transition-colors hover:border-forest/20"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-bone font-display text-lg text-forest">
                  {initials(member.name)}
                </span>
                <span className="rounded-full border border-forest/10 bg-cream px-3 py-1.5 text-[0.6rem] tracking-[0.12em] text-forest/65 uppercase">
                  {member.group}
                </span>
              </div>

              <h3 className="mt-5 font-display text-2xl leading-tight text-forest">
                {member.name}
              </h3>
              <p className="mt-1 text-[0.68rem] tracking-[0.12em] text-oxblood uppercase">
                {member.role || "SmileQuest team"}
              </p>

              <div className="mt-4 space-y-3 text-sm leading-6 text-forest/70">
                <p>{firstParagraph}</p>
                {isExpanded
                  ? member.bio.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)
                  : null}
              </div>

              {hasMore ? (
                <Button
                  type="button"
                  variant="link"
                  size="sm"
                  aria-expanded={isExpanded}
                  onClick={() => toggle(member.name)}
                  className="mt-auto justify-start self-start pt-4 text-xs font-medium"
                >
                  {isExpanded ? "Show less" : "Read full bio"}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-300",
                      isExpanded && "rotate-180",
                    )}
                  />
                </Button>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
