"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/company";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section relative">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="FAQ"
          title="Questions surgeons and hospitals actually ask"
          intro="Straight answers on clinical use, data, safety, deployment, and regulation."
        />

        <div className="mx-auto mt-12 max-w-3xl">
          <div className="border-t border-white/[0.07]">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-white/[0.07]">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="text-[0.98rem] font-medium text-ink">
                      {f.q}
                    </span>
                    <span
                      className={cn(
                        "relative flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/12 text-accent transition-transform duration-300",
                        isOpen && "rotate-45"
                      )}
                    >
                      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 text-sm leading-relaxed text-muted">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
