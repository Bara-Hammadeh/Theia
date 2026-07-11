import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { milestones, type MilestoneStatus } from "@/content/company";

// NOTE: This page is intentionally kept out of navigation and deployment
// (private folder, prefixed with "_"). It is retained for future use and is
// written to avoid disclosing proprietary details.

export const metadata: Metadata = createMetadata({
  title: "Research",
  description:
    "Theia's progress: a working surgical intelligence platform, our Annotation AI, and proprietary perception models validated against strong external benchmarks.",
  path: "/research",
});

const statusStyle: Record<MilestoneStatus, string> = {
  Shipped: "text-accent border-accent/30 bg-accent/10",
  "In progress": "text-accent-2 border-accent-2/30 bg-accent-2/10",
  Next: "text-iris border-iris/30 bg-iris/10",
  Horizon: "text-muted border-white/15 bg-white/5",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={
          <>
            Where we are,{" "}
            <span className="text-gradient">honestly</span>
          </>
        }
        subtitle="We are an early-stage company, and we say so plainly. The foundation is built and working, and the clinical validation is ahead of us. Here is what exists today and what comes next."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/partnerships" variant="secondary" size="sm" withArrow>
            Partner with us
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
            title="From a working platform to clinical value"
            intro="Our path is deliberately foundation-first: build a rigorous, dependable platform, then earn clinical value on top of it."
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

          <Reveal delay={0.1}>
            <div className="mt-12 rounded-2xl border border-white/[0.07] bg-surface/40 p-6">
              <p className="max-w-3xl text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">On measurement and publications:</span>{" "}
                we develop against strong external benchmarks so our results are
                comparable, then extend to governed partner data for generalization. We
                will publish as we validate, and would rather report a well-controlled,
                honest result, including its limitations, than a headline number that no
                one else can reproduce.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
