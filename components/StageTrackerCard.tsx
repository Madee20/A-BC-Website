"use client";

import { useEffect, useState } from "react";

const STAGES = [
  { letter: "A", label: "Setup", detail: "Entity formation, MISA licensing, CR registration, bank accounts" },
  { letter: "B", label: "Operate", detail: "Accounting, Tax/ Zakat compliance, ZATCA, Payroll, GOSI" },
  { letter: "C", label: "Scale", detail: "Financial advisory, Expansion strategy, Funding readiness" },
];

export default function StageTrackerCard() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % STAGES.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="border border-brass/30 bg-navy/55 p-7 pb-6">
      <div className="mb-5 flex items-baseline justify-between border-b border-brass/20 pb-3.5">
        <span className="font-display text-base italic text-cream">Client journey</span>
        
      </div>

      <div className="space-y-0">
        {STAGES.map((s, i) => (
          <div
            key={s.letter}
            className={`flex items-start gap-4 border-l-2 py-4 pl-5 transition-colors duration-500 ${
              i === active ? "border-brass" : "border-cream/15"
            }`}
          >
            <span
              className={`flex h-8 w-8 shrink-0 items-center justify-center border font-display text-sm transition-colors duration-500 ${
                i === active
                  ? "border-brass bg-brass text-ink"
                  : "border-cream/25 text-cream/60"
              }`}
            >
              {s.letter}
            </span>
            <div>
              <div className={`text-sm font-medium transition-colors duration-500 ${i === active ? "text-cream" : "text-cream/60"}`}>
                {s.label}
              </div>
              <div className="mt-0.5 text-xs text-slate">{s.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-2 text-xs text-slate">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.18)]" />
        One team, one point of contact, start to finish.
      </div>
    </div>
  );
}
