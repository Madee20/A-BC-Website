const VALUES = [
  {
    title: "Empowerment",
    copy: "We build our clients' capability, not dependency.",
  },
  {
    title: "Innovation",
    copy: "We deliver forward-looking solutions for tomorrow's challenges.",
  },
  {
    title: "Client Focus",
    copy: "Every solution is tailor-made around your unique needs.",
  },
  {
    title: "Integrity",
    copy: "We uphold the highest standards of professionalism, honesty, and transparency in every engagement.",
  },
  {
    title: "Collaboration",
    copy: "We foster trust and cooperation among our team and our clients.",
  },
  {
    title: "Sustainability",
    copy: "Environmentally responsible in how we operate and advise.",
  },
  {
    title: "Balance",
    copy: "A harmonious work-life balance for exceptional results.",
  },
];

export default function VisionMissionValues() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        {/* About + Vision/Mission */}
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest2 text-brass">
              About the company
            </span>
            <h2 className="mt-3.5 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-navy">
              Built to help you set up and scale.
            </h2>

            <div className="mt-6 space-y-5 text-[0.98rem] leading-relaxed text-[#555f6c]">
              <p>
               Accelerators & Business Consultants, a Sri Lanka-based consultancy firm with footprints in the Kingdom of Saudi Arabia and the Sultanate of Brunei, helping businesses set up and scale, from company incorporation to growth, efficiently and effectively. Our offshoring and outsourcing solutions are tailor-made to match the requirements of every client.
              </p>
              
            </div>
          </div>

          <div className="flex flex-col justify-center gap-10">
            <div className="border-l-2 border-brass py-1 pl-7">
              <span className="font-mono text-xs uppercase tracking-widest2 text-brass">
                Vision
              </span>
              <p className="mt-3 font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
                To be the catalyst that helps businesses thrive and grow sustainably.
              </p>
            </div>
            <div className="border-l-2 border-brass py-1 pl-7">
              <span className="font-mono text-xs uppercase tracking-widest2 text-brass">
                Mission
              </span>
              <p className="mt-3 font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
                To empower businesses to prosper by delivering innovative, tailor-made, end-to-end
                solutions that drive long-term success while preserving the planet for future
                generations.
              </p>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-20 border-t border-navy/10 pt-14">
          <div className="mb-10 max-w-[640px]">
            <span className="font-mono text-xs uppercase tracking-widest2 text-brass">
              Core values
            </span>
            <h2 className="mt-3.5 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-navy">
              What we hold ourselves to.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title}>
                <h3 className="font-display text-base font-medium text-navy">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6472]">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}