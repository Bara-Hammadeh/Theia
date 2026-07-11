import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { dataFactory } from "@/content/platform";

export function DataFactory() {
  return (
    <section id="data-factory" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-96 w-96 rounded-full bg-iris/[0.06] blur-[120px]" />
      <Container>
        <SectionHeading
          eyebrow="AI Data Factory"
          title={
            <>
              The data engine behind{" "}
              <span className="text-gradient">every model</span>
            </>
          }
          intro="Great surgical AI is a data problem before it is a model problem. Our annotation platform turns raw video into governed, versioned, licensed datasets — and closes the loop, so every deployed model re-enters the platform as a swappable component."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dataFactory.map((step) => {
            const isLast = step.n === dataFactory.length;
            return (
              <StaggerItem key={step.n}>
                <div
                  className={`card card-hover relative h-full p-6 ${
                    isLast ? "border-accent/30" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                      <Icon name={step.icon} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-2xs text-faint">
                      {String(step.n).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-5 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {step.body}
                  </p>
                  {isLast && (
                    <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/5 px-2.5 py-1 font-mono text-2xs uppercase tracking-wider text-accent">
                      <Icon name="reproduce" className="h-3.5 w-3.5" />
                      Feeds back
                    </div>
                  )}
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <p className="mt-8 flex items-center gap-2 font-mono text-2xs uppercase tracking-[0.15em] text-faint">
            <Icon name="reproduce" className="h-4 w-4 text-accent" />
            A closed loop — deployment re-enters the platform as a license-gated adapter
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
