import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Research Collaboration",
  description:
    "Collaborate with Theia on surgical data science — retrospective studies, prospective validation, dataset and benchmark building, and annotation standards, with fair IP and open publication.",
  path: "/research-collaboration",
});

export default function ResearchCollaborationPage() {
  return (
    <LegalLayout
      eyebrow="Collaborate"
      title="Research Collaboration"
      subtitle="If you have a surgical question and access to video, we can help you answer it rigorously — and reproducibly. Here is how research collaboration with Theia works."
      updated="11 July 2026"
    >
      <p>
        We collaborate with surgeons, surgical departments, universities, and research
        institutes who want to turn surgical video into real evidence. You bring the
        clinical question and domain expertise; we bring the platform, engineering, and a
        reproducible method.
      </p>

      <h2>What we bring</h2>
      <ul>
        <li>A deterministic, reproducible platform for surgical data science.</li>
        <li>AI-assisted annotation tooling that dramatically reduces labeling effort.</li>
        <li>Engineering to turn a hypothesis into a rigorous, repeatable analysis.</li>
        <li>Shared datasets, benchmarks, and honest reporting — including failure modes.</li>
        <li>Co-authorship and genuine intellectual partnership.</li>
      </ul>

      <h2>What we ask</h2>
      <ul>
        <li>A well-scoped clinical question and a clinical champion.</li>
        <li>Access to de-identified surgical video under a governed agreement.</li>
        <li>Time from a small annotation and review group.</li>
        <li>A shared commitment to methodological rigor and ethical data use.</li>
      </ul>

      <h2>Types of collaboration</h2>
      <ul>
        <li>
          <strong>Retrospective studies.</strong> Analyze existing video to characterize
          phases, workflow, safety milestones, or skill.
        </li>
        <li>
          <strong>Prospective validation.</strong> Evaluate model performance against
          your outcomes under a pre-registered protocol.
        </li>
        <li>
          <strong>Dataset &amp; benchmark building.</strong> Create the reference dataset
          your specialty is missing, with clinical quality control.
        </li>
        <li>
          <strong>Annotation standards.</strong> Define the ontology and gold standards
          for a procedure with our tools.
        </li>
      </ul>

      <h2>Data, ethics &amp; governance</h2>
      <p>
        All data is de-identified, consented, and handled under the practices on our{" "}
        <a href="/data-governance">Data Governance</a> and <a href="/security">Security</a>{" "}
        pages. We support your IRB and institutional processes rather than working around
        them.
      </p>

      <h2>Publication &amp; intellectual property</h2>
      <p>
        We support publication and pre-agree authorship and IP terms up front, in
        writing. We report methods and metrics transparently — including where the system
        underperforms — because reproducible, honest science is the entire point.
      </p>

      <h2>How to start</h2>
      <p>
        It is deliberately low-lift: a short scoping call, a data-governance agreement,
        and a focused pilot dataset. From there we align on the question and success
        criteria. To begin, write to{" "}
        <a href={`mailto:${siteConfig.emails.research}`}>{siteConfig.emails.research}</a>{" "}
        or use our <a href="/contact">contact form</a>.
      </p>
    </LegalLayout>
  );
}
