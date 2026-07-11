import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { products } from "@/content/platform";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" aria-hidden>
      <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TwoProducts() {
  return (
    <section id="products" className="section relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-iris/[0.06] blur-[120px]" />
      <Container>
        <SectionHeading
          eyebrow="Our AI"
          title={
            <>
              Two products, <span className="text-gradient">one mission</span>
            </>
          }
          intro="Theia is built on two purpose-built AI products. One creates the expert-grade data that great surgical AI depends on. The other turns surgical video into clinical intelligence."
        />

        <StaggerGroup className="mt-14 grid gap-5 lg:grid-cols-2">
          {products.map((p) => (
            <StaggerItem key={p.name}>
              <div className="card card-hover relative flex h-full flex-col overflow-hidden p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/[0.08] blur-3xl" />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-accent">
                    <Icon name={p.icon} className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <span className="font-mono text-2xs uppercase tracking-wider text-faint">
                    {p.tag}
                  </span>
                </div>
                <h3 className="relative mt-6 text-2xl font-semibold">{p.name}</h3>
                <p className="relative mt-1 text-sm font-medium text-accent">{p.tagline}</p>
                <p className="relative mt-4 leading-relaxed text-muted">{p.body}</p>
                <ul className="relative mt-6 space-y-2.5 border-t border-white/[0.06] pt-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm text-muted">
                      <Check />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </section>
  );
}
