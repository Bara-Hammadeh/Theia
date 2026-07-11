import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { values } from "@/content/company";

export function Vision() {
  return (
    <section id="vision" className="section relative overflow-hidden">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
              <span className="eyebrow">The Vision</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-balance text-3xl leading-[1.12] sm:text-4xl md:text-[2.8rem]">
              Every operation should make{" "}
              <span className="text-gradient">every future operation safer.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              A surgeon&rsquo;s skill lives in their hands and their memory. We believe
              it should also live in a system that learns — so that hard-won judgment
              compounds across cases, hospitals, and generations. Theia&rsquo;s long-term
              mission is a surgical foundation model and an operating-room intelligence
              layer that make surgery measurably safer, everywhere.
            </p>
          </Reveal>
        </div>

        <StaggerGroup className="mx-auto mt-16 grid max-w-5xl gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="card card-hover flex h-full gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <Icon name={v.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {v.body}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
