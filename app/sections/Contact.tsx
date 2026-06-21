"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", plots: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.target.classList.toggle("visible", e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", phone: "", email: "", message: "", plots: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
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

  const inputClass =
    "field w-full bg-transparent border-b border-cream/10 focus:border-gold-400 text-cream font-sans font-light text-sm py-2.5 placeholder:text-cream/20 transition-colors duration-300";

  const rotateX = mousePosition.y * 6;
  const rotateY = -mousePosition.x * 6;
  const translateZ = isHovered ? 15 : 0;

  return (
    <section id="contact" className="relative bg-forest-950 py-16 md:py-24 overflow-hidden" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-gold-400/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-emerald-400/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left */}
          <div>
            <div className="reveal flex items-center gap-4 mb-4">
              <span className="w-8 h-px bg-gold-400" />
              <span className="font-mono text-[10px] tracking-widest text-gold-400 uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="reveal font-serif font-light text-cream text-[clamp(28px,4vw,48px)] leading-[1.1] mb-6">
              Visit the land.<br />
              <span className="italic text-gold-300">Feel the difference.</span>
            </h2>
            <p className="reveal font-sans font-light text-cream/40 text-sm leading-relaxed mb-8 max-w-sm">
              Our team will arrange a personalised site visit at your preferred time, with a guided walk through the plots and full documentation.
            </p>

            {/* Contact info */}
            <div className="reveal space-y-5">
              {[
                { icon: "📞", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: "✉️", label: "Email", value: "hello@aranyafarms.in", href: "mailto:hello@aranyafarms.in" },
                { icon: "📍", label: "Address", value: "Vengambakkam, ECR, Tamil Nadu", href: "#location" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 group">
                  <span className="text-lg mt-0.5 group-hover:scale-110 transition-transform duration-300">{c.icon}</span>
                  <div>
                    <div className="font-mono text-[8px] text-cream/30 uppercase tracking-widest mb-0.5">{c.label}</div>
                    <a href={c.href} className="font-sans text-cream/70 hover:text-gold-300 text-sm transition-colors duration-300">
                      {c.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form with subtle 3D Frame */}
          <div className="reveal perspective-1000">
            <motion.div
              ref={formRef}
              className="relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
                transformStyle: "preserve-3d",
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Subtle Frame - Reduced Glow */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-gold-400/40 via-gold-300/40 to-gold-400/40 opacity-50 blur-sm"></div>
              
              {/* Animated Border Lines - Subtler */}
              <div className="absolute -inset-0.5 rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent animate-slide-right"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent animate-slide-left"></div>
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-gold-400/30 to-transparent animate-slide-down"></div>
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold-400/30 to-transparent animate-slide-up"></div>
              </div>

              {/* Corner Accents - Subtle */}
              <div className="absolute -top-0.5 -left-0.5 w-6 h-6 border-t border-l border-gold-400/30 rounded-tl-xl animate-pulse-glow-subtle"></div>
              <div className="absolute -top-0.5 -right-0.5 w-6 h-6 border-t border-r border-gold-400/30 rounded-tr-xl animate-pulse-glow-subtle"></div>
              <div className="absolute -bottom-0.5 -left-0.5 w-6 h-6 border-b border-l border-gold-400/30 rounded-bl-xl animate-pulse-glow-subtle"></div>
              <div className="absolute -bottom-0.5 -right-0.5 w-6 h-6 border-b border-r border-gold-400/30 rounded-br-xl animate-pulse-glow-subtle"></div>

              {/* Main Form Container - Smaller */}
              <div className="relative bg-gradient-to-br from-forest-950/95 to-forest-900/95 backdrop-blur-xl border border-gold-400/10 p-6 md:p-8 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)]">
                {/* Inner Glow - Subtle */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold-400/3 via-transparent to-gold-400/3 pointer-events-none"></div>

                {status === "sent" ? (
                  <div className="text-center py-10 relative z-10">
                    <motion.div 
                      className="text-3xl mb-3"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      ✓
                    </motion.div>
                    <h3 className="font-serif text-xl text-cream font-light mb-2">Request received</h3>
                    <p className="font-sans text-cream/40 text-xs font-light">
                      Our team will reach out within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="w-6 h-px bg-gold-400/40"></span>
                      <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest">
                        Book a Site Visit
                      </span>
                      <span className="flex-1 h-px bg-gold-400/10"></span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label className="font-mono text-[8px] text-cream/30 uppercase tracking-widest block mb-1.5">Name *</label>
                        <input
                          required
                          className={inputClass}
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </motion.div>
                      <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.15 }}
                      >
                        <label className="font-mono text-[8px] text-cream/30 uppercase tracking-widest block mb-1.5">Phone *</label>
                        <input
                          required
                          type="tel"
                          className={inputClass}
                          placeholder="+91 00000 00000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label className="font-mono text-[8px] text-cream/30 uppercase tracking-widest block mb-1.5">Email</label>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      <label className="font-mono text-[8px] text-cream/30 uppercase tracking-widest block mb-1.5">Plot interest</label>
                      <select
                        className={`${inputClass} appearance-none cursor-pointer`}
                        value={form.plots}
                        onChange={(e) => setForm({ ...form, plots: e.target.value })}
                      >
                        <option value="" className="bg-forest-900">Select plot size</option>
                        <option value="villa" className="bg-forest-900">Villa Plot (1,800–3,600 sq.ft)</option>
                        <option value="premium" className="bg-forest-900">Premium Villa (3,601–7,200 sq.ft)</option>
                        <option value="estate" className="bg-forest-900">Estate Plot (7,201–10,800 sq.ft)</option>
                      </select>
                    </motion.div>

                    <motion.div
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label className="font-mono text-[8px] text-cream/30 uppercase tracking-widest block mb-1.5">Message</label>
                      <textarea
                        rows={2}
                        className={`${inputClass} resize-none`}
                        placeholder="Any questions or preferred visit time?"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                      />
                    </motion.div>

                    {status === "error" && (
                      <p className="font-mono text-[10px] text-red-400">
                        Something went wrong. Please try again.
                      </p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === "sending"}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 disabled:opacity-60 text-forest-950 font-sans font-bold text-[10px] tracking-widest uppercase py-3 rounded-lg transition-all duration-300 shadow-md shadow-gold-400/20 hover:shadow-gold-400/30 overflow-hidden group"
                    >
                      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === "sending" ? (
                          <>
                            <svg className="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Request Site Visit
                            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                          </>
                        )}
                      </span>
                    </motion.button>

                    <p className="font-mono text-[8px] text-cream/15 text-center tracking-widest">
                      No spam. We'll reach you within 24 hours.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes slideRight {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes slideLeft {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes slideDown {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        @keyframes pulseGlowSubtle {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-slide-right {
          animation: slideRight 4s linear infinite;
        }

        .animate-slide-left {
          animation: slideLeft 4s linear infinite;
        }

        .animate-slide-down {
          animation: slideDown 4s linear infinite;
        }

        .animate-slide-up {
          animation: slideUp 4s linear infinite;
        }

        .animate-pulse-glow-subtle {
          animation: pulseGlowSubtle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}