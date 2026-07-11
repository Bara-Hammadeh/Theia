import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Regulatory Roadmap",
  description:
    "Theia's intended path from investigational research platform toward Software as a Medical Device — quality systems, clinical evidence, and a phased regulatory strategy.",
  path: "/regulatory-roadmap",
});

export default function RegulatoryRoadmapPage() {
  return (
    <LegalLayout
      eyebrow="Regulatory"
      title="Regulatory Roadmap"
      subtitle="Where we are today, and the disciplined path we intend to follow toward a regulated product — with auditability designed in from the start."
      updated="11 July 2026"
    >
      <p>
        <strong>
          {siteConfig.name} is currently an investigational research platform. It is not
          a medical device and has not been cleared or approved by the FDA, EMA, or any
          other regulator for clinical use.
        </strong>{" "}
        This page describes our <em>intended</em> direction. It is forward-looking, and
        the specifics will depend on intended use, risk classification, and jurisdiction.
      </p>

      <h2>Designed for regulation from day one</h2>
      <p>
        Most surgical AI struggles to become a product because it was never built to be
        one. We inverted that: determinism, reproducibility, provenance, and audit
        logging are structural properties of the runtime. Moving from research to a
        regulated product is intended to change datasets, weights, and documentation —
        not the underlying software.
      </p>

      <h2>A phased path</h2>
      <h3>Phase 1 — Research &amp; platform (today)</h3>
      <p>
        Build a rigorous, reproducible foundation; develop models against public and
        governed partner data; conduct retrospective analysis. No clinical claims.
      </p>

      <h3>Phase 2 — Clinical evidence</h3>
      <p>
        Retrospective and, subsequently, prospective studies with clinical partners to
        measure accuracy, calibration, generalization, and clinical utility — with
        pre-registered endpoints and transparent reporting.
      </p>

      <h3>Phase 3 — Quality system &amp; design controls</h3>
      <p>
        Establish a quality-management system and software lifecycle aligned with
        recognized standards — for example ISO&nbsp;13485 (quality management),
        IEC&nbsp;62304 (medical-device software lifecycle), and ISO&nbsp;14971 (risk
        management) — and adopt the IMDRF Software-as-a-Medical-Device framework for
        intended-use and risk categorization.
      </p>

      <h3>Phase 4 — Regulatory submission</h3>
      <p>
        Pursue the appropriate pathway for the intended use and risk class — such as an
        FDA submission (510(k) or De Novo) in the United States and CE marking under the
        EU Medical Device Regulation in Europe — including, where relevant, a
        Predetermined Change Control Plan for AI models.
      </p>

      <h3>Phase 5 — Post-market</h3>
      <p>
        Monitor real-world performance, watch for drift, and manage updates under change
        control and post-market surveillance obligations.
      </p>

      <h2>Principles that lower risk</h2>
      <ul>
        <li>
          <strong>Human-in-the-loop.</strong> Decision support with a clinician in
          control is generally lower-risk than autonomous action.
        </li>
        <li>
          <strong>Auditability.</strong> Every output is traceable to its inputs and
          model versions.
        </li>
        <li>
          <strong>Reproducibility.</strong> Any result can be re-derived for review.
        </li>
        <li>
          <strong>Transparency.</strong> We document intended use, limitations, and
          failure modes.
        </li>
      </ul>

      <h2>Honest disclaimer</h2>
      <p>
        Nothing on this page is a representation that {siteConfig.name} is or will become
        cleared, approved, or CE-marked, nor a commitment to a specific timeline. We will
        update this roadmap as our evidence and regulatory strategy develop. Questions
        from partners and reviewers are welcome at{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalLayout>
  );
}
