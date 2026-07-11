"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Particles } from "@/components/ui/Particles";
import { HeroVisual } from "./HeroVisual";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Particles className="opacity-60" />
      </div>

      <div className="container relative">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={item} className="flex justify-center">
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-mono text-2xs uppercase tracking-[0.18em] text-muted">
                Surgical Intelligence Platform
              </span>
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 text-4xl leading-[1.05] sm:text-6xl lg:text-[4.5rem]"
          >
            The Operating System for{" "}
            <span className="text-gradient animate-gradient-text">Surgical Intelligence</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl"
          >
            Theia turns surgical video into structured, auditable clinical
            intelligence — a deterministic runtime for perception, reasoning,
            evidence, and decision support, built for the operating room.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="/partnerships" size="lg" withArrow>
              Partner with us
            </Button>
            <Button href="/technology" size="lg" variant="secondary">
              Explore the technology
            </Button>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-7 font-mono text-2xs uppercase tracking-[0.16em] text-faint"
          >
            For surgeons · hospitals · research centers — investigational use
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-14 max-w-5xl sm:mt-16"
        >
          <HeroVisual className="h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
}
