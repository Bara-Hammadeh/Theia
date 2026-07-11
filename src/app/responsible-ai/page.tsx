import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Responsible AI",
  description:
    "Theia's Responsible AI Statement: human oversight, calibrated confidence, transparency, validation, fairness, privacy, and honest reporting of limitations.",
  path: "/responsible-ai",
});

export default function ResponsibleAIPage() {
  return (
    <LegalLayout
      eyebrow="Trust"
      title="Responsible AI Statement"
      subtitle="Surgical AI carries real consequences. These are the commitments that shape how we build, evaluate, and deploy it."
      updated="11 July 2026"
    >
      <p>
        We build AI for one of the highest-stakes settings there is. That demands more
        than good intentions. This statement describes the principles we hold ourselves
        to.
      </p>

      <h2>1. Human oversight, always</h2>
      <p>
        {siteConfig.name} provides decision support, never autonomous action. The surgeon
        is the decision-maker. The platform surfaces information and insight, and a
        qualified clinician interprets and acts. We do not build features that remove the
        human from the loop.
      </p>

      <h2>2. Calibrated confidence</h2>
      <p>
        Confidence is treated as a first-class output. We aim to communicate certainty
        and doubt honestly, so an uncertain result is never mistaken for a certain one.
      </p>

      <h2>3. Transparency</h2>
      <p>
        Our insight is built to be reviewed rather than taken on faith. The platform is
        designed so that its outputs can be examined and understood, not delivered as
        unexplained verdicts.
      </p>

      <h2>4. Validation and generalization</h2>
      <p>
        We evaluate against strong external benchmarks and care about how the platform
        behaves on data unlike what it has seen before. A result that only holds in one
        setting is a hypothesis, not a capability.
      </p>

      <h2>5. Fairness and bias</h2>
      <p>
        Surgical populations, techniques, and equipment vary. We seek diverse,
        representative data, examine performance across groups where feasible, and treat
        unexplained gaps as problems to investigate.
      </p>

      <h2>6. Safety over automation</h2>
      <p>
        When a trade-off arises between doing more automatically and keeping the surgeon
        in control, we choose control. We would rather deliver a useful, well-bounded
        signal than an impressive but unsafe one.
      </p>

      <h2>7. Honest limitations</h2>
      <p>
        We document what the platform cannot do and where it can fall short. Reporting
        limitations openly is, to us, a feature, and the opposite of the overclaiming
        that erodes trust in medical AI.
      </p>

      <h2>8. Accountability</h2>
      <p>
        Because the platform is built to be auditable, its behavior can be reviewed and
        monitored over time. Responsibility does not end at deployment. It is a
        continuous obligation.
      </p>

      <h2>9. Privacy and consent</h2>
      <p>
        Responsible AI starts with responsible data. Patient videos are not permanently
        stored as part of routine operation, data ownership stays with our partners, and
        our AI improves only through carefully governed development, never by quietly
        retaining or repurposing customer data. See our{" "}
        <a href="/data-governance">Data Governance</a> page.
      </p>

      <p>
        These commitments evolve as the field and our capabilities mature. Feedback is
        welcome at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalLayout>
  );
}
