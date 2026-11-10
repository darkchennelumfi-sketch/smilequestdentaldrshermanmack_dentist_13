import Link from "next/link";
import { Asterisk } from "lucide-react";

const items = [
  "General Dentistry",
  "Cosmetic Dentistry",
  "Restorative Dentistry",
  "Children’s Dentistry",
  "Endodontics",
  "Oral Surgery",
  "Periodontics",
  "Dental Implants",
  "Invisalign",
];

export function ServiceMarquee() {
  const track = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-forest/10 bg-bone py-4">
      <div className="marquee-track flex w-max items-center gap-7 whitespace-nowrap">
        {track.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-7 text-[0.7rem] font-medium tracking-[0.18em] text-forest/65 uppercase"
          >
            {item}
            <Asterisk className="size-3 text-oxblood/70" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-bone to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-bone to-transparent" />
      <Link href="/services" className="sr-only">
        View all services
      </Link>
    </div>
  );
}
