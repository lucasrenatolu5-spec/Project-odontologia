import { Heart, Zap, GraduationCap, Shield } from "lucide-react";
import type { Benefit } from "../types";

export const BENEFITS: Benefit[] = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Atendimento Humanizado",
    desc: "Cada paciente é tratado com atenção individual, empatia e cuidado excepcional.",
    from: "from-rose-50",
    to: "to-pink-50/60",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Equipamentos Modernos",
    desc: "Tecnologia digital de ponta para diagnósticos precisos e tratamentos mais eficazes.",
    from: "from-blue-50",
    to: "to-sky-50/60",
    iconBg: "bg-blue-100",
    iconColor: "text-primary",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Equipe Especializada",
    desc: "Profissionais altamente qualificados com especializações nacionais e internacionais.",
    from: "from-violet-50",
    to: "to-purple-50/60",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Ambiente Seguro",
    desc: "Protocolos rigorosos de biossegurança para sua total tranquilidade e conforto.",
    from: "from-emerald-50",
    to: "to-green-50/60",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
];
