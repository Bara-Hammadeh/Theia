import type { IconName } from "@/components/ui/Icon";

/* ── What We Build: the value chain in five moves ─────────────── */
export const whatWeBuild: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "video",
    title: "Video",
    body: "Laparoscopic, endoscopic, robotic, and open-field surgical video — the richest, least-used signal in the operating room.",
  },
  {
    icon: "eye",
    title: "Perception",
    body: "Detection, segmentation, and tracking turn raw pixels into instruments, anatomy, and events — frame by frame, with pixel precision.",
  },
  {
    icon: "reason",
    title: "Reasoning",
    body: "A structured scene graph lets the system reason about relationships, phases, and safety — not just what is on screen, but what it means.",
  },
  {
    icon: "decision",
    title: "Decision Support",
    body: "Calibrated, evidence-backed guidance is surfaced to the surgeon in real time, with a human always in the loop.",
  },
  {
    icon: "pulse",
    title: "Clinical Intelligence",
    body: "Every case becomes structured, auditable data — fuelling assessment, research, quality improvement, and safer surgery at scale.",
  },
];

/* ── Platform Architecture: the eleven-stage runtime ──────────── */
export type ArchLayer = "Ingest" | "Perception" | "World Model" | "Reasoning" | "Decision" | "Presentation";

export const architectureStages: {
  n: number;
  title: string;
  layer: ArchLayer;
  icon: IconName;
  body: string;
}[] = [
  {
    n: 1,
    title: "Video",
    layer: "Ingest",
    icon: "video",
    body: "Frames enter with metadata but no patient identifiers — only opaque source IDs. The same interface serves a file, a dataset, or a live feed.",
  },
  {
    n: 2,
    title: "Detection",
    layer: "Perception",
    icon: "detect",
    body: "Instruments, anatomy, and events are localized in a canonical label space that is independent of any single dataset.",
  },
  {
    n: 3,
    title: "Segmentation",
    layer: "Perception",
    icon: "segment",
    body: "Pixel-precise masks delineate organs, tissue planes, and tools — the geometry every downstream inference depends on.",
  },
  {
    n: 4,
    title: "Tracking",
    layer: "Perception",
    icon: "track",
    body: "Identities persist across time, so an instrument is the same instrument from the moment it enters the field to the moment it leaves.",
  },
  {
    n: 5,
    title: "Scene Graph",
    layer: "World Model",
    icon: "graph",
    body: "A single, versioned world model — entities, relations, and temporal memory. It is the source of truth every module reads from and writes to.",
  },
  {
    n: 6,
    title: "Reasoning",
    layer: "Reasoning",
    icon: "reason",
    body: "Spatial and temporal rules interpret the graph: what is near what, what is exposed, what has moved out of view, what should happen next.",
  },
  {
    n: 7,
    title: "Evidence",
    layer: "Reasoning",
    icon: "evidence",
    body: "Every inference carries its provenance — model versions, a configuration hash, and the frames that support it. Auditable by construction.",
  },
  {
    n: 8,
    title: "Procedure Interpretation",
    layer: "Reasoning",
    icon: "procedure",
    body: "Phases and steps are recognized against a procedure model: where in the operation are we, and what is the expected next move?",
  },
  {
    n: 9,
    title: "Assessment",
    layer: "Reasoning",
    icon: "assess",
    body: "Safety milestones — such as the Critical View of Safety — risk states, and deviations from the expected path are evaluated continuously.",
  },
  {
    n: 10,
    title: "Decision",
    layer: "Decision",
    icon: "decision",
    body: "Context-aware support is composed with calibrated uncertainty and always routed through a human in the loop — never an autonomous action.",
  },
  {
    n: 11,
    title: "Presentation",
    layer: "Presentation",
    icon: "present",
    body: "Overlays, a heads-up display, and structured summaries render the intelligence for the surgeon, the operative record, or a downstream system.",
  },
];

export const archLayerColor: Record<ArchLayer, string> = {
  Ingest: "text-muted",
  Perception: "text-accent",
  "World Model": "text-accent-2",
  Reasoning: "text-iris",
  Decision: "text-signal",
  Presentation: "text-muted",
};

/* ── AI Data Factory: eight stages, video → deployment ────────── */
export const dataFactory: {
  n: number;
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    n: 1,
    icon: "video",
    title: "Video",
    body: "De-identified surgical footage from partners and public corpora enters a governed, consent-tracked pipeline.",
  },
  {
    n: 2,
    icon: "annotate",
    title: "Annotation Platform",
    body: "A purpose-built workspace for frame-accurate surgical labeling — masks, tracks, phases, and events.",
  },
  {
    n: 3,
    icon: "sparkle",
    title: "AI Assistance",
    body: "SAM2-class models propose masks and tracks; annotators refine rather than draw from scratch — an order-of-magnitude throughput gain.",
  },
  {
    n: 4,
    icon: "review",
    title: "Human Review",
    body: "Clinical reviewers verify labels against gold standards, with inter-rater agreement and formal sign-off.",
  },
  {
    n: 5,
    icon: "dataset",
    title: "Dataset",
    body: "Versioned, licensed, and lineage-tracked — every sample knows where it came from and what it may be used for.",
  },
  {
    n: 6,
    icon: "train",
    title: "Training",
    body: "Reproducible pipelines bind config, data, and code by hash, turning datasets into candidate models you can re-run exactly.",
  },
  {
    n: 7,
    icon: "validate",
    title: "Validation",
    body: "Held-out, cross-institution benchmarks measure accuracy, calibration, and failure modes — including against SAM2.",
  },
  {
    n: 8,
    icon: "deploy",
    title: "Deployment",
    body: "Models export to portable ONNX runtimes and re-enter the platform as swappable, license-gated adapters.",
  },
];

/* ── Why We Are Different: the comparison ─────────────────────── */
export const differentiators: {
  dimension: string;
  traditional: string;
  theia: string;
}[] = [
  {
    dimension: "Reproducibility",
    traditional: "One-off notebooks and scripts; results that can never be re-run the same way twice.",
    theia: "Config, data, and code are hashed together — any result is re-derivable, bit-for-bit.",
  },
  {
    dimension: "Auditability",
    traditional: "Black-box outputs with no trace of how a conclusion was reached.",
    theia: "Every inference carries provenance and the exact evidence that supports it.",
  },
  {
    dimension: "Determinism",
    traditional: "Nondeterministic pipelines — a different run gives a different answer.",
    theia: "A deterministic runtime with full event logging and frame-accurate replay.",
  },
  {
    dimension: "Scalability",
    traditional: "Research code that never leaves the lab it was written in.",
    theia: "A platform: swap datasets, models, and whole procedures through configuration.",
  },
  {
    dimension: "Dataset quality",
    traditional: "Ad-hoc labels of unknown provenance and unclear licensing.",
    theia: "Governed, versioned, license-aware datasets with clinical QC and lineage.",
  },
  {
    dimension: "Deployment",
    traditional: "A paper, a demo, and nothing that a hospital could ever run.",
    theia: "Hospital-ready ONNX runtimes — on-prem, private cloud, or at the edge.",
  },
];

/* ── Clinical Applications ────────────────────────────────────── */
export const applications: {
  title: string;
  subtitle: string;
  status: "Lead procedure" | "In development" | "On roadmap" | "Vision";
  icon: IconName;
  body: string;
}[] = [
  {
    title: "Cholecystectomy",
    subtitle: "Laparoscopic gallbladder removal",
    status: "Lead procedure",
    icon: "shield",
    body: "The most-studied minimally invasive procedure and our reference implementation. Real-time phase recognition and continuous assessment of the Critical View of Safety — the single biggest lever against bile-duct injury.",
  },
  {
    title: "Appendectomy",
    subtitle: "Appendix removal",
    status: "In development",
    icon: "procedure",
    body: "A high-volume, high-variability emergency procedure — ideal for phase modeling, workflow analytics, and objective skill assessment at scale.",
  },
  {
    title: "Hernia Repair",
    subtitle: "Inguinal & ventral repair",
    status: "In development",
    icon: "layers",
    body: "Critical-anatomy awareness, mesh placement verification, and step-compliance checking across open and laparoscopic approaches.",
  },
  {
    title: "Bariatric Surgery",
    subtitle: "Sleeve gastrectomy & bypass",
    status: "On roadmap",
    icon: "route",
    body: "Complex, multi-step metabolic surgery — anastomosis monitoring, staple-line awareness, and leak-risk context for the operative record.",
  },
  {
    title: "Colorectal Surgery",
    subtitle: "Resection & anastomosis",
    status: "On roadmap",
    icon: "compass",
    body: "Tissue-plane identification, perfusion assessment, and total-mesorectal-excision quality — where surgical precision drives oncologic outcomes.",
  },
  {
    title: "Future Procedures",
    subtitle: "Foundation coverage",
    status: "Vision",
    icon: "graph",
    body: "The runtime is procedure-agnostic. A new procedure is a knowledge-layer definition plus a dataset — not a rewrite of the system.",
  },
];

/* ── Security & Governance ────────────────────────────────────── */
export const governance: {
  icon: IconName;
  title: string;
  body: string;
}[] = [
  {
    icon: "lock",
    title: "Encryption everywhere",
    body: "TLS in transit and AES-256 at rest. Keys are managed, rotated, and never committed to code.",
  },
  {
    icon: "fingerprint",
    title: "De-identified by design",
    body: "The pipeline sees opaque source IDs and pixels — never names, MRNs, or protected health information.",
  },
  {
    icon: "log",
    title: "Immutable audit logs",
    body: "Every event, model version, and access is recorded in an append-only log and can be replayed exactly.",
  },
  {
    icon: "version",
    title: "Versioned data & models",
    body: "Datasets and checkpoints are content-addressed with complete lineage from raw frame to deployed weight.",
  },
  {
    icon: "registry",
    title: "License-aware registry",
    body: "A runtime gate refuses to load any model or dataset not cleared for its intended use — provably, at build and at run time.",
  },
  {
    icon: "reproduce",
    title: "Reproducibility",
    body: "Config, data, and code hashes make every training run and every inference re-derivable on demand.",
  },
  {
    icon: "access",
    title: "Access control & isolation",
    body: "Least-privilege, role-based access. Institutions, studies, and tenants are cryptographically isolated.",
  },
  {
    icon: "human",
    title: "Human-in-the-loop",
    body: "Decision support augments the surgeon. The system never takes an autonomous clinical action — by design.",
  },
];
