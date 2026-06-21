"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "Home", href: "#home" },
  { label: "About us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  return (
    <>
      {/* Navbar - White background */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#c9a84c]/20 shadow-md shadow-black/5 py-4 md:py-5">
        <div className="max-w-7xl mx-auto px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex flex-col leading-none group relative"
          >
            <div className="relative flex flex-col leading-none">
              <span className="font-bold text-2xl md:text-3xl text-[#1a1a1a] tracking-wide group-hover:text-[#c9a84c] transition-colors duration-500 font-serif">
                SCAFFOLDING
              </span>
              <span className="font-medium text-[10px] tracking-[0.3em] text-[#c9a84c] uppercase mt-1 group-hover:text-[#b8962a] transition-colors duration-500 font-mono">
                Premium Rentals
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2.5 font-medium text-[13px] tracking-[0.1em] uppercase text-[#4a4a4a] hover:text-[#1a1a1a] transition-all duration-500 group font-sans"
              >
                <span className="relative z-10">{l.label}</span>
                
                {/* Hover underline effect - Gold */}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#c9a84c] w-0 group-hover:w-full transition-all duration-500"></span>
                
                {/* Glow effect on hover */}
                <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[#c9a84c]/5 blur-xl -z-10"></span>
              </a>
            ))}
          </nav>

          {/* CTA - Unique Button with Left-Top and Right-Bottom rounded corners */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              className="relative overflow-hidden group inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b85a] text-white font-bold text-[12px] tracking-[0.15em] uppercase px-8 py-4 transition-all duration-500 shadow-lg shadow-[#c9a84c]/20 hover:shadow-[#c9a84c]/40"
              style={{
                borderRadius: '20px 0 20px 0',
              }}
            >
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              
              <span className="relative z-10">Contact Us</span>
              <span className="relative z-10 text-white/50 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-md hover:bg-[#f5f5f5] transition-colors duration-300 group"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 h-[2px] bg-[#1a1a1a] transition-all duration-500 rounded-full ${
                  open ? "top-1/2 rotate-45 w-6" : "top-0 w-6"
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] bg-[#c9a84c] transition-all duration-500 rounded-full ${
                  open ? "opacity-0 w-0" : "w-4"
                }`}
              />
              <span
                className={`absolute left-0 h-[2px] bg-[#1a1a1a] transition-all duration-500 rounded-full ${
                  open ? "top-1/2 -rotate-45 w-6" : "bottom-0 w-6"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile drawer - White background */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[80px] md:top-[88px] bottom-0 bg-white border-t border-[#c9a84c]/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
          }`}
        >
          <div className="h-full overflow-y-auto py-8 px-6">
            <nav className="flex flex-col gap-0 max-w-sm mx-auto">
              {links.map((l, i) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="group relative font-medium text-base tracking-[0.2em] uppercase text-[#4a4a4a] hover:text-[#1a1a1a] py-5 border-b border-[#e8e8e8] transition-all duration-300 flex items-center justify-between font-sans"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span>{l.label}</span>
                  <span className="text-[#c9a84c]/30 group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                  <span className="absolute inset-0 bg-[#c9a84c]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-lg"></span>
                </a>
              ))}
              
              {/* Mobile CTA */}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-8 relative overflow-hidden group inline-flex items-center justify-center bg-[#c9a84c] hover:bg-[#d4b85a] text-white font-bold text-sm tracking-[0.2em] uppercase px-8 py-5 transition-all duration-500 shadow-lg shadow-[#c9a84c]/20"
                style={{
                  borderRadius: '20px 0 20px 0',
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <span className="relative z-10">Contact Us</span>
              </a>
              
              {/* Decorative elements */}
              <div className="mt-12 pt-8 border-t border-[#e8e8e8]">
                <p className="text-[#4a4a4a]/50 text-xs tracking-[0.2em] uppercase text-center font-medium font-sans">
                  Safe · Reliable · Premium
                </p>
                <div className="flex justify-center gap-4 mt-3 text-[#4a4a4a]/30 text-[10px] font-mono">
                  <span>✓ 24hr Installation</span>
                  <span>✓ Certified Technicians</span>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Spacer to push content below fixed navbar */}
      <div className="h-[80px] md:h-[88px]"></div>
    </>
  );
}