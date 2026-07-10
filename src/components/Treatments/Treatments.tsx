import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Card } from "../Card/Card";
import { WhatsAppButton } from "../Button/WhatsAppButton";
import { TREATMENTS } from "../../data/treatments";

export function Treatments() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tratamentos" ref={ref} className="py-24 bg-white font-heading">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Nossos Serviços"
          title="Tratamentos completos para seu sorriso"
          subtitle="Utilizamos as tecnologias mais avançadas para oferecer resultados excepcionais em cada especialidade."
          inView={inView}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {TREATMENTS.map((t, i) => (
            <Card
              key={t.title}
              inView={inView}
              delay={i * 0.07}
              className="group relative bg-white p-6 border-surface-alt hover:shadow-2xl hover:-translate-y-2.5 overflow-hidden cursor-default"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/2 to-secondary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                style={{ backgroundColor: t.color }}
              >
                {t.icon}
              </div>
              <h3 className="font-bold text-ink mb-2 text-base leading-snug">{t.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{t.desc}</p>
              <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                Saiba mais <ArrowRight className="w-3 h-3" />
              </div>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <WhatsAppButton text="Quero conhecer todos os tratamentos" size="md" />
        </motion.div>
      </div>
    </section>
  );
}
