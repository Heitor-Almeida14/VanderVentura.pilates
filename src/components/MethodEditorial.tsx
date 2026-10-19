import React from 'react';
import { Target, Shield, HeartPulse, CheckCircle, ArrowRight } from 'lucide-react';
import { STUDIO_INFO } from '../data/studioData';

export const MethodEditorial: React.FC = () => {
  const pillars = [
    {
      num: "01",
      title: "Descompressão Axial & Coluna Saudável",
      subtitle: "Reversão das pressões gravitacionais do dia a dia",
      description: "Ao trabalhar contra a resistência elástica progressiva das molas calibradas nos aparelhos Reformer e Cadillac, conseguimos abrir espaço entre as vértebras (L1-S1 e C1-C7). Isso alivia a compressão de raízes nervosas e reduz drasticamente as dores causadas por hérnias de disco, protrusões e bicos de papagaio.",
      highlight: "-85% de queixas de dor lombar crônica",
      icon: Target
    },
    {
      num: "02",
      title: "Ativação do Powerhouse (Centro de Força)",
      subtitle: "Construção de um cinturão muscular protetor",
      description: "Diferente de academias convencionais que trabalham apenas a musculatura superficial, nosso método ativa o transverso do abdômen, multífidos e o assoalho pélvico. Você ganha sustentação corporal sem sobrecarregar quadris ou joelhos.",
      highlight: "Estabilidade postural e tônus funcional",
      icon: Shield
    },
    {
      num: "03",
      title: "Clínica Fisioterapêutica em Trios (1:3)",
      subtitle: "Supervisão cirúrgica de cada respiração e ângulo",
      description: "Limitamos cada turma a no máximo 3 pessoas por instrutor graduado em Fisioterapia. Isso garante que cada aluno execute um plano personalizado de acordo com seus desvios posturais (escoliose, cifose, hiperlordose) e objetivos individuais.",
      highlight: "100% de atenção individual em cada treino",
      icon: HeartPulse
    }
  ];

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Li sobre o Método VanderVentura e quero agendar minha avaliação postural individual.'
  )}`;

  return (
    <section id="metodo" className="py-24 bg-vv-offwhite relative overflow-hidden">
      {/* Decorative Vector Arc */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-8 border-b border-gray-300">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-black text-vv-lime text-xs font-mono font-semibold mb-4">
              <span>// FILOSOFIA & CIÊNCIA DO MOVIMENTO</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-vv-black tracking-tight leading-[1.05]">
              O MÉTODO VANDERVENTURA:
              <br />
              <span className="text-gray-500 font-light">CONTROLOGIA + FISIOTERAPIA.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
              Não treinamos apenas músculos. Reprogramamos padrões neurais de movimento para que você viva sem dor,
              com vigor, flexibilidade e elegância postural.
            </p>
          </div>
        </div>

        {/* 3 Pillars Asymmetric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-white border border-gray-200/80 shadow-md hover:shadow-2xl hover:border-vv-black transition-all duration-300"
              >
                {/* Number & Icon Pill */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display font-black text-3xl text-gray-400 group-hover:text-vv-lime transition-colors">
                    {p.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-vv-charcoal text-vv-lime flex items-center justify-center transition-transform group-hover:rotate-6">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 mb-8">
                  <h3 className="font-display font-bold text-xl text-vv-black group-hover:text-black transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-gray-600 uppercase tracking-wide">
                    {p.subtitle}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed pt-2">
                    {p.description}
                  </p>
                </div>

                {/* Highlight Badge */}
                <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-vv-black bg-gray-50 p-3 rounded-xl group-hover:bg-vv-lime/10 group-hover:text-vv-black transition-colors">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{p.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote Box */}
        <div className="mt-16 rounded-3xl bg-vv-black text-white p-8 sm:p-12 border border-vv-border-dark relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-vv-lime/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono text-vv-lime uppercase tracking-widest">
                // COMPROMISSO CLÍNICO
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                "Você é tão jovem quanto a flexibilidade da sua coluna vertebral."
              </h3>
              <p className="text-sm text-gray-400 font-normal max-w-2xl leading-relaxed">
                — Frase célebre de Joseph Pilates. Em nosso estúdio no Jardim Prudência, unimos essa sabedoria centenária
                aos testes ortopédicos contemporâneos para entregar uma melhora real e duradoura na sua rotina.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-vv-lime text-vv-black font-extrabold text-xs uppercase tracking-wider hover:bg-vv-lime-hover hover:scale-105 transition-all shadow-lg shadow-vv-lime/25"
              >
                <span>Fazer Avaliação Clínica</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
