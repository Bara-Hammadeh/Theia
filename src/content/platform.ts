import type { IconName } from "@/components/ui/Icon";

/* ── What We Build: the value chain, at a glance ──────────────── */
export const whatWeBuild: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "video",
    title: "Surgical video",
    body: "The operating room produces the richest data in medicine. Today almost none of it is put to use.",
  },
  {
    icon: "eye",
    title: "Perception",
    body: "Theia sees what happens inside a procedure: the instruments, the anatomy, and the actions, moment by moment.",
  },
  {
    icon: "reason",
    title: "Understanding",
    body: "It interprets those observations in context, recognizing how an operation unfolds and the moments that matter most.",
  },
  {
    icon: "pulse",
    title: "Intelligence",
    body: "Every case becomes structured, measurable insight that a hospital and a surgeon can actually act on.",
  },
  {
    icon: "decision",
    title: "Decision support",
    body: "That intelligence is delivered clearly and reliably, ready to support the surgical team today and in real time tomorrow.",
  },
];

/* ── Two AI products ──────────────────────────────────────────── */
export const products: {
  tag: string;
  name: string;
  tagline: string;
  icon: IconName;
  body: string;
  points: string[];
}[] = [
  {
    tag: "Product 01",
    name: "Annotation AI",
    tagline: "Expert-grade surgical data, built faster.",
    icon: "annotate",
    body: "Creating high-quality surgical data is slow, costly, and inconsistent. Our Annotation AI works alongside clinical experts to accelerate that work while improving accuracy and consistency. Expert human review stays central to the process, so the datasets it produces meet a high clinical bar.",
    points: [
      "Assists experts as they work with surgical video",
      "Improves the speed and consistency of data creation",
      "Keeps expert human review at the center of the workflow",
      "Produces high-quality, carefully curated surgical datasets",
    ],
  },
  {
    tag: "Product 02",
    name: "Surgical Intelligence AI",
    tagline: "Understanding surgery, directly from video.",
    icon: "cpu",
    body: "Our Surgical Intelligence platform analyzes surgical video to understand how a procedure unfolds and to generate clinical intelligence from it. It is the foundation for a new generation of real-time surgical applications, from operating-room awareness to context-aware decision support.",
    points: [
      "Analyzes surgical video at scale",
      "Understands surgical workflows and the moments that matter",
      "Generates structured, measurable clinical intelligence",
      "Powers a roadmap of real-time surgical applications",
    ],
  },
];

/* ── Why We Are Different: outcomes, not mechanisms ───────────── */
export const differentiators: {
  dimension: string;
  traditional: string;
  theia: string;
}[] = [
  {
    dimension: "Consistency",
    traditional: "Results that shift from one run to the next and can rarely be reproduced.",
    theia: "Dependable, repeatable results a hospital can stand behind.",
  },
  {
    dimension: "Trust",
    traditional: "Black-box outputs with no way to see how a conclusion was reached.",
    theia: "Insight that can be traced and reviewed, built for clinical scrutiny.",
  },
  {
    dimension: "Scale",
    traditional: "Research that never leaves the lab it was built in.",
    theia: "A platform designed to scale across procedures, sites, and specialties.",
  },
  {
    dimension: "Data quality",
    traditional: "Ad-hoc data of unknown quality and origin.",
    theia: "Expert-grade data created under careful clinical governance.",
  },
  {
    dimension: "Deployment",
    traditional: "Prototypes a hospital could never actually run.",
    theia: "Built to run in real clinical environments, not just on paper.",
  },
  {
    dimension: "Governance",
    traditional: "Little regard for privacy, security, or oversight.",
    theia: "Privacy, security, and human oversight designed in from the start.",
  },
];

/* ── Clinical scope: procedure-agnostic ───────────────────────── */
export const specialties: { icon: IconName; title: string }[] = [
  { icon: "procedure", title: "General surgery" },
  { icon: "route", title: "Bariatric surgery" },
  { icon: "pulse", title: "Gastrointestinal surgery" },
  { icon: "compass", title: "Colorectal surgery" },
  { icon: "shield", title: "Gynecologic surgery" },
  { icon: "layers", title: "Urologic surgery" },
  { icon: "eye", title: "Thoracic surgery" },
  { icon: "graph", title: "Surgical oncology" },
  { icon: "cpu", title: "Robotic-assisted surgery" },
  { icon: "sparkle", title: "Future minimally invasive procedures" },
];

/* ── Security & governance: generalized for public disclosure ──── */
export const governance: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "lock",
    title: "Encryption everywhere",
    body: "Data is protected in transit and at rest using strong, modern encryption.",
  },
  {
    icon: "fingerprint",
    title: "Privacy by design",
    body: "The platform is built to operate without holding on to patient-identifying information.",
  },
  {
    icon: "log",
    title: "Auditable by design",
    body: "Insights can be traced and reviewed, so the platform is never an unexplained black box.",
  },
  {
    icon: "access",
    title: "Access control and isolation",
    body: "Strict, least-privilege access, with each institution's data kept separate and isolated.",
  },
  {
    icon: "shield",
    title: "Data ownership",
    body: "Your data remains yours. We operate only within the scope you approve.",
  },
  {
    icon: "human",
    title: "Human oversight",
    body: "Clinical intelligence is built to support surgical teams, never to act on its own.",
  },
  {
    icon: "reproduce",
    title: "Governed improvement",
    body: "Our AI advances through careful, validated development, not by quietly retaining customer data.",
  },
  {
    icon: "validate",
    title: "Built for compliance",
    body: "Designed from the outset to meet the expectations of hospitals and regulators.",
  },
];
