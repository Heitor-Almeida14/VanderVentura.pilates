import React, { useState } from 'react';
import { APPARATUS_LIST, STUDIO_INFO } from '../data/studioData';
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, Layers } from 'lucide-react';

export const ApparatusShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<string>(APPARATUS_LIST[0].id);

  const activeApparatus = APPARATUS_LIST.find((a) => a.id === activeId) || APPARATUS_LIST[0];

  const whatsappUrl = (apparatusName: string) =>
    `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
      `Olá! Estava navegando no site e fiquei interessado em treinar no equipamento ${apparatusName}. Gostaria de conhecer o estúdio!`
    )}`;

  return (
    <section id="aparelhos" className="py-24 bg-vv-black text-white relative overflow-hidden">
      {/* Background kinetic ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-vv-lime/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-vv-border-dark">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-charcoal text-vv-lime text-xs font-mono font-bold mb-3 border border-vv-border-dark">
              <Layers className="w-3.5 h-3.5" />
              <span>// ENGENHARIA DO MOVIMENTO</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              APARELHOS CLÁSSICOS &
              <br />
              <span className="text-vv-lime">TECNOLOGIA BIOMECÂNICA.</span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm max-w-md font-normal leading-relaxed">
            Estrutura 100% equipada com a linha completa de aparelhos de madeira maciça e molas de alta precisão.
            Selecione cada um para entender o impacto biomecânico no seu corpo.
          </p>
        </div>

        {/* Tab Buttons Horizontal Bar */}
        <div className="flex gap-2.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {APPARATUS_LIST.map((item, idx) => {
            const isActive = item.id === activeId;
            return (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`flex items-center gap-3 px-5 py-3 rounded-2xl text-xs font-mono tracking-wider uppercase transition-all duration-300 flex-shrink-0 border ${
                  isActive
                    ? 'bg-vv-lime text-vv-black font-extrabold border-vv-lime shadow-lg shadow-vv-lime/20 scale-[1.02]'
                    : 'bg-vv-charcoal text-gray-400 hover:text-white border-vv-border-dark hover:border-gray-600'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-vv-black' : 'bg-gray-600'}`} />
                <span>0{idx + 1}. {item.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Apparatus Detail Card */}
        <div className="rounded-3xl bg-vv-charcoal border border-vv-border-dark overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Visual Photo (7 cols) */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden group">
              <img
                src={activeApparatus.image}
                alt={activeApparatus.name}
                className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-vv-charcoal via-transparent to-vv-charcoal/30 lg:bg-gradient-to-r lg:from-transparent lg:to-vv-charcoal" />

              {/* Floating Spec Tag */}
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-1 px-4 py-2.5 rounded-2xl bg-vv-black/80 backdrop-blur-md border border-white/10 text-xs font-mono">
                <span className="text-vv-lime text-[10px] uppercase font-bold tracking-widest">
                  {activeApparatus.category}
                </span>
                <span className="text-white font-semibold">
                  {activeApparatus.specs.resistanceType}
                </span>
              </div>
            </div>

            {/* Specifications & Clinical Text (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-vv-lime tracking-widest uppercase">
                    // ESPECIFICAÇÃO CLÍNICA
                  </span>
                  <span className="text-xs font-mono text-gray-500">
                    Nível: {activeApparatus.specs.level}
                  </span>
                </div>

                <h3 className="font-display font-black text-2xl sm:text-3xl text-white mb-2">
                  {activeApparatus.name}
                </h3>

                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-6">
                  {activeApparatus.tagline}
                </p>

                <p className="text-sm text-gray-300 leading-relaxed mb-6 font-normal">
                  {activeApparatus.description}
                </p>

                {/* Focus Muscles */}
                <div className="mb-6">
                  <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2.5">
                    Músculos Alvo de Ativação:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeApparatus.focusMuscles.map((muscle, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-vv-black border border-vv-border-dark text-[11px] font-mono text-gray-200"
                      >
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Clinical Benefit Highlight */}
                <div className="p-4 rounded-2xl bg-vv-black/60 border border-vv-border-dark mb-8">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-vv-lime flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-white block mb-0.5">
                        Indicação Fisioterapêutica:
                      </span>
                      <span className="text-xs text-gray-300 leading-normal">
                        {activeApparatus.clinicalBenefit}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-vv-border-dark">
                <a
                  href={whatsappUrl(activeApparatus.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-vv-lime text-vv-black font-extrabold text-xs uppercase tracking-wider hover:bg-vv-lime-hover transition-all shadow-lg shadow-vv-lime/20 group"
                >
                  <span>Experimentar o {activeApparatus.name.split(' ')[0]} na Aula</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
