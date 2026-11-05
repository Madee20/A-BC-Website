"use client";

import { useEffect, useRef, useState } from "react";

const DONE_EVENT = "typewriter:done";

const STATS = [
  { value: 7, suffix: "+", label: "Years of consulting experience" },
  { value: 3, suffix: "", label: "Countries", detail: "Sri Lanka · KSA · Brunei" },
  { value: 15, suffix: "+", label: "Industries served" },
];

function CountUp({
  to,
  suffix = "",
  duration = 1600,
  active,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  active: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || !active) return; // wait until typing is done

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(to);
      return;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3); // ease-out
          setN(Math.round(eased * to));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration, active]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      <span className="text-brass">{suffix}</span>
    </span>
  );
}

export default function StatsBar() {
  const [typingDone, setTypingDone] = useState(false);

  useEffect(() => {
    // Already finished before this component mounted
    if ((window as any).__typewriterDone) {
      setTypingDone(true);
      return;
    }
    const onDone = () => setTypingDone(true);
    window.addEventListener(DONE_EVENT, onDone);
    return () => window.removeEventListener(DONE_EVENT, onDone);
  }, []);

  return (
    <div className="border-t border-brass/20 bg-navy">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 divide-y divide-cream/15 px-6 sm:px-10 md:grid-cols-3 md:divide-x md:divide-y-0">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-5 text-center md:py-7">
            <div className="font-display text-4xl font-medium leading-none text-cream sm:text-5xl">
              <CountUp to={s.value} suffix={s.suffix} active={typingDone} />
            </div>
            <div className="mt-2 text-sm font-medium uppercase tracking-wide text-cream/90">
              {s.label}
            </div>
            {s.detail && <div className="mt-1.5 text-xs text-slate">{s.detail}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}