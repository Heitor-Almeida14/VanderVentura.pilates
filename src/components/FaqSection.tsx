import React, { useState } from 'react';
import { FAQ_LIST, STUDIO_INFO } from '../data/studioData';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_LIST[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const whatsappUrl = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
    'Olá! Tenho uma dúvida sobre as aulas no VanderVentura Pilates que não encontrei no site.'
  )}`;

  return (
    <section id="faq" className="py-24 bg-vv-offwhite text-vv-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-black text-vv-lime text-xs font-mono font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>// ESCLARECIMENTOS & DÚVIDAS FREQUENTES</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-vv-black tracking-tight leading-tight mb-4">
            TRANSPARÊNCIA TOTAL:
            <br />
            <span className="text-gray-500 font-light">TUDO O QUE VOCÊ PRECISA SABER.</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Respostas diretas sobre convênios Wellhub e Totalpass, acompanhamento de lesões e funcionamento do estúdio.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-gray-200 overflow-hidden transition-all duration-300 shadow-xs hover:border-vv-black"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 pr-4">
                    <span className="font-mono text-xs text-gray-600 font-bold">
                      0{idx + 1}
                    </span>
                    <span className="font-display font-bold text-base sm:text-lg text-vv-black">
                      {item.question}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-vv-lime text-vv-black' : 'text-gray-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 text-sm text-gray-700 leading-relaxed border-t border-gray-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-vv-black text-vv-lime flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm text-vv-black">
                Ainda tem alguma pergunta específica?
              </h4>
              <p className="text-xs text-gray-700">
                Converse diretamente com nossos fisioterapeutas agora.
              </p>
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-vv-lime text-vv-black font-extrabold text-xs uppercase tracking-wider hover:bg-vv-lime-hover transition-all shadow-sm"
          >
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
