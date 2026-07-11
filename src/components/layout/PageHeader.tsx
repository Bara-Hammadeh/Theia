import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-32 sm:pt-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]">
        <div className="absolute left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-accent/[0.07] blur-[130px]" />
      </div>
      <Container>
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
            <span className="eyebrow">{eyebrow}</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl text-balance text-4xl leading-[1.06] sm:text-5xl md:text-[3.4rem]">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {subtitle}
            </p>
          </Reveal>
        )}
        {children && <div className="mt-8">{children}</div>}
      </Container>
    </section>
  );
}
