/** Minimal className joiner — no runtime dependency. */
export function cn(
  ...classes: Array<string | number | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}

/** Prefix an internal asset in /public with the configured basePath. */
export function withBasePath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) path = `/${path}`;
  return `${base}${path}`;
}
