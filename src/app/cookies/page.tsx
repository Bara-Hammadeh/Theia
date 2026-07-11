import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Cookie Policy",
  description:
    "How this website uses cookies and similar technologies — kept to the minimum, with no advertising trackers.",
  path: "/cookies",
});

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="We keep this simple: a static website, no advertising trackers, and no selling of your data."
      updated="11 July 2026"
    >
      <p>
        This Cookie Policy explains how {siteConfig.legalName} uses cookies and similar
        technologies on this website. It should be read together with our{" "}
        <a href="/privacy">Privacy Policy</a>.
      </p>

      <h2>What cookies are</h2>
      <p>
        Cookies are small text files placed on your device when you visit a website. They
        are widely used to make sites work, to remember preferences, and to understand
        how sites are used.
      </p>

      <h2>Our approach</h2>
      <p>
        This is a static website. <strong>By default we do not set advertising or
        cross-site tracking cookies, and we do not run third-party ad networks.</strong>{" "}
        We aim to use only what is strictly necessary to deliver the site.
      </p>

      <h2>Categories we may use</h2>
      <ul>
        <li>
          <strong>Strictly necessary.</strong> Required for the site to load and function
          securely. These are essential and cannot be switched off.
        </li>
        <li>
          <strong>Preferences.</strong> If we later remember a choice (such as a theme),
          it would fall here. These are optional.
        </li>
        <li>
          <strong>Analytics.</strong> If we introduce privacy-respecting, aggregate
          analytics to understand traffic, we will update this policy and, where
          required, request your consent first.
        </li>
      </ul>

      <h2>Hosting</h2>
      <p>
        The site is served by GitHub Pages. Our host may process limited technical
        information (such as your IP address) to deliver and protect the site, as
        described in its own documentation.
      </p>

      <h2>Managing cookies</h2>
      <p>
        You can control and delete cookies through your browser settings, and set most
        browsers to block them. Blocking strictly necessary cookies may affect how the
        site functions.
      </p>

      <h2>Changes</h2>
      <p>
        If our use of cookies changes, we will update this policy and revise the date
        above. Questions? Email{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </LegalLayout>
  );
}
