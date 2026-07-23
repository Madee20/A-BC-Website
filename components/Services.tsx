const SERVICES = [
  {
    idx: "01",
    title: "Business Acceleration",
    copy: "Fast-track your growth with tailored roadmaps, performance frameworks, and hands-on support designed to take your business to the next level — quickly and sustainably.",
  },
  {
    idx: "02",
    title: "Strategy Consulting",
    copy: "Clear direction beats hard work in the wrong direction. We help you define where to play, how to win, and what to prioritize — backed by data and market insight.",
  },
  {
    idx: "03",
    title: "Operations & Process Improvement",
    copy: "Eliminate inefficiencies, cut unnecessary costs, and build systems that scale. We optimize your operations so your business runs smoothly, even as it grows.",
  },
  {
    idx: "04",
    title: "Market Entry & Expansion",
    copy: "Planning to enter a new market or launch a new product? We handle the research, feasibility, licensing guidance, and go-to-market strategy so you can expand with confidence.",
  },
  {
    idx: "05",
    title: "Financial & Business Advisory",
    copy: "From financial planning and budgeting to business restructuring and investor readiness, we give you the numbers-driven clarity you need to make bold decisions safely.",
  },
  {
    idx: "06",
    title: "Startup Support & Incubation",
    copy: "Turning an idea into a business is hard. We support founders with business model design, pitch preparation, funding strategy, and everything in between.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-widest2 text-brass">Our services</span>
          <h2 className="mt-3.5 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-navy">
            Six ways we move your business forward.
          </h2>
          <p className="mt-4 text-[#555f6c]">
            Whichever stage you&apos;re at — setting up, running, or scaling — these are the
            engagements we run most often.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px border border-line-light bg-line-light sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.idx} className="bg-cream p-9 transition-colors hover:bg-[#EFEDE6]">
              <span className="mb-5 block font-mono text-xs text-brass">{s.idx}</span>
              <h3 className="mb-3 font-display text-xl font-medium text-navy">{s.title}</h3>
              <p className="text-[0.92rem] text-[#5b6472]">{s.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
