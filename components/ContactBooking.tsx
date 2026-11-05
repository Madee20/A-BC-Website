"use client";

import { FormEvent, useState } from "react";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.041 2C6.507 2 2 6.477 2 11.978c0 1.87.53 3.618 1.417 5.128L2 22l5.03-1.379a10.05 10.05 0 0 0 5.01 1.34h.004c5.534 0 10.041-4.478 10.041-9.978C22.086 6.477 17.578 2 12.041 2zm5.883 15.77c-.244.688-1.412 1.354-1.952 1.436-.517.081-1.16.115-1.87-.117a17.083 17.083 0 0 1-1.71-.633c-3.01-1.3-4.977-4.319-5.128-4.522-.15-.203-1.231-1.639-1.231-3.126 0-1.487.78-2.219 1.056-2.522.276-.303.6-.379.8-.379.2 0 .4.002.574.01.184.009.432-.07.676.516.25.6.847 2.075.921 2.226.075.15.125.328.025.53-.1.203-.15.328-.3.503-.15.174-.315.39-.45.523-.15.15-.306.312-.132.61.174.298.774 1.279 1.663 2.072 1.143 1.017 2.107 1.332 2.405 1.482.298.15.472.125.645-.075.174-.199.744-.868.943-1.166.198-.298.396-.248.669-.15.273.1 1.735.818 2.033.967.298.15.497.223.57.348.075.124.075.72-.169 1.417z" />
    </svg>
  );
}

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactBooking() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name"),
      company: data.get("company"),
      email: data.get("email"),
      message: data.get("message"),
      website: data.get("website"), // honeypot, left empty by real users
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.success) {
        setStatus("error");
        setErrorMsg(result.error || "Something went wrong. Please try again or use WhatsApp.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Couldn't reach the server. Please try again or use WhatsApp.");
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest2 text-brass">Get in touch</span>
            <h2 className="mt-4 max-w-[14ch] font-display text-navy text-[clamp(2rem,3.6vw,2.9rem)] font-medium">
              Let&apos;s start your journey from A...
            </h2>
            <p className="mt-5 max-w-[38ch] text-[#5b6472]">
              Message us directly on WhatsApp for the fastest response, or book a consultation
              below. Either way, you&apos;ll speak with an advisor — not a call queue.
            </p>

            <a
              href="https://wa.me/966533843562"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 bg-[#25D366] px-7 py-3.5 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Chat on WhatsApp
            </a>

           
          </div>

          <form className="border border-brass/25 bg-navy/85 p-8" onSubmit={handleSubmit}>
            {/* honeypot field, hidden from real users via CSS not display:none (bots skip display:none less reliably) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] h-0 w-0 opacity-0"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-2 block text-xs uppercase tracking-wide text-cream">Full name</span>
                <input
                  required
                  type="text"
                  name="name"
                  className="w-full border border-cream/20 bg-transparent px-3.5 py-3 text-sm text-cream outline-none placeholder:text-cream focus:border-brass"
                  placeholder="Your name"
                />
              </label>
              <label className="block text-sm">
                <span className="mb-2 block text-xs uppercase tracking-wide text-cream">Company</span>
                <input
                  type="text"
                  name="company"
                  className="w-full border border-cream/20 bg-transparent px-3.5 py-3 text-sm text-cream outline-none placeholder:text-cream focus:border-brass"
                  placeholder="Company name"
                />
              </label>
            </div>

            <label className="mt-5 block text-sm">
              <span className="mb-2 block text-xs uppercase tracking-wide text-cream">Email</span>
              <input
                required
                type="email"
                name="email"
                className="w-full border border-cream/20 bg-transparent px-3.5 py-3 text-sm text-cream outline-none placeholder:text-cream focus:border-brass"
                placeholder="you@company.com"
              />
            </label>

           

            <label className="mt-5 block text-sm">
              <span className="mb-2 block text-xs uppercase tracking-wide text-cream">How can we help?</span>
              <textarea
                required
                name="message"
                rows={3}
                className="w-full resize-none border border-cream/20 bg-transparent px-3.5 py-3 text-sm text-cream outline-none placeholder:text-cream focus:border-brass"
                placeholder="Tell us briefly about your business and timeline"
              />
            </label>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 w-full bg-brass px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brass-light disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {status === "submitting" ? "Sending…" : "Book a consultation"}
            </button>

            {status === "success" && (
              <p className="mt-4 text-sm text-emerald-400">
                Thanks — your message is in. An advisor will reply within one business day.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-sm text-red-400">{errorMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
