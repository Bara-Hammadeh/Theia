"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Theia mark — an aperture/eye reticle whose inscribed triangle doubles as a
 * three-node scene graph. Rendered from a gradient so it glows on dark.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId().replace(/[:]/g, "");
  const g = `theia-grad-${id}`;
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("h-7 w-7", className)}
      role="img"
      aria-label={`${siteConfig.name} logo`}
      fill="none"
    >
      <defs>
        <linearGradient id={g} x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(var(--accent))" />
          <stop offset="0.55" stopColor="rgb(var(--accent-2))" />
          <stop offset="1" stopColor="rgb(var(--iris))" />
        </linearGradient>
      </defs>
      {/* outer lens ring */}
      <circle cx="16" cy="16" r="13" stroke={`url(#${g})`} strokeWidth="1.5" opacity="0.9" />
      {/* scene-graph edges */}
      <g stroke={`url(#${g})`} strokeWidth="1.1" opacity="0.55">
        <line x1="16" y1="16" x2="16" y2="7" />
        <line x1="16" y1="16" x2="8.2" y2="20.5" />
        <line x1="16" y1="16" x2="23.8" y2="20.5" />
      </g>
      {/* inscribed aperture triangle */}
      <path
        d="M16 7 L23.8 20.5 L8.2 20.5 Z"
        stroke={`url(#${g})`}
        strokeWidth="1.5"
        strokeLinejoin="round"
        opacity="0.95"
      />
      {/* nodes */}
      <g fill="rgb(var(--accent))">
        <circle cx="16" cy="7" r="1.7" />
        <circle cx="23.8" cy="20.5" r="1.7" />
        <circle cx="8.2" cy="20.5" r="1.7" />
      </g>
      <circle cx="16" cy="16" r="2.1" fill={`url(#${g})`} />
    </svg>
  );
}

export function Logo({
  className,
  wordmarkClassName,
  showWordmark = true,
}: {
  className?: string;
  wordmarkClassName?: string;
  showWordmark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {showWordmark && (
        <span
          className={cn(
            "font-display text-[1.35rem] font-semibold tracking-tight text-ink",
            wordmarkClassName
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
