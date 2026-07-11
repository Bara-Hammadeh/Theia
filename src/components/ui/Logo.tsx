"use client";

import { useId } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Theia mark: an eye whose iris is a camera aperture. Vision + a surgical lens.
 * Rendered from a gradient so it glows on dark backgrounds; the single-stroke
 * geometry also reads cleanly in monochrome and at favicon sizes.
 */
export function LogoMark({ className }: { className?: string }) {
  const id = useId().replace(/[:]/g, "");
  const g = `theia-grad-${id}`;
  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-8 w-8", className)}
      role="img"
      aria-label={`${siteConfig.name} logo`}
      fill="none"
    >
      <defs>
        <linearGradient id={g} x1="6" y1="10" x2="58" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(var(--accent))" />
          <stop offset="0.55" stopColor="rgb(var(--accent-2))" />
          <stop offset="1" stopColor="rgb(var(--iris))" />
        </linearGradient>
      </defs>

      {/* eye outline */}
      <path
        d="M6 32 C 18 13 46 13 58 32 C 46 51 18 51 6 32 Z"
        stroke={`url(#${g})`}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* iris = camera aperture */}
      <g
        transform="translate(32 32) scale(1.05) translate(-12 -12)"
        stroke={`url(#${g})`}
        strokeWidth="1.55"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
        <line x1="9.69" y1="8" x2="21.17" y2="8" />
        <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
        <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
        <line x1="14.31" y1="16" x2="2.83" y2="16" />
        <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
      </g>

      <circle cx="32" cy="32" r="1.7" fill={`url(#${g})`} />
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
            "font-display text-[1.05rem] font-semibold uppercase tracking-[0.26em] text-ink",
            wordmarkClassName
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </span>
  );
}
