import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { ArrowUp, Phone, MapPin, Heart, ShieldCheck } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de falar com a equipe do VanderVentura Pilates.'
  )}`;

  return (
    <footer className="relative bg-vv-black text-white pt-20 pb-12 border-t-2 border-vv-border-dark overflow-hidden">
      
      {/* Decorative top accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-vv-lime to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-vv-border-dark">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-vv-charcoal border border-vv-lime/40 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-6 h-6 text-vv-lime fill-none stroke-current"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 28 L40 74 L50 48 L60 74 L78 28" />
                </svg>
              </div>
              <span className="font-display font-black text-2xl tracking-tight text-white">
                VANDER<span className="text-vv-lime">VENTURA</span>
              </span>
            </div>

            <p className="text-sm text-gray-400 font-normal leading-relaxed max-w-sm">
              Studio especializado em Pilates Clássico e Fisioterapia Biomecânica.
              Turmas reduzidas de até 3 alunos para foco absoluto em postura, descompressão da coluna e qualidade de vida.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-vv-charcoal border border-vv-border-dark text-[11px] font-mono text-gray-300">
                Wellhub (Gympass) Partner
              </span>
              <span className="px-3 py-1 rounded-full bg-vv-charcoal border border-vv-border-dark text-[11px] font-mono text-gray-300">
                Totalpass Oficial
              </span>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-vv-lime font-bold">
              // MAPA DO SITE
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-400">
              <li>
                <a href="#metodo" className="hover:text-vv-lime transition-colors">
                  O Método & Filosofia
                </a>
              </li>
              <li>
                <a href="#aparelhos" className="hover:text-vv-lime transition-colors">
                  Aparelhos Clássicos
                </a>
              </li>
              <li>
                <a href="#biomecanica" className="hover:text-vv-lime transition-colors">
                  Análise Biomecânica
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-vv-lime transition-colors">
                  Wellhub, Totalpass & Planos
                </a>
              </li>
              <li>
                <a href="#horarios" className="hover:text-vv-lime transition-colors">
                  Grade de Horários
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-vv-lime transition-colors">
                  Localização no Jd. Prudência
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-vv-lime transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contacts (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-vv-lime font-bold">
              // ATENDIMENTO & CONTATO
            </h4>
            
            <div className="space-y-3 text-xs text-gray-300">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-vv-charcoal border border-vv-border-dark hover:border-vv-lime transition-all group"
              >
                <Phone className="w-4 h-4 text-vv-lime group-hover:scale-110 transition-transform" />
                <span className="font-mono font-semibold">{STUDIO_INFO.phone}</span>
                <span className="ml-auto text-[10px] text-vv-lime font-mono">WhatsApp</span>
              </a>

              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-vv-charcoal border border-vv-border-dark hover:border-vv-lime transition-all group"
              >
                <InstagramIcon className="w-4 h-4 text-vv-lime group-hover:scale-110 transition-transform" />
                <span className="font-mono font-semibold">{STUDIO_INFO.instagram}</span>
                <span className="ml-auto text-[10px] text-gray-500 font-mono">Instagram</span>
              </a>

              <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-vv-charcoal border border-vv-border-dark text-gray-400">
                <MapPin className="w-4 h-4 text-vv-lime flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{STUDIO_INFO.address} – {STUDIO_INFO.neighborhood}, São Paulo - SP</span>
              </div>
            </div>
          </div>

        </div>

        {/* Monumental Giant Typography (Inspired by Lando Norris footer) */}
        <div className="py-12 select-none text-center overflow-hidden">
          <span className="font-display font-black text-[13vw] leading-none tracking-tighter text-white/5 uppercase block whitespace-nowrap hover:text-vv-lime/10 transition-colors duration-500">
            VANDERVENTURA
          </span>
        </div>

        {/* Bottom Legal & Back to Top */}
        <div className="pt-8 border-t border-vv-border-dark/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <div>
            © {new Date().getFullYear()} VanderVentura Pilates & Fisioterapia. Todos os direitos reservados.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-vv-charcoal border border-vv-border-dark text-gray-300 hover:text-vv-lime hover:border-vv-lime transition-all"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Floating Sticky Quick WhatsApp Action Button */}
      <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-vv-lime text-vv-black font-extrabold text-xs uppercase tracking-wider shadow-2xl hover:bg-vv-lime-hover hover:scale-110 active:scale-95 transition-all shadow-vv-lime/40 border-2 border-vv-black"
          aria-label="Falar no WhatsApp oficial"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline font-mono">Agendar Aula</span>
        </a>
      </aside>

    </footer>
  );
};
