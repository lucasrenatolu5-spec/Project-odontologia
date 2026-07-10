import { useRef } from "react";
import { useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Card } from "../Card/Card";
import { BENEFITS } from "../../data/benefits";

export function Benefits() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-20 bg-surface font-heading">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle label="Por que nos escolher" title="Cuidado que vai além do tratamento" inView={inView} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((benefit, i) => (
            <Card
              key={benefit.title}
              inView={inView}
              delay={i * 0.09}
              className={`group bg-gradient-to-br ${benefit.from} ${benefit.to} p-6 border-white/80 hover:shadow-xl hover:-translate-y-2 cursor-default`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${benefit.iconBg} ${benefit.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
              >
                {benefit.icon}
              </div>
              <div className="flex items-start gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                <h3 className="font-bold text-ink text-sm leading-snug">{benefit.title}</h3>
              </div>
              <p className="font-body text-xs text-muted leading-relaxed pl-6">{benefit.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
