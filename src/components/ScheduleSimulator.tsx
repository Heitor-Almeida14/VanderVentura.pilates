import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { SCHEDULE_OPTIONS, STUDIO_INFO } from '../data/studioData';
import { Calendar, Clock, CheckCircle2, Send, Sparkles, UserCheck } from 'lucide-react';

export const ScheduleSimulator: React.FC = () => {
  const [selectedShift, setSelectedShift] = useState<string>('manha');
  const [selectedGoal, setSelectedGoal] = useState<string>('Dores na Coluna / Hérnia');
  const [accessType, setAccessType] = useState<string>('Wellhub (Gympass)');
  const [preferredDays, setPreferredDays] = useState<string>('Segunda e Quarta');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const activeShiftData = SCHEDULE_OPTIONS.find((s) => s.shift === selectedShift) || SCHEDULE_OPTIONS[0];

  const goals = [
    'Dores na Coluna / Hérnia',
    'Postura & Alívio de Tensão',
    'Fortalecimento & Powerhouse',
    'Performance Esportiva & Corrida',
  ];

  const accessOptions = [
    'Wellhub (Gympass)',
    'Totalpass',
    'Aula Experimental / Particular',
  ];

  const daysOptions = [
    'Segunda e Quarta',
    'Terça e Quinta',
    'Segunda, Quarta e Sexta',
    'Aos Sábados',
  ];

  const handleConfirm = () => {
    // Fire confetti celebration
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#D1FF00', '#FFFFFF', '#272B25'],
      });
    } catch (e) {
      // fallback
    }

    setIsSuccess(true);

    const message = `Olá equipe VanderVentura Pilates! Fiz uma simulação pelo site e gostaria de agendar meu horário:
• Turno: ${activeShiftData.label} (${activeShiftData.hours})
• Dias preferidos: ${preferredDays}
• Objetivo: ${selectedGoal}
• Forma de acesso: ${accessType}
Poderiam me confirmar as vagas disponíveis nesta semana?`;

    const url = `https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 400);
  };

  return (
    <section id="horarios" className="py-24 bg-vv-offwhite text-vv-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-black text-vv-lime text-xs font-mono font-bold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>// AGENDA INTELIGENTE & TURMAS REDUZIDAS</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-vv-black tracking-tight leading-tight mb-4">
            SIMULE SEU HORÁRIO IDEAL:
            <br />
            <span className="text-gray-500 font-light">TURMAS DE NO MÁXIMO 3 ALUNOS.</span>
          </h2>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            Personalize seu turno, objetivo clínico e forma de acesso. Enviamos a confirmação imediata
            pelo WhatsApp da nossa recepção para reservar sua vaga fixa.
          </p>
        </div>

        {/* Simulator Interactive Grid */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white border-2 border-vv-black p-6 sm:p-10 shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            {/* Step 1: Turno */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3">
                01. Escolha o Turno de Preferência:
              </label>
              <div className="space-y-2.5">
                {SCHEDULE_OPTIONS.map((opt) => (
                  <button
                    key={opt.shift}
                    type="button"
                    onClick={() => setSelectedShift(opt.shift)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-left transition-all ${
                      selectedShift === opt.shift
                        ? 'bg-vv-black text-white border-vv-black shadow-md'
                        : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div>
                      <div className="font-display font-bold text-sm">
                        {opt.label}
                      </div>
                      <div className="text-[11px] font-mono text-gray-400">
                        {opt.hours}
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                        opt.status === 'Vagas Disponíveis'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-amber-100 text-amber-800'
                      }`}
                    >
                      {opt.status}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 & 3: Objetivo & Acesso */}
            <div className="space-y-6">
              {/* Goal */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3">
                  02. Seu Principal Foco ou Queixa:
                </label>
                <div className="grid grid-cols-1 gap-2">
                  {goals.map((g) => (
                    <button
                      key={g}
                      type="button"
                      onClick={() => setSelectedGoal(g)}
                      className={`px-3.5 py-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                        selectedGoal === g
                          ? 'bg-vv-black text-white border-vv-black font-semibold'
                          : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              {/* Access Mode */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3">
                  03. Como Pretende Treinar:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {accessOptions.map((acc) => (
                    <button
                      key={acc}
                      type="button"
                      onClick={() => setAccessType(acc)}
                      className={`p-2.5 rounded-xl text-[11px] font-mono font-bold text-center border transition-all ${
                        accessType === acc
                          ? 'bg-vv-lime text-vv-black border-vv-black shadow-xs'
                          : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {acc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Days preference */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-2">
                  04. Dias Favoráveis:
                </label>
                <select
                  value={preferredDays}
                  onChange={(e) => setPreferredDays(e.target.value)}
                  className="w-full p-3 rounded-xl bg-gray-50 border border-gray-300 text-xs font-semibold text-gray-900 focus:outline-none focus:ring-2 focus:ring-vv-lime"
                >
                  {daysOptions.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Resposta direta da recepção via WhatsApp em horário comercial.</span>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-vv-black text-white font-display font-extrabold text-xs uppercase tracking-wider hover:bg-vv-lime hover:text-vv-black transition-all shadow-xl active:scale-95 group"
            >
              <span>Confirmar Vaga no WhatsApp</span>
              <Send className="w-4 h-4 text-vv-lime group-hover:text-vv-black group-hover:translate-x-1 transition-all" />
            </button>
          </div>

          {isSuccess && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Redirecionando para o WhatsApp oficial com seus dados preenchidos...</span>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
