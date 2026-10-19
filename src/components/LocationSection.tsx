import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Navigation, Clock, Phone, ExternalLink, Check, Car, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-vv-black text-white relative overflow-hidden">
      {/* Glow decorative */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-vv-lime/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-vv-border-dark">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-charcoal text-vv-lime text-xs font-mono font-bold mb-3 border border-vv-border-dark">
              <MapPin className="w-3.5 h-3.5" />
              <span>// LOCALIZAÇÃO ESTRATÉGICA EM SÃO PAULO</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              ONDE ESTAMOS:
              <br />
              <span className="text-vv-lime">AV. CUPECÊ / JD. PRUDÊNCIA.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm max-w-md font-normal leading-relaxed">
            Localizado no corredor de fácil acesso da Zona Sul, com ambiente seguro, climatizado,
            salas térreas e facilidade de estacionamento nas proximidades.
          </p>
        </div>

        {/* Location Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Hours, Fast Route Buttons (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-vv-charcoal border border-vv-border-dark shadow-2xl">
            <div className="space-y-8">
              
              {/* Address Highlight */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-vv-lime text-vv-black flex items-center justify-center flex-shrink-0 shadow-lg shadow-vv-lime/20">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-vv-lime uppercase tracking-widest block mb-1">
                    Endereço Oficial
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {STUDIO_INFO.address}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1 font-mono">
                    {STUDIO_INFO.neighborhood} • {STUDIO_INFO.city} • CEP {STUDIO_INFO.cep}
                  </p>
                </div>
              </div>

              {/* Operating Hours Table */}
              <div className="p-6 rounded-2xl bg-vv-black border border-vv-border-dark space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-vv-lime font-bold uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Horários de Funcionamento</span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-vv-border-dark/60">
                  <span className="text-gray-300">Segunda a Sexta-feira:</span>
                  <span className="font-mono font-bold text-white">
                    07:00 às 13:00 e 15:00 às 21:00
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-vv-border-dark/60">
                  <span className="text-gray-300">Sábados:</span>
                  <span className="font-mono font-bold text-white">
                    07:00 às 12:00
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs sm:text-sm py-1.5">
                  <span className="text-gray-400">Domingos e Feriados:</span>
                  <span className="font-mono text-gray-500">
                    Fechado
                  </span>
                </div>
              </div>

              {/* Amenities */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vv-lime" />
                  <span>Salas 4 e 6 Climatizadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vv-lime" />
                  <span>Ambiente Térreo e Acessível</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vv-lime" />
                  <span>Estacionamento Fácil Próximo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-vv-lime" />
                  <span>Corredor de Ônibus Av. Cupecê</span>
                </div>
              </div>

            </div>

            {/* Direct Route Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 mt-8 border-t border-vv-border-dark">
              <a
                href={STUDIO_INFO.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-vv-lime text-vv-black font-extrabold text-xs uppercase tracking-wider hover:bg-vv-lime-hover transition-all shadow-md group"
              >
                <Navigation className="w-4 h-4 text-vv-black group-hover:rotate-12 transition-transform" />
                <span>Traçar Rota no Waze</span>
              </a>

              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-vv-black text-white hover:bg-vv-darkgray border border-vv-border-dark font-extrabold text-xs uppercase tracking-wider transition-all group"
              >
                <Compass className="w-4 h-4 text-gray-400 group-hover:text-vv-lime transition-colors" />
                <span>Abrir no Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right Column: Stylized Studio Facade & Map Card (5 cols) */}
          <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-vv-border-dark bg-vv-charcoal relative flex flex-col justify-between shadow-2xl">
            
            {/* Map Preview Image Graphic with Pin */}
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-auto lg:h-full w-full overflow-hidden bg-vv-black">
              {/* Realistic Map Mockup Graphic with high tech Dark UI */}
              <div className="absolute inset-0 opacity-80 bg-[radial-gradient(#272B25_1px,transparent_1px)] bg-[size:16px_16px]" />
              
              {/* Vector Roads Graphic */}
              <svg className="absolute inset-0 w-full h-full text-vv-border-dark stroke-current stroke-2" fill="none">
                <path d="M-50 150 Q 200 120 500 180" strokeWidth="6" stroke="#222521" />
                <path d="M250 -50 L 220 500" strokeWidth="8" stroke="#272B25" />
                <path d="M-50 350 L 500 320" strokeWidth="4" stroke="#1C201B" />
                <circle cx="235" cy="200" r="45" stroke="#D1FF00" strokeWidth="1" strokeDasharray="4 4" fill="rgba(209,255,0,0.05)" />
              </svg>

              {/* Center Location Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-vv-lime text-vv-black flex items-center justify-center shadow-[0_0_25px_#D1FF00] animate-bounce">
                  <MapPin className="w-7 h-7" />
                </div>
                <div className="mt-2 px-3 py-1 rounded-full bg-vv-black/90 border border-vv-lime/40 text-white font-mono font-bold text-xs shadow-xl whitespace-nowrap">
                  VANDERVENTURA PILATES
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-vv-black/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div className="text-xs">
                  <span className="text-gray-400 block font-mono text-[10px]">PONTO DE REFERÊNCIA:</span>
                  <span className="font-semibold text-white">Av. Cupecê, próximo ao Jd. Prudência</span>
                </div>
                <span className="px-2.5 py-1 rounded bg-vv-lime text-vv-black font-mono font-bold text-[10px]">
                  SALAS 4 & 6
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
