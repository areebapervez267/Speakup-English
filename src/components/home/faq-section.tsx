import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are the A1–B2 courses really free?",
    answer:
      "Yes. Every A1, A2, B1 and B2 course is free to access. Premium is only required for the C1 and C2 levels, where the focus shifts to advanced precision, nuance and mastery.",
  },
  {
    question: "How do I choose the right CEFR level?",
    answer:
      "Read the level descriptions on this page and start with the one that sounds most like what you can already do. If two levels feel close, begin with the lower one — each level from A1 to C2 builds on the one before it.",
  },
  {
    question: "What does each course actually cover?",
    answer:
      "Each course focuses on one skill at one CEFR level. You work through short, structured lessons with clear outcomes, so you always know what you are learning and why it matters.",
  },
  {
    question: "Can I study just one skill instead of all seven?",
    answer:
      "Absolutely. Follow a single skill track such as speaking or writing, or combine all seven for a complete level. Courses at the same level are designed to support each other, so you can move between them freely.",
  },
  {
    question: "When will the C1 and C2 courses be available?",
    answer:
      "C1 and C2 make up the Premium path and are being prepared for release. You can already preview the advanced course library; Premium enrolment and pricing will be announced with the advanced launch.",
  },
];

export function FaqSection() {
  return (
    <section className="border-b border-brand-line/80 bg-white">
      <div className="site-container py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Questions, answered"
              title={
                <>
                  Everything you need to{" "}
                  <span className="italic text-brand-teal-deep">
                    get started.
                  </span>
                </>
              }
              description="A few details about the levels, the curriculum and what comes next."
            />
            <Link
              href="/courses"
              className="group mt-7 inline-flex items-center gap-2 rounded-full text-sm font-semibold text-brand-navy transition-colors hover:text-brand-teal-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            >
              Explore the course library
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="border-t border-brand-line">
            <Accordion type="single" collapsible defaultValue="faq-1">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index + 1}`}>
                  <AccordionTrigger className="items-center gap-6 py-5 text-left text-base font-semibold text-brand-navy hover:text-brand-teal-deep hover:no-underline sm:text-[1.02rem]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 pr-6 text-sm leading-7 text-brand-body sm:text-[0.95rem]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
