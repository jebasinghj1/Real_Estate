"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    }
  }
};

const landmarks = [
  { name: "Mahabalipuram", dist: "8 km" },
  { name: "Puttipalam", dist: "8 km" },
  { name: "Kalambakkam", dist: "14 km" },
  { name: "OMR Junction", dist: "38 km" },
  { name: "Chennai City", dist: "55 km" },
  { name: "Araya Farms", dist: "62 km" },
  { name: "ECR Beach", dist: "1 km" },
];

export default function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  return (
    <section 
      id="location" 
      ref={sectionRef}
      className="relative min-h-screen py-8 md:py-12 overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-400/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/15 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-300/10 blur-3xl"></div>
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Map Section */}
          <motion.div 
            className="lg:col-span-3 relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(180,120,30,0.4)] shadow-[inset_0_1px_0_0_rgba(255,215,0,0.2)] border-2 border-gold-400/40 hover:border-gold-400/70 transition-all duration-500 group bg-white">
              <div className="w-full aspect-[4/3] bg-forest-100 relative">
                {!isMapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-orange-50">
                    <div className="w-8 h-8 border-2 border-gold-400/30 border-t-gold-600 rounded-full animate-spin"></div>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62456.16!2d80.15!3d12.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5268efb62fcba3%3A0xa2a1c6b06a28ef50!2sMahabalipuram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aranya Farms Location Map"
                  className="absolute inset-0 w-full h-full"
                  onLoad={() => setIsMapLoaded(true)}
                />
              </div>
              
              {/* Map Glow Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute inset-0 bg-gradient-to-tr from-gold-400/10 via-transparent to-gold-400/10"></div>
              </div>
              
              {/* Address Overlay - Darker for contrast */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent p-4 md:p-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-400/30 to-gold-500/20 backdrop-blur-sm border-2 border-gold-400/40 flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-400/30">
                    <svg className="w-4 h-4 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-mono text-[8px] text-gold-400 font-bold uppercase tracking-[0.25em]">Site Address</div>
                    <div className="font-sans text-white/90 text-xs font-medium leading-relaxed">
                      Vengambakkam Village, ECR, Kanchipuram Dist
                    </div>
                  </div>
                </div>
              </div>

              {/* Corner accents with glow */}
              <div className="absolute top-0 left-0 w-14 h-14 border-t-3 border-l-3 border-gold-400/50 rounded-tl-2xl shadow-[inset_0_0_30px_rgba(201,168,76,0.2)]"></div>
              <div className="absolute bottom-0 right-0 w-14 h-14 border-b-3 border-r-3 border-gold-400/50 rounded-br-2xl shadow-[inset_0_0_30px_rgba(201,168,76,0.2)]"></div>
              
              {/* Glow effect on corners */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-gold-400/15 to-transparent rounded-tl-2xl blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-gold-400/15 to-transparent rounded-br-2xl blur-2xl"></div>

              {/* Gold line on top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>

          {/* Distances Section */}
          <motion.div 
            className="lg:col-span-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRight}
          >
            <div className="bg-gradient-to-br from-white to-orange-50/90 backdrop-blur-md rounded-2xl border-2 border-gold-400/30 p-5 md:p-6 shadow-[0_20px_60px_-15px_rgba(180,120,30,0.3)] shadow-[inset_0_1px_0_0_rgba(255,215,0,0.15)] hover:shadow-[0_25px_80px_-15px_rgba(180,120,30,0.4)] transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-gold-400 to-gold-600 rounded-full"></div>
                <span className="font-mono text-[9px] text-forest-800 font-bold uppercase tracking-[0.25em]">
                  Key Distances
                </span>
                <span className="flex-1 h-0.5 bg-gradient-to-r from-gold-400/40 to-transparent"></span>
              </div>

              <div className="grid grid-cols-2 gap-1">
                {landmarks.map((lm, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="group flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gradient-to-r hover:from-gold-400/10 hover:to-transparent transition-all duration-300 border border-transparent hover:border-gold-400/30 shadow-sm hover:shadow-[0_4px_15px_-5px_rgba(201,168,76,0.2)]"
                  >
                    <span className="font-sans text-forest-800 font-semibold text-[10px] group-hover:text-gold-700 transition-colors">
                      {lm.name}
                    </span>
                    <span className="font-serif text-gold-700 font-bold text-[12px] group-hover:text-gold-600 group-hover:scale-110 transition-all duration-300 bg-gold-400/10 px-2 py-0.5 rounded-full group-hover:bg-gold-400/20">
                      {lm.dist}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Direction CTA */}
              <motion.div 
                className="mt-4 pt-4 border-t-2 border-gold-400/20"
                variants={fadeInUp}
              >
                <a
                  href="https://maps.google.com/?q=Mahabalipuram+Tamil+Nadu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold text-[10px] tracking-[0.25em] uppercase px-5 py-3 rounded-xl transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(201,168,76,0.5)] hover:shadow-[0_20px_40px_-10px_rgba(201,168,76,0.7)] hover:-translate-y-1 border border-gold-400/30"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span>Get Directions</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div 
              className="mt-3 grid grid-cols-3 gap-2"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-white to-orange-50/80 backdrop-blur-sm rounded-xl p-3 text-center border-2 border-gold-400/20 hover:border-gold-500/50 transition-all duration-300 shadow-[0_8px_25px_-10px_rgba(180,120,30,0.2)] hover:shadow-[0_15px_40px_-10px_rgba(180,120,30,0.35)] hover:-translate-y-1">
                <div className="font-serif text-2xl text-gold-600 font-bold">55</div>
                <div className="font-mono text-[7px] text-forest-600/60 font-bold uppercase tracking-[0.15em]">Km to City</div>
              </div>
              <div className="bg-gradient-to-br from-white to-orange-50/80 backdrop-blur-sm rounded-xl p-3 text-center border-2 border-gold-400/20 hover:border-gold-500/50 transition-all duration-300 shadow-[0_8px_25px_-10px_rgba(180,120,30,0.2)] hover:shadow-[0_15px_40px_-10px_rgba(180,120,30,0.35)] hover:-translate-y-1">
                <div className="font-serif text-2xl text-gold-600 font-bold">1</div>
                <div className="font-mono text-[7px] text-forest-600/60 font-bold uppercase tracking-[0.15em]">Km to Beach</div>
              </div>
              <div className="bg-gradient-to-br from-white to-orange-50/80 backdrop-blur-sm rounded-xl p-3 text-center border-2 border-gold-400/20 hover:border-gold-500/50 transition-all duration-300 shadow-[0_8px_25px_-10px_rgba(180,120,30,0.2)] hover:shadow-[0_15px_40px_-10px_rgba(180,120,30,0.35)] hover:-translate-y-1">
                <div className="font-serif text-2xl text-gold-600 font-bold">8</div>
                <div className="font-mono text-[7px] text-forest-600/60 font-bold uppercase tracking-[0.15em]">Km to Mahabs</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Location Highlights - Bottom Bar */}
        <motion.div
          className="mt-4 pt-3 border-t-2 border-gold-400/20 grid grid-cols-2 md:grid-cols-4 gap-3"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center group bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm rounded-xl p-3 border-2 border-gold-400/20 hover:border-gold-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(180,120,30,0.2)] hover:-translate-y-0.5">
            <div className="text-xl font-serif font-bold text-gold-600 group-hover:text-gold-500 transition-colors">ECR</div>
            <div className="font-sans text-[8px] text-forest-600/60 font-semibold uppercase tracking-[0.15em] mt-1 group-hover:text-forest-600/80 transition-colors">Prime Corridor</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center group bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm rounded-xl p-3 border-2 border-gold-400/20 hover:border-gold-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(180,120,30,0.2)] hover:-translate-y-0.5">
            <div className="text-xl font-serif font-bold text-gold-600 group-hover:text-gold-500 transition-colors">DTCP</div>
            <div className="font-sans text-[8px] text-forest-600/60 font-semibold uppercase tracking-[0.15em] mt-1 group-hover:text-forest-600/80 transition-colors">Approved Layout</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center group bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm rounded-xl p-3 border-2 border-gold-400/20 hover:border-gold-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(180,120,30,0.2)] hover:-translate-y-0.5">
            <div className="text-xl font-serif font-bold text-gold-600 group-hover:text-gold-500 transition-colors">RERA</div>
            <div className="font-sans text-[8px] text-forest-600/60 font-semibold uppercase tracking-[0.15em] mt-1 group-hover:text-forest-600/80 transition-colors">Registered</div>
          </motion.div>
          <motion.div variants={fadeInUp} className="text-center group bg-gradient-to-br from-white/80 to-orange-50/80 backdrop-blur-sm rounded-xl p-3 border-2 border-gold-400/20 hover:border-gold-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(180,120,30,0.2)] hover:-translate-y-0.5">
            <div className="text-xl font-serif font-bold text-gold-600 group-hover:text-gold-500 transition-colors">12+</div>
            <div className="font-sans text-[8px] text-forest-600/60 font-semibold uppercase tracking-[0.15em] mt-1 group-hover:text-forest-600/80 transition-colors">Acres of Green</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}