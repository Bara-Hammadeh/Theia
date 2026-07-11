import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use",
  description:
    "The terms governing your use of the Theia website, including important disclaimers about investigational status and the absence of medical advice.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      subtitle="The agreement that governs your use of this website. Please read the medical and investigational disclaimers carefully."
      updated="11 July 2026"
    >
      <p>
        These Terms of Use govern your access to and use of this website operated by{" "}
        {siteConfig.legalName}. By using the site, you agree to these terms. If you do
        not agree, please do not use the site.
      </p>

      <h2>Informational purpose only</h2>
      <p>
        This website is provided for general informational purposes about our company
        and our work. Its content may describe capabilities that are in development
        or planned, and should not be read as a promise of future functionality,
        performance, or availability.
      </p>

      <h2>Not medical advice; not a medical device</h2>
      <p>
        <strong>
          {siteConfig.name} is an investigational platform. It is not a medical
          device and has not been cleared or approved by the FDA, EMA, or any other
          regulatory authority for clinical use.
        </strong>{" "}
        Nothing on this website constitutes medical advice, diagnosis, or treatment, and
        nothing here should be relied upon to make clinical decisions. Any decision
        support we describe is intended to support, not replace, the independent
        judgment of a qualified, licensed clinician.
      </p>

      <h2>Forward-looking statements</h2>
      <p>
        Statements about our roadmap, regulatory intentions, and future capabilities are
        forward-looking and inherently uncertain. Actual outcomes may differ materially,
        and we undertake no obligation to update them.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The site and its content, including text, graphics, logos, and the{" "}
        {siteConfig.name} name and marks, are owned by us or our licensors and are
        protected by intellectual-property laws. You may view and share the content for
        informational purposes, but you may not copy, modify, or use it commercially
        without our written permission.
      </p>

      <h2>Acceptable use</h2>
      <ul>
        <li>Do not use the site unlawfully or to infringe others&rsquo; rights.</li>
        <li>Do not attempt to disrupt, probe, or gain unauthorized access to the site or its infrastructure.</li>
        <li>Do not misrepresent your identity or affiliation when contacting us.</li>
      </ul>

      <h2>Communications</h2>
      <p>
        Contacting us does not create any partnership, confidentiality, or other
        obligation unless and until we enter into a separate written agreement. Please do
        not send confidential or patient information through the website or by
        unencrypted email.
      </p>

      <h2>Third-party links</h2>
      <p>
        The site may link to third-party resources we do not control. We are not
        responsible for their content, and links do not imply endorsement.
      </p>

      <h2>Disclaimer of warranties</h2>
      <p>
        The site is provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
        warranties of any kind, whether express or implied, including merchantability,
        fitness for a particular purpose, and non-infringement. We do not warrant that
        the site will be uninterrupted, error-free, or secure.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, {siteConfig.legalName} will not be liable
        for any indirect, incidental, special, consequential, or punitive damages, or any
        loss arising from your use of, or inability to use, the site.
      </p>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold us harmless from claims arising out of your
        misuse of the site or violation of these terms.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws applicable at our principal place of
        business, without regard to conflict-of-laws principles. Any disputes will be
        subject to the exclusive jurisdiction of the competent courts there.
      </p>

      <h2>Changes</h2>
      <p>
        We may revise these terms from time to time. Continued use of the site after
        changes take effect constitutes acceptance of the revised terms.
      </p>
    </LegalLayout>
  );
}
