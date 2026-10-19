import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles, Activity, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma aula experimental no VanderVentura Pilates através do site.'
  )}`;

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-vv-offwhite">
      {/* Background kinetic grid pattern and subtle lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Kinetic Trajectory Vector Line (Atmospheric Curve) */}
      <svg
        className="absolute -top-12 -right-20 w-[600px] h-[600px] lg:w-[900px] lg:h-[900px] text-vv-lime/20 pointer-events-none -z-0"
        viewBox="0 0 1000 1000"
        fill="none"
      >
        <circle cx="500" cy="500" r="420" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
        <path
          d="M100 900 C300 600, 700 800, 950 200"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="950" cy="200" r="8" fill="#D1FF00" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges & Telemetry Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-vv-black text-white text-xs font-mono tracking-wider border border-vv-border-dark shadow-sm">
            <span className="w-2 h-2 rounded-full bg-vv-lime animate-pulse" />
            <span className="text-gray-300">ESTÚDIO DE ALTA PRECISÃO</span>
            <span className="text-vv-lime font-bold">// SP CUPECÊ</span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-gray-700">
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span className="font-semibold text-gray-900">Wellhub (Gympass)</span>
              <span className="text-gray-400">&</span>
              <span className="font-semibold text-gray-900">Totalpass</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200 shadow-xs">
              <span className="text-amber-500 font-bold">★ 4.9</span>
              <span className="text-gray-600 font-medium">Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Monumental Editorial Typography (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="space-y-2 mb-6">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-gray-600 font-semibold block">
                [ STUDIO DE PILATES & FISIOTERAPIA ]
              </span>
              
              <h1 className="font-display font-black text-4xl sm:text-6xl xl:text-7xl tracking-tighter text-vv-black leading-[0.95]">
                CONTROLE.
                <br />
                <span className="relative inline-block">
                  PRECISÃO.
                  <svg className="absolute -bottom-1.5 left-0 w-full h-3 text-vv-lime -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
                    <path d="M0,8 Q50,0 100,6 L100,12 L0,12 Z" fill="currentColor" />
                  </svg>
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-vv-black via-vv-charcoal to-gray-700">
                  BIOMECÂNICA.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-700 max-w-xl font-normal leading-relaxed mb-8">
              A verdadeira essência da Contrologia aliada à Fisioterapia moderna. Turmas exclusivas com no 
              <strong className="text-vv-black font-bold"> máximo 3 alunos</strong> por profissional, 
              equipamentos completos e metodologia focada em alívio de dores, descompressão vertebral e alta performance.
            </p>

            {/* CTAs and Micro-interactions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-vv-black text-white font-display font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-vv-lime hover:text-vv-black hover:scale-[1.02] active:scale-95 shadow-xl group border border-transparent hover:border-vv-black"
              >
                <span>Agendar Aula Experimental</span>
                <div className="w-7 h-7 rounded-full bg-vv-lime text-vv-black flex items-center justify-center transition-transform group-hover:bg-vv-black group-hover:text-vv-lime group-hover:translate-x-1">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              <a
                href="#aparelhos"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-white/80 hover:bg-white text-vv-black font-semibold text-sm border border-gray-300 hover:border-gray-900 transition-all shadow-xs"
              >
                <span>Conhecer os Aparelhos</span>
                <Activity className="w-4 h-4 text-gray-500" />
              </a>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-gray-300/80">
              {STUDIO_INFO.metrics.map((m, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-extrabold text-xl sm:text-2xl text-vv-black tracking-tight">
                    {m.value}
                  </span>
                  <span className="text-xs font-semibold text-gray-900">
                    {m.label}
                  </span>
                  <span className="text-[11px] text-gray-500 leading-tight">
                    {m.detail}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Mask & Integrated Photography (5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Frame Container with Organic Cut Corner */}
            <div className="relative group">
              
              {/* Outer Glow & Kinetic Backdrop Accent */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-vv-lime/40 to-transparent rounded-[2.5rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-700" />

              {/* Main Visual Image Card with Organic Cut */}
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-vv-black bg-vv-black shadow-2xl">
                
                {/* Visual Label Pill */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-vv-black/85 backdrop-blur-md border border-white/20 text-white text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-vv-lime animate-ping" />
                  <span>CADILLAC & REFORMER PRO</span>
                </div>

                {/* Corner Trajectory Badge */}
                <div className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-vv-lime flex items-center justify-center text-vv-black font-black text-xs shadow-md">
                  01
                </div>

                {/* Primary Hero Photograph */}
                <div className="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=85"
                    alt="Praticante realizando exercício de alta precisão no Reformer do VanderVentura Pilates"
                    className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-vv-black via-vv-black/20 to-transparent opacity-80" />
                </div>

                {/* Integrated Floating Caption inside the Card */}
                <div className="absolute bottom-0 inset-x-0 p-6 z-20 text-white flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-vv-lime text-vv-black text-[10px] font-mono font-bold tracking-wider uppercase">
                      Atendimento VIP
                    </span>
                    <span className="text-xs text-gray-300 font-mono">
                      Máx. 3 por sessão
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white leading-snug">
                    Reeducação postural & fortalecimento de coluna com foco clínico.
                  </h3>

                  <div className="flex items-center justify-between text-xs text-gray-300 pt-2 border-t border-white/20">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-vv-lime" />
                      Av. Cupecê, 2875 – Salas 4 e 6
                    </span>
                    <span className="text-vv-lime font-mono font-semibold">
                      SP • ZONA SUL
                    </span>
                  </div>
                </div>

              </div>

              {/* Floating External Badge — Wellhub / Totalpass Instant Check-in */}
              <div className="absolute -bottom-6 -left-6 z-30 hidden sm:flex items-center gap-3 p-3.5 rounded-2xl bg-vv-charcoal text-white border border-vv-border-dark shadow-2xl backdrop-blur-md animate-pulse-subtle">
                <div className="w-10 h-10 rounded-xl bg-vv-lime text-vv-black flex items-center justify-center font-black">
                  <CheckCircle2 className="w-5 h-5 text-vv-black" />
                </div>
                <div className="flex flex-col pr-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-vv-lime font-bold">
                    CONVÊNIOS ACEITOS
                  </span>
                  <span className="text-xs font-semibold text-white">
                    Valide seu Wellhub ou Totalpass
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
