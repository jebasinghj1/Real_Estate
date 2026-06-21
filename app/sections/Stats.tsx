"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 12, suffix: "+", label: "Acres of land" },
  { value: 120, suffix: "+", label: "Villa plots" },
  { value: 55, suffix: " km", label: "From Chennai" },
  { value: 100, suffix: "%", label: "DTCP approved" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(value / 60);
          const timer = setInterval(() => {
            start += step;
            if (start >= value) { setCount(value); clearInterval(timer); }
            else setCount(start);
          }, 25);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="bg-forest-900 py-8 md:py-10 border-y border-gold-400/10">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-cream/10">
          {stats.map((s, i) => (
            <div key={i} className="px-4 md:px-8 py-4 md:py-5 text-center">
              <div className="font-serif text-[clamp(28px,3.5vw,48px)] text-gold-300 font-light leading-none mb-1.5">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="font-mono text-[8px] text-cream/30 uppercase tracking-widest">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}