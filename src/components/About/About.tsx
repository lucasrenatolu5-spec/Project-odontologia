import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SectionLabel } from "../SectionTitle/SectionTitle";
import { WhatsAppButton } from "../Button/WhatsAppButton";
import { CREDENTIALS } from "../../data/about";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="py-24 bg-surface font-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative w-full max-w-[420px] mx-auto">
              <div className="absolute -inset-5 bg-gradient-to-br from-primary/10 to-secondary/6 rounded-[44px] blur-2xl" aria-hidden="true" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/12 aspect-[4/5] bg-surface-alt">
                <img
                  src="https://images.unsplash.com/photo-1756699279298-c89cdef354ab?w=600&h=750&fit=crop&auto=format"
                  alt="Dr. Ricardo Mendes – cirurgião-dentista especializado em estética e implantodontia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 backdrop-blur-md bg-white/82 border border-white/60 rounded-2xl px-4 py-3">
                  <div className="font-bold text-ink text-base">Dr. Ricardo Mendes</div>
                  <div className="text-secondary text-xs font-medium mt-0.5">CRO-SP 45.892 · Implantodontia & Estética</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Sobre o Profissional</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-6 leading-tight">
              15 anos transformando sorrisos e vidas
            </h2>
            <p className="font-body text-muted leading-relaxed mb-5">
              O Dr. Ricardo Mendes é especialista em Implantodontia e Estética Dental com mais de 15 anos de
              experiência. Formado pela Universidade de São Paulo com especializações no Brasil e no exterior, ele
              acredita que um sorriso saudável transforma não apenas a aparência, mas a autoestima e a vida de cada
              paciente.
            </p>
            <p className="font-body text-muted leading-relaxed mb-8">
              Sua missão é oferecer atendimento humanizado e personalizado, combinando as mais modernas técnicas
              odontológicas com cuidado genuíno por cada paciente.
            </p>

            <div className="space-y-3 mb-8">
              {CREDENTIALS.map((cred, i) => (
                <motion.div
                  key={cred}
                  initial={{ opacity: 0, x: 16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.09 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="font-body text-ink text-sm font-medium">{cred}</span>
                </motion.div>
              ))}
            </div>

            <div className="mb-8">
              <div className="font-bold text-primary text-2xl">Dr. Ricardo Mendes</div>
              <div className="h-0.5 bg-gradient-to-r from-primary/70 to-transparent rounded-full mt-1.5 about-sig-line" />
            </div>

            <WhatsAppButton text="Agendar com Dr. Ricardo" size="md" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
