const VALUES = [
  {
    title: "Empowerment",
    copy: "We measure our success by our clients' independence and growth. We build capability, not dependency.",
  },
  {
    title: "Innovation",
    copy: "We encourage creative thinking and fresh ideas, delivering forward-looking solutions that anticipate tomorrow's challenges, not just today's.",
  },
  {
    title: "Client Focus",
    copy: "Every solution is tailor-made. We listen first, understand deeply, and design around each client's unique needs — never one-size-fits-all.",
  },
  {
    title: "Integrity",
    copy: "We uphold the highest standards of professionalism, honesty, and transparency in every engagement, treating everyone with dignity and equity.",
  },
  {
    title: "Collaboration",
    copy: "We foster trust and cooperation among our team, our clients, and all stakeholders, because lasting success is built together.",
  },
  {
    title: "Sustainability",
    copy: "We are committed to preserving the planet for future generations, championing environmentally responsible practices in how we operate and what we advise.",
  },
  {
    title: "Balance",
    copy: "We nurture a dynamic environment where our people enjoy a harmonious work-life balance, knowing that well-supported teams deliver exceptional results.",
  },
];

export default function VisionMissionValues() {
  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="border-l-2 border-brass py-1 pl-7">
            <span className="font-mono text-xs uppercase tracking-widest2 text-brass">Vision</span>
            <p className="mt-3 font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
              To be the catalyst that helps businesses thrive and grow sustainably.
            </p>
          </div>
          <div className="border-l-2 border-brass py-1 pl-7">
            <span className="font-mono text-xs uppercase tracking-widest2 text-brass">Mission</span>
            <p className="mt-3 font-display text-xl font-medium leading-snug text-navy sm:text-2xl">
              To empower businesses to prosper by delivering innovative, tailor-made, end-to-end
              solutions that drive long-term success while preserving the planet for future
              generations.
            </p>
          </div>
        </div>

        <div className="mb-10 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-widest2 text-brass">Core values</span>
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
    </section>
  );
}
