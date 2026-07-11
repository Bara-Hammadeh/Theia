import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Responsible AI",
  description:
    "Theia's Responsible AI Statement: human oversight, calibrated uncertainty, evidence and transparency, validation, fairness, and honest reporting of limitations.",
  path: "/responsible-ai",
});

export default function ResponsibleAIPage() {
  return (
    <LegalLayout
      eyebrow="Trust"
      title="Responsible AI Statement"
      subtitle="Surgical AI carries real consequences. These are the commitments that constrain how we build, evaluate, and deploy it."
      updated="11 July 2026"
    >
      <p>
        We build AI for one of the highest-stakes settings there is. That demands more
        than good intentions — it demands architecture and process that make responsible
        behavior the default. This statement describes the principles we hold ourselves
        to and how the platform enforces them.
      </p>

      <h2>1. Human oversight, always</h2>
      <p>
        {siteConfig.name} provides decision <em>support</em>, never autonomous action.
        The surgeon is the decision-maker. The system surfaces information, cues, and
        assessments; a qualified clinician interprets and acts. We do not build features
        that remove the human from the loop.
      </p>

      <h2>2. Calibrated uncertainty</h2>
      <p>
        Confidence is a first-class output. We report calibrated uncertainty alongside
        every assessment and design the interface to communicate doubt honestly, so an
        uncertain result is never mistaken for a certain one.
      </p>

      <h2>3. Evidence and transparency</h2>
      <p>
        Every inference carries its provenance — the model versions, configuration, and
        frames that produced it. Outputs are explainable in terms of what the system
        observed, not delivered as unexplained verdicts.
      </p>

      <h2>4. Validation and generalization</h2>
      <p>
        We evaluate across institutions and against public benchmarks, and we care about
        how models behave on data unlike their training set. A result that only holds in
        one hospital is a hypothesis, not a capability.
      </p>

      <h2>5. Fairness and bias</h2>
      <p>
        Surgical populations, techniques, and equipment vary. We actively seek diverse,
        representative data, examine performance across subgroups where feasible, and
        treat unexplained performance gaps as defects to investigate.
      </p>

      <h2>6. Safety over automation</h2>
      <p>
        When a trade-off arises between doing more automatically and keeping the surgeon
        in control, we choose control. We would rather surface a useful, well-bounded
        signal than an impressive but unsafe one.
      </p>

      <h2>7. Honest limitations</h2>
      <p>
        We document what the system cannot do and where it fails. Reporting failure modes
        openly is, to us, a feature — the opposite of the overclaiming that erodes trust
        in medical AI.
      </p>

      <h2>8. Accountability and monitoring</h2>
      <p>
        Because the runtime is deterministic and fully logged, behavior can be audited
        and monitored over time for drift. Responsibility does not end at deployment; it
        is a continuous obligation.
      </p>

      <h2>9. Privacy and consent</h2>
      <p>
        Responsible AI starts with responsible data. We build on de-identified,
        consented, governed data as described in our{" "}
        <a href="/data-governance">Data Governance</a> page.
      </p>

      <p>
        These commitments evolve as the field and our capabilities mature. Feedback is
        welcome at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalLayout>
  );
}
