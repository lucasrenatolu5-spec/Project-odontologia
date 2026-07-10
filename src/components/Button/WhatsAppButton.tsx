import { MessageCircle, ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";
import { WHATSAPP_URL } from "../../data/constants";
import type { WAButtonSize } from "../../types";

interface WhatsAppButtonProps {
  text: string;
  size?: WAButtonSize;
  light?: boolean;
  className?: string;
}

const PADDING: Record<WAButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-base",
  lg: "px-9 py-4 text-lg",
};

/**
 * The primary conversion action across the page (Hero, Navbar, CTA).
 * Opens WhatsApp with a pre-filled message. Includes a subtle pulse
 * dot-free tap/hover animation to draw attention without being loud.
 */
export function WhatsAppButton({ text, size = "md", light = false, className }: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${text} – abrir conversa no WhatsApp`}
      className={cn(
        "group relative inline-flex items-center gap-3 font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] overflow-hidden",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent",
        PADDING[size],
        light
          ? "bg-white text-primary hover:bg-white/95 hover:shadow-white/40 hover:shadow-2xl"
          : "bg-accent text-white hover:bg-[#20c45e] hover:shadow-accent/50 hover:shadow-xl",
        className
      )}
    >
      <span className="absolute inset-0 rounded-2xl bg-white/20 scale-0 group-active:scale-100 transition-transform duration-300 origin-center" />
      <MessageCircle className="w-5 h-5 flex-shrink-0" aria-hidden="true" />
      <span className="relative">{text}</span>
      <ArrowRight
        className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
        aria-hidden="true"
      />
    </a>
  );
}
