const STEPS = [
  {
    step: "01",
    title: "Discover",
    copy: "We listen first. A deep-dive session to understand your business, goals, and challenges.",
  },
  {
    step: "02",
    title: "Diagnose",
    copy: "We analyze your operations, market, and numbers to find exactly what's holding you back.",
  },
  {
    step: "03",
    title: "Design",
    copy: "We build a clear, practical action plan with priorities, timelines, and measurable targets.",
  },
  {
    step: "04",
    title: "Deliver",
    copy: "We execute alongside your team, track progress, and adjust until the results are achieved.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-ink py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-16 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-widest2 text-brass">How we work</span>
          <h2 className="mt-3.5 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-cream">
            A process built to move, not stall.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-cream/15 md:block" />

          {STEPS.map((s) => (
            <div key={s.step} className="relative">
              <span className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center border border-brass bg-ink font-display text-lg text-brass">
                {s.step}
              </span>
              <h3 className="font-display text-lg font-medium text-cream">{s.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
