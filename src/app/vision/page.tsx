import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";

export const metadata: Metadata = createMetadata({
  title: "Vision",
  description:
    "Where surgical intelligence is going: from real-time surgical awareness and decision support, to AR guidance and analytics, to a global surgical knowledge platform. Visionary, and grounded.",
  path: "/vision",
});

type Item = { icon: IconName; title: string; body: string };

const horizons: {
  tag: string;
  label: string;
  framing: string;
  items: Item[];
}[] = [
  {
    tag: "Horizon 01",
    label: "Near Future",
    framing: "What we are building now.",
    items: [
      {
        icon: "route",
        title: "Surgical workflow understanding",
        body: "Recognizing the steps of a procedure and how it unfolds, automatically.",
      },
      {
        icon: "pulse",
        title: "Real-time surgical awareness",
        body: "Understanding what is happening in the field as it happens.",
      },
      {
        icon: "cpu",
        title: "Operating-room intelligence",
        body: "Turning each case into clear, structured information for the whole team.",
      },
      {
        icon: "decision",
        title: "Context-aware decision support",
        body: "Surfacing the right information at the right moment, always under the surgeon's control.",
      },
    ],
  },
  {
    tag: "Horizon 02",
    label: "Medium Term",
    framing: "Where the platform is headed.",
    items: [
      {
        icon: "eye",
        title: "Augmented reality overlays",
        body: "Relevant guidance presented directly in the surgeon's view.",
      },
      {
        icon: "compass",
        title: "Procedure guidance",
        body: "Step-aware support that adapts to how an operation is progressing.",
      },
      {
        icon: "log",
        title: "Automatic documentation",
        body: "Cases documented as they happen, not reconstructed from memory afterward.",
      },
      {
        icon: "evidence",
        title: "Operative report generation",
        body: "Draft operative reports produced from the procedure itself.",
      },
      {
        icon: "layers",
        title: "Workflow optimization",
        body: "Insight that helps teams run smoother, more efficient operating rooms.",
      },
      {
        icon: "graph",
        title: "Hospital analytics",
        body: "A clear view of surgical activity and quality across a department.",
      },
      {
        icon: "assess",
        title: "Resident performance assessment",
        body: "Objective, consistent feedback that supports surgical training.",
      },
    ],
  },
  {
    tag: "Horizon 03",
    label: "Long Term",
    framing: "The horizon we are building toward.",
    items: [
      {
        icon: "cpu",
        title: "Robotic surgery integration",
        body: "Surgical intelligence working alongside robotic platforms.",
      },
      {
        icon: "eye",
        title: "Real-time AR visualization",
        body: "Rich, live visualization of the operative field.",
      },
      {
        icon: "human",
        title: "AI-assisted resident education",
        body: "Personalized learning drawn from real surgical experience.",
      },
      {
        icon: "beaker",
        title: "Simulation and rehearsal",
        body: "Practicing and planning procedures before they happen.",
      },
      {
        icon: "validate",
        title: "Automated quality metrics",
        body: "Consistent, objective measures of surgical quality at scale.",
      },
      {
        icon: "graph",
        title: "Global surgical knowledge",
        body: "A shared foundation of surgical understanding that improves care everywhere.",
      },
      {
        icon: "layers",
        title: "Digital surgical twins",
        body: "Virtual models of procedures for planning, review, and research.",
      },
      {
        icon: "shield",
        title: "Bounded autonomous assistance",
        body: "Carefully limited assistance that always keeps the surgeon in command.",
      },
    ],
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vision"
        title={
          <>
            Where surgical intelligence{" "}
            <span className="text-gradient">is going</span>
          </>
        }
        subtitle="Our long-term direction is ambitious, and deliberately grounded. Each step below builds on the last, and every one of them keeps the surgeon in command and the patient protected."
      />

      <section className="section pt-4">
        <Container>
          <div className="relative">
            {/* vertical rail */}
            <div className="absolute bottom-8 left-[15px] top-2 hidden w-px bg-gradient-to-b from-accent/50 via-iris/40 to-transparent lg:block" />

            <div className="space-y-16">
              {horizons.map((h) => (
                <div key={h.label} className="relative lg:pl-14">
                  <div className="absolute left-0 top-1 hidden h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-surface-2 shadow-[0_0_0_5px_rgb(var(--bg))] lg:flex">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  </div>

                  <Reveal>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-2xs uppercase tracking-[0.2em] text-accent">
                        {h.tag}
                      </span>
                      <h2 className="text-2xl font-semibold sm:text-3xl">{h.label}</h2>
                    </div>
                    <p className="mt-2 text-muted">{h.framing}</p>
                  </Reveal>

                  <StaggerGroup className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {h.items.map((it) => (
                      <StaggerItem key={it.title}>
                        <div className="card card-hover flex h-full gap-4 p-5">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-accent">
                            <Icon name={it.icon} className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-sm font-semibold leading-snug">
                              {it.title}
                            </h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted">
                              {it.body}
                            </p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerGroup>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="mt-16 rounded-3xl border border-white/[0.07] bg-surface/40 p-8 sm:p-10">
              <h2 className="text-2xl font-semibold">Ambition, held to a standard.</h2>
              <p className="mt-3 max-w-3xl leading-relaxed text-muted">
                A vision is only worth as much as the discipline behind it. Every
                capability we pursue is grounded in real clinical value, built with
                privacy and human oversight at its core, and advanced only through
                careful, validated development. We would rather earn trust one honest
                step at a time than promise more than we can responsibly deliver.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button href="/partnerships" withArrow>
                  Build it with us
                </Button>
                <Button href="/technology" variant="secondary">
                  See the platform today
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
