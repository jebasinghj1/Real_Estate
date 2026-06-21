"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
  useMotionTemplate,
} from "framer-motion";

const EASE_LUXE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
  { num: "₹1Cr", label: "Starting price" },
  { num: "DTCP", label: "Approved" },
  { num: "RERA", label: "Registered" },
];

// Premium Background Images
const premiumImages = [
  {
    url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=80",
    alt: "Luxury modern villa with pool"
  },
  {
    url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1800&q=80",
    alt: "Premium luxury home exterior"
  },
  {
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=80",
    alt: "Modern luxury villa architecture"
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80",
    alt: "Premium villa with garden"
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlight = useMotionTemplate`
    radial-gradient(
      800px circle at ${mouseX}px ${mouseY}px,
      rgba(255,215,0,0.06),
      transparent 80%
    )
  `;

  const springConfig = { damping: 50, stiffness: 100 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, shouldReduceMotion]);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % premiumImages.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [shouldReduceMotion]);

  useEffect(() => {
    let loadedCount = 0;
    premiumImages.forEach((img) => {
      const image = new Image();
      image.src = img.url;
      image.onload = image.onerror = () => {
        loadedCount++;
        if (loadedCount === premiumImages.length) {
          setIsLoading(false);
        }
      };
    });
  }, []);

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a0a0a]"
      style={{ perspective: "1200px" }}
    >
      {/* Background Images with Golden Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {premiumImages.map((img, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{
                opacity: currentImageIndex === index ? 1 : 0,
                scale: currentImageIndex === index ? 1 : 1.05,
              }}
              transition={{
                opacity: { duration: 1.8, ease: "easeInOut" },
                scale: { duration: 8, ease: "easeOut" }
              }}
              style={{
                backgroundImage: `url(${img.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          
          {isLoading && (
            <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center">
              <div className="w-12 h-12 border-t-2 border-yellow-500 rounded-full animate-spin" />
            </div>
          )}
        </div>

        {/* Golden Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/60 via-[#1a1200]/40 to-[#0a0a0a]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40" />
        
        {/* Golden Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-yellow-500/10 via-yellow-400/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-yellow-500/5 blur-3xl" />

        {/* Spotlight effect */}
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-14 py-12 md:py-20 w-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        {/* Top Badge */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: EASE_LUXE }}
        >
          <motion.span
            className="h-px bg-yellow-500"
            initial={{ width: 0 }}
            animate={{ width: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE_LUXE }}
          />
          <span className="font-mono text-[11px] tracking-[0.3em] text-yellow-500/80 uppercase font-medium">
            ECR · Mahabalipuram · Est. 2024
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="font-serif font-light text-white leading-[0.9] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: EASE_LUXE }}
        >
          <span className="block text-[clamp(56px,8vw,130px)] tracking-tight drop-shadow-lg">
            An escape
          </span>
          <span className="block text-[clamp(48px,7vw,120px)] italic text-yellow-400 font-normal drop-shadow-[0_4px_20px_rgba(255,215,0,0.3)]">
            into green.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-sans font-light text-white/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: EASE_LUXE }}
        >
          Gated, low-density farm villas & plots, minutes from the Mahabalipuram coast.
        </motion.p>

        {/* Stats Panel with Running Neon Border Effect */}
        <motion.div
          className="max-w-xl mb-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: EASE_LUXE }}
        >
          {/* Running Neon Border Effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            {/* Top border running */}
            <motion.div
              className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              style={{ width: '100%' }}
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            {/* Right border running */}
            <motion.div
              className="absolute top-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-yellow-400 to-transparent"
              style={{ height: '100%' }}
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.75,
              }}
            />
            
            {/* Bottom border running */}
            <motion.div
              className="absolute bottom-0 right-0 h-[2px] bg-gradient-to-l from-transparent via-yellow-400 to-transparent"
              style={{ width: '100%' }}
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
            
            {/* Left border running */}
            <motion.div
              className="absolute bottom-0 left-0 w-[2px] bg-gradient-to-t from-transparent via-yellow-400 to-transparent"
              style={{ height: '100%' }}
              animate={{
                y: ['100%', '-100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 2.25,
              }}
            />
          </div>

          {/* Neon Glow Border */}
          <div className="absolute inset-0 rounded-2xl border border-yellow-400/10 pointer-events-none"></div>
          <div className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(255,215,0,0.03)] pointer-events-none"></div>

          <div className="grid grid-cols-3 gap-4 relative z-10">
            {stats.map((s, i) => (
              <motion.div
                key={s.num}
                className={`flex flex-col justify-center ${i > 0 ? "pl-6 border-l border-white/10" : ""}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="font-serif text-2xl md:text-3xl text-yellow-400 font-light tracking-tight">
                  {s.num}
                </div>
                <div className="font-mono text-[9px] text-white/40 uppercase tracking-[0.2em] mt-1.5">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: EASE_LUXE }}
        >
          {/* WhatsApp Button */}
          {/* <motion.a
            href="https://wa.me/yournumber"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20b85f] text-white font-sans text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Enquire on WhatsApp</span>
          </motion.a> */}

          {/* Book Site Visit Button */}
          {/* <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-yellow-400/40 hover:border-yellow-400/80 text-white hover:text-white font-sans text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 bg-white/5 hover:bg-yellow-400/10 backdrop-blur-sm hover:-translate-y-1"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Book Site Visit</span>
          </motion.a> */}
        </motion.div>

        {/* Bottom Trust Line */}
        <motion.div
          className="mt-8 flex items-center gap-6 text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1, ease: EASE_LUXE }}
        >
          {/* <span className="font-mono text-[9px] tracking-[0.15em] uppercase">
            DTCP Approved
          </span> */}
          {/* <span className="w-px h-4 bg-white/10" />
          <span className="font-mono text-[9px] tracking-[0.15em] uppercase">
            RERA TN/35/Regularisation-Layout/1089/2024
          </span> */}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[8px] text-white/20 uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-4 h-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Base Glow Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
    </motion.section>
  );
}
