"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import plot_1 from "../../public/images/plot_1.png"

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const plots = [
  {
    type: "Villa Plot",
    size: "1,800 – 3,600 sq.ft",
    price: "₹1 Cr",
    tag: "Entry",
     img: "/images/now_2.png",
    features: ["Tree-lined boundary", "Corner plots available"],
    label: "Luxury Villa with Garden"
  },
  {
    type: "Premium Villa",
    size: "3,601 – 7,200 sq.ft",
    price: "₹2.4 Cr",
    tag: "Popular",
    img: "/images/now_1.png",
    features: ["Park-facing options", "Wide 30ft road access"],
    featured: true,
    label: "Modern Villa with Pool"
  },
{
  type: "Estate Plot",
  size: "7,201 – 10,800 sq.ft",
  price: "₹4.8 Cr",
  tag: "Exclusive",
  img: "/images/new_1.png", // ✅ correct
  features: ["Private garden zone", "Pond-view orientation"],
  label: "Villa Amidst Nature"
},
];

// Card Component with its own scroll animation
function PlotCard({ plot, index }: { plot: typeof plots[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { 
    once: false, // Important: allows animation on every scroll
    amount: 0.15,
    margin: "0px 0px -50px 0px" // Triggers slightly before the card enters viewport
  });

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      whileHover={{ 
        y: -6,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={`group relative rounded-xl overflow-hidden transition-all duration-500 ${
        plot.featured 
          ? 'bg-gradient-to-br from-gold-400/15 via-forest-900 to-gold-400/5 border-gold-400/30 shadow-[0_0_40px_rgba(201,168,76,0.08)] hover:shadow-[0_0_60px_rgba(201,168,76,0.15)]' 
          : 'bg-forest-900/50 border-white/5 hover:border-gold-400/20'
      } border`}
    >
      {/* Image Section - Natural Villa Images */}
      <div className="relative overflow-hidden h-44 md:h-48">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('${plot.img}')` }}
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent" />
        
        {/* Image Label - Nature Villa */}
        <div className="absolute bottom-12 left-3 right-3">
          <div className="flex items-center gap-2">
            <span className="w-6 h-px bg-gold-400/40"></span>
            <span className="font-mono text-[6px] text-cream/40 uppercase tracking-[0.15em]">
              {plot.label}
            </span>
          </div>
        </div>
        
        {/* Tag Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className={`font-mono text-[7px] tracking-[0.2em] uppercase px-2.5 py-1 rounded-md ${
            plot.featured
              ? 'bg-gold-400 text-forest-950 shadow-lg shadow-gold-400/30'
              : 'bg-forest-950/80 backdrop-blur-sm text-cream/60 border border-white/10'
          }`}>
            {plot.tag}
          </span>
        </div>

        {/* Featured Badge */}
        {plot.featured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="flex items-center gap-1 bg-gold-400/20 backdrop-blur-sm text-gold-300 font-mono text-[6px] tracking-[0.15em] uppercase px-2 py-1 rounded-md border border-gold-400/30">
              <span className="w-1 h-1 rounded-full bg-gold-400 animate-pulse"></span>
              Best Value
            </span>
          </div>
        )}

        {/* Price - Compact */}
        <div className="absolute bottom-3 left-3">
          <div className="font-mono text-[7px] text-cream/40 uppercase tracking-[0.15em]">Starting at</div>
          <div className="font-serif text-xl text-gold-300 font-light">{plot.price}</div>
        </div>

        {/* Size - Compact */}
        <div className="absolute bottom-3 right-3 bg-forest-950/60 backdrop-blur-sm px-2.5 py-1.5 rounded-md border border-white/5">
          <div className="font-mono text-[6px] text-cream/40 uppercase tracking-[0.1em]">Size</div>
          <div className="font-sans text-[10px] text-cream/70 font-medium">{plot.size}</div>
        </div>
      </div>

      {/* Content - Compact */}
      <div className="p-4 md:p-5">
        <h3 className="font-serif text-lg text-cream font-light mb-2">
          {plot.type}
        </h3>

        <ul className="space-y-1.5 mb-4">
          {plot.features.map((f, j) => (
            <li key={j} className="flex items-start gap-2.5">
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold-400/40 flex-shrink-0" />
              <span className="font-sans font-light text-cream/50 text-xs">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA - Compact */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/5">
          <a
            href="#contact"
            className={`flex-1 text-center font-sans text-[9px] tracking-[0.15em] uppercase px-4 py-2 rounded-lg transition-all duration-300 ${
              plot.featured
                ? 'bg-gold-400 hover:bg-gold-300 text-forest-950 font-bold shadow-lg shadow-gold-400/20 hover:shadow-gold-400/40'
                : 'border border-white/15 hover:border-gold-400/50 text-cream/60 hover:text-cream hover:bg-white/5'
            }`}
          >
            Enquire
          </a>
          <button className="p-2 rounded-lg border border-white/10 hover:border-gold-400/30 text-cream/30 hover:text-gold-400 transition-all duration-300 hover:bg-white/5">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

      {/* Featured Glow */}
      {plot.featured && (
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold-400/10 rounded-full blur-2xl"></div>
      )}
    </motion.div>
  );
}

export default function Plots() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="plots" 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-400/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-400/5 blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Header - Compact */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-10 h-px bg-gradient-to-r from-transparent to-gold-400/60"></span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-gold-400 uppercase font-medium">
              Plot Offerings
            </span>
            <span className="w-10 h-px bg-gradient-to-l from-transparent to-gold-400/60"></span>
          </div>
          <h2 className="font-serif font-light text-cream text-[clamp(28px,3.5vw,42px)] leading-[1.1]">
            Choose Your Ideal <span className="text-gold-300">Wellness Residence</span>
          </h2>
        </motion.div>

        {/* Cards Grid - Each card animates independently on scroll */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {plots.map((plot, index) => (
            <PlotCard key={index} plot={plot} index={index} />
          ))}
        </div>

        {/* Bottom CTA - Compact */}
        <motion.div
          className="mt-10 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-4 bg-white/[0.03] backdrop-blur-sm rounded-full px-5 py-2.5 border border-white/5 hover:border-gold-400/20 transition-colors duration-500">
            <span className="font-mono text-[8px] text-cream/40 uppercase tracking-[0.15em]">
              Looking for something specific?
            </span>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-sans text-[10px] tracking-[0.15em] uppercase transition-colors"
            >
              Talk to our team
              <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}