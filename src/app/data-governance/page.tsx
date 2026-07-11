import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Data Governance",
  description:
    "How Theia governs clinical data: institutional ownership, privacy by design, consent, minimization, isolation, and clear rules on retention and deletion.",
  path: "/data-governance",
});

export default function DataGovernancePage() {
  return (
    <LegalLayout
      eyebrow="Trust"
      title="Data Governance"
      subtitle="Clinical data is a privilege, not an entitlement. These are the principles that govern how we handle it, written to satisfy your legal, privacy, and security teams."
      updated="11 July 2026"
    >
      <p>
        Governance is built into how the platform works, not bolted on afterward. The
        commitments below apply to any clinical data handled through a partnership. They
        are summarized here and made binding in the specific agreement we sign with each
        institution.
      </p>

      <h2>Institutional ownership</h2>
      <p>
        Data contributed by a partner remains the property of that institution and its
        patients. We act only within the scope you define. You may audit, restrict, or
        end our use in line with our agreement, and we return or delete data on request.
      </p>

      <h2>Privacy by design</h2>
      <p>
        The platform is built to operate without holding on to patient-identifying
        information, and{" "}
        <strong>
          patient videos are not permanently stored as part of routine product operation
        </strong>
        . Privacy is a design requirement, not an afterthought.
      </p>

      <h2>Consent and lawful basis</h2>
      <p>
        We only work with data that has an appropriate lawful basis and, where required,
        the necessary approvals. We support your consent framework and will not use data
        beyond the purposes you have authorized.
      </p>

      <h2>Data minimization and purpose limitation</h2>
      <p>
        We use only what a project needs, only for the agreed purpose, and avoid
        retaining anything we do not require. Scope is defined for each engagement.
      </p>

      <h2>Governed improvement</h2>
      <p>
        Our AI improves through careful, validated development. Improvement never depends
        on quietly retaining or repurposing customer data, and we do not use one
        partner&rsquo;s data to serve another without explicit, written agreement.
      </p>

      <h2>Access control and isolation</h2>
      <p>
        Access is least-privilege and role-based, and access is logged. Data from
        different institutions is kept separate and isolated.
      </p>

      <h2>Retention and deletion</h2>
      <p>
        We retain data only for the duration and purpose set out in our agreement. On
        expiry or request, we delete or return it and can provide confirmation.
      </p>

      <h2>Service providers</h2>
      <p>
        Where we rely on infrastructure providers, they are bound by data-protection
        terms consistent with these commitments. We can share our current list with
        partners under agreement.
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
