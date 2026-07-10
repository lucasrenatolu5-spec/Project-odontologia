import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../../utils/cn";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  icon?: ReactNode;
}

/** Secondary, outlined link-button (e.g. "Conheça nossos tratamentos"). */
export function Button({ children, icon, className, ...rest }: ButtonProps) {
  return (
    <a
      {...rest}
      className={cn(
        "group inline-flex items-center gap-2 px-7 py-4 rounded-2xl border-2 border-primary/20 text-primary font-semibold",
        "hover:border-primary hover:bg-surface transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
        className
      )}
    >
      {children}
      {icon}
    </a>
  );
}
