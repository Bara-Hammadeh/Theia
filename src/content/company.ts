import type { IconName } from "@/components/ui/Icon";

/* ── Ways to engage (surgeon and hospital facing) ─────────────── */
export const collaborationModels: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "beaker",
    title: "Pilot programs",
    body: "Run a focused pilot on your own cases and see the platform at work in your environment, on your terms.",
  },
  {
    icon: "review",
    title: "Product evaluation",
    body: "Evaluate Theia against your clinical priorities and the realities of your day-to-day workflows.",
  },
  {
    icon: "sparkle",
    title: "Early access",
    body: "Join a small group of design partners who help shape the roadmap and are first to new capabilities.",
  },
  {
    icon: "human",
    title: "Clinical feedback",
    body: "Bring your expertise to the table and help define how surgical intelligence should work in practice.",
  },
  {
    icon: "layers",
    title: "Workflow integration",
    body: "Explore how Theia fits alongside your operating-room and analytics workflows, with your team.",
  },
];

/* ── Partnership tracks (organization facing) ─────────────────── */
export const partnershipTracks: {
  audience: string;
  weOffer: string[];
  weAsk: string[];
}[] = [
  {
    audience: "Surgical departments and surgeons",
    weOffer: [
      "Pilot programs run on your own cases",
      "Early access to new capabilities",
      "Tools built to fit real surgical workflows",
    ],
    weAsk: [
      "A clinical champion and a clear goal",
      "A focused set of cases for a pilot",
      "Candid clinical feedback along the way",
    ],
  },
  {
    audience: "Hospital innovation offices",
    weOffer: [
      "A security- and privacy-first partner, not a black box",
      "A pilot that fits inside your governance framework",
      "A clear path from evaluation toward deployment",
    ],
    weAsk: [
      "A sponsor to help navigate internal approvals",
      "A defined pilot scope and success criteria",
      "Introductions to interested surgical teams",
    ],
  },
  {
    audience: "Industry and device makers",
    weOffer: [
      "A surgical intelligence layer for your platform",
      "A clean, well-defined integration surface",
      "A partner focused on clinical safety",
    ],
    weAsk: [
      "A concrete integration target",
      "Commercial terms aligned with clinical safety",
      "A shared commitment to responsible deployment",
    ],
  },
];

/* ── Milestones (kept for internal pages; scrubbed of internals) ─ */
export type MilestoneStatus = "Shipped" | "In progress" | "Next" | "Horizon";

export const milestones: {
  status: MilestoneStatus;
  title: string;
  body: string;
}[] = [
  {
    status: "Shipped",
    title: "A working surgical intelligence platform",
    body: "A deployable platform that turns surgical video into structured, measurable clinical intelligence.",
  },
  {
    status: "Shipped",
    title: "Annotation AI",
    body: "A product that helps clinical experts build high-quality surgical datasets quickly and consistently.",
  },
  {
    status: "Shipped",
    title: "Proprietary perception models",
    body: "Our own surgical perception models, validated against strong external benchmarks.",
  },
  {
    status: "In progress",
    title: "Deeper surgical understanding",
    body: "Extending the platform from perception toward richer understanding of how procedures unfold.",
  },
  {
    status: "Next",
    title: "Hospital pilots",
    body: "Focused pilots with clinical partners, run on their own cases and workflows.",
  },
  {
    status: "Next",
    title: "Broader specialty coverage",
    body: "Expanding across the full range of minimally invasive surgery.",
  },
  {
    status: "Horizon",
    title: "Real-time surgical applications",
    body: "Bringing surgical intelligence into the operating room in real time.",
  },
  {
    status: "Horizon",
    title: "Regulatory pathway",
    body: "Advancing toward the appropriate medical-device pathway, with rigor built in.",
  },
];

/* ── Company values ───────────────────────────────────────────── */
export const values: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Safety is the measure",
    body: "We judge ourselves by surgical safety and real outcomes, not by demos. If it does not make an operation safer, it does not ship.",
  },
  {
    icon: "evidence",
    title: "Evidence over claims",
    body: "Every capability is backed by honest evidence, including a clear-eyed view of where the system still falls short.",
  },
  {
    icon: "human",
    title: "Surgeons in command",
    body: "The surgeon makes the decisions. Our job is to give them sharper insight, never to replace their judgment.",
  },
  {
    icon: "lock",
    title: "Privacy is not negotiable",
    body: "Patient privacy and data ownership come first. We earn trust by protecting them, on every case, without exception.",
  },
];

/* ── Careers (kept for internal page; scrubbed of internals) ──── */
export const roles: {
  title: string;
  team: string;
  type: string;
  body: string;
}[] = [
  {
    title: "Founding Surgical AI Engineer",
    team: "Research",
    type: "Full-time · Remote",
    body: "Own perception and understanding models end to end, from surgical video to a deployable product.",
  },
  {
    title: "Computer Vision Engineer",
    team: "Perception",
    type: "Full-time · Remote",
    body: "Push the accuracy and speed of our surgical perception models on real operative video.",
  },
  {
    title: "ML Platform Engineer",
    team: "Platform",
    type: "Full-time · Remote",
    body: "Build the platform that trains, evaluates, and ships our models securely and reliably.",
  },
  {
    title: "Clinical Partnerships Lead",
    team: "Clinical",
    type: "Full-time · Hybrid",
    body: "Build relationships with surgical departments and innovation offices, and shepherd pilots and evaluations.",
  },
  {
    title: "Surgical Data Lead",
    team: "Data",
    type: "Full-time · Remote",
    body: "Define surgical labeling standards and run clinical quality control for our Annotation AI. Clinical background valued.",
  },
  {
    title: "Design Engineer",
    team: "Product",
    type: "Full-time · Remote",
    body: "Craft the surgeon-facing experience: clear, trustworthy visuals a clinician can rely on at a glance.",
  },
];

/* ── FAQ (investor and hospital facing) ───────────────────────── */
export const faqs: { q: string; a: string }[] = [
  {
    q: "What is Theia?",
    a: "Theia is a surgical intelligence platform. We turn surgical video into structured, measurable clinical insight that helps hospitals and surgeons make procedures safer, more consistent, and easier to learn from.",
  },
  {
    q: "You mention two AI products. What is the difference?",
    a: "We build two. Our Annotation AI helps clinical experts create high-quality surgical datasets, faster and more consistently, with expert human review at the center. Our Surgical Intelligence platform analyzes surgical video to understand how a procedure unfolds and to generate clinical intelligence, and it is the foundation for future real-time surgical applications.",
  },
  {
    q: "Does the AI make decisions instead of the surgeon?",
    a: "No. Theia supports the surgical team with information and insight. The surgeon is always in control. The platform is built to assist clinical judgment, never to act on its own.",
  },
  {
    q: "What happens to our patient videos and data?",
    a: "Patient privacy and data ownership are central to how we operate. Patient videos are not permanently stored as part of routine product operation, your data remains yours, and we work strictly within the scope you approve.",
  },
  {
    q: "Which procedures does the platform support?",
    a: "The platform is procedure-agnostic. It is designed for the full range of minimally invasive surgery, spanning general, bariatric, gastrointestinal, colorectal, gynecologic, urologic, and thoracic surgery, along with surgical oncology and robotic-assisted procedures.",
  },
  {
    q: "Can it run in our environment?",
    a: "Yes. Theia is designed to deploy in real clinical settings and to sit alongside your existing operating-room and analytics workflows. We work with your team on integration rather than asking you to change how you operate.",
  },
  {
    q: "How does the platform improve over time?",
    a: "Our AI advances through careful, governed development and validated learning processes. Improvement never depends on quietly retaining or repurposing customer data.",
  },
  {
    q: "Is Theia a cleared medical device today?",
    a: "Not yet. Theia is an investigational platform under active development and is not cleared or approved for clinical use. We build to the standards hospitals and regulators expect and are advancing toward the appropriate pathway.",
  },
  {
    q: "How do we get started?",
    a: "Most partnerships begin with a short conversation and a focused pilot on your own cases. Reach out through the contact page and we will follow up within two business days.",
  },
];

/* ── Headline stats ───────────────────────────────────────────── */
export const stats: { value: string; label: string }[] = [
  { value: "2", label: "AI products, purpose-built for surgery" },
  { value: "10×", label: "Faster creation of expert surgical data" },
  { value: "10+", label: "Minimally invasive specialties in scope" },
  { value: "1", label: "Platform, from video to clinical insight" },
];
