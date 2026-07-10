import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Smile, X } from "lucide-react";
import { cn } from "../../utils/cn";
import { useScrolled } from "../../hooks/useScrolled";
import { NAV_LINKS, CLINIC_NAME, CLINIC_TAGLINE } from "../../data/constants";
import { WhatsAppButton } from "../Button/WhatsAppButton";

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-400 font-heading",
        scrolled
          ? "bg-white/92 backdrop-blur-xl border-b border-primary/8 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label={`${CLINIC_NAME} – início`}>
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
            <Smile className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <div className="leading-tight">
            <span className="font-bold text-primary text-[17px] block">{CLINIC_NAME}</span>
            <span className="text-[10px] text-secondary font-medium tracking-wide">{CLINIC_TAGLINE}</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-ink hover:text-primary font-medium text-sm transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-secondary rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <WhatsAppButton text="Agendar Consulta" size="sm" />
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="md:hidden p-2 rounded-xl text-ink hover:bg-surface transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-white/97 backdrop-blur-xl border-t border-primary/10"
          >
            <div className="px-6 py-5 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-ink font-medium py-2 border-b border-gray-100 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <WhatsAppButton text="Agendar Consulta" size="md" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
