"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    }
  }
};

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [activeImage, setActiveImage] = useState(0);

  // Nature Villa Images
  const villaImages = [
    // {
    //   url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=80",
    //   alt: "Luxury villa surrounded by nature",
    //   label: "Modern Villa with Greenery"
    // },
    {
      url: "/images/new_1.png",
      alt: "Premium villa in natural setting",
      label: "Villa Amidst Nature"
    },
    {
      url: "/images/new_2.png",
      alt: "Villa with lush garden",
      label: "Garden Villa"
    },
    {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80",
      alt: "Modern villa with natural landscape",
      label: "Nature-Inspired Villa"
    },
  ];

  // Auto rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % villaImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { 
      icon: "🏡", 
      label: "Plot Range", 
      value: "1,800–10,800 sq.ft",
      description: "Flexible sizes available"
    },
    { 
      icon: "🌳", 
      label: "Location", 
      value: "Vengambakkam, ECR",
      description: "Prime East Coast Road"
    },
    { 
      icon: "📏", 
      label: "Land Area", 
      value: "12+ Acres",
      description: "Green reserve"
    },
    { 
      icon: "✅", 
      label: "Approvals", 
      value: "DTCP + RERA",
      description: "Fully approved"
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#f5efe8] via-[#ede6db] to-[#e5ddd0]"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-200/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-200/15 blur-3xl"></div>
        
        {/* Subtle pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-gold-400/60"></span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-600 uppercase font-medium">
              Aranya Farms
            </span>
            <span className="w-12 h-px bg-gold-400/60"></span>
          </div>
          <h2 className="font-serif font-light text-forest-900 text-[clamp(32px,4vw,52px)] leading-[1.1]">
            Ram Reddy <span className="text-gold-600">Overview</span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Nature Villa Images */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInLeft}
          >
            <div className="relative">
              {/* Main Image Slideshow */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-forest-950/20">
                {villaImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: activeImage === index ? 1 : 0,
                      scale: activeImage === index ? 1 : 1.05,
                    }}
                    transition={{
                      opacity: { duration: 1, ease: "easeInOut" },
                      scale: { duration: 6, ease: "easeOut" }
                    }}
                    style={{
                      backgroundImage: `url(${img.url})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 via-transparent to-transparent"></div>
                    
                    {/* Image Label */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-px bg-gold-400/60"></span>
                        <span className="font-mono text-[9px] text-cream/60 uppercase tracking-[0.2em]">
                          {img.label}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Image Navigation Dots */}
                <div className="absolute bottom-4 right-4 flex gap-2">
                  {villaImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`transition-all duration-500 rounded-full ${
                        activeImage === index 
                          ? 'w-6 h-1.5 bg-gold-400' 
                          : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Info Card */}
              <motion.div
                className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-forest-900/95 backdrop-blur-xl p-5 md:p-6 rounded-xl shadow-2xl shadow-forest-950/30 border border-gold-400/20 max-w-[180px]"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-mono text-[8px] text-cream/40 uppercase tracking-[0.2em]">Plot Range</div>
                <div className="font-serif text-xl md:text-2xl text-gold-300 font-light mt-1">
                  1,800–10,800
                </div>
                <div className="font-sans text-[10px] text-cream/50 mt-0.5">sq.ft</div>
                <div className="mt-2 pt-2 border-t border-gold-400/10">
                  <div className="font-mono text-[8px] text-cream/30 uppercase tracking-[0.15em]">
                    Flexible sizes available
                  </div>
                </div>
              </motion.div>

              {/* Premium Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gold-400 text-forest-950 px-4 py-2 rounded-lg shadow-lg shadow-gold-400/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <span className="font-bold text-xs tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-950 animate-pulse"></span>
                  Premium Living
                </span>
              </motion.div>

              {/* Decorative corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold-400/30 rounded-tl-2xl"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-gold-400/30 rounded-br-2xl"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="relative"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
          >
            {/* The Address Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 mb-4 bg-gold-400/10 px-4 py-2 rounded-full border border-gold-400/20"
              variants={fadeInUp}
            >
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-gold-600 uppercase font-medium">
                The Address
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 
              className="font-serif font-light text-forest-900 text-[clamp(28px,3.5vw,44px)] leading-[1.1] mb-6"
              variants={fadeInUp}
            >
              When a home feels like{" "}
              <span className="italic text-gold-600 relative inline-block">
                a destination.
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-transparent rounded-full"></span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.div 
              className="space-y-4 text-forest-700/70 font-sans font-light leading-relaxed text-base md:text-lg"
              variants={fadeInUp}
            >
              <p className="relative pl-5 border-l-2 border-gold-400/30">
                A coastal residential enclave near Mahabalipuram — a place you return to, 
                where weekends slow down and mornings stretch longer.
              </p>
            </motion.div>

            {/* CTA Buttons with Golden Shine */}
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4"
              variants={fadeInUp}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 text-forest-950 font-bold text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-300 shadow-lg shadow-gold-400/30 hover:shadow-gold-400/50 hover:-translate-y-0.5 overflow-hidden"
              >
                {/* Golden Shine Effect */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 flex items-center gap-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Download Brochure
                </span>
              </a>
              
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-gold-400/30 hover:border-gold-400 text-forest-600 hover:text-gold-600 font-sans text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-gold-50/50 relative overflow-hidden"
              >
                {/* Subtle golden shine for secondary button */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gold-200/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Enquire Now
                </span>
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="mt-6 flex flex-wrap items-center gap-4 pt-5 border-t border-forest-100/50"
              variants={fadeInUp}
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] text-forest-500 font-medium tracking-wide">DTCP Approved</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] text-forest-500 font-medium tracking-wide">RERA Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-[10px] text-forest-500 font-medium tracking-wide">12+ Acres</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-16 pt-8 border-t border-forest-100/50 flex items-center justify-between"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          {/* <span className="font-mono text-[8px] text-stone-light/50 uppercase tracking-[0.3em]">
            Aranya Farms · ECR · Est. 2024
          </span> */}
          {/* <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-gold-400/30"></span>
            <span className="font-mono text-[8px] text-gold-400/50 uppercase tracking-[0.3em]">
              Nature Living
            </span>
            <span className="w-8 h-px bg-gold-400/30"></span>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}