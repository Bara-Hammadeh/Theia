import type { IconName } from "@/components/ui/Icon";

/* ── Collaboration models (surgeon-facing) ────────────────────── */
export const collaborationModels: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "beaker",
    title: "Research collaboration",
    body: "Co-design and co-author studies. You bring the clinical question and domain expertise; we bring the platform, engineering, and reproducible analysis.",
  },
  {
    icon: "video",
    title: "Video partnerships",
    body: "Contribute de-identified surgical video under a governed, consented agreement. You retain ownership and control; we handle the pipeline and security.",
  },
  {
    icon: "annotate",
    title: "Annotation collaboration",
    body: "Define the ontology and gold standards for your specialty with our AI-assisted tools — building the reference dataset your field is missing.",
  },
  {
    icon: "validate",
    title: "Validation studies",
    body: "Prospective and retrospective evaluation against your own outcomes, with transparent metrics, calibration, and documented failure modes.",
  },
  {
    icon: "sparkle",
    title: "Early access",
    body: "Join a small group of design partners who shape the roadmap and are first to trial new capabilities in a research setting.",
  },
];

/* ── Partnership tracks (organization-facing) ─────────────────── */
export const partnershipTracks: {
  audience: string;
  weOffer: string[];
  weAsk: string[];
}[] = [
  {
    audience: "Surgical departments & surgeons",
    weOffer: [
      "Objective, video-based analytics for your cases",
      "Co-authorship on research and validation studies",
      "Tools for surgical education and skill assessment",
    ],
    weAsk: [
      "A clinical champion and a well-scoped question",
      "Access to de-identified video under a governed agreement",
      "Time from a small annotation and review group",
    ],
  },
  {
    audience: "Hospital innovation offices",
    weOffer: [
      "A security- and governance-first partner, not a black box",
      "A pilot that fits inside your data-governance framework",
      "A clear path from research to a regulated pathway",
    ],
    weAsk: [
      "A sponsor to navigate IRB and data agreements",
      "A defined pilot scope and success criteria",
      "Introductions to interested surgical teams",
    ],
  },
  {
    audience: "Research institutes & universities",
    weOffer: [
      "A reproducible platform for surgical data science",
      "Shared datasets, benchmarks, and tooling",
      "Engineering depth to turn ideas into results",
    ],
    weAsk: [
      "Complementary methods or clinical expertise",
      "Joint grant and publication participation",
      "Data-sharing under clear, ethical terms",
    ],
  },
  {
    audience: "Industry & device makers",
    weOffer: [
      "A perception and reasoning layer for your hardware",
      "ONNX-portable models and a clean integration surface",
      "License-aware, audit-ready components",
    ],
    weAsk: [
      "A concrete integration target",
      "Commercial terms aligned with clinical safety",
      "A shared commitment to responsible deployment",
    ],
  },
];

/* ── Research milestones ──────────────────────────────────────── */
export type MilestoneStatus = "Shipped" | "In progress" | "Next" | "Horizon";

export const milestones: {
  status: MilestoneStatus;
  title: string;
  body: string;
}[] = [
  {
    status: "Shipped",
    title: "Deterministic surgical runtime",
    body: "An event-driven scene-graph platform: typed events on an in-process bus, a versioned world model, and frame-accurate replay.",
  },
  {
    status: "Shipped",
    title: "AI-assisted annotation platform",
    body: "SAM2-integrated surgical video annotation with dataset versioning, active learning, and clinical quality control.",
  },
  {
    status: "Shipped",
    title: "Reproducible ML pipeline",
    body: "Config-, data-, and code-hashed training with a license-aware model registry and portable ONNX export.",
  },
  {
    status: "In progress",
    title: "Surgical segmentation & phase models",
    body: "Our first trained segmentation and phase-recognition models, benchmarked against SAM2 on public and partner data.",
  },
  {
    status: "Next",
    title: "Proprietary datasets via partnerships",
    body: "Building governed, consented, cross-institution datasets — the foundation for models that generalize.",
  },
  {
    status: "Next",
    title: "Cross-institution validation",
    body: "Prospective and retrospective studies with clinical partners, measuring real accuracy, calibration, and utility.",
  },
  {
    status: "Horizon",
    title: "Surgical foundation models",
    body: "Procedure-agnostic representations of surgery, learned across specialties and adaptable to a new operation with minimal data.",
  },
  {
    status: "Horizon",
    title: "Regulatory pathway",
    body: "A Software-as-a-Medical-Device path built on the auditability and reproducibility we designed in from day one.",
  },
];

/* ── Company values / vision pillars ──────────────────────────── */
export const values: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "shield",
    title: "Safety is the product",
    body: "We measure ourselves by surgical safety and outcomes — not by demos. If it does not make an operation safer, it does not ship.",
  },
  {
    icon: "evidence",
    title: "Evidence over claims",
    body: "Every capability is backed by traceable evidence and honest metrics, including where the system fails.",
  },
  {
    icon: "human",
    title: "Surgeons in command",
    body: "The surgeon is the decision-maker. Our job is to give them sharper sight and better information, never to replace their judgment.",
  },
  {
    icon: "reproduce",
    title: "Built once, built right",
    body: "A rigorous, reproducible foundation means the move from research to regulated product changes data and weights — not the software.",
  },
];

/* ── Careers ──────────────────────────────────────────────────── */
export const roles: {
  title: string;
  team: string;
  type: string;
  body: string;
}[] = [
  {
    title: "Founding Surgical AI Research Engineer",
    team: "Research",
    type: "Full-time · Remote",
    body: "Own perception and reasoning models end-to-end — from surgical video to deployable ONNX runtimes.",
  },
  {
    title: "Computer Vision Engineer — Segmentation & Tracking",
    team: "Perception",
    type: "Full-time · Remote",
    body: "Push the accuracy and speed of surgical segmentation and multi-object tracking on real operative video.",
  },
  {
    title: "ML Platform / MLOps Engineer",
    team: "Platform",
    type: "Full-time · Remote",
    body: "Harden the reproducible pipeline: data versioning, experiment tracking, the license-aware registry, and deployment.",
  },
  {
    title: "Clinical Partnerships Lead",
    team: "Clinical",
    type: "Full-time · Hybrid",
    body: "Build relationships with surgical departments and innovation offices, and shepherd data agreements and validation studies.",
  },
  {
    title: "Surgical Annotation Lead",
    team: "Data",
    type: "Full-time · Remote",
    body: "Define surgical ontologies and gold standards, and run clinical quality control for the data factory. Clinical background valued.",
  },
  {
    title: "Design Engineer — Visualization",
    team: "Product",
    type: "Full-time · Remote",
    body: "Craft the surgeon-facing interface: overlays, HUD, and uncertainty visualization that a surgeon can trust at a glance.",
  },
];

/* ── FAQ (surgeon & hospital specific) ────────────────────────── */
export const faqs: { q: string; a: string }[] = [
  {
    q: "Is Theia a medical device we can use in the operating room today?",
    a: "No. Theia is an investigational research platform under active development. It has not been cleared or approved by the FDA, EMA, or any other regulator, and it is not for clinical use. We partner with institutions for research and validation, and we are building toward a Software-as-a-Medical-Device pathway with auditability designed in from the start.",
  },
  {
    q: "Does the AI make decisions instead of the surgeon?",
    a: "Never. The system provides decision support — context, safety cues, and calibrated uncertainty — with a human always in the loop. It surfaces information and flags; the surgeon decides. Theia is built explicitly to augment surgical judgment, not to act autonomously.",
  },
  {
    q: "What happens to our surgical video and patient data?",
    a: "You retain ownership. Video is de-identified before it enters the pipeline, which sees only opaque source IDs and pixels — never names, MRNs, or PHI. Data is encrypted in transit and at rest, access is least-privilege and logged, and everything flows under a governed, consented agreement that you control. See our Data Governance and Security pages for detail.",
  },
  {
    q: "How is this different from generic computer vision or an off-the-shelf model?",
    a: "Three things. First, a deterministic runtime with full event logging and frame-accurate replay — the same input always yields the same result. Second, a structured scene-graph world model that reasons about relationships, phases, and safety rather than classifying isolated frames. Third, evidence: every inference carries its provenance and the frames that support it, so it can be audited.",
  },
  {
    q: "Do we need to give you a huge amount of labeled data to get started?",
    a: "No. Our AI-assisted annotation platform gives roughly an order-of-magnitude throughput gain, and we can bootstrap from public surgical corpora and adapt to your ontology. A meaningful pilot typically starts with a focused, de-identified video set — not a mountain of pre-labeled data.",
  },
  {
    q: "Can it run in our environment, on our hardware?",
    a: "Yes. Models export to portable ONNX runtimes and run on commodity GPUs. Deployment can be on-premises, in your private cloud, or at the edge near the operating room — you are not required to send data to us.",
  },
  {
    q: "How do you handle bias, drift, and failure modes?",
    a: "We validate across institutions, report calibration alongside accuracy, monitor for drift, and document known limitations openly. Our Responsible AI Statement describes how we surface uncertainty, avoid overconfident outputs, and keep clinicians in control. We treat honest reporting of failure modes as a feature, not a liability.",
  },
  {
    q: "What is the regulatory pathway, and how far along are you?",
    a: "We are research-first today. The architecture is deliberately structured so that moving from research to a regulated product changes datasets, weights, and documentation — not the underlying software. Our Regulatory Roadmap outlines the intended Software-as-a-Medical-Device path and the evidence we are building toward.",
  },
  {
    q: "We are interested. How do we start a collaboration?",
    a: "It is deliberately low-lift: a short scoping call, a data-governance agreement, and a focused pilot dataset. From there we align on a research question and success criteria. Reach out through the contact page and we will follow up within two business days.",
  },
];

/* ── Headline stats ───────────────────────────────────────────── */
export const stats: { value: string; label: string }[] = [
  { value: "11", label: "Runtime stages from video to decision" },
  { value: "10×", label: "Faster labeling with AI-assisted annotation" },
  { value: "100%", label: "Inferences carrying traceable evidence" },
  { value: "6", label: "Surgical procedures on the roadmap" },
];
