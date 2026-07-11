import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Theia about research collaboration, hospital partnerships, surgical video contribution, validation studies, and early access.",
  path: "/contact",
});

const include = [
  "Your specialty and the procedure(s) of interest",
  "Whether you have access to de-identified surgical video",
  "The question or outcome you care about",
  "Any timeline, IRB, or governance constraints",
];

const directory: { label: string; email: string }[] = [
  { label: "Partnerships", email: siteConfig.emails.partnerships },
  { label: "Research", email: siteConfig.emails.research },
  { label: "Careers", email: siteConfig.emails.careers },
  { label: "Security", email: siteConfig.emails.security },
  { label: "Press", email: siteConfig.emails.press },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s build something{" "}
            <span className="text-gradient">worth trusting</span>
          </>
        }
        subtitle="Whether you are a surgeon with a question, a hospital exploring a pilot, a researcher seeking a collaborator, or an investor tracking the space — we would like to hear from you."
      />

      <section className="pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
            <ContactForm />

            <aside className="space-y-8">
              <div>
                <div className="flex items-center gap-2 text-accent">
                  <Icon name="pulse" className="h-5 w-5" />
                  <h2 className="font-mono text-2xs uppercase tracking-[0.16em]">
                    Response time
                  </h2>
                </div>
                <p className="mt-3 text-muted">
                  We reply to every serious inquiry within{" "}
                  <span className="text-ink">two business days</span>. There is a real
                  person on the other end.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-accent">
                  <Icon name="review" className="h-5 w-5" />
                  <h2 className="font-mono text-2xs uppercase tracking-[0.16em]">
                    What helps us help you
                  </h2>
                </div>
                <ul className="mt-3 space-y-2">
                  {include.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-accent">
                  <Icon name="handshake" className="h-5 w-5" />
                  <h2 className="font-mono text-2xs uppercase tracking-[0.16em]">
                    Direct lines
                  </h2>
                </div>
                <ul className="mt-3 divide-y divide-white/[0.06] border-y border-white/[0.06]">
                  {directory.map((d) => (
                    <li key={d.label} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="text-muted">{d.label}</span>
                      <a
                        href={`mailto:${d.email}`}
                        className="font-mono text-xs text-accent-2 hover:underline"
                      >
                        {d.email}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 flex items-center gap-2 text-sm text-faint">
                  <Icon name="compass" className="h-4 w-4" />
                  {siteConfig.location}
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
