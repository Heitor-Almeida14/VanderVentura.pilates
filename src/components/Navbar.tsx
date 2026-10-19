import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, ShieldCheck, Sparkles, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O Método', href: '#metodo' },
    { label: 'Aparelhos', href: '#aparelhos' },
    { label: 'Biomecânica', href: '#biomecanica' },
    { label: 'Planos & Passes', href: '#planos' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de informações sobre horários disponíveis e planos no VanderVentura Pilates.'
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-vv-black/85 backdrop-blur-md border-b border-vv-border-dark py-3.5 shadow-2xl'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="VanderVentura Pilates & Fisioterapia"
            >
              {/* Geometric Monogram */}
              <div className="relative w-10 h-10 rounded-xl bg-vv-charcoal border border-vv-border-dark flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:border-vv-lime">
                <svg
                  viewBox="0 0 100 100"
                  className="w-6 h-6 text-vv-lime fill-none stroke-current"
                  strokeWidth="11"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 28 L40 74 L50 48 L60 74 L78 28" />
                </svg>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-vv-lime rounded-full animate-ping opacity-75" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-vv-lime rounded-full" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className={`font-display font-extrabold text-base tracking-tight transition-colors ${
                    isScrolled ? 'text-white' : 'text-vv-black'
                  }`}>
                    VANDER<span className="text-vv-lime">VENTURA</span>
                  </span>
                  <span className="hidden sm:inline-block text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded bg-vv-lime/10 text-vv-lime border border-vv-lime/30">
                    STUDIO
                  </span>
                </div>
                <span className={`text-[10px] font-medium tracking-wide transition-colors ${
                  isScrolled ? 'text-gray-400' : 'text-gray-700'
                }`}>
                  Pilates & Fisioterapia • SP
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-vv-charcoal/90 px-4 py-1.5 rounded-full border border-vv-border-dark shadow-inner backdrop-blur-md">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-xs font-medium text-gray-300 hover:text-vv-lime px-3 py-1.5 rounded-full transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-vv-lime transition-all duration-300 group-hover:w-3/5" />
                </button>
              ))}
            </nav>

            {/* Right Action Area */}
            <div className="flex items-center gap-3">
              {/* Partner Badges Pill */}
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-vv-charcoal border border-vv-border-dark text-[11px] font-mono text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-vv-lime" />
                <span className="text-white font-semibold">Wellhub</span>
                <span className="text-gray-500">•</span>
                <span className="text-white font-semibold">Totalpass</span>
              </div>

              {/* Primary CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vv-lime text-vv-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-vv-lime-hover hover:scale-105 active:scale-95 shadow-md shadow-vv-lime/20 group"
              >
                <span>Agendar Aula</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl bg-vv-charcoal text-white border border-vv-border-dark hover:border-vv-lime transition-colors"
                aria-label="Abrir menu de navegação"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-vv-lime" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-vv-black/95 backdrop-blur-xl lg:hidden flex flex-col justify-between p-6 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex items-center justify-between border-b border-vv-border-dark pb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-vv-charcoal border border-vv-lime/40 flex items-center justify-center">
              <span className="font-display font-black text-vv-lime text-base">VV</span>
            </div>
            <span className="font-display font-extrabold text-white text-lg tracking-tight">
              VANDER<span className="text-vv-lime">VENTURA</span>
            </span>
          </div>

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-xl bg-vv-charcoal border border-vv-border-dark text-gray-300 hover:text-white"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6 text-vv-lime" />
          </button>
        </div>

        {/* Big Editorial Links */}
        <div className="flex flex-col gap-4 py-8">
          <div className="text-[11px] font-mono tracking-widest uppercase text-vv-lime">
            // NAVEGAÇÃO PRINCIPAL
          </div>
          {navLinks.map((link, idx) => (
            <button
              key={link.href}
              onClick={() => handleLinkClick(link.href)}
              className="group flex items-center justify-between text-left py-2 border-b border-vv-border-dark/60 text-white hover:text-vv-lime transition-colors"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-xs font-mono text-gray-500 group-hover:text-vv-lime">
                  0{idx + 1}
                </span>
                <span className="font-display font-extrabold text-2xl tracking-tight">
                  {link.label}
                </span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-vv-lime group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          ))}
        </div>

        {/* Bottom Details in Menu */}
        <div className="pt-6 border-t border-vv-border-dark flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>Wellhub & Totalpass Aceitos</span>
            <span className="text-vv-lime">Av. Cupecê, 2875</span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-vv-lime text-vv-black font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-vv-lime/20"
          >
            <Phone className="w-4 h-4" />
            <span>Falar no WhatsApp Oficial</span>
          </a>
        </div>
      </div>
    </>
  );
};
