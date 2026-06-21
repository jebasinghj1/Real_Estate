"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const projects = [
  {
    title: "Azure Bay",
    location: "Near Mahabalipuram",
    distance: "350m From Beach",
    image: "/images/featured_projecs.png",
    category: "Villas"
  }
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? projects 
    : projects.filter(img => img.category === activeCategory);

  return (
    <section 
      id="gallery" 
      ref={sectionRef}
      className="relative py-12 md:py-16 lg:py-24 overflow-hidden bg-gradient-to-b from-forest-950 via-forest-900 to-forest-950"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold-400/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-emerald-400/5 blur-3xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-3 md:mb-4">
            <span className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-gold-400"></span>
            <span className="font-mono text-[9px] md:text-[11px] tracking-[0.25em] md:tracking-[0.35em] text-gold-400 uppercase">
              Signature Projects
            </span>
            <span className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-gold-400"></span>
          </div>

          <h2 className="font-serif text-cream text-[clamp(28px,6vw,64px)] leading-tight">
            Explore Our
            <span className="block italic text-gold-300">
              Landmark Coastal Communities
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-3 md:mt-6 text-cream/60 text-sm md:text-base px-2">
            Premium plotted developments strategically located along
            the East Coast Road, offering unmatched connectivity,
            investment potential and proximity to the beach.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6 md:space-y-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="group relative overflow-hidden rounded-2xl md:rounded-[32px] border border-gold-400/20 bg-black"
            >
              <div className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[650px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 p-4 sm:p-6 md:p-8 lg:p-14 w-full">
                  {/* Project Info - Always visible */}
                  <div className="flex flex-wrap items-center gap-2 md:gap-3">
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-gold-400/30 bg-gold-400/10 text-gold-300 text-[8px] md:text-xs tracking-[0.2em] md:tracking-[0.25em] uppercase">
                      Featured Project
                    </span>
                    <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-white/20 bg-black/30 text-white/70 text-[8px] md:text-xs tracking-[0.2em] uppercase">
                      {project.distance}
                    </span>
                  </div>

                  <h3 className="mt-3 md:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white font-serif leading-tight">
                    {project.title}
                  </h3>

                  <p className="mt-1 md:mt-2 text-sm sm:text-base lg:text-lg text-white/70">
                    {project.location}
                  </p>

                  {/* CTA Button for Mobile */}
                  <div className="mt-3 md:mt-5 flex flex-wrap gap-2 md:gap-3">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-gold-400 text-forest-950 font-bold text-[10px] md:text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-gold-300"
                    >
                      Enquire Now
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                    <button className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 border border-white/20 text-white/70 text-[10px] md:text-xs tracking-[0.15em] uppercase rounded-full transition-all duration-300 hover:bg-white/10">
                      <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Location Highlights - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mt-10 md:mt-16">
          <div className="rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-3 md:p-5 text-center hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-gold-300 text-lg md:text-xl font-semibold">15 Min</h4>
            <p className="text-cream/60 text-[8px] md:text-xs uppercase mt-1 md:mt-2">
              Mahabalipuram
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-3 md:p-5 text-center hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-gold-300 text-lg md:text-xl font-semibold">30 Min</h4>
            <p className="text-cream/60 text-[8px] md:text-xs uppercase mt-1 md:mt-2">
              Kovalam
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-3 md:p-5 text-center hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-gold-300 text-lg md:text-xl font-semibold">45 Min</h4>
            <p className="text-cream/60 text-[8px] md:text-xs uppercase mt-1 md:mt-2">
              Chennai
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-3 md:p-5 text-center hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-gold-300 text-lg md:text-xl font-semibold">4 Lane</h4>
            <p className="text-cream/60 text-[8px] md:text-xs uppercase mt-1 md:mt-2">
              ECR Access
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-3 md:p-5 text-center hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-gold-300 text-lg md:text-xl font-semibold">38 Acre</h4>
            <p className="text-cream/60 text-[8px] md:text-xs uppercase mt-1 md:mt-2">
              Convention Centre
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-white/5 border border-white/10 p-3 md:p-5 text-center hover:bg-white/10 transition-colors duration-300">
            <h4 className="text-gold-300 text-lg md:text-xl font-semibold">500 Acre</h4>
            <p className="text-cream/60 text-[8px] md:text-xs uppercase mt-1 md:mt-2">
              Sports City
            </p>
          </div>
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="mt-10 md:mt-14 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-2.5 md:py-3 border border-gold-400/30 hover:border-gold-400/60 text-cream/70 hover:text-cream font-sans text-[8px] md:text-[10px] tracking-[0.15em] md:tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-gold-400/10 hover:-translate-y-0.5"
          >
            <span>View All Projects</span>
            <svg className="w-3 h-3 md:w-4 md:h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Lightbox Modal - Improved */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/95 backdrop-blur-xl p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl w-full max-h-[90vh]">
            <div 
              className="w-full h-full min-h-[40vh] md:min-h-[60vh] rounded-2xl bg-cover bg-center shadow-2xl"
              style={{ backgroundImage: `url(${filteredImages[selectedImage]?.image || ''})` }}
            />
            
            {/* Navigation arrows */}
            <button 
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 hover:text-white transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => 
                  prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1
                );
              }}
            >
              ←
            </button>
            <button 
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 hover:text-white transition-colors flex items-center justify-center"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage((prev) => 
                  prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0
                );
              }}
            >
              →
            </button>
            
            <button 
              className="absolute top-2 md:top-4 right-2 md:right-4 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 hover:text-white transition-colors flex items-center justify-center text-sm md:text-base"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            
            <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-0">
              <div>
                <span className="font-serif text-sm md:text-lg text-cream/90">
                  {filteredImages[selectedImage]?.title || ''}
                </span>
                <span className="block font-mono text-[6px] md:text-[8px] text-cream/40 uppercase tracking-[0.2em] mt-0.5 md:mt-1">
                  {filteredImages[selectedImage]?.location || ''} • {filteredImages[selectedImage]?.distance || ''}
                </span>
              </div>
              <span className="font-mono text-[8px] md:text-[10px] text-cream/30">
                {selectedImage + 1} / {filteredImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}