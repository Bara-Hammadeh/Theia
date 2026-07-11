/**
 * Central brand + site configuration.
 *
 * ─────────────────────────────────────────────────────────────
 *  BRAND is defined ONCE here. To rebrand (name, tagline; colors
 *  live in globals.css), change these values and the whole site
 *  follows. See BRAND.md for the full identity system.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Theia",
  legalName: "Theia Surgical Intelligence, Inc.",
  shortName: "Theia",
  tagline: "The Operating System for Surgical Intelligence",
  description:
    "Theia is the surgical intelligence platform. We turn surgical video into structured clinical insight, helping hospitals and surgeons make every procedure safer, more consistent, and more measurable.",
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
    press: "press@theia.surgery",
    security: "security@theia.surgery",
    // used only by internal pages that are not currently in navigation
    research: "research@theia.surgery",
    careers: "careers@theia.surgery",
  },

  location: "Remote-first · Europe and North America",
  foundedYear: 2025,
} as const;

export type NavItem = { label: string; href: string; description?: string };

export const mainNav: NavItem[] = [
  { label: "Technology", href: "/technology" },
  { label: "Vision", href: "/vision" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Company", href: "/company" },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Platform",
    items: [
      { label: "What We Build", href: "/#what-we-build" },
      { label: "Our AI", href: "/#products" },
      { label: "Clinical Scope", href: "/#specialties" },
      { label: "Security", href: "/#security" },
      { label: "Vision", href: "/vision" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "/company" },
      { label: "Technology", href: "/technology" },
      { label: "Partnerships", href: "/partnerships" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Trust",
    items: [
      { label: "Security", href: "/security" },
      { label: "Data Governance", href: "/data-governance" },
      { label: "Responsible AI", href: "/responsible-ai" },
      { label: "Regulatory Roadmap", href: "/regulatory-roadmap" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];
