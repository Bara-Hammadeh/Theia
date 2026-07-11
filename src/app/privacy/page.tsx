import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "How Theia handles personal information on this website, and why patient and clinical data are handled separately under governed agreements.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we handle personal information on this website, and why clinical data is handled somewhere else entirely."
      updated="11 July 2026"
    >
      <p>
        This Privacy Policy explains how {siteConfig.legalName} (&ldquo;{siteConfig.name}
        ,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) handles personal information in
        connection with this website. We designed both our website and our platform to
        collect as little personal data as possible.
      </p>

      <h2>Clinical and patient data are not collected here</h2>
      <p>
        <strong>
          This website does not collect, receive, or process surgical video, patient
          records, or any protected health information.
        </strong>{" "}
        Patient video and clinical data are handled only under a specific, signed
        agreement with a partner institution, and are governed by the practices
        described on our <a href="/data-governance">Data Governance</a> and{" "}
        <a href="/security">Security</a> pages. As a matter of product design, patient
        videos are not permanently stored as part of routine operation, and the platform
        is built to operate without holding on to patient-identifying information.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you provide.</strong> When you contact us, our contact form
          composes a message in your own email application, and we receive the email you
          choose to send, typically your name, email address, organization, role, and
          message.
        </li>
        <li>
          <strong>Correspondence.</strong> Emails and materials you send us while
          exploring a partnership.
        </li>
        <li>
          <strong>Technical logs.</strong> This is a static website. Our host may process
          limited technical data, such as an IP address, to deliver and secure the site.
          We do not run advertising trackers, and we do not sell data.
        </li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your inquiry and communicate with you.</li>
        <li>To evaluate and manage potential partnerships.</li>
        <li>To operate, secure, and improve this website.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>Legal bases (where GDPR applies)</h2>
      <p>
        We rely on your <strong>consent</strong> when you contact us, our{" "}
        <strong>legitimate interests</strong> in operating and securing the site and
        pursuing partnerships, and <strong>compliance with legal obligations</strong>.
        You may withdraw consent at any time.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell personal information. We share it only with service providers who
        help us operate, such as our website host and email provider, and where required
        by law or to protect our rights. These providers are bound by appropriate
        confidentiality and data-protection obligations.
      </p>

      <h2>International transfers</h2>
      <p>
        We operate across Europe and North America, so your information may be processed
        in countries other than your own. Where required, we use appropriate safeguards
        for such transfers.
      </p>

      <h2>Retention</h2>
      <p>
        We keep inquiry and correspondence data only as long as needed to address your
        request and maintain our business relationship, then delete or anonymize it in
        line with our retention practices and legal requirements.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live, you may have rights to access, correct, delete,
        restrict, or object to processing of your personal information, and to data
        portability. EU and UK residents may lodge a complaint with a supervisory
        authority. California residents have rights under the CCPA and CPRA, including
        the right not to be discriminated against for exercising them. To exercise any
        right, email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>

      <h2>Children</h2>
      <p>
        This website is intended for surgeons, hospitals, and business contacts. It is
        not directed to children, and we do not knowingly collect their data.
      </p>

      <h2>Changes</h2>
      <p>
        We may update this policy as our practices evolve. Material changes will be
        reflected by the &ldquo;last updated&rdquo; date above.
      </p>
    </LegalLayout>
  );
}
