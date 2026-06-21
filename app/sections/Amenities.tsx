"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const amenities = [
  {
    icon: "🌿",
    title: "Landscaped Parks",
    desc: "Native-species parks woven through the community for daily walks and quiet mornings.",
    color: "from-emerald-400 to-green-500"
  },
  {
    icon: "🏊",
    title: "Lap Pool & Deck",
    desc: "A 25-metre pool set amid palms, open from dawn — for residents and their guests.",
    color: "from-blue-400 to-cyan-500"
  },
  {
    icon: "🔐",
    title: "24/7 Gated Security",
    desc: "Boom barriers, CCTV throughout, and manned security at every entry point.",
    color: "from-purple-400 to-indigo-500"
  },
  {
    icon: "⚡",
    title: "Underground Utilities",
    desc: "Power, water, and broadband conduits laid underground for an uncluttered streetscape.",
    color: "from-yellow-400 to-orange-500"
  },
  {
    icon: "🌊",
    title: "Rainwater Harvesting",
    desc: "Community-wide recharge pits and retention ponds replenish the water table naturally.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: "🛤️",
    title: "Wide Internal Roads",
    desc: "30ft BT roads with streetlighting connect every plot — no narrow lanes, no dead ends.",
    color: "from-slate-400 to-gray-500"
  },
  {
    icon: "🏡",
    title: "Clubhouse",
    desc: "A resident clubhouse with lounge, co-work nooks, and an events terrace.",
    color: "from-rose-400 to-pink-500"
  },
  {
    icon: "🌱",
    title: "Organic Orchard",
    desc: "A shared mango and coconut grove maintained by the community trust.",
    color: "from-lime-400 to-green-500"
  },
];

// Card Component with 3D Animation
function AmenityCard({ amenity, index }: { amenity: typeof amenities[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { 
    once: false,
    amount: 0.15,
    margin: "0px 0px -50px 0px"
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const rotateX = mousePosition.y * 12;
  const rotateY = -mousePosition.x * 12;
  const translateZ = isHovered ? 40 : 0;

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative rounded-2xl transition-all duration-200"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glowing Background Effect */}
        <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${amenity.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700`}></div>
        
        {/* Animated Border Gradient */}
        <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${amenity.color} animate-border-flow opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Card Content */}
        <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-7 flex items-start gap-5 h-full border border-white/20 shadow-xl hover:shadow-2xl transition-shadow duration-500">
          {/* 3D Inner Glow */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${amenity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
          
          {/* Icon with 3D Effect */}
          <div className="flex-shrink-0 relative z-10" style={{ transform: 'translateZ(20px)' }}>
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${amenity.color} shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl`}>
              <span className="text-3xl">{amenity.icon}</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0 relative z-10" style={{ transform: 'translateZ(10px)' }}>
            <h3 className="font-serif text-xl text-forest-900 font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gold-600 group-hover:to-gold-400 group-hover:bg-clip-text transition-all duration-500">
              {amenity.title}
            </h3>
            <p className="font-sans font-light text-forest-600/70 text-sm leading-relaxed group-hover:text-forest-800/80 transition-colors duration-500">
              {amenity.desc}
            </p>
          </div>

          {/* Number with 3D Effect */}
          <div className="flex-shrink-0 relative z-10" style={{ transform: 'translateZ(30px)' }}>
            <div className="font-mono text-[12px] font-bold text-gold-400/30 group-hover:text-gold-500/60 transition-colors duration-500 bg-gradient-to-br from-gold-400/10 to-transparent px-3 py-1 rounded-full">
              {(index + 1).toString().padStart(2, '0')}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${amenity.color} opacity-0 group-hover:opacity-20 rounded-tr-2xl transition-opacity duration-700`}></div>
          <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${amenity.color} opacity-0 group-hover:opacity-20 rounded-bl-2xl transition-opacity duration-700`}></div>
          
          {/* Shimmer Effect on Hover */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </div>

          {/* Bottom Accent Line */}
          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${amenity.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Amenities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section 
      id="amenities" 
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-forest-800"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-400/15 blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400"></span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
              Amenities
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400"></span>
          </div>
          <h2 className="font-serif font-light text-cream text-[clamp(32px,4vw,48px)] leading-[1.1]">
            Experience the <span className="text-gold-400">Lifestyle</span>
          </h2>
          <p className="font-sans font-light text-cream/50 text-base max-w-2xl mx-auto mt-3 leading-relaxed">
            Every amenity designed to elevate your living experience. From lush green spaces to modern conveniences, 
            we've crafted a community that truly feels like home.
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-14 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-gold-400/30 hover:border-gold-400/60 shadow-lg shadow-forest-950/30 hover:shadow-xl hover:shadow-gold-400/20 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
            <span className="relative z-10 font-mono text-[8px] text-cream/50 uppercase tracking-[0.15em]">
              Experience the amenities firsthand
            </span>
            <a
              href="#contact"
              className="relative z-10 group/link inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-sans text-[10px] tracking-[0.15em] uppercase transition-colors font-medium"
            >
              Book a visit
              <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes borderFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-border-flow {
          background-size: 300% 300%;
          animation: borderFlow 3s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}