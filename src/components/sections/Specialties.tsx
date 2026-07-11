import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { specialties } from "@/content/platform";

export function Specialties() {
  return (
    <section id="specialties" className="section relative">
      <Container>
        <SectionHeading
          eyebrow="Clinical Scope"
          title={
            <>
              One platform,{" "}
              <span className="text-gradient">every minimally invasive procedure</span>
            </>
          }
          intro="Theia is procedure-agnostic by design. It is not a tool for a single operation, but a platform built to understand the full breadth of minimally invasive surgery, and to extend to new procedures as it grows."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {specialties.map((s) => (
            <StaggerItem key={s.title}>
              <div className="card card-hover flex h-full flex-col items-start gap-4 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                  <Icon name={s.icon} className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium leading-snug text-ink">{s.title}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <p className="mt-8 font-mono text-2xs uppercase tracking-[0.15em] text-faint">
          Procedure-agnostic · Built to generalize across specialties
        </p>
      </Container>
    </section>
  );
}
