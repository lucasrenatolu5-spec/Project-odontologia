import { Clock, Instagram, MapPin, MessageCircle, Phone, Smile } from "lucide-react";
import { WHATSAPP_URL, CLINIC_NAME } from "../../data/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 font-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                <Smile className="w-5.5 h-5.5 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="font-bold text-white text-lg block">{CLINIC_NAME}</span>
                <span className="text-blue-400 text-xs font-medium">Clínica Odontológica Premium</span>
              </div>
            </div>
            <p className="font-body text-gray-400 text-sm leading-relaxed max-w-xs">
              Transformando sorrisos e vidas com odontologia de excelência, atendimento humanizado e tecnologia de
              ponta.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Contato</h4>
            <div className="font-body space-y-3 text-sm text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span>
                  Av. Paulista, 1234 – Bela Vista
                  <br />
                  São Paulo, SP 01310-100
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>(11) 99999-9999</span>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-accent transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-accent flex-shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-5 text-xs uppercase tracking-widest">Horários</h4>
            <div className="font-body space-y-1.5 text-sm text-gray-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <div>Seg – Sex: 8h às 20h</div>
                  <div>Sábado: 9h às 14h</div>
                </div>
              </div>
              <div className="flex gap-3 pt-5">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-secondary flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-9 h-9 rounded-xl bg-white/8 hover:bg-accent flex items-center justify-center transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="font-body border-t border-white/8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
          <span>&copy; {new Date().getFullYear()} {CLINIC_NAME}. Todos os direitos reservados.</span>
          <span>CRO-SP 45.892 &nbsp;·&nbsp; CNPJ 12.345.678/0001-90</span>
        </div>
      </div>
    </footer>
  );
}
