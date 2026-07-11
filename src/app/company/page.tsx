import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon, type IconName } from "@/components/ui/Icon";
import { values } from "@/content/company";

export const metadata: Metadata = createMetadata({
  title: "Company",
  description:
    "Theia is building the operating system for surgical intelligence: two purpose-built AI products and a platform designed to make surgery measurably safer.",
  path: "/company",
});

const built: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "cpu",
    title: "The Surgical Intelligence platform",
    body: "A platform that turns surgical video into structured, measurable clinical intelligence, and the foundation for a new generation of real-time applications.",
  },
  {
    icon: "annotate",
    title: "Annotation AI",
    body: "A product that helps clinical experts build high-quality surgical datasets, faster and more consistently, with expert review at the center.",
  },
  {
    icon: "layers",
    title: "Proprietary perception models",
    body: "Our own surgical perception models, developed in-house and validated against strong external benchmarks.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company"
        title={
          <>
            We are building the intelligence layer{" "}
            <span className="text-gradient">for surgery</span>
          </>
        }
        subtitle="Surgery is the highest-stakes environment in medicine and the least instrumented. Theia exists to change that, turning the operating room's richest signal into intelligence that makes every operation safer."
      />

      {/* Story */}
      <section className="section pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="eyebrow">Our Story</span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
                Built once, built right.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              <Reveal>
                <p>
                  Every year, hundreds of millions of operations are performed, and
                  almost none of the video they produce is ever used to make the next
                  one better. The signal that could teach, warn, and measure simply
                  disappears when the camera turns off.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  We started Theia because the tools to change that did not exist. Much
                  of the surgical AI in the literature was brilliant and impossible to
                  reproduce, with no realistic path to a hospital or a regulator. So we
                  built the foundation first: two purpose-built AI products and a
                  platform designed for privacy, security, and real clinical use.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Our conviction is simple. For surgical AI to earn a place in the
                  operating room, it has to be{" "}
                  <span className="text-ink">dependable, private, and honest</span>,
                  able to show its work, respect the patient, and keep the surgeon in
                  command. We designed for that from the very first day.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  We are a focused team of engineers and clinicians who care more about
                  surgical safety than about demos. This is the beginning of a long
                  project, and exactly the moment to help shape it.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What we've built */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="What We've Built"
            title="A working foundation, not a pitch deck"
            intro="Theia is already real. Two AI products and a proprietary platform work together today, and they are the base on which clinical value will be earned."
          />
          <StaggerGroup className="mt-12 grid gap-4 md:grid-cols-3">
            {built.map((b) => (
              <StaggerItem key={b.title}>
                <div className="card card-hover h-full p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={b.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </section>

      {/* Values */}
      <section className="section pt-0">
        <Container>
          <SectionHeading
            eyebrow="What We Believe"
            title="The principles behind every decision"
          />
          <StaggerGroup className="mt-12 grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card card-hover flex h-full gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={v.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Button href="/partnerships" withArrow>
                Partner with us
              </Button>
              <Button href="/contact" variant="secondary">
                Contact the team
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
