import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WhatsAppButton } from "../Button/WhatsAppButton";

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 relative overflow-hidden font-heading"
      style={{ background: "linear-gradient(135deg, #0A3D6B 0%, #0F4C81 40%, #1E88E5 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-white/4 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-white/4 blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 right-16 w-40 h-40 -translate-y-1/2 rounded-full border-2 border-white/8" />
        <div className="absolute top-1/2 right-12 w-52 h-52 -translate-y-1/2 rounded-full border border-white/5" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="relative max-w-2xl mx-auto px-6 text-center"
      >
        <div className="inline-flex items-center gap-2.5 bg-white/12 backdrop-blur-sm border border-white/15 text-white text-sm font-semibold px-4 py-2 rounded-full mb-7">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Respondemos em poucos minutos
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
          Agende sua avaliação hoje mesmo.
        </h2>
        <p className="font-body text-blue-100 text-lg mb-10 max-w-lg mx-auto">
          Dê o primeiro passo para o sorriso que você sempre sonhou. Nossa equipe está pronta para te atender.
        </p>
        <WhatsAppButton text="Falar com a equipe agora" size="lg" light />
        <p className="font-body text-blue-200/70 text-sm mt-5">
          ✓ Avaliação gratuita &nbsp;·&nbsp; ✓ Sem compromisso &nbsp;·&nbsp; ✓ Resposta imediata
        </p>
      </motion.div>
    </section>
  );
}
