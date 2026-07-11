import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Security",
  description:
    "Theia's security posture: encryption, least-privilege access, tenant isolation, immutable audit, secure development, and responsible vulnerability disclosure.",
  path: "/security",
});

export default function SecurityPage() {
  return (
    <LegalLayout
      eyebrow="Trust"
      title="Security"
      subtitle="Security is not a checklist we attach to the platform — it is how the platform is built. Here is our posture, in plain language."
      updated="11 July 2026"
    >
      <p>
        We hold surgical data to a high bar because the trust behind it is hard to earn
        and easy to lose. The following describes the controls that protect data handled
        through our platform and partnerships.
      </p>

      <h2>Encryption</h2>
      <p>
        Data is encrypted in transit using modern TLS and at rest using AES-256.
        Encryption keys are managed through a dedicated key-management process, rotated,
        and never committed to source code.
      </p>

      <h2>Least-privilege access</h2>
      <p>
        Access is role-based and granted on a need-to-know basis. Administrative access
        is limited, reviewed, and logged. We favor short-lived credentials and strong
        authentication for anyone who can touch data.
      </p>

      <h2>Isolation</h2>
      <p>
        Data from different institutions and studies is logically isolated. We do not
        commingle partner data, and one partner&rsquo;s data is never used to serve
        another without explicit, written agreement.
      </p>

      <h2>Immutable audit</h2>
      <p>
        The runtime produces an append-only event log. Every inference, model version,
        configuration, and access can be traced and, where needed, replayed exactly —
        turning &ldquo;what happened&rdquo; from a guess into a query.
      </p>

      <h2>Secure development</h2>
      <ul>
        <li>Dependency and license scanning gates in continuous integration.</li>
        <li>Code review and version control for all changes.</li>
        <li>Reproducible builds that bind config, data, and code by hash.</li>
        <li>Separation of research-only components from commercial-safe components.</li>
      </ul>

      <h2>Reproducibility as a security property</h2>
      <p>
        Because every result is reproducible and every event is logged, we can
        investigate anomalies precisely and demonstrate integrity — the same properties
        that make the system auditable make it defensible.
      </p>

      <h2>Incident response</h2>
      <p>
        We maintain an incident-response process and will notify affected partners
        without undue delay in the event of a security incident, consistent with our
        contractual and legal obligations.
      </p>

      <h2>Responsible disclosure</h2>
      <p>
        If you believe you have found a security vulnerability, we want to hear from you.
        Please email{" "}
        <a href={`mailto:${siteConfig.emails.security}`}>{siteConfig.emails.security}</a>{" "}
        with details and steps to reproduce. We commit to acknowledging reports promptly,
        working in good faith to resolve valid issues, and not pursuing action against
        researchers who disclose responsibly and avoid privacy violations or service
        disruption.
      </p>

      <h2>Compliance posture</h2>
      <p>
        As an early-stage company, we are building toward formal certifications and a
        quality-management system aligned with medical-device software standards (see our{" "}
        <a href="/regulatory-roadmap">Regulatory Roadmap</a>). We are transparent about
        where we are on that journey and welcome your due diligence.
      </p>
    </LegalLayout>
  );
}
