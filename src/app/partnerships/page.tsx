import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { partnershipTracks } from "@/content/company";

const process = [
  {
    n: 1,
    title: "Scoping call",
    body: "A 30-minute conversation to align on the clinical question, the data, and whether a pilot is feasible. No obligation.",
  },
  {
    n: 2,
    title: "Data governance",
    body: "A consented, de-identification-first data agreement that your legal, privacy, and IRB teams review and approve.",
  },
  {
    n: 3,
    title: "Pilot dataset",
    body: "A focused set of de-identified cases to establish a baseline and demonstrate value on your own material.",
  },
  {
    n: 4,
    title: "Study & readout",
    body: "Transparent metrics, a shared readout, and a decision on whether to publish, expand, or move toward validation.",
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partnerships"
        title={
          <>
            Partner with a surgical AI company{" "}
            <span className="text-gradient">built for trust</span>
          </>
        }
        subtitle="We work with a deliberately small number of surgical departments, hospital innovation offices, research institutes, and industry partners. Every engagement is governed, consented, and structured to produce evidence — not hype."
      >
        <Button href="/contact" withArrow>
          Start a conversation
        </Button>
      </PageHeader>

      {/* Tracks */}
      <section className="section pt-4">
        <Container>
          <SectionHeading
            eyebrow="Who We Work With"
            title="Four ways to partner"
            intro="Whatever you bring — cases, a clinical question, complementary methods, or hardware — there is a track designed around a fair, transparent exchange of value."
          />
          <StaggerGroup className="mt-14 grid gap-4 lg:grid-cols-2">
            {partnershipTracks.map((t) => (
              <StaggerItem key={t.audience}>
                <div className="card card-hover flex h-full flex-col p-7">
                  <h3 className="text-lg font-semibold text-ink">{t.audience}</h3>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="font-mono text-2xs uppercase tracking-wider text-accent">
                        We offer
                      </p>
                      <ul className="mt-3 space-y-2">
                        {t.weOffer.map((o) => (
                          <li key={o} className="flex gap-2 text-sm text-muted">
                            <Icon name="review" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            <span>{o}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-2xs uppercase tracking-wider text-iris">
                        We ask
                      </p>
                      <ul className="mt-3 space-y-2">
                        {t.weAsk.map((a) => (
                          <li key={a} className="flex gap-2 text-sm text-muted">
                            <Icon name="handshake" className="mt-0.5 h-4 w-4 shrink-0 text-iris" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Process */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="A low-lift path from hello to results"
            intro="We keep the on-ramp light and the governance rigorous. Most partners go from first call to an approved pilot in weeks, not quarters."
          />
          <StaggerGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <StaggerItem key={p.n}>
                <div className="card h-full p-6">
                  <div className="font-display text-3xl font-semibold text-gradient">
                    {String(p.n).padStart(2, "0")}
                  </div>
                  <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/[0.07] bg-surface/40 p-8 sm:flex-row sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">Ready to explore a pilot?</h3>
                <p className="mt-2 text-muted">
                  Bring a procedure and a question. We&rsquo;ll bring the platform.
                </p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Button href="/contact" withArrow>
                  Contact the team
                </Button>
                <Button href="/research-collaboration" variant="secondary">
                  Research collaboration
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
