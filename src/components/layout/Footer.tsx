import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerNav, siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] bg-surface/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      {/* CTA band */}
      <div className="container pt-16 sm:pt-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/[0.07] bg-gradient-to-br from-surface-2/80 to-surface/40 px-6 py-12 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-iris/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-semibold sm:text-3xl">
                Build the future of surgery with us.
              </h2>
              <p className="mt-3 text-muted">
                We work with a select group of surgical departments, hospitals, and
                innovation offices. If you have a procedure in mind, a pilot to run, or
                a question about the platform, we would like to hear from you.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href="/partnerships" size="lg" withArrow>
                Partner with us
              </Button>
              <Button href="/contact" size="lg" variant="secondary">
                Contact the team
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="container pt-16 pb-10">
        <div className="grid grid-cols-2 gap-8 border-b border-white/[0.06] pb-12 sm:grid-cols-3 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {siteConfig.tagline}. Surgical intelligence you can trust, built for the
              operating room.
            </p>
          </div>

          {footerNav.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-2xs uppercase tracking-[0.18em] text-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted transition-colors hover:text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Regulatory disclaimer */}
        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-faint">
          <span className="font-mono uppercase tracking-wider text-muted">
            Investigational use.
          </span>{" "}
          {siteConfig.name} is a platform under active development. It is not a medical
          device and has not been cleared or approved by any regulatory authority.
          Nothing on this site is medical advice or a claim of clinical performance, and
          any decision support is intended to support, not replace, the judgment of a
          qualified surgeon.
        </p>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-sm text-faint sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="transition-colors hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ink">
              Terms
            </Link>
            <Link href="/cookies" className="transition-colors hover:text-ink">
              Cookies
            </Link>
            <Link href="/security" className="transition-colors hover:text-ink">
              Security
            </Link>
            <Link href="/responsible-ai" className="transition-colors hover:text-ink">
              Responsible AI
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
