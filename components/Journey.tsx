const STAGES = [
  {
    letter: "A",
    title: "Setup",
    subtitle: "Get legally, properly established",
    items: ["Entity formation", "MISA licensing", "Commercial registration (CR)", "Corporate bank account opening"],
  },
  {
    letter: "B",
    title: "Operate",
    subtitle: "Run compliant, day to day",
    items: ["Accounting & bookkeeping", "Tax & Zakat compliance", "ZATCA e-invoicing", "Payroll & GOSI"],
  },
  {
    letter: "C",
    title: "Scale",
    subtitle: "Grow with a clear strategy",
    items: ["Financial advisory", "Expansion strategy", "Funding readiness", "Investor & board reporting"],
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-16 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-widest2 text-brass">The journey</span>
          <h2 className="mt-3.5 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-navy">
            One partner, all the way through.
          </h2>
          <p className="mt-4 text-[#555f6c]">
            Most advisors hand you off between setup and operations. We stay with you across
            all three stages — the same team, the same point of contact.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          {/* connecting line, desktop only */}
          <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-line-light md:block" />

          {STAGES.map((stage, i) => (
            <div key={stage.letter} className="relative">
              <div className="mb-6 flex items-center gap-4">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border border-navy bg-cream font-display text-lg text-navy">
                  {stage.letter}
                </span>
                {i < STAGES.length - 1 && (
                  <span className="hidden text-slate md:inline-block" aria-hidden>
                    &rarr;
                  </span>
                )}
              </div>

              <h3 className="font-display text-xl font-medium text-navy">{stage.title}</h3>
              <p className="mt-1 text-sm text-brass">{stage.subtitle}</p>

              <ul className="mt-5 space-y-2.5 border-t border-line-light pt-5">
                {stage.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#5b6472]">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
