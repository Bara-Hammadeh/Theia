import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { applications } from "@/content/platform";

const statusStyle: Record<string, string> = {
  "Lead procedure": "border-accent/30 bg-accent/10 text-accent",
  "In development": "border-accent-2/30 bg-accent-2/10 text-accent-2",
  "On roadmap": "border-iris/30 bg-iris/10 text-iris",
  Vision: "border-white/15 bg-white/5 text-muted",
};

export function ClinicalApplications() {
  return (
    <section id="applications" className="section relative">
      <Container>
        <SectionHeading
          eyebrow="Clinical Applications"
          title={
            <>
              Built procedure by procedure —{" "}
              <span className="text-gradient">starting where it matters most</span>
            </>
          }
          intro="We go deep on one procedure at a time, beginning with the operations where structured intelligence prevents the most harm. Because the runtime is procedure-agnostic, each new specialty is a knowledge-layer and dataset addition — not a rebuild."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app) => (
            <StaggerItem key={app.title}>
              <div className="card card-hover flex h-full flex-col p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={app.icon} className="h-5 w-5" strokeWidth={1.4} />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-2xs uppercase tracking-wider ${statusStyle[app.status]}`}
                  >
                    {app.status}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{app.title}</h3>
                <p className="font-mono text-2xs uppercase tracking-wider text-faint">
                  {app.subtitle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {app.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
