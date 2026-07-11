import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { governance } from "@/content/platform";

export function Security() {
  return (
    <section id="security" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="Security & Governance"
          title={
            <>
              Hospital-ready from the{" "}
              <span className="text-gradient">first line of code</span>
            </>
          }
          intro="Trust is not a feature we added — it is the architecture. De-identification, encryption, immutable audit, versioning, and a license-aware registry are structural properties of the runtime, which is why moving from research to a regulated product changes data and weights, not the software."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {governance.map((g) => (
            <StaggerItem key={g.title}>
              <div className="card card-hover h-full p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <Icon name={g.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.body}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/security" variant="secondary" size="sm" withArrow>
            Read our security posture
          </Button>
          <Button href="/data-governance" variant="ghost" size="sm">
            Data governance
          </Button>
        </div>
      </Container>
    </section>
  );
}
