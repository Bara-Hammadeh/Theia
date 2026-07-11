import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Data Governance",
  description:
    "How Theia governs surgical video and clinical data: institutional ownership, de-identification by design, consent, minimization, lineage, isolation, and deletion.",
  path: "/data-governance",
});

export default function DataGovernancePage() {
  return (
    <LegalLayout
      eyebrow="Trust"
      title="Data Governance"
      subtitle="Surgical data is a privilege, not an entitlement. These are the principles that govern how we handle it — designed to satisfy your legal, privacy, and IRB teams."
      updated="11 July 2026"
    >
      <p>
        Our platform was architected so that governance is a structural property, not a
        policy bolted on afterward. The commitments below apply to any surgical video or
        clinical data handled through a partnership. They are summarized here and made
        binding in the specific agreement we sign with each institution.
      </p>

      <h2>Institutional ownership</h2>
      <p>
        Data contributed by a partner remains the property of that institution and its
        patients. We act as a processor within the scope you define. You may audit,
        restrict, or terminate use in accordance with our agreement, and we return or
        delete data on request.
      </p>

      <h2>De-identification by design</h2>
      <p>
        Data is de-identified before it enters our pipeline. The runtime operates on{" "}
        <strong>opaque source identifiers and pixels</strong> — never names, medical
        record numbers, or other protected health information. Source identifiers are
        random and cannot be reversed to a patient by us.
      </p>

      <h2>Consent and lawful basis</h2>
      <p>
        We only work with data that has an appropriate lawful basis and, where required,
        ethics or IRB approval. We support your consent framework and will not use data
        beyond the purposes you have authorized.
      </p>

      <h2>Data minimization &amp; purpose limitation</h2>
      <p>
        We collect only what a project needs, use it only for the agreed purpose, and
        avoid retaining anything we do not require. Scope is defined per engagement and
        enforced technically.
      </p>

      <h2>Lineage &amp; versioning</h2>
      <p>
        Every dataset and model is content-addressed with complete lineage — from raw
        frame to labeled sample to trained weight. We can show exactly which data
        produced which model, and reproduce that result on demand.
      </p>

      <h2>Access control &amp; isolation</h2>
      <p>
        Access is least-privilege and role-based, and every access is logged. Data from
        different institutions and studies is isolated; we do not commingle partner data
        or use one partner&rsquo;s data to serve another without explicit agreement.
      </p>

      <h2>Licensing &amp; commercial safety</h2>
      <p>
        A license-aware registry tracks the permitted use of every dataset and model and
        refuses anything not cleared for its intended purpose. This makes the boundary
        between research use and commercial use explicit and enforceable.
      </p>

      <h2>Retention &amp; deletion</h2>
      <p>
        We retain data only for the duration and purpose set out in our agreement. On
        expiry or request, we delete or return it and can provide confirmation.
      </p>

      <h2>Sub-processors</h2>
      <p>
        Where we rely on infrastructure providers, they are bound by data-protection
        terms consistent with these commitments. We can share our current list of
        sub-processors with partners under agreement.
      </p>

      <h2>Incident response</h2>
      <p>
        We maintain an incident-response process and will notify affected partners
        without undue delay in the event of a data incident, consistent with our
        contractual and legal obligations. See our <a href="/security">Security</a> page.
      </p>

      <p>
        To discuss a data-governance framework for your institution, contact{" "}
        <a href={`mailto:${siteConfig.emails.security}`}>{siteConfig.emails.security}</a>.
      </p>
    </LegalLayout>
  );
}
