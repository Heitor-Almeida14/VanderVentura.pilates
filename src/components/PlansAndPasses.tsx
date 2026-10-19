import React, { useState } from 'react';
import { WELLHUB_PLANS, STUDIO_PRIVATE_PLANS, STUDIO_INFO } from '../data/studioData';
import { ShieldCheck, Check, ArrowUpRight, Zap, Sparkles, HelpCircle } from 'lucide-react';

export const PlansAndPasses: React.FC = () => {
  const [tab, setTab] = useState<'passes' | 'studio'>('passes');
  const [frequency, setFrequency] = useState<number>(2); // 1x, 2x or 3x/week

  const calculateSessions = (freq: number) => freq * 4;

  const buildWhatsappLink = (planTitle: string, prefilledMsg: string) => {
    const text = `${prefilledMsg} Frequência de interesse: ${frequency}x na semana (${calculateSessions(frequency)} aulas/mês).`;
    return `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="planos" className="py-24 bg-vv-black text-white relative overflow-hidden">
      {/* Background glow and decorative lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-vv-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-charcoal text-vv-lime text-xs font-mono font-bold mb-3 border border-vv-border-dark">
            <Zap className="w-3.5 h-3.5" />
            <span>// PLANOS & CONVÊNIOS CORPORATIVOS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight mb-4">
            QUALIDADE PREMIUM COM
            <br />
            <span className="text-vv-lime">PREÇO ACESSÍVEL & CONVÊNIOS.</span>
          </h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Treine com fisioterapeutas no estúdio mais completo da Cupecê. Escolha utilizar seu benefício
            Wellhub / Totalpass ou nossos planos particulares com descontos semestrais.
          </p>

          {/* Switcher Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-vv-charcoal border border-vv-border-dark mt-8 shadow-inner">
            <button
              onClick={() => setTab('passes')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                tab === 'passes'
                  ? 'bg-vv-lime text-vv-black font-extrabold shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Wellhub & Totalpass</span>
            </button>

            <button
              onClick={() => setTab('studio')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                tab === 'studio'
                  ? 'bg-vv-lime text-vv-black font-extrabold shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Planos do Estúdio (Particulares)</span>
            </button>
          </div>
        </div>

        {/* Frequency Interactive Selector */}
        <div className="max-w-md mx-auto mb-12 p-4 rounded-2xl bg-vv-charcoal/80 border border-vv-border-dark flex items-center justify-between">
          <span className="text-xs font-mono text-gray-300">
            Frequência desejada:
          </span>
          <div className="flex gap-2">
            {[1, 2, 3].map((f) => (
              <button
                key={f}
                onClick={() => setFrequency(f)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all ${
                  frequency === f
                    ? 'bg-vv-lime text-vv-black shadow-md'
                    : 'bg-vv-black text-gray-400 hover:text-white border border-vv-border-dark'
                }`}
              >
                {f}x na semana
              </button>
            ))}
          </div>
          <span className="text-xs font-mono text-vv-lime">
            ~{calculateSessions(frequency)} aulas/mês
          </span>
        </div>

        {/* Tab 1: Wellhub & Totalpass Cards */}
        {tab === 'passes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {WELLHUB_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="relative rounded-3xl bg-vv-charcoal border-2 border-vv-border-dark hover:border-vv-lime p-8 flex flex-col justify-between transition-all duration-300 group shadow-xl"
              >
                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-vv-lime/10 text-vv-lime border border-vv-lime/30 font-bold tracking-widest uppercase">
                      {plan.badge}
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-vv-lime animate-pulse" />
                  </div>

                  <h3 className="font-display font-black text-2xl text-white">
                    {plan.title}
                  </h3>

                  <p className="text-xs text-gray-400 font-mono">
                    {plan.subtitle}
                  </p>

                  <div className="pt-4 border-t border-vv-border-dark space-y-3">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-vv-lime flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-vv-border-dark">
                  <a
                    href={buildWhatsappLink(plan.title, plan.prefilledMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-vv-lime text-vv-black font-extrabold text-xs uppercase tracking-wider hover:bg-vv-lime-hover transition-all shadow-lg shadow-vv-lime/20 group-hover:scale-[1.01]"
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                  <p className="text-[11px] text-center text-gray-500 font-mono mt-2.5">
                    *Sem fidelidade ou cobranças adicionais pelo estúdio.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Studio Private Plans */}
        {tab === 'studio' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STUDIO_PRIVATE_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-xl ${
                  plan.isPopular
                    ? 'bg-vv-charcoal border-2 border-vv-lime shadow-vv-lime/10 scale-[1.03]'
                    : 'bg-vv-charcoal/80 border border-vv-border-dark hover:border-gray-500'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-vv-lime text-vv-black font-mono font-black text-[10px] tracking-widest uppercase shadow-md">
                    ★ MAIS PROCURADO PELOS ALUNOS
                  </div>
                )}

                <div className="space-y-4 mb-8">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 font-semibold tracking-wider uppercase block w-max">
                    {plan.badge}
                  </span>

                  <h3 className="font-display font-black text-2xl text-white">
                    {plan.title}
                  </h3>

                  <p className="text-xs text-gray-400 leading-relaxed">
                    {plan.subtitle}
                  </p>

                  <div className="py-2">
                    <span className="font-display font-black text-3xl text-vv-lime">
                      {plan.pricePerSession}
                    </span>
                    {plan.period && (
                      <span className="text-xs text-gray-400 font-mono ml-1">
                        {plan.period}
                      </span>
                    )}
                    <span className="text-[11px] text-gray-500 block font-mono">
                      {plan.priceTotal}
                    </span>
                  </div>

                  <div className="pt-4 border-t border-vv-border-dark space-y-3">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-300">
                        <Check className="w-4 h-4 text-vv-lime flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-vv-border-dark">
                  <a
                    href={buildWhatsappLink(plan.title, plan.prefilledMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-extrabold text-xs uppercase tracking-wider transition-all ${
                      plan.isPopular
                        ? 'bg-vv-lime text-vv-black hover:bg-vv-lime-hover shadow-lg shadow-vv-lime/25'
                        : 'bg-white text-vv-black hover:bg-gray-100'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
