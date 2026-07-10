import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle, ChevronRight, Star, Users, Award, Zap } from "lucide-react";
import { WhatsAppButton } from "../Button/WhatsAppButton";
import { Button } from "../Button/Button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-white font-heading"
    >
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
        <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full bg-secondary/8 blur-3xl hero-orb-1" />
        <div className="absolute -bottom-32 -left-48 w-[600px] h-[600px] rounded-full bg-primary/7 blur-3xl hero-orb-2" />
        <div className="absolute top-1/3 left-2/5 w-[350px] h-[350px] rounded-full bg-secondary/5 blur-2xl hero-orb-3" />
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0V0zm1 1v58h58V1H1z' fill='%230F4C81'/%3E%3C/svg%3E\")",
          }}
        />
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-secondary/25 hero-particle"
            style={{
              width: i % 3 === 0 ? "8px" : "5px",
              height: i % 3 === 0 ? "8px" : "5px",
              left: `${8 + i * 6.5}%`,
              bottom: `${15 + (i % 5) * 12}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3.5 + (i % 3) * 1.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-surface border border-secondary/20 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Clínica Premium de Odontologia
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.6rem] sm:text-5xl xl:text-[3.6rem] font-black text-ink leading-[1.08] tracking-tight mb-6"
          >
            Seu novo sorriso{" "}
            <span className="text-primary relative inline-block">
              começa com
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 10" fill="none" aria-hidden="true">
                <path
                  d="M0 8 Q75 2 150 6 Q225 10 300 4"
                  stroke="#1E88E5"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="hero-underline-path"
                />
              </svg>
            </span>{" "}
            a escolha da clínica certa.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-body text-muted text-lg leading-relaxed mb-10 max-w-[480px]"
          >
            Tratamentos modernos, atendimento humanizado e resultados que devolvem sua confiança.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <WhatsAppButton text="Agendar avaliação gratuita" size="lg" />
            <Button href="#tratamentos" icon={<ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}>
              Conheça nossos tratamentos
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.52 }}
            className="font-body flex items-center gap-6 mt-10 flex-wrap"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink">4.9</span>
              <span className="text-sm text-gray-400">(+312 avaliações)</span>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle className="w-4 h-4 text-accent" />
              Avaliação 100% gratuita
            </div>
          </motion.div>
        </div>

        {/* Dentist photo + floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="absolute inset-2 rounded-[36px] border-2 border-dashed border-secondary/18 hero-spin-ring pointer-events-none" aria-hidden="true" />
          <div className="absolute inset-6 rounded-[32px] bg-gradient-to-br from-secondary/18 to-primary/12 blur-2xl" aria-hidden="true" />

          <div className="relative w-[280px] sm:w-[320px] xl:w-[380px] aspect-[3/4] rounded-[32px] overflow-hidden shadow-2xl shadow-primary/25 bg-surface-alt">
            <img
              src="https://images.unsplash.com/photo-1729162128021-f37dca3ff30d?w=600&h=800&fit=crop&auto=format"
              alt="Dr. Ricardo Mendes – especialista em estética dental e implantodontia"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-5 top-10 glass-card float-card-1">
            <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
              <Star className="w-4.5 h-4.5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Avaliação</div>
              <div className="text-sm font-bold text-ink">⭐ 4.9 / 5.0</div>
            </div>
          </div>

          <div className="absolute -right-5 bottom-24 glass-card float-card-2">
            <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Users className="w-4 h-4 text-secondary" />
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Pacientes</div>
              <div className="text-sm font-bold text-ink">5.000+ atendidos</div>
            </div>
          </div>

          <div className="absolute -right-3 top-10 glass-card float-card-3">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Award className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Experiência</div>
              <div className="text-sm font-bold text-ink">15+ anos</div>
            </div>
          </div>

          <div className="absolute -left-3 bottom-16 glass-card float-card-4">
            <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
              <Zap className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <div className="text-[10px] text-gray-400 font-medium leading-none mb-0.5">Tecnologia</div>
              <div className="text-sm font-bold text-ink">Digital</div>
            </div>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 flex gap-2 float-card-1" style={{ animationDelay: "-2s" }}>
            <span className="bg-primary/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
              Ortodontia
            </span>
            <span className="bg-secondary/90 backdrop-blur-md text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-lg border border-white/20">
              Implantes
            </span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 64" fill="none" className="w-full block">
          <path d="M0 32 Q360 64 720 32 Q1080 0 1440 32 L1440 64 L0 64 Z" fill="#F5FAFF" />
        </svg>
      </div>
    </section>
  );
}
