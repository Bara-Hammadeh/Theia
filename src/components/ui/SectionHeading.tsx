import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <div
            className={cn(
              "flex items-center gap-3",
              align === "center" && "justify-center"
            )}
          >
            <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-balance text-3xl leading-[1.08] sm:text-4xl md:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed text-muted",
              align === "center" && "mx-auto"
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
