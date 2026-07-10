import { Users, Award, Star, Heart } from "lucide-react";
import type { Stat } from "../types";

export const STATS: Stat[] = [
  { value: 5000, suffix: "+", label: "Pacientes Atendidos", icon: <Users className="w-6 h-6" /> },
  { value: 15, suffix: "+", label: "Anos de Experiência", icon: <Award className="w-6 h-6" /> },
  { value: 98, suffix: "%", label: "Índice de Satisfação", icon: <Star className="w-6 h-6" /> },
  { value: 100, suffix: "%", label: "Atendimento Humanizado", icon: <Heart className="w-6 h-6" /> },
];
