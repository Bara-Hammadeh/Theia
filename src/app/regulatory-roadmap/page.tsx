import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Regulatory Roadmap",
  description:
    "Theia's intended path from investigational platform toward Software as a Medical Device: quality systems, clinical evidence, and a phased, disciplined regulatory strategy.",
  path: "/regulatory-roadmap",
});

export default function RegulatoryRoadmapPage() {
  return (
    <LegalLayout
      eyebrow="Regulatory"
      title="Regulatory Roadmap"
      subtitle="Where we are today, and the disciplined path we intend to follow toward a regulated product, with the right foundations built in from the start."
      updated="11 July 2026"
    >
      <p>
        <strong>
          {siteConfig.name} is currently an investigational platform. It is not a medical
          device and has not been cleared or approved by the FDA, EMA, or any other
          regulator for clinical use.
        </strong>{" "}
        This page describes our intended direction. It is forward-looking, and the
        specifics will depend on intended use, risk classification, and jurisdiction.
      </p>

      <h2>Designed for regulation from the start</h2>
      <p>
        Much surgical AI struggles to become a product because it was never built to be
        one. We took the opposite approach. Consistency, auditability, and privacy are
        built into the platform, so the path from where we are today to a regulated
        product is about evidence and documentation, not a rebuild.
      </p>

      <h2>A phased path</h2>
      <h3>Phase 1. Research and platform (today)</h3>
      <p>
        Build a rigorous, dependable foundation, develop and validate our models, and
        conduct careful evaluation. No clinical claims.
      </p>

      <h3>Phase 2. Clinical evidence</h3>
      <p>
        Studies with clinical partners to measure accuracy, reliability, and clinical
        value, with clear endpoints and honest reporting.
      </p>

      <h3>Phase 3. Quality system and controls</h3>
      <p>
        Establish a quality-management system and software lifecycle aligned with
        recognized standards, for example ISO&nbsp;13485 for quality management,
        IEC&nbsp;62304 for medical-device software, and ISO&nbsp;14971 for risk
        management, and adopt the IMDRF Software-as-a-Medical-Device framework for
        intended-use and risk categorization.
      </p>

      <h3>Phase 4. Regulatory submission</h3>
      <p>
        Pursue the appropriate pathway for the intended use and risk class, such as an
        FDA submission in the United States and CE marking under the EU Medical Device
        Regulation in Europe, including a change-control plan where relevant.
      </p>

      <h3>Phase 5. Post-market</h3>
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
          <strong>Auditability.</strong> Outputs can be traced and reviewed.
        </li>
        <li>
          <strong>Consistency.</strong> Results are dependable and can be relied upon.
        </li>
        <li>
          <strong>Transparency.</strong> We document intended use, limitations, and how
          the platform should and should not be used.
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
