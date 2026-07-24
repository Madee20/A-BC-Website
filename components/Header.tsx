"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#services", label: "Our Services" },
  { href: "#why-us", label: "Why A&BC" },
  { href: "#about", label: "About" },
  { href: "#process", label: "How we work" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-brass/20 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-[78px] max-w-[1240px] items-center justify-between px-6 sm:px-10">
        <a href="#" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="A&BC — Accelerators & Business Consultants"
            width={573}
            height={160}
            priority
            className="h-12 w-auto"
          />
        </a>

        <nav className="hidden gap-9 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1 text-sm text-cream/80 transition-opacity hover:opacity-100"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-0 h-px w-0 bg-brass transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden whitespace-nowrap border border-cream/35 px-5 py-2.5 text-sm text-cream transition-colors hover:border-brass hover:bg-brass hover:text-ink lg:inline-block"
        >
          Book a consultation
        </a>

        <button
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="text-2xl text-cream lg:hidden"
        >
          &#9776;
        </button>
      </div>

      <div
        className={`overflow-hidden border-b border-brass/20 bg-ink transition-[max-height] duration-300 lg:hidden ${
          menuOpen ? "max-h-96" : "max-h-0 border-b-0"
        }`}
      >
        <div className="mx-auto max-w-[1240px] px-6 pb-6 pt-2 sm:px-10">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-[0.95rem] text-cream/85"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block py-2.5 text-[0.95rem] text-cream/85"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </header>
  );
}
