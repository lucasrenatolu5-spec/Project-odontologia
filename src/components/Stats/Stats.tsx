import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "../../hooks/useCounter";
import { STATS } from "../../data/stats";
import type { Stat } from "../../types";

function Counter({ value, suffix, label, icon, active }: Stat & { active: boolean }) {
  const count = useCounter(value, active);
  return (
    <div className="text-center group">
      <div className="w-16 h-16 rounded-2xl bg-white/12 border border-white/20 flex items-center justify-center mx-auto mb-5 text-white group-hover:bg-white/20 transition-colors duration-300">
        {icon}
      </div>
      <div className="text-5xl sm:text-6xl font-black text-white mb-2 tabular-nums">
        {count}
        <span className="text-blue-300">{suffix}</span>
      </div>
      <div className="font-body text-blue-100 text-sm font-medium">{label}</div>
    </div>
  );
}

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden font-heading"
      style={{ background: "linear-gradient(135deg, #0F4C81 0%, #1565C0 50%, #1E88E5 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/4 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/4 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/2 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Counter {...s} active={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
