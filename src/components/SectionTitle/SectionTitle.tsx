import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

interface SectionTitleProps {
  label: string;
  title: ReactNode;
  subtitle?: string;
  inView: boolean;
  align?: "center" | "left";
  className?: string;
}

/** Small eyebrow label used above every section heading. */
export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block text-secondary font-semibold text-xs tracking-[0.18em] uppercase mb-4">
      {children}
    </span>
  );
}

/** Consistent "label + h2 + optional paragraph" header used across sections. */
export function SectionTitle({ label, title, subtitle, inView, align = "center", className }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={cn(align === "center" && "text-center mb-14", className)}
    >
      <SectionLabel>{label}</SectionLabel>
      <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight max-w-lg mx-auto">{title}</h2>
      {subtitle && (
        <p className={cn("text-muted max-w-xl mx-auto text-base mt-4", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
