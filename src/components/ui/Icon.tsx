import type { SVGProps } from "react";

export type IconName =
  | "video"
  | "detect"
  | "segment"
  | "track"
  | "graph"
  | "reason"
  | "evidence"
  | "procedure"
  | "assess"
  | "decision"
  | "present"
  | "shield"
  | "lock"
  | "fingerprint"
  | "log"
  | "version"
  | "registry"
  | "reproduce"
  | "access"
  | "human"
  | "annotate"
  | "sparkle"
  | "review"
  | "dataset"
  | "train"
  | "validate"
  | "deploy"
  | "eye"
  | "pulse"
  | "route"
  | "compass"
  | "beaker"
  | "handshake"
  | "layers"
  | "cpu";

const paths: Record<IconName, JSX.Element> = {
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2" />
      <path d="M16 10l5-3v10l-5-3" />
    </>
  ),
  detect: (
    <>
      <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
    </>
  ),
  segment: (
    <>
      <path d="M12 3v18M3 12h18" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </>
  ),
  track: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      <circle cx="12" cy="12" r="9" strokeDasharray="3 3" />
    </>
  ),
  graph: (
    <>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M12 7l-6 9M12 7l6 9M7 18h10" />
    </>
  ),
  reason: (
    <>
      <path d="M12 3a5 5 0 0 0-5 5c0 1.5.6 2.4 1.2 3.2.6.8 1.3 1.6 1.3 2.8v1h5v-1c0-1.2.7-2 1.3-2.8C16.4 10.4 17 9.5 17 8a5 5 0 0 0-5-5Z" />
      <path d="M10 18h4M10.5 21h3" />
    </>
  ),
  evidence: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 14l2 2 4-4" />
    </>
  ),
  procedure: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <path d="M5 8v8M9 6h7l3 3-3 3H9M9 18h5" />
    </>
  ),
  assess: (
    <>
      <path d="M4 14a8 8 0 0 1 16 0" />
      <path d="M12 14l4-3" />
      <path d="M4 14h2M18 14h2M12 6v1" />
    </>
  ),
  decision: (
    <>
      <path d="M12 3v6M12 9l-5 4M12 9l5 4" />
      <circle cx="12" cy="3" r="1.6" />
      <circle cx="6" cy="15" r="2" />
      <circle cx="18" cy="15" r="2" />
      <path d="M6 17v2M18 17v2" />
    </>
  ),
  present: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4M8 10l2 2 4-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  lock: (
    <>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M6 11a6 6 0 0 1 12 0M9 12a3 3 0 0 1 6 0v2M12 12v4M6 15c0 2 .5 3 1 4M18 14c0 2-.3 4-1 5" />
    </>
  ),
  log: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  version: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="6" cy="18" r="2" />
      <circle cx="18" cy="12" r="2" />
      <path d="M6 8v8M8 6h6a2 2 0 0 1 2 2v2" />
    </>
  ),
  registry: (
    <>
      <rect x="3" y="4" width="18" height="5" rx="1" />
      <rect x="3" y="12" width="18" height="8" rx="1" />
      <path d="M7 6.5h.01M7 16h5" />
    </>
  ),
  reproduce: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8M20 4v4h-4" />
      <path d="M20 12a8 8 0 0 1-13.7 5.6L4 16M4 20v-4h4" />
    </>
  ),
  access: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M4 20c0-3 2.2-5 5-5s5 2 5 5" />
      <path d="M17 11l2 2 3-3" />
    </>
  ),
  human: (
    <>
      <circle cx="12" cy="7" r="3" />
      <path d="M6 21c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M3 13l2-2M21 13l-2-2" />
    </>
  ),
  annotate: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5 13.8 11.3 12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
      <path d="M19 15l.7 1.8L21.5 17.5l-1.8.7L19 20l-.7-1.8L16.5 17.5l1.8-.7z" />
    </>
  ),
  review: (
    <>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </>
  ),
  dataset: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </>
  ),
  train: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h.01M15 9h.01M9 15c1 1 5 1 6 0" />
      <path d="M4 10h-2M22 10h-2M4 14h-2M22 14h-2" />
    </>
  ),
  validate: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9.5 12l1.8 1.8L15 10" />
    </>
  ),
  deploy: (
    <>
      <path d="M12 15c3-1 6-4 6-9 0 0-3 0-6 3-3-3-6-3-6-3 0 5 3 8 6 9z" />
      <path d="M9 15l-3 3M12 15v4M6 12l-2 3" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  pulse: (
    <>
      <path d="M2 12h5l2-6 4 12 2-6h7" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="5" r="2" />
      <path d="M8 19h6a4 4 0 0 0 0-8H10a4 4 0 0 1 0-8h6" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  beaker: (
    <>
      <path d="M9 3h6M10 3v6l-4.5 8A2 2 0 0 0 7.3 20h9.4a2 2 0 0 0 1.8-3L14 9V3" />
      <path d="M7.5 14h9" />
    </>
  ),
  handshake: (
    <>
      <path d="M12 6l3-2 6 5-2 2M12 6L9 4 3 9l2 2" />
      <path d="M5 11l4 4a2 2 0 0 0 3 0 2 2 0 0 0 3 0l4-4" />
      <path d="M12 15l-1.5-1.5" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5M3 16.5l9 5 9-5" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9" y="9" width="6" height="6" rx="1" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </>
  ),
};

export function Icon({
  name,
  className,
  strokeWidth = 1.5,
  ...props
}: { name: IconName; strokeWidth?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
