import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { TwoProducts } from "@/components/sections/TwoProducts";
import { Security } from "@/components/sections/Security";

export const metadata: Metadata = createMetadata({
  title: "Technology",
  description:
    "The Theia platform, at a glance: purpose-built for surgery, consistent and auditable, private and secure, and designed to deploy in real clinical environments.",
  path: "/technology",
});

const principles: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Purpose-built for surgery",
    body: "Theia is not a general vision tool pointed at the operating room. It is designed from the ground up for the realities of surgical video and surgical workflows.",
  },
  {
    icon: "reproduce",
    title: "Consistent and dependable",
    body: "The platform is built to produce reliable, repeatable results, the kind of consistency a clinical team can trust and a regulator expects.",
  },
  {
    icon: "evidence",
    title: "Trusted and auditable",
    body: "Insight can be traced and reviewed rather than taken on faith, so the platform is never an unexplained black box.",
  },
  {
    icon: "lock",
    title: "Private and secure",
    body: "Privacy and security are designed in. The platform is built to operate without holding on to patient-identifying information.",
  },
  {
    icon: "deploy",
    title: "Designed to deploy",
    body: "Built to run in real clinical environments and to sit alongside the systems a hospital already uses.",
  },
  {
    icon: "graph",
    title: "Built to scale",
    body: "Procedure-agnostic by design, so the platform extends across specialties and sites instead of being rebuilt for each one.",
  },
];

const capabilities: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "eye",
    title: "What is in view",
    body: "The instruments and anatomy present on screen, moment to moment.",
  },
  {
    icon: "route",
    title: "How the procedure flows",
    body: "The steps of an operation and how it progresses from start to finish.",
  },
  {
    icon: "pulse",
    title: "The moments that matter",
    body: "Key events and safety-relevant moments, recognized as they happen.",
  },
  {
    icon: "log",
    title: "A structured record",
    body: "Each case captured as clear, structured, measurable information.",
  },
  {
    icon: "assess",
    title: "Objective measures",
    body: "Consistent signals that support assessment, review, and quality improvement.",
  },
  {
    icon: "decision",
    title: "Support for the team",
    body: "Insight delivered clearly, ready to support the surgical team today and in real time tomorrow.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title={
          <>
            A platform built for the{" "}
            <span className="text-gradient">operating room</span>
          </>
        }
        subtitle="Theia is engineered like clinical infrastructure, not like a research demo. Here is what the platform does and the principles behind it, without the parts we keep behind closed doors."
      >
        <div className="flex flex-wrap gap-3">
          <Button href="/partnerships" variant="secondary" size="sm" withArrow>
            Partner with us
          </Button>
          <Button href="/vision" variant="ghost" size="sm">
            Where we are headed
          </Button>
        </div>
      </PageHeader>

      <section className="section pt-4">
        <Container>
          <SectionHeading
            eyebrow="Design Principles"
            title="Six commitments, engineered in"
            intro="These are the qualities that make Theia something a hospital can actually adopt. They shape every decision we make about the platform."
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card card-hover h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <TwoProducts />

      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="What Theia Understands"
            title="From pixels to clinical meaning"
            intro="At a high level, the platform turns surgical video into a clear, structured understanding of a procedure. These are the kinds of things it can recognize and deliver."
          />
          <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <StaggerItem key={c.title}>
                <div className="card card-hover h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      <Security />
    </>
  );
}
