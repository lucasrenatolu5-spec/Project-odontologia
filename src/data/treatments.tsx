import { Zap, Sparkles, Eye, Activity, Shield, Heart, Smile } from "lucide-react";
import type { Treatment } from "../types";

export const TREATMENTS: Treatment[] = [
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Implantes Dentários",
    desc: "Solução permanente e natural para dentes perdidos com tecnologia de última geração.",
    color: "#0F4C81",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "Clareamento Dental",
    desc: "Resultados visíveis desde a primeira sessão com técnicas seguras e eficazes.",
    color: "#1E88E5",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "Lentes de Contato",
    desc: "Facetas ultra-finas que transformam seu sorriso com naturalidade e elegância.",
    color: "#0D47A1",
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Ortodontia",
    desc: "Aparelhos tradicionais e invisíveis para alinhar seus dentes com conforto.",
    color: "#1565C0",
  },
  {
    icon: <Shield className="w-7 h-7" />,
    title: "Tratamento de Canal",
    desc: "Procedimento seguro e indolor para preservar seus dentes naturais.",
    color: "#1976D2",
  },
  {
    icon: <Heart className="w-7 h-7" />,
    title: "Limpeza e Prevenção",
    desc: "Cuidado preventivo completo para manter sua saúde bucal sempre em dia.",
    color: "#2196F3",
  },
  {
    icon: <Smile className="w-7 h-7" />,
    title: "Próteses Dentárias",
    desc: "Próteses fixas e removíveis com estética impecável e alta durabilidade.",
    color: "#1E88E5",
  },
];
