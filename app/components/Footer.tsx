"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-100/90 via-amber-50/90 to-yellow-50/90 border-t-2 border-gold-400/40">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col leading-none mb-4">
              <span className="font-serif text-3xl text-forest-900 font-light tracking-wide">Aranya</span>
              <span className="font-mono text-[11px] tracking-[0.3em] text-gold-700 font-bold uppercase mt-1">
                Farms · ECR
              </span>
            </div>
            <p className="font-sans text-forest-800/90 text-sm leading-relaxed max-w-xs font-medium">
              A gated collection of farm villas and villa plots near Mahabalipuram, by Ram Reddy Developers.
            </p>
            <div className="mt-6 flex gap-4">
              {["FB", "IG", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-10 h-10 border-2 border-gold-500/30 hover:border-gold-600 flex items-center justify-center font-mono text-[11px] text-forest-700/70 hover:text-gold-700 hover:bg-gold-500/10 transition-all duration-300 rounded-xl font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-mono text-[11px] text-gold-700 font-bold uppercase tracking-[0.3em] mb-5">Navigate</div>
            <ul className="space-y-3">
              {["About", "Plots", "Amenities", "Location", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="font-sans text-forest-800/80 hover:text-gold-700 text-sm font-semibold transition-colors duration-300"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <div className="font-mono text-[11px] text-gold-700 font-bold uppercase tracking-[0.3em] mb-5">Approvals</div>
            <ul className="space-y-3">
              <li className="font-sans text-forest-800/80 text-sm font-semibold">DTCP Approved</li>
              <li className="font-sans text-forest-800/80 text-sm font-semibold">RERA Registered</li>
              <li className="font-sans text-forest-800/80 text-sm font-semibold">Layout No: DP/12/2024</li>
              <li className="font-sans text-forest-800/80 text-sm font-semibold">RERA No: TN/XX/YYYY</li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-gold-400/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-forest-700/60 font-semibold tracking-[0.2em] uppercase">
            © 2024 Ram Reddy Developers. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-forest-700/60 font-semibold tracking-[0.2em] uppercase">
            Prices subject to change. T&C apply.
          </p>
        </div>
      </div>
    </footer>
  );
}