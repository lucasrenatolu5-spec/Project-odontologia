import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Card } from "../Card/Card";
import { CASES } from "../../data/cases";

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-white font-heading">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          label="Casos de Sucesso"
          title="Resultados que falam por si"
          subtitle="Transformações reais realizadas com cuidado, tecnologia e o comprometimento do nosso time."
          inView={inView}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {CASES.map((c, i) => (
            <Card
              key={c.title}
              inView={inView}
              delay={i * 0.1}
              className="group rounded-3xl overflow-hidden border-surface-alt shadow-md hover:shadow-2xl duration-400 bg-white"
            >
              <div className="relative h-60 flex overflow-hidden">
                <div className="flex-1 relative overflow-hidden">
                  <img
                    src={c.img}
                    alt={`Antes – ${c.title}`}
                    className="w-full h-full object-cover object-top grayscale brightness-75 saturate-50"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink/15" />
                  <span className="absolute bottom-2 left-2.5 text-[10px] font-bold text-white bg-ink/75 backdrop-blur-sm px-2 py-1 rounded-lg">
                    ANTES
                  </span>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 inset-y-0 w-0.5 bg-white z-10">
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-primary" />
                  </div>
                </div>

                <div className="flex-1 relative overflow-hidden">
                  <img src={c.img} alt={`Depois – ${c.title}`} className="w-full h-full object-cover object-top" loading="lazy" />
                  <span className="absolute bottom-2 right-2.5 text-[10px] font-bold text-white bg-accent/85 backdrop-blur-sm px-2 py-1 rounded-lg">
                    DEPOIS
                  </span>
                </div>
              </div>

              <div className="p-5">
                <span className="inline-block bg-surface text-primary text-[11px] font-semibold px-3 py-1 rounded-full mb-3 border border-secondary/15">
                  {c.tag}
                </span>
                <h3 className="font-bold text-ink text-base mb-1">{c.title}</h3>
                <p className="font-body text-sm text-muted mb-3">{c.desc}</p>
                <div className="flex items-center gap-1.5 text-xs text-secondary font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  Duração: {c.duration}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <p className="font-body text-center text-xs text-gray-300 mt-8">
          * Resultados podem variar individualmente. Consulte nosso especialista para uma avaliação personalizada.
        </p>
      </div>
    </section>
  );
}
