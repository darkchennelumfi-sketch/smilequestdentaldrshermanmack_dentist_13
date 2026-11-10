import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/site";

type FaqSectionProps = {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
};

export function FaqSection({
  eyebrow = "Good to know",
  title = (
    <>
      Questions,
      <br />
      <span className="italic text-oxblood">answered.</span>
    </>
  ),
  description = "A few things patients ask us before their first visit. If you don’t see your question, our team is a phone call away.",
}: FaqSectionProps) {
  return (
    <section className="relative overflow-hidden bg-bone py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="absolute -right-40 -bottom-40 size-[34rem] rounded-full border border-forest/5"
      />
      <div className="page-shell relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <div className="flex items-center gap-3 text-eyebrow text-oxblood">
              <span className="h-px w-8 bg-oxblood/60" />
              {eyebrow}
            </div>
            <h2 className="mt-5 text-4xl leading-[1.03] sm:text-5xl lg:text-6xl">
              {title}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-forest/70">
              {description}
            </p>
            <Button asChild variant="outline" className="mt-7">
              <Link href="/request-appointment">
                Ask us your question
                <ArrowUpRight />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={0.1}>
            <Accordion type="single" collapsible className="border-t border-forest/15">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
