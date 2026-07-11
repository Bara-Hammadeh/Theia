import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { differentiators } from "@/content/platform";

function CrossIcon() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-faint" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-accent" fill="none" aria-hidden>
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.3" />
      <path d="M6.5 10.5l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WhyDifferent() {
  return (
    <section id="different" className="section relative">
      <Container>
        <SectionHeading
          eyebrow="Why We Are Different"
          title={
            <>
              Most surgical AI is a demo.{" "}
              <span className="text-gradient-iris">Theia is a platform.</span>
            </>
          }
          intro="The field is full of impressive results that never leave the lab. We built for the opposite: consistency, trust, and real deployment, the things a hospital and a regulator actually require."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {/* Conventional */}
          <Reveal>
            <div className="card h-full p-7 sm:p-8">
              <span className="font-mono text-2xs uppercase tracking-[0.18em] text-faint">
                Conventional approaches
              </span>
              <h3 className="mt-2 text-xl font-semibold text-muted">
                Surgical AI, as it usually looks
              </h3>
              <ul className="mt-6 space-y-4">
                {differentiators.map((d) => (
                  <li key={d.dimension} className="flex gap-3">
                    <CrossIcon />
                    <p className="text-sm leading-relaxed text-muted">
                      <span className="font-semibold text-ink/80">{d.dimension}.</span>{" "}
                      {d.traditional}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Theia */}
          <Reveal delay={0.1}>
            <div className="card relative h-full overflow-hidden p-7 shadow-glow sm:p-8">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
              <span className="font-mono text-2xs uppercase tracking-[0.18em] text-accent">
                The Theia platform
              </span>
              <h3 className="mt-2 text-xl font-semibold text-ink">
                Built for real clinical use
              </h3>
              <ul className="mt-6 space-y-4">
                {differentiators.map((d) => (
                  <li key={d.dimension} className="flex gap-3">
                    <CheckIcon />
                    <p className="text-sm leading-relaxed text-muted">
                      <span className="font-semibold text-ink">{d.dimension}.</span>{" "}
                      {d.theia}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
