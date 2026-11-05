import type { IconType } from "react-icons";
import {
  FaBuilding,
  FaChartLine,
  FaCalculator,
  FaFileInvoiceDollar,
  FaShieldHalved,
  FaUsers,
  FaLaptopCode,
  FaCheck,
} from "react-icons/fa6";

type Service = {
  idx: string;
  title: string;
  Icon: IconType;
  points: string[];
};

const SERVICES: Service[] = [
  {
    idx: "01",
    title: "Company Incorporation",
    Icon: FaBuilding,
    points: [
      "Entity structuring & jurisdiction advisory",
      "Investment licensing & CR registration",
      "Articles of Association & legal set-up",
      "Bank, ZATCA, GOSI & Qiwa registrations",
    ],
  },
  {
    idx: "02",
    title: "Strategic FP&A",
    Icon: FaChartLine,
    points: [
      "Business planning & growth strategy",
      "Financial modeling & scenario analysis",
      "Capital, cash flow & liquidity strategy",
      "Restructuring & turnaround advisory",
    ],
  },
  {
    idx: "03",
    title: "Accounting & Reporting",
    Icon: FaCalculator,
    points: [
      "Finance function design & optimization",
      "Reporting frameworks aligned to IFRS",
      "ZATCA e-invoicing readiness & rollout",
      "KPI dashboards for decision-making",
    ],
  },
  {
    idx: "04",
    title: "Audit & Compliance Support Services",
    Icon: FaFileInvoiceDollar,
    points: [
      "Zakat, income tax & VAT strategy",
      "Transfer pricing & WHT advisory",
      "Internal controls & risk assessment",
      "Statutory & internal audit readiness",
    ],
  },
  {
    idx: "05",
    title: "E-Administration Support",
    Icon: FaShieldHalved,
    points: [
      "Process digitization & workflow redesign",
      "Government portal & licensing management",
      "Virtual back-office operating models",
      "Regulatory compliance roadmaps",
    ],
  },
  {
    idx: "06",
    title: "Payroll / HR",
    Icon: FaUsers,
    points: [
      "HR policy & organizational structure",
      "Saudization & Qiwa compliance strategy",
      "WPS, Mudad & GOSI process management",
      "Workforce cost & EOSB planning",
    ],
  },
  {
    idx: "07",
    title: "IT & Digital Marketing Support",
    Icon: FaLaptopCode,
    points: [
      "Systems research, analysis & selection",
      "ERP & tech stack design and build",
      "Digital growth strategy, SEO & social",
      "Data-driven campaign planning & delivery",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-gradient-to-tr from-navy to-ink py-24 text-cream sm:py-28"
    >
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="mb-14 max-w-[640px]">
          <span className="font-mono text-xs uppercase tracking-widest2 text-brass">WHAT WE DO</span>
          <h2 className="mt-3.5 font-display text-[clamp(1.8rem,3vw,2.5rem)] font-medium text-cream">
            Our Services
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {SERVICES.map(({ idx, title, Icon, points }, i) => {
            const isLastOdd = i === SERVICES.length - 1 && SERVICES.length % 2 === 1;

            return (
              <li
                key={idx}
                className={`overflow-hidden rounded-2xl border border-brass/30 bg-cream transition duration-200 hover:-translate-y-0.5 hover:border-brass hover:shadow-xl hover:shadow-black/30 ${
                  isLastOdd ? "md:col-span-2" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 border-b border-brass/30 bg-navy px-5 py-4">
                  <span className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-full border border-brass">
                    <Icon className="text-lg text-brass" aria-hidden="true" />
                  </span>
                  <h3 className="flex-1 font-display text-lg font-medium leading-snug text-brass">
                    {title}
                  </h3>
                  <span className="font-mono text-xs tracking-widest text-brass/60">{idx}</span>
                </div>

                {/* Body */}
                <ul
                  className={`grid gap-3 px-6 py-5 ${
                    isLastOdd ? "md:grid-flow-col md:grid-cols-2 md:grid-rows-2 md:gap-x-10" : ""
                  }`}
                >
                  {points.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-3 text-[0.95rem] leading-snug text-[#3f4856]"
                    >
                      <FaCheck
                        className="mt-[0.3em] shrink-0 text-[0.8rem] text-brass"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}