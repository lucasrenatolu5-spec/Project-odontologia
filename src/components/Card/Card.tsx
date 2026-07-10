import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface CardProps {
  children: ReactNode;
  inView: boolean;
  delay?: number;
  className?: string;
}

/**
 * Fade-up + stagger card shell shared by Benefits and Treatments grids.
 * Each caller supplies its own inner content/background via className.
 */
export function Card({ children, inView, delay = 0, className }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "rounded-2xl border shadow-sm transition-all duration-350",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
