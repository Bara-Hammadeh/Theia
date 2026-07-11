import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { LogoMark } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[130px]" />
      <Container className="text-center">
        <div className="flex justify-center">
          <LogoMark className="h-12 w-12 opacity-80" />
        </div>
        <p className="mt-8 font-mono text-2xs uppercase tracking-[0.2em] text-accent">
          Error 404 · Out of view
        </p>
        <h1 className="mt-4 text-5xl font-semibold sm:text-6xl">
          <span className="text-gradient">Lost the thread.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          This page isn&rsquo;t in our scene graph. It may have moved, or the link may be
          incomplete. Let&rsquo;s get you back to solid ground.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/" withArrow>
            Back to home
          </Button>
          <Button href="/technology" variant="secondary">
            Explore the technology
          </Button>
        </div>
      </Container>
    </section>
  );
}
