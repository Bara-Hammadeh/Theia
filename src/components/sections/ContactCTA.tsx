import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";
import type { IconName } from "@/components/ui/Icon";

const routes: { icon: IconName; title: string; body: string; email: string }[] = [
  {
    icon: "handshake",
    title: "Partnerships",
    body: "Surgical departments, hospital innovation offices, and industry.",
    email: siteConfig.emails.partnerships,
  },
  {
    icon: "beaker",
    title: "Research",
    body: "Studies, datasets, benchmarks, and academic collaboration.",
    email: siteConfig.emails.research,
  },
  {
    icon: "shield",
    title: "Security & disclosure",
    body: "Data governance questions and responsible vulnerability disclosure.",
    email: siteConfig.emails.security,
  },
];

export function ContactCTA() {
  return (
    <section id="contact" className="section relative">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title={
            <>
              Bring surgical intelligence to{" "}
              <span className="text-gradient">your institution</span>
            </>
          }
          intro="Tell us about your procedure, your dataset, or your research question. We reply to every serious inquiry within two business days."
        />

        <StaggerGroup className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
          {routes.map((r) => (
            <StaggerItem key={r.title}>
              <a
                href={`mailto:${r.email}`}
                className="card card-hover flex h-full flex-col p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                  <Icon name={r.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {r.body}
                </p>
                <span className="mt-4 font-mono text-2xs text-accent">
                  {r.email}
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-10 flex justify-center">
          <Button href="/contact" size="lg" withArrow>
            Open the contact form
          </Button>
        </div>
      </Container>
    </section>
  );
}
