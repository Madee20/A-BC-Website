"use client";

import { useEffect, useState } from "react";

type Segment = { text: string; className?: string };

export const TYPEWRITER_DONE_EVENT = "typewriter:done";

export default function Typewriter({
  segments,
  speed = 55,
  startDelay = 400,
}: {
  segments: Segment[];
  speed?: number;
  startDelay?: number;
}) {
  const total = segments.reduce((n, s) => n + s.text.length, 0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Respect reduced-motion: show everything immediately
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(total);
      return;
    }
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        setCount((c) => {
          if (c >= total) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [total, speed, startDelay]);

  // Tell the rest of the page when typing has finished
  useEffect(() => {
    if (total > 0 && count >= total) {
      (window as any).__typewriterDone = true;
      window.dispatchEvent(new Event(TYPEWRITER_DONE_EVENT));
    }
  }, [count, total]);

  // Reset the flag if this component unmounts (e.g. navigating away and back)
  useEffect(() => {
    return () => {
      (window as any).__typewriterDone = false;
    };
  }, []);

  const render = (limit: number) => {
    let left = limit;
    return segments.map((s, i) => {
      const part = s.text.slice(0, Math.max(0, left));
      left -= s.text.length;
      return (
        <span key={i} className={s.className}>
          {part}
        </span>
      );
    });
  };

  const label = segments.map((s) => s.text).join("");

  return (
    <span className="relative block" aria-label={label}>
      {/* Invisible full text reserves the final height/width */}
      <span aria-hidden className="invisible">
        {render(total)}
      </span>
      {/* Visible typed text overlays it */}
      <span aria-hidden className="absolute inset-0">
        {render(count)}
        <span
          className={`ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.1em] bg-brass ${
            count >= total ? "animate-pulse" : ""
          }`}
        />
      </span>
    </span>
  );
}