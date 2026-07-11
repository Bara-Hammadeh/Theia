import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent/70 disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "text-bg bg-gradient-to-r from-accent to-accent-2 hover:shadow-[0_16px_40px_-16px_rgb(var(--accent)/0.8)] hover:brightness-110",
  secondary:
    "text-ink border border-white/12 bg-white/[0.03] hover:border-accent/40 hover:bg-white/[0.06]",
  ghost: "text-muted hover:text-ink",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[52px] px-7 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
};

function Inner({ children, withArrow }: { children: ReactNode; withArrow?: boolean }) {
  return (
    <>
      <span>{children}</span>
      {withArrow && (
        <svg
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8h9M8.5 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  withArrow,
  external,
}: CommonProps & { href: string; external?: boolean }) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const isInternal = (href.startsWith("/") || href.startsWith("#")) && !external;

  if (isInternal) {
    return (
      <Link href={href} className={classes}>
        <Inner withArrow={withArrow}>{children}</Inner>
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </a>
  );
}
