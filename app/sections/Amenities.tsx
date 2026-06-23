// "use client";
// import { useEffect, useRef, useState } from "react";
// import { motion, useInView } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
// };

// const amenities = [
//   {
//     icon: "🌿",
//     title: "Wellness Living",
//     desc: "Holistic living focused on health, balance, and well-being.",
//     color: "from-emerald-400 to-green-500"
//   },
//   {
//     icon: "🏊",
//     title: "Premium Farm Villas",
//     desc: "Luxury residences designed for comfort and privacy.",
//     color: "from-blue-400 to-cyan-500"
//   },
//   {
//     icon: "🔐",
//     title: "Nature-Centric Design",
//     desc: "Sustainable architecture inspired by nature.",
//     color: "from-purple-400 to-indigo-500"
//   },
//   {
//     icon: "⚡",
//     title: "Investment Appreciation",
//     desc: "Promising long-term growth and value.",
//     color: "from-yellow-400 to-orange-500"
//   },
//   {
//     icon: "🌊",
//     title: "Luxury Lifestyle",
//     desc: "Premium amenities and elevated living experiences.",
//     color: "from-cyan-400 to-blue-500"
//   },
//   {
//     icon: "🛤️",
//     title: "Eco Community",
//     desc: "A sustainable community connected to nature.",
//     color: "from-slate-400 to-gray-500"
//   },
//   // {
//   //   icon: "🏡",
//   //   title: "Clubhouse",
//   //   desc: "A resident clubhouse with lounge, co-work nooks, and an events terrace.",
//   //   color: "from-rose-400 to-pink-500"
//   // },
//   // {
//   //   icon: "🌱",
//   //   title: "Organic Orchard",
//   //   desc: "A shared mango and coconut grove maintained by the community trust.",
//   //   color: "from-lime-400 to-green-500"
//   // },
// ];

// // Card Component with 3D Animation
// function AmenityCard({ amenity, index }: { amenity: typeof amenities[0], index: number }) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(cardRef, { 
//     once: false,
//     amount: 0.15,
//     margin: "0px 0px -50px 0px"
//   });
  
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = (e.clientX - rect.left) / rect.width - 0.5;
//     const y = (e.clientY - rect.top) / rect.height - 0.5;
//     setMousePosition({ x, y });
//   };

//   const handleMouseLeave = () => {
//     setMousePosition({ x: 0, y: 0 });
//     setIsHovered(false);
//   };

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const rotateX = mousePosition.y * 12;
//   const rotateY = -mousePosition.x * 12;
//   const translateZ = isHovered ? 40 : 0;

//   return (
//     <motion.div
//       ref={cardRef}
//       initial="hidden"
//       animate={isInView ? "visible" : "hidden"}
//       variants={fadeInUp}
//       className="group perspective-1000"
//       onMouseMove={handleMouseMove}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <motion.div
//         className="relative rounded-2xl transition-all duration-200"
//         style={{
//           transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
//           transformStyle: "preserve-3d",
//         }}
//       >
//         {/* Glowing Background Effect */}
//         <div className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${amenity.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700`}></div>
        
//         {/* Animated Border Gradient */}
//         <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${amenity.color} animate-border-flow opacity-60 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
//         {/* Card Content */}
//         <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-7 flex items-start gap-5 h-full border border-white/20 shadow-xl hover:shadow-2xl transition-shadow duration-500">
//           {/* 3D Inner Glow */}
//           <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${amenity.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>
          
//           {/* Icon with 3D Effect */}
//           <div className="flex-shrink-0 relative z-10" style={{ transform: 'translateZ(20px)' }}>
//             <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${amenity.color} shadow-lg flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:shadow-2xl`}>
//               <span className="text-3xl">{amenity.icon}</span>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="flex-1 min-w-0 relative z-10" style={{ transform: 'translateZ(10px)' }}>
//             <h3 className="font-serif text-xl text-forest-900 font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gold-600 group-hover:to-gold-400 group-hover:bg-clip-text transition-all duration-500">
//               {amenity.title}
//             </h3>
//             <p className="font-sans font-light text-forest-600/70 text-sm leading-relaxed group-hover:text-forest-800/80 transition-colors duration-500">
//               {amenity.desc}
//             </p>
//           </div>

//           {/* Number with 3D Effect */}
//           <div className="flex-shrink-0 relative z-10" style={{ transform: 'translateZ(30px)' }}>
//             <div className="font-mono text-[12px] font-bold text-gold-400/30 group-hover:text-gold-500/60 transition-colors duration-500 bg-gradient-to-br from-gold-400/10 to-transparent px-3 py-1 rounded-full">
//               {(index + 1).toString().padStart(2, '0')}
//             </div>
//           </div>

//           {/* Decorative Elements */}
//           <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${amenity.color} opacity-0 group-hover:opacity-20 rounded-tr-2xl transition-opacity duration-700`}></div>
//           <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${amenity.color} opacity-0 group-hover:opacity-20 rounded-bl-2xl transition-opacity duration-700`}></div>
          
//           {/* Shimmer Effect on Hover */}
//           <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
//             <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
//           </div>

//           {/* Bottom Accent Line */}
//           <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${amenity.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left rounded-b-2xl`}></div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default function Amenities() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

//   return (
//     <section 
//       id="amenities" 
//       ref={sectionRef}
//       className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-forest-800 via-forest-700 to-forest-800"
//     >
//       {/* Decorative Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gold-400/15 blur-3xl animate-pulse-slow"></div>
//         <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-400/15 blur-3xl animate-pulse-slow delay-1000"></div>
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-3xl"></div>
        
//         {/* Grid Pattern */}
//         <div className="absolute inset-0 opacity-[0.04]">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
//             backgroundSize: '30px 30px'
//           }}></div>
//         </div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
//         {/* Header */}
//         <motion.div
//           className="mb-10 md:mb-14 text-center"
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={fadeInUp}
//         >
//           <div className="flex items-center justify-center gap-3 mb-3">
//             <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-400"></span>
//             <span className="font-mono text-[10px] tracking-[0.3em] text-gold-400 uppercase font-semibold">
//               Amenities
//             </span>
//             <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold-400"></span>
//           </div>
//           <h2 className="font-serif font-light text-cream text-[clamp(32px,4vw,48px)] leading-[1.1]">
//             Experience the <span className="text-gold-400">Lifestyle</span>
//           </h2>
//           <p className="font-sans font-light text-cream/50 text-base max-w-2xl mx-auto mt-3 leading-relaxed">
//             Every amenity designed to elevate your living experience. From lush green spaces to modern conveniences, 
//             we've crafted a community that truly feels like home.
//           </p>
//         </motion.div>

//         {/* Amenities Grid */}
//         <div className="grid md:grid-cols-2 gap-6 md:gap-8">
//           {amenities.map((amenity, index) => (
//             <AmenityCard key={index} amenity={amenity} index={index} />
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <motion.div
//           className="mt-14 text-center"
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           variants={fadeInUp}
//         >
//           <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-gold-400/30 hover:border-gold-400/60 shadow-lg shadow-forest-950/30 hover:shadow-xl hover:shadow-gold-400/20 transition-all duration-500 relative overflow-hidden group">
//             <div className="absolute inset-0 bg-gold-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
//             <span className="relative z-10 font-mono text-[8px] text-cream/50 uppercase tracking-[0.15em]">
//               Experience the amenities firsthand
//             </span>
//             <a
//               href="#contact"
//               className="relative z-10 group/link inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-sans text-[10px] tracking-[0.15em] uppercase transition-colors font-medium"
//             >
//               Book a visit
//               <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </a>
//           </div>
//         </motion.div>
//       </div>

//       {/* Custom CSS */}
//       <style jsx>{`
//         @keyframes borderFlow {
//           0% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//           100% {
//             background-position: 0% 50%;
//           }
//         }
        
//         .animate-border-flow {
//           background-size: 300% 300%;
//           animation: borderFlow 3s ease-in-out infinite;
//         }

//         @keyframes pulseSlow {
//           0%, 100% {
//             opacity: 0.3;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.6;
//             transform: scale(1.05);
//           }
//         }

//         .animate-pulse-slow {
//           animation: pulseSlow 4s ease-in-out infinite;
//         }

//         .delay-1000 {
//           animation-delay: 1000ms;
//         }

//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </section>
//   );
// }

"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { 
  Leaf, 
  Home, 
  Shield, 
  TrendingUp, 
  Waves, 
  Users,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const amenities = [
  {
    icon: Leaf,
    title: "Wellness Living",
    desc: "Holistic living focused on health, balance, and well-being.",
    color: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/20",
    hoverColor: "group-hover:border-emerald-500/40",
    iconColor: "text-emerald-500"
  },
  {
    icon: Home,
    title: "Premium Farm Villas",
    desc: "Luxury residences designed for comfort and privacy.",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/20",
    hoverColor: "group-hover:border-blue-500/40",
    iconColor: "text-blue-500"
  },
  {
    icon: Shield,
    title: "Nature-Centric Design",
    desc: "Sustainable architecture inspired by nature.",
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/20",
    hoverColor: "group-hover:border-purple-500/40",
    iconColor: "text-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Investment Appreciation",
    desc: "Promising long-term growth and value.",
    color: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/20",
    hoverColor: "group-hover:border-amber-500/40",
    iconColor: "text-amber-500"
  },
  {
    icon: Waves,
    title: "Luxury Lifestyle",
    desc: "Premium amenities and elevated living experiences.",
    color: "from-cyan-500/20 to-cyan-600/10",
    borderColor: "border-cyan-500/20",
    hoverColor: "group-hover:border-cyan-500/40",
    iconColor: "text-cyan-500"
  },
  {
    icon: Users,
    title: "Eco Community",
    desc: "A sustainable community connected to nature.",
    color: "from-slate-500/20 to-slate-600/10",
    borderColor: "border-slate-500/20",
    hoverColor: "group-hover:border-slate-500/40",
    iconColor: "text-slate-500"
  },
];

// Card Component with Reduced Height
function AmenityCard({ amenity, index }: { amenity: typeof amenities[0], index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { 
    once: false,
    amount: 0.15,
    margin: "0px 0px -50px 0px"
  });
  
  const [isHovered, setIsHovered] = useState(false);

  const Icon = amenity.icon;

  return (
    <motion.div
      ref={cardRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUp}
      className="group h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`
        relative rounded-xl border ${amenity.borderColor} ${amenity.hoverColor}
        bg-white/5 backdrop-blur-sm
        p-4 md:p-5
        h-full min-h-[130px] md:min-h-[150px]
        flex flex-col
        transition-all duration-500
        hover:bg-white/10
        hover:shadow-2xl hover:shadow-black/20
        hover:-translate-y-1
      `}>
        {/* Gradient Background on Hover */}
        <div className={`
          absolute inset-0 rounded-xl bg-gradient-to-br ${amenity.color}
          opacity-0 group-hover:opacity-100 transition-opacity duration-500
        `}></div>

        {/* Content - Flex column with flex-1 for consistent spacing */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header with Icon and Number - Fixed top section */}
          <div className="flex items-center justify-between mb-2 flex-shrink-0">
            <div className="flex items-center gap-2.5 min-w-0">
              {/* Icon Circle - Smaller */}
              <div className={`
                p-2 rounded-lg flex-shrink-0
                bg-white/5 border ${amenity.borderColor}
                ${amenity.iconColor}
                transition-all duration-500
                group-hover:bg-white/10 group-hover:scale-110
                group-hover:shadow-lg group-hover:shadow-black/10
              `}>
                <Icon className="w-4 h-4" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-serif text-sm text-white/90 font-medium tracking-wide truncate">
                {amenity.title}
              </h3>
            </div>

            {/* Number Badge - Smaller */}
            <span className={`
              font-mono text-[10px] font-light flex-shrink-0 ml-2
              text-white/20 group-hover:text-white/40
              transition-colors duration-500
            `}>
              {(index + 1).toString().padStart(2, '0')}
            </span>
          </div>

          {/* Description - Flexible middle section with smaller text */}
          <p className="font-sans font-light text-white/50 text-xs leading-relaxed flex-1">
            {amenity.desc}
          </p>

          {/* Decorative Line - Fixed bottom section */}
          <div className={`
            mt-2.5 w-10 h-px bg-gradient-to-r ${amenity.borderColor}
            group-hover:w-16 transition-all duration-700 flex-shrink-0
          `}></div>
        </div>

        {/* Subtle Glow Effect */}
        <div className={`
          absolute -bottom-px left-1/2 -translate-x-1/2
          w-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent
          group-hover:w-full transition-all duration-700
        `}></div>
      </div>
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
      className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Sophisticated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Ambient Glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-500/5 blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>

        {/* Subtle Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-amber-500/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        {/* Header */}
        <motion.div
          className="mb-10 md:mb-14 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-white/20"></span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase font-light">
              Amenities
            </span>
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-white/20"></span>
          </div>
          <h2 className="font-serif font-light text-white text-[clamp(30px,3.5vw,44px)] leading-[1.1] tracking-tight">
            Curated for <span className="text-white/80">Luxury Living</span>
          </h2>
          <p className="font-sans font-light text-white/30 text-sm max-w-2xl mx-auto mt-3 leading-relaxed">
            Every detail thoughtfully designed to elevate your lifestyle. 
            From serene spaces to modern conveniences, discover a community built for distinction.
          </p>
        </motion.div>

        {/* Amenities Grid with auto-rows for equal height */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 auto-rows-fr">
          {amenities.map((amenity, index) => (
            <AmenityCard key={index} amenity={amenity} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="inline-flex items-center gap-5 bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:border-white/20 transition-all duration-500 group">
            <span className="font-mono text-[8px] text-white/30 uppercase tracking-[0.2em]">
              Experience the difference
            </span>
            <a
              href="#contact"
              className="group/link inline-flex items-center gap-2 text-white/60 hover:text-white font-sans text-[9px] tracking-[0.15em] uppercase transition-colors font-light"
            >
              Schedule a visit
              <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}