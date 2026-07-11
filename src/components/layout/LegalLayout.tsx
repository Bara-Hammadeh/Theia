import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { siteConfig } from "@/config/site";

export function LegalLayout({
  eyebrow = "Legal & Trust",
  title,
  subtitle,
  updated,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={eyebrow} title={title} subtitle={subtitle}>
        <p className="font-mono text-2xs uppercase tracking-[0.15em] text-faint">
          Last updated: {updated}
        </p>
      </PageHeader>

      <section className="pb-24">
        <Container>
          <div className="prose-theia max-w-prose">{children}</div>

          <div className="mt-16 max-w-prose rounded-2xl border border-white/[0.07] bg-surface/40 p-6">
            <p className="text-sm text-muted">
              Questions about this document? Contact{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent-2 underline underline-offset-2"
              >
                {siteConfig.email}
              </a>
              . For related policies, see our{" "}
              <Link href="/privacy" className="text-accent-2 underline underline-offset-2">
                Privacy
              </Link>
              ,{" "}
              <Link href="/security" className="text-accent-2 underline underline-offset-2">
                Security
              </Link>
              , and{" "}
              <Link href="/data-governance" className="text-accent-2 underline underline-offset-2">
                Data Governance
              </Link>{" "}
              pages.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
