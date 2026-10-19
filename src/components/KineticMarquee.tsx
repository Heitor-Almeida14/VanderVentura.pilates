import React from 'react';

export const KineticMarquee: React.FC = () => {
  const itemsRow1 = [
    "WELLHUB (GYMPASS) ACEITO",
    "TOTALPASS OFICIAL",
    "MÁXIMO 3 ALUNOS POR TURMA",
    "100% FISIOTERAPEUTAS",
    "DESCOMPRESSÃO DA COLUNA",
    "AVALIAÇÃO POSTURAL 3D",
    "REFORMER & CADILLAC PRO",
    "SÃO PAULO • AV. CUPECÊ, 2875",
  ];

  const itemsRow2 = [
    "CONTROLE & PRECISÃO DE MOVIMENTO",
    "ALÍVIO DE HÉRNIA DE DISCO",
    "FORTALECIMENTO DO POWERHOUSE",
    "ALTA MOBILIDADE ARTICULAR",
    "SESSÕES DE 50 A 55 MINUTOS",
    "NOTA 4.9 NO GOOGLE",
    "CONFORTO E AMBIENTE CLIMATIZADO",
  ];

  return (
    <div className="relative overflow-hidden bg-vv-black py-4 border-y-2 border-vv-border-dark select-none">
      {/* Accent glow line on top */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-vv-lime to-transparent" />

      {/* Row 1 - High Speed Marquee Forward */}
      <div className="flex w-max animate-marquee space-x-6 text-white font-display font-black text-sm sm:text-base tracking-widest uppercase">
        {[...itemsRow1, ...itemsRow1].map((text, i) => (
          <div key={i} className="flex items-center space-x-6 whitespace-nowrap">
            <span className="hover:text-vv-lime transition-colors">{text}</span>
            <span className="w-2 h-2 rounded-full bg-vv-lime shadow-[0_0_8px_#D1FF00]" />
          </div>
        ))}
      </div>

      {/* Row 2 - Marquee Reverse with Lime accents */}
      <div className="flex w-max animate-marquee-reverse space-x-6 text-vv-lime font-mono font-bold text-xs sm:text-sm tracking-mega uppercase mt-2.5 opacity-90">
        {[...itemsRow2, ...itemsRow2].map((text, i) => (
          <div key={i} className="flex items-center space-x-6 whitespace-nowrap">
            <span className="text-gray-400">//</span>
            <span className="text-white hover:text-vv-lime transition-colors">{text}</span>
            <span className="text-vv-lime">★</span>
          </div>
        ))}
      </div>

      {/* Accent glow line on bottom */}
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-vv-lime to-transparent" />
    </div>
  );
};
