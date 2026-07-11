import { Container } from "@/components/ui/Container";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
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
              <span className="text-gradient">the next one safer.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              A surgeon&rsquo;s skill lives in their hands and their memory. We believe it
              should also be supported by intelligence that learns responsibly, so that
              hard-won judgment compounds across cases, hospitals, and generations. Our
              long-term aim is an operating-room intelligence layer that makes surgery
              measurably safer, everywhere.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              We hold ourselves to a clear line on privacy. Patient videos are not
              permanently stored as part of routine product operation, data ownership
              stays with our partners, and our AI improves only through carefully
              governed development and validated learning, never by quietly retaining or
              repurposing customer data.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex justify-center">
              <Button href="/vision" variant="secondary" withArrow>
                Explore our vision
              </Button>
            </div>
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
