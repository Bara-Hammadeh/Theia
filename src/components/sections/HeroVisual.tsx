"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useId } from "react";

/** Animated "surgical intelligence core": surgical video into decision support. */
export function HeroVisual({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  const uid = useId().replace(/[:]/g, "");
  const grad = `hv-grad-${uid}`;
  const glow = `hv-glow-${uid}`;

  const core = { x: 360, y: 235 };
  const nodes = [
    { x: 250, y: 150 },
    { x: 468, y: 150 },
    { x: 505, y: 250 },
    { x: 405, y: 340 },
    { x: 285, y: 335 },
    { x: 232, y: 250 },
  ];
  const spokes = nodes.map((n) => `M${core.x} ${core.y} L${n.x} ${n.y}`);
  const ring = nodes
    .map((n, i) => {
      const m = nodes[(i + 1) % nodes.length];
      return `M${n.x} ${n.y} L${m.x} ${m.y}`;
    });

  const drawTransition = (delay: number) =>
    reduce
      ? { duration: 0 }
      : { duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <svg
      viewBox="0 0 720 460"
      className={className}
      fill="none"
      role="img"
      aria-label="Surgical video transformed into clinical decision support"
    >
      <defs>
        <linearGradient id={grad} x1="0" y1="0" x2="720" y2="460" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgb(var(--accent))" />
          <stop offset="0.5" stopColor="rgb(var(--accent-2))" />
          <stop offset="1" stopColor="rgb(var(--iris))" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="rgb(var(--accent) / 0.28)" />
          <stop offset="1" stopColor="rgb(var(--accent) / 0)" />
        </radialGradient>
      </defs>

      {/* central glow */}
      <circle cx={core.x} cy={core.y} r="170" fill={`url(#${glow})`} />

      {/* concentric rings */}
      {[70, 110, 155].map((r) => (
        <circle
          key={r}
          cx={core.x}
          cy={core.y}
          r={r}
          stroke="rgb(var(--line) / 0.07)"
          strokeWidth="1"
        />
      ))}

      {/* rotating dashed aperture ring */}
      <g className={reduce ? "" : "animate-spin-slow"} style={{ transformOrigin: `${core.x}px ${core.y}px` }}>
        <circle
          cx={core.x}
          cy={core.y}
          r="188"
          stroke="rgb(var(--accent) / 0.25)"
          strokeWidth="1"
          strokeDasharray="2 12"
        />
      </g>

      {/* input tile: VIDEO */}
      <g>
        <rect x="40" y="188" width="118" height="94" rx="12" fill="rgb(var(--surface-2) / 0.85)" stroke="rgb(var(--line) / 0.1)" />
        <rect x="52" y="205" width="94" height="46" rx="4" fill="rgb(var(--bg))" stroke="rgb(var(--line) / 0.08)" />
        {/* faint frame grid */}
        {[64, 76, 88].map((y) => (
          <line key={y} x1="52" y1={y} x2="146" y2={y + 152 - 152} stroke="rgb(var(--line) / 0.05)" />
        ))}
        {/* scanning line */}
        {!reduce && (
          <rect x="52" y="205" width="94" height="2" fill="rgb(var(--accent) / 0.9)">
            <animate attributeName="y" values="205;249;205" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.2;1;0.2" dur="3.2s" repeatCount="indefinite" />
          </rect>
        )}
        <text x="52" y="272" className="font-mono" fill="rgb(var(--muted))" fontSize="9" letterSpacing="1.5">
          SURGICAL VIDEO
        </text>
      </g>
      {/* connector: video → graph */}
      <motion.path
        d={`M158 235 C 195 235, 205 250, 232 250`}
        stroke={`url(#${grad})`}
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={drawTransition(0.2)}
      />

      {/* output tile: DECISION */}
      <g>
        <rect x="560" y="182" width="132" height="106" rx="12" fill="rgb(var(--surface-2) / 0.85)" stroke="rgb(var(--line) / 0.1)" />
        <circle cx="582" cy="208" r="10" stroke="rgb(var(--accent))" strokeWidth="1.5" />
        <path d="M578 208 l3 3 l5 -6" stroke="rgb(var(--accent))" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <text x="600" y="212" className="font-mono" fill="rgb(var(--ink))" fontSize="9" letterSpacing="1">
          SAFETY · IN VIEW
        </text>
        {/* uncertainty bars */}
        {[0, 1, 2].map((i) => (
          <rect
            key={i}
            x="576"
            y={232 + i * 14}
            width={i === 0 ? 96 : i === 1 ? 70 : 48}
            height="6"
            rx="3"
            fill={i === 0 ? "rgb(var(--accent) / 0.8)" : "rgb(var(--line) / 0.12)"}
          />
        ))}
        <text x="576" y="228" className="font-mono" fill="rgb(var(--muted))" fontSize="8" letterSpacing="1.5">
          DECISION SUPPORT
        </text>
      </g>
      {/* connector: graph → decision */}
      <motion.path
        d={`M505 250 C 532 250, 540 235, 560 235`}
        stroke={`url(#${grad})`}
        strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.8 }}
        transition={drawTransition(1.4)}
      />

      {/* graph ring edges */}
      {ring.map((d, i) => (
        <motion.path
          key={`r-${i}`}
          d={d}
          stroke="rgb(var(--line) / 0.14)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={drawTransition(0.5 + i * 0.08)}
        />
      ))}

      {/* graph spokes + flowing signal */}
      {spokes.map((d, i) => (
        <g key={`s-${i}`}>
          <motion.path
            d={d}
            id={`hv-edge-${uid}-${i}`}
            stroke={`url(#${grad})`}
            strokeWidth="1.2"
            strokeOpacity="0.55"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={drawTransition(0.6 + i * 0.09)}
          />
          {!reduce && (
            <circle r="2.4" fill="rgb(var(--accent))">
              <animateMotion dur={`${2 + i * 0.35}s`} repeatCount="indefinite" begin={`${i * 0.3}s`}>
                <mpath href={`#hv-edge-${uid}-${i}`} />
              </animateMotion>
            </circle>
          )}
        </g>
      ))}

      {/* satellite nodes */}
      {nodes.map((n, i) => (
        <motion.circle
          key={`n-${i}`}
          cx={n.x}
          cy={n.y}
          r="6"
          fill="rgb(var(--surface))"
          stroke={`url(#${grad})`}
          strokeWidth="1.6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 0.9 + i * 0.09, ease: "backOut" }}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
        />
      ))}

      {/* core node */}
      <motion.circle
        cx={core.x}
        cy={core.y}
        r="13"
        fill={`url(#${grad})`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 0.6, delay: 0.3, ease: "backOut" }}
        style={{ transformOrigin: `${core.x}px ${core.y}px` }}
      />
      {!reduce && (
        <circle cx={core.x} cy={core.y} r="13" fill="none" stroke="rgb(var(--accent))" strokeWidth="1.5">
          <animate attributeName="r" values="13;26;13" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="3s" repeatCount="indefinite" />
        </circle>
      )}
      <text x={core.x} y={core.y + 34} textAnchor="middle" className="font-mono" fill="rgb(var(--muted))" fontSize="9" letterSpacing="2">
        INTELLIGENCE
      </text>
    </svg>
  );
}
