import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { TESTIMONIALS } from "../../data/testimonials";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % total), 4800);
    return () => clearInterval(id);
  }, [total]);

  const visible = [TESTIMONIALS[active % total], TESTIMONIALS[(active + 1) % total]];

  return (
    <section id="depoimentos" ref={ref} className="py-24 bg-surface font-heading">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Depoimentos" title="O que nossos pacientes dizem" inView={inView} />

        {/* Desktop – 2 cards */}
        <div className="hidden md:grid grid-cols-2 gap-6 mb-8">
          {visible.map((t, i) => (
            <motion.div
              key={t.name + active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-md border border-surface-alt hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-body text-gray-700 leading-relaxed mb-7 text-base">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-alt flex-shrink-0">
                  <img src={t.photo} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div>
                  <div className="font-bold text-ink text-sm">{t.name}</div>
                  <div className="text-xs text-secondary font-semibold mt-0.5">{t.treatment}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile – 1 card */}
        <div className="md:hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl p-6 shadow-md border border-surface-alt"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: TESTIMONIALS[active].rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="font-body text-gray-700 leading-relaxed mb-5">&ldquo;{TESTIMONIALS[active].text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full overflow-hidden bg-surface-alt">
                  <img
                    src={TESTIMONIALS[active].photo}
                    alt={TESTIMONIALS[active].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div>
                  <div className="font-bold text-ink text-sm">{TESTIMONIALS[active].name}</div>
                  <div className="text-xs text-secondary font-semibold">{TESTIMONIALS[active].treatment}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setActive((a) => (a - 1 + total) % total)}
            aria-label="Depoimento anterior"
            className="w-10 h-10 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2 items-center">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active % total ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-primary/22 hover:bg-primary/45"
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActive((a) => (a + 1) % total)}
            aria-label="Próximo depoimento"
            className="w-10 h-10 rounded-full border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white text-primary flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
