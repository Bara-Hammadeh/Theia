import { stats } from "@/content/company";
import { Reveal } from "@/components/ui/Reveal";

export function StatsBand() {
  return (
    <section className="relative border-y border-white/[0.06] bg-surface/30">
      <div className="container grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className="border-l border-white/[0.08] pl-5 first:border-l-0 md:first:border-l md:[&:nth-child(1)]:border-l-0"
          >
            <div className="font-display text-4xl font-semibold text-gradient sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm leading-snug text-muted">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
