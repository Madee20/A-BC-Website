import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-ink py-20 pb-8 text-sm text-slate">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10">
        <div className="grid grid-cols-1 gap-10 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="mb-5 inline-flex items-center">
              <Image
                src="/logo.svg"
                alt="A&BC — Accelerators & Business Consultants"
                width={573}
                height={160}
                className="h-12 w-auto"
              />
            </a>
            <p className="max-w-[32ch] text-[0.88rem] text-slate">
              Accelerators &amp; Business Consultants — your end-to-end partner for setup,
              operations, and growth in Saudi Arabia.
            </p>
          </div>

          <div>
            <h5 className="mb-[1.125rem] text-xs font-medium uppercase tracking-wide text-cream">Saudi Arabia Office</h5>
            <ul className="space-y-2.5">
              <li>Building No 25, Adam Bin Rabiea Street, Malaz District, Riyadh 12831</li>
              <li>Mob: 0538964549 / 0533843562</li>
              
            </ul>
          </div>

         <div>
            <h5 className="mb-[1.125rem] text-xs font-medium uppercase tracking-wide text-cream">Sri Lanka Office</h5>
            <ul className="space-y-2.5">
              <li>29/A, Circular Road, Mount Lavinia</li>
              <li>Mob: 0778192595</li>
                            
            </ul>
          </div>

          <div>
            <h5 className="mb-[1.125rem] text-xs font-medium uppercase tracking-wide text-cream">Contact</h5>
            <ul className="space-y-2.5">
              <li><a href="https://wa.me/966538964549" className="hover:text-cream">WhatsApp</a></li>
              <li><a href="#contact" className="hover:text-cream">Book a consultation</a></li>
              <li>mazinwc@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3.5 pt-6 text-xs">
          <span>&copy; 2026 A&amp;BC — Accelerators &amp; Business Consultants. All rights reserved.</span>
         
        </div>
      </div>
    </footer>
  );
}
