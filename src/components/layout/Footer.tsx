import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { footerNav, siteConfig } from "@/config/site";

function Social({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-muted transition-colors hover:border-accent/40 hover:text-ink"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    </a>
  );
}

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
                We partner with a select group of surgical departments, research
                institutes, and innovation offices. If you have surgical video,
                a research question, or a validation study in mind — let&rsquo;s talk.
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
              {siteConfig.tagline}. Deterministic surgical AI — evidence you can
              trace, decisions you can trust.
            </p>
            <div className="mt-5 flex gap-2.5">
              <Social
                href={siteConfig.social.linkedin}
                label="LinkedIn"
                path="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"
              />
              <Social
                href={siteConfig.social.x}
                label="X"
                path="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.46l8.6-9.83L0 1.15h7.6l5.24 6.93 6.06-6.93zm-1.29 19.5h2.04L6.48 3.24H4.29L17.61 20.65z"
              />
              <Social
                href={siteConfig.social.github}
                label="GitHub"
                path="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z"
              />
            </div>
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
          {siteConfig.name} is a research platform under active development. It is
          not a medical device and has not been cleared or approved by the FDA, EMA,
          or any other regulatory authority. Nothing on this site constitutes medical
          advice or a claim of clinical performance. All decision support is intended
          to augment — never replace — the judgment of a qualified surgeon.
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
