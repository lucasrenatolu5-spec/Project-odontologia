import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { FAQS } from "../../data/faqs";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="py-24 bg-white font-heading">
      <div className="max-w-2xl mx-auto px-6">
        <SectionTitle label="Dúvidas Frequentes" title="Perguntas e Respostas" inView={inView} />

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="rounded-2xl border border-surface-alt overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-ink hover:bg-surface transition-colors duration-200 gap-4 text-sm"
                >
                  <span>{item.q}</span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-primary/18 flex items-center justify-center text-primary transition-all duration-200 ${
                      isOpen ? "bg-primary border-primary text-white" : ""
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="overflow-hidden"
                    >
                      <div className="font-body px-6 pb-5 pt-1 text-muted text-sm leading-relaxed border-t border-surface-alt">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
