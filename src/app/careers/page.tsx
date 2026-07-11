import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Icon, type IconName } from "@/components/ui/Icon";
import { roles } from "@/content/company";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Careers",
  description:
    "Join Theia and do the most important work in surgical AI. Mission-first, remote, and rigorous — engineering that ends up in the operating room.",
  path: "/careers",
});

const why: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "shield",
    title: "Work that matters",
    body: "Your code will help make real operations safer. Few engineering problems are this important — or this hard.",
  },
  {
    icon: "graph",
    title: "Real ownership",
    body: "A small team means you own entire systems, from the model to the runtime to what a surgeon sees.",
  },
  {
    icon: "evidence",
    title: "Rigor over hype",
    body: "We value reproducibility, honest metrics, and clean architecture. We build things that hold up under scrutiny.",
  },
  {
    icon: "compass",
    title: "Remote & deliberate",
    body: "Remote-first, asynchronous, and focused. We hire slowly, trust deeply, and protect deep work.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={
          <>
            Do the most important work in{" "}
            <span className="text-gradient">surgical AI</span>
          </>
        }
        subtitle="We are assembling a small team of engineers and clinicians who want their work to end up in the operating room — not in a slide deck. If that is you, let's talk."
      />

      {/* Why join */}
      <section className="section pt-4">
        <Container>
          <SectionHeading eyebrow="Why Theia" title="A rare combination of stakes and ownership" />
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((w) => (
              <StaggerItem key={w.title}>
                <div className="card card-hover h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={w.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{w.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Open roles */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="Open Roles"
            title="Where we need you"
            intro="We hire for slope over pedigree. If you are exceptional but do not fit a listing, write to us anyway."
          />
          <div className="mt-12 space-y-4">
            {roles.map((r, i) => (
              <Reveal key={r.title} delay={Math.min(i * 0.05, 0.25)}>
                <div className="card card-hover flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-ink">{r.title}</h3>
                      <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-2xs uppercase tracking-wider text-muted">
                        {r.team}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{r.body}</p>
                    <p className="mt-2 font-mono text-2xs uppercase tracking-wider text-faint">
                      {r.type}
                    </p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.emails.careers}?subject=${encodeURIComponent(
                      `[Careers] ${r.title}`
                    )}`}
                    className="group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-5 text-sm font-medium text-ink transition-all hover:border-accent/40 hover:bg-white/[0.06]"
                  >
                    Apply
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h9M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-white/[0.07] bg-surface/40 p-6 text-sm text-muted">
              Don&rsquo;t see your role? We are always interested in exceptional people.
              Write to{" "}
              <a
                href={`mailto:${siteConfig.emails.careers}`}
                className="text-accent-2 underline underline-offset-2"
              >
                {siteConfig.emails.careers}
              </a>{" "}
              and tell us what you want to build.
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
