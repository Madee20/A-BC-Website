import StageTrackerCard from "./StageTrackerCard";
import Typewriter from "./Typewriter";


export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-ink to-navy pb-8 pt-[108px] text-cream">
      <div className="absolute inset-0 bg-ledger-rules" />

      <div className="relative mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-14 px-6 sm:px-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest2 text-brass">
            Setup &middot; Operate &middot; Scale
          </span>
          {/*<h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.4rem,4.4vw,3.9rem)] font-medium leading-[1.1] tracking-tight">
            From <span className="text-brass">A</span> to{" "}
            <span className="text-brass">Z </span>
             - we&apos;re with you at every stage.
          </h1>*/}

            <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(2.4rem,4.4vw,3.9rem)] font-medium leading-[1.1] tracking-tight">
  <Typewriter
    segments={[
      { text: "From " },
      { text: "A", className: "text-brass" },
      { text: " to " },
      { text: "Z", className: "text-brass" },
      { text: " - we're with you at every stage." },
    ]}
  />
</h1>

          <p className="mt-6 mb-9 max-w-[46ch] text-lg text-cream/70">
            Your one-stop, end-to-end strategic partner.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-block bg-brass px-7 py-3.5 text-sm font-medium text-ink transition-all hover:-translate-y-0.5 hover:bg-brass-light"
            >
              Book a consultation
            </a>
            <a
              href="https://wa.me/966533843562"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-cream/35 px-7 py-3.5 text-sm text-cream transition-colors hover:border-brass"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12.041 2C6.507 2 2 6.477 2 11.978c0 1.87.53 3.618 1.417 5.128L2 22l5.03-1.379a10.05 10.05 0 0 0 5.01 1.34h.004c5.534 0 10.041-4.478 10.041-9.978C22.086 6.477 17.578 2 12.041 2zm5.883 15.77c-.244.688-1.412 1.354-1.952 1.436-.517.081-1.16.115-1.87-.117a17.083 17.083 0 0 1-1.71-.633c-3.01-1.3-4.977-4.319-5.128-4.522-.15-.203-1.231-1.639-1.231-3.126 0-1.487.78-2.219 1.056-2.522.276-.303.6-.379.8-.379.2 0 .4.002.574.01.184.009.432-.07.676.516.25.6.847 2.075.921 2.226.075.15.125.328.025.53-.1.203-.15.328-.3.503-.15.174-.315.39-.45.523-.15.15-.306.312-.132.61.174.298.774 1.279 1.663 2.072 1.143 1.017 2.107 1.332 2.405 1.482.298.15.472.125.645-.075.174-.199.744-.868.943-1.166.198-.298.396-.248.669-.15.273.1 1.735.818 2.033.967.298.15.497.223.57.348.075.124.075.72-.169 1.417z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <StageTrackerCard />
      </div>
    </section>
  );
}
