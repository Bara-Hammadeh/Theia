/**
 * Central brand + site configuration.
 *
 * ─────────────────────────────────────────────────────────────
 *  BRAND is defined ONCE here. To rebrand (name, tagline, colors
 *  live in globals.css), change these values and the whole site
 *  follows. See BRAND.md for the full identity system + naming
 *  alternatives.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Theia",
  legalName: "Theia Surgical Intelligence, Inc.",
  shortName: "Theia",
  tagline: "The Operating System for Surgical Intelligence",
  description:
    "Theia turns surgical video into structured, auditable clinical intelligence. A deterministic surgical AI runtime for perception, reasoning, evidence, and decision support — built for hospitals, surgeons, and regulators.",
  // Canonical origin. GitHub Actions overrides this at build time with the real
  // Pages URL; the aspirational custom domain is the local/dev default.
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://theia.surgery").replace(/\/$/, ""),
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",

  /**
   * Contact inbox. ▸ Before publishing, set this to a mailbox you control
   *   (e.g. via `NEXT_PUBLIC_CONTACT_EMAIL` or edit here). All contact CTAs
   *   and the contact form open a pre-filled email to this address.
   */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "partnerships@theia.surgery",
  emails: {
    partnerships: "partnerships@theia.surgery",
    research: "research@theia.surgery",
    security: "security@theia.surgery",
    press: "press@theia.surgery",
    careers: "careers@theia.surgery",
  },

  location: "Remote-first · Europe & North America",
  foundedYear: 2025,

  social: {
    // Update to your real handles before launch.
    linkedin: "https://www.linkedin.com/company/theia-surgical",
    x: "https://x.com/theiasurgical",
    github: "https://github.com/theia-surgical",
  },
} as const;

export type NavItem = { label: string; href: string; description?: string };

export const mainNav: NavItem[] = [
  { label: "Technology", href: "/technology" },
  { label: "Research", href: "/research" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Company", href: "/company" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "What We Build", href: "/#what-we-build" },
      { label: "Architecture", href: "/#architecture" },
      { label: "AI Data Factory", href: "/#data-factory" },
      { label: "Clinical Applications", href: "/#applications" },
      { label: "Security & Governance", href: "/#security" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/company" },
      { label: "Technology", href: "/technology" },
      { label: "Research", href: "/research" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Collaborate",
    items: [
      { label: "Partnerships", href: "/partnerships" },
      { label: "Research Collaboration", href: "/research-collaboration" },
      { label: "Regulatory Roadmap", href: "/regulatory-roadmap" },
      { label: "Data Governance", href: "/data-governance" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Legal & Trust",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Responsible AI", href: "/responsible-ai" },
    ],
  },
];
