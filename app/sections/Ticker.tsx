"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const items = [
  "DTCP Approved",
  "RERA Registered",
  "Gated Community",
  "24/7 Security",
  "ECR Frontage",
  "1 Hr from Chennai",
  "Low-Density Living",
  "Farm Villas",
  "Villa Plots",
  "Nature Retreat",
];

export default function Ticker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationId: number;
    let position = 0;

    const animate = () => {
      position -= 0.5;
      if (position < -ticker.scrollWidth / 2) {
        position = 0;
      }
      ticker.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 py-4 md:py-5 overflow-hidden border-y border-gold-400/10">
      {/* Decorative Glow Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent"></div>
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-forest-950 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-forest-950 to-transparent"></div>
      </div>

      {/* Main Ticker Container */}
      <div className="relative overflow-hidden">
        <div
          ref={tickerRef}
          className="flex items-center gap-0 whitespace-nowrap will-change-transform"
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-6 md:gap-8 px-4 md:px-6"
            >
              {/* Item with Neon Glow Effect */}
              <div className="group relative">
                <span className="font-mono text-[11px] md:text-[12px] tracking-[0.25em] uppercase text-gold-400/80 hover:text-gold-300 transition-colors duration-300 font-medium">
                  {item}
                </span>
                {/* Subtle glow on hover */}
                <span className="absolute inset-0 text-gold-400/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  {item}
                </span>
              </div>

              {/* Modern Separator */}
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-gold-400/30 animate-pulse"></span>
                <span className="w-6 h-px bg-gradient-to-r from-gold-400/30 via-gold-400/10 to-transparent"></span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating particles for atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold-400/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}