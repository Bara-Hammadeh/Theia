import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { PlatformArchitecture } from "@/components/sections/PlatformArchitecture";
import { DataFactory } from "@/components/sections/DataFactory";

export const metadata: Metadata = createMetadata({
  title: "Technology",
  description:
    "Inside Theia: a deterministic, event-driven surgical AI runtime built on a scene-graph world model, evidence and provenance, a license-aware registry, and a reproducible ONNX pipeline.",
  path: "/technology",
});

const principles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "reproduce",
    title: "Deterministic runtime",
    body: "An event-driven core: typed events on an in-process bus, a fixed scheduler, and frame-accurate replay. The same video always produces the same result — a prerequisite for trust and for regulation.",
  },
  {
    icon: "graph",
    title: "Scene-graph world model",
    body: "A single, versioned representation of the operative scene — entities, relations, and temporal memory. Perception writes to it; reasoning reads from it. Fusion lives in one place, not scattered across scripts.",
  },
  {
    icon: "evidence",
    title: "Evidence & provenance",
    body: "Every event carries a causal header: model versions, a configuration hash, and a code revision. Any inference can be traced back to the exact inputs and weights that produced it.",
  },
  {
    icon: "layers",
    title: "Ports & adapters",
    body: "A hexagonal architecture where the domain core depends only on interfaces. Every dataset, model, tracker, and visualizer is a swappable adapter selected by configuration — never a hard dependency.",
  },
  {
    icon: "registry",
    title: "License-aware registry",
    body: "Models and datasets load through a registry with a policy gate. Under a commercial policy, anything not cleared for its use is refused — enforced both in CI and at runtime, so compliance is provable.",
  },
  {
    icon: "deploy",
    title: "Reproducible & portable",
    body: "Config, data, and code are versioned together (Hydra, DVC, experiment tracking). Trained models export to ONNX and run on commodity GPUs — on-premises, in a private cloud, or at the edge.",
  },
];

const stack = [
  "Python",
  "PyTorch",
  "ONNX Runtime",
  "asyncio event bus",
  "Hydra",
  "DVC",
  "Experiment tracking",
  "SAM2",
  "YOLOX",
  "ByteTrack",
  "Transformer phase models",
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title={
          <>
            A deterministic runtime for{" "}
            <span className="text-gradient">surgical intelligence</span>
          </>
        }
        subtitle="Theia is engineered like safety-critical infrastructure, not like a research demo. Six architectural commitments make it auditable, reproducible, and ready to move from the lab to the operating room without a rewrite."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/research" variant="secondary" size="sm" withArrow>
            See research progress
          </Button>
          <Button href="/partnerships" variant="ghost" size="sm">
            Partner with us
          </Button>
        </div>
      </PageHeader>

      <section className="section pt-4">
        <Container>
          <SectionHeading
            eyebrow="Design Principles"
            title="Six commitments, engineered in"
            intro="These are not features on a roadmap — they are structural properties of the runtime. Change the data and the weights, and the same software carries you from research to a regulated product."
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card card-hover h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <PlatformArchitecture />
      <DataFactory />

      <section className="section pt-0">
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-white/[0.07] bg-surface/40 p-8 sm:p-10">
              <span className="eyebrow">Engineering stack</span>
              <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
                Proven components, composed with discipline
              </h2>
              <p className="mt-3 max-w-2xl text-muted">
                We do not reinvent what already works. We take best-in-class,
                permissively-licensed building blocks and wire them behind clean
                interfaces — so any one of them can be replaced without touching the
                core.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
