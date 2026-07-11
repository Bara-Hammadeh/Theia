import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { architectureStages, archLayerColor, type ArchLayer } from "@/content/platform";

const layerDot: Record<ArchLayer, string> = {
  Ingest: "bg-muted",
  Perception: "bg-accent",
  "World Model": "bg-accent-2",
  Reasoning: "bg-iris",
  Decision: "bg-signal",
  Presentation: "bg-muted",
};

const layers: ArchLayer[] = [
  "Perception",
  "World Model",
  "Reasoning",
  "Decision",
  "Presentation",
];

export function PlatformArchitecture() {
  return (
    <section id="architecture" className="section relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <Container>
        <SectionHeading
          eyebrow="Platform Architecture"
          title={
            <>
              One runtime. Eleven stages.{" "}
              <span className="text-gradient">Every step accountable.</span>
            </>
          }
          intro="Theia is not a pipeline of disconnected scripts — it is a runtime. Frames flow through perception into a shared world model, reasoning interprets that model into evidence and assessment, and decision support is rendered for the surgeon. Each stage is versioned, replayable, and auditable."
        />

        <div className="mt-8 flex flex-wrap gap-2.5">
          {layers.map((l) => (
            <span key={l} className="chip">
              <span className={`h-2 w-2 rounded-full ${layerDot[l]}`} />
              <span className="text-xs text-muted">{l}</span>
            </span>
          ))}
        </div>

        <div className="relative mt-12">
          {/* vertical spine */}
          <div className="absolute bottom-4 left-[19px] top-4 w-px bg-gradient-to-b from-accent/50 via-iris/40 to-transparent" />

          <div className="space-y-3">
            {architectureStages.map((s, i) => (
              <Reveal key={s.n} delay={Math.min(i * 0.04, 0.3)}>
                <div className="group relative flex items-start gap-5">
                  {/* node */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface-2 shadow-[0_0_0_5px_rgb(var(--bg))]">
                    <Icon
                      name={s.icon}
                      className={`h-5 w-5 ${archLayerColor[s.layer]}`}
                    />
                  </div>

                  {/* card */}
                  <div className="card card-hover flex-1 p-5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-2xs text-faint">
                        {String(s.n).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-semibold text-ink">
                        {s.title}
                      </h3>
                      <span
                        className={`font-mono text-2xs uppercase tracking-wider ${archLayerColor[s.layer]}`}
                      >
                        {s.layer}
                      </span>
                    </div>
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
                      {s.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
