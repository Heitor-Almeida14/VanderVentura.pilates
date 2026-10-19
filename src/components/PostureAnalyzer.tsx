import React, { useState } from 'react';
import { POSTURE_POINTS, STUDIO_INFO } from '../data/studioData';
import { Sliders, Sparkles, AlertCircle, CheckCircle, ArrowRight } from 'lucide-react';

export const PostureAnalyzer: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [selectedPoint, setSelectedPoint] = useState<number>(0);

  const activePoint = POSTURE_POINTS[selectedPoint];

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Gostaria de agendar uma avaliação postural para verificar meu alinhamento de coluna e pontos de dor.'
  )}`;

  return (
    <section id="biomecanica" className="py-24 bg-vv-offwhite text-vv-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-vv-black text-vv-lime text-xs font-mono font-bold mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>// SIMULADOR INTERATIVO DE ALINHAMENTO</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-vv-black tracking-tight leading-tight mb-4">
            A CIÊNCIA DA TRANSFORMAÇÃO:
            <br />
            <span className="text-gray-500 font-light">ARRASTE PARA COMPARAR O IMPACTO.</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Veja como a descompressão das molas e a ativação do Powerhouse revertem os danos causados por horas
            em frente às telas e sedentarismo.
          </p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          {/* Visual Slider (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-vv-black bg-vv-black shadow-2xl aspect-[4/3] select-none">
              
              {/* After Image (Full background) */}
              <div className="absolute inset-0">
                <img
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
                  alt="Postura alinhada com Pilates VanderVentura"
                  className="w-full h-full object-cover object-center"
                />
                {/* Badge After */}
                <div className="absolute top-6 right-6 z-10 px-3.5 py-1.5 rounded-full bg-vv-lime text-vv-black font-mono font-bold text-xs shadow-lg">
                  COM VANDERVENTURA (ALINHADO)
                </div>
              </div>

              {/* Before Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1200&q=80"
                  alt="Postura antes do Pilates com sobrecarga"
                  className="w-full h-full object-cover object-center filter grayscale contrast-125"
                />
                {/* Badge Before */}
                <div className="absolute top-6 left-6 z-10 px-3.5 py-1.5 rounded-full bg-vv-black/85 text-white font-mono text-xs border border-white/20">
                  ANTES (TENSÃO & SOBRECARGA)
                </div>
              </div>

              {/* Slider Divider Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-vv-lime cursor-ew-resize z-20 shadow-[0_0_15px_#D1FF00]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-vv-black border-2 border-vv-lime flex items-center justify-center text-vv-lime shadow-xl">
                  <Sliders className="w-4 h-4" />
                </div>
              </div>

              {/* Range Input for dragging */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
                aria-label="Controle deslizante de comparação de postura"
              />

              {/* Drag Hint Tooltip */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-vv-black/80 backdrop-blur-md text-white font-mono text-[11px] pointer-events-none z-10 flex items-center gap-2">
                <span>◀ Arraste para os lados para comparar ▶</span>
              </div>
            </div>
          </div>

          {/* Interactive Diagnosis Cards (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              // CLIQUE PARA ANALISAR CADA REGIÃO:
            </div>

            {POSTURE_POINTS.map((point, idx) => {
              const isSelected = idx === selectedPoint;
              return (
                <button
                  key={point.id}
                  onClick={() => setSelectedPoint(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-vv-black text-white border-vv-black shadow-xl scale-[1.01]'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-display font-extrabold text-base">
                      0{idx + 1}. {point.title}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        isSelected ? 'bg-vv-lime text-vv-black font-bold' : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {point.benefitPercent}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="space-y-3 pt-3 border-t border-vv-border-dark text-xs">
                      <div className="flex items-start gap-2 text-rose-300">
                        <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{point.beforeText}</span>
                      </div>
                      <div className="flex items-start gap-2 text-emerald-300">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span>{point.afterText}</span>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-vv-lime text-vv-black font-extrabold text-xs uppercase tracking-wider hover:bg-vv-lime-hover shadow-lg shadow-vv-lime/20 transition-transform active:scale-95"
              >
                <span>Agendar Avaliação do Meu Alinhamento</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
