const PILLARS = [
  {
    title: "Results, Not Reports",
    copy: "We measure our success by your growth — not by the thickness of our deliverables.",
  },
  {
    title: "Hands-On Partnership",
    copy: "We work as an extension of your team, staying involved through execution, not just planning.",
  },
  {
    title: "Tailored Solutions",
    copy: "No copy-paste frameworks. Every business is different, and so is every solution we design.",
  },
  {
    title: "Speed with Precision",
    copy: "We move fast because the market does — but never at the cost of quality.",
  },
  {
    title: "Local Insight, Global Standards",
    copy: "Deep understanding of the regional business landscape, combined with world-class consulting practices.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="relative bg-gradient-to-tr from-navy to-ink py-24 text-cream sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-widest2 text-brass">Why choose A&amp;BC</span>
          <h2 className="mt-3.5 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-cream">
            A strategic partner, not a paperwork processor.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((p, i) => (
            <div key={p.title} className="flex gap-5">
              <span className="font-mono text-sm text-brass">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-display text-lg font-medium text-cream">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{p.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
