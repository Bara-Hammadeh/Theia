import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { collaborationModels } from "@/content/company";

export function Collaboration() {
  return (
    <section id="collaboration" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-1/3 -z-10 h-96 w-96 rounded-full bg-accent/[0.06] blur-[120px]" />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="For Surgeons"
              title={
                <>
                  Your video is the{" "}
                  <span className="text-gradient-iris">most valuable dataset</span>{" "}
                  in medicine
                </>
              }
              intro="You already generate the signal that will define the next era of surgery — it simply goes unused. We built Theia so surgeons can turn that signal into research, education, and safer operations, on terms you control."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/partnerships" withArrow>
                Explore partnerships
              </Button>
              <Button href="/contact" variant="secondary">
                Talk to us
              </Button>
            </div>
            <div className="mt-8 rounded-2xl border border-white/[0.07] bg-surface/40 p-5">
              <p className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">You stay in control.</span>{" "}
                Video is de-identified, contributed under a consented agreement, and
                remains yours. Nothing is used beyond the scope you approve.
              </p>
            </div>
          </div>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {collaborationModels.map((c, i) => (
              <StaggerItem
                key={c.title}
                className={i === 0 ? "sm:col-span-2" : undefined}
              >
                <div className="card card-hover flex h-full gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={c.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {c.body}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Container>
    </section>
  );
}
