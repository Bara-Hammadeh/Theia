import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { milestones, type MilestoneStatus } from "@/content/company";

export const metadata: Metadata = createMetadata({
  title: "Research",
  description:
    "Theia's research progress: a deterministic runtime, an AI-assisted annotation platform, reproducible ML, and surgical segmentation and phase models benchmarked against SAM2 on public and partner data.",
  path: "/research",
});

const statusStyle: Record<MilestoneStatus, string> = {
  Shipped: "text-accent border-accent/30 bg-accent/10",
  "In progress": "text-accent-2 border-accent-2/30 bg-accent-2/10",
  Next: "text-iris border-iris/30 bg-iris/10",
  Horizon: "text-muted border-white/15 bg-white/5",
};

const datasets: { name: string; tag: string; body: string; icon: IconName }[] = [
  {
    name: "Cholec80",
    tag: "Phase & tools",
    icon: "procedure",
    body: "80 laparoscopic cholecystectomy videos — the standard benchmark for surgical phase recognition and tool-presence detection.",
  },
  {
    name: "CholecSeg8k",
    tag: "Segmentation",
    icon: "segment",
    body: "Thousands of densely annotated frames for semantic segmentation of anatomy and instruments in cholecystectomy.",
  },
  {
    name: "Endoscapes",
    tag: "CVS & anatomy",
    icon: "shield",
    body: "Annotations for the Critical View of Safety and hepatocystic anatomy — the reference for safety assessment.",
  },
  {
    name: "CholecT50",
    tag: "Action triplets",
    icon: "route",
    body: "Fine-grained instrument–verb–target triplets for modeling surgical actions, not just objects.",
  },
  {
    name: "SAM2",
    tag: "Foundation baseline",
    icon: "sparkle",
    body: "The segmentation foundation model we benchmark against and use to accelerate annotation throughput.",
  },
];

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={
          <>
            Where we are —{" "}
            <span className="text-gradient">honestly</span>
          </>
        }
        subtitle="We are an early-stage research company, and we say so plainly. The foundation is built and working; the clinical validation is ahead of us. Here is exactly what exists today and what comes next."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/research-collaboration" variant="secondary" size="sm" withArrow>
            Collaborate on research
          </Button>
          <Button href="/technology" variant="ghost" size="sm">
            How it works
          </Button>
        </div>
      </PageHeader>

      {/* Milestones */}
      <section className="section pt-4">
        <Container>
          <SectionHeading
            eyebrow="Progress"
            title="From a working runtime to clinical validation"
            intro="Our roadmap is deliberately foundation-first: build a rigorous, reproducible platform, then earn clinical evidence on top of it."
          />

          <div className="relative mt-14">
            <div className="absolute bottom-4 left-[19px] top-2 w-px bg-gradient-to-b from-accent/50 via-iris/40 to-transparent" />
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <Reveal key={m.title} delay={Math.min(i * 0.05, 0.3)}>
                  <div className="relative flex items-start gap-5">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface-2 shadow-[0_0_0_5px_rgb(var(--bg))]">
                      <span className={`h-2.5 w-2.5 rounded-full ${statusStyle[m.status].split(" ")[0].replace("text-", "bg-")}`} />
                    </div>
                    <div className="card flex-1 p-5">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-base font-semibold">{m.title}</h3>
                        <span
                          className={`rounded-full border px-2.5 py-0.5 font-mono text-2xs uppercase tracking-wider ${statusStyle[m.status]}`}
                        >
                          {m.status}
                        </span>
                      </div>
                      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                        {m.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Datasets & benchmarks */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="Datasets & Benchmarks"
            title="Grounded in the field's best public data"
            intro="We develop against established public surgical corpora so our results are comparable and reproducible — then extend to governed partner datasets for generalization."
          />
          <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {datasets.map((d) => (
              <StaggerItem key={d.name}>
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-2xs uppercase tracking-wider text-faint">
                      {d.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-white/[0.07] bg-surface/40 p-6">
              <p className="max-w-3xl text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">On publications:</span> we
                will publish as we validate. We would rather report a well-controlled,
                reproducible result — including its failure modes — than a headline
                number that no one else can reproduce. Peer-reviewed work and technical
                reports will appear here as studies complete.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
