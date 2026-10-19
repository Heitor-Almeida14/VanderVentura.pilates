import React from 'react';
import { REVIEWS } from '../data/studioData';
import { Star, CheckCircle, Quote, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-24 bg-vv-offwhite text-vv-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Google Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-gray-300">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-black text-vv-lime text-xs font-mono font-bold mb-3">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>// REPUTAÇÃO & PROVA SOCIAL</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-vv-black tracking-tight leading-tight">
              HISTÓRIAS DE SUPERAÇÃO:
              <br />
              <span className="text-gray-500 font-light">QUEM TREINA, RECOMENDA.</span>
            </h2>
          </div>

          {/* Google Score Card */}
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-200 shadow-sm">
            <div className="text-center pr-4 border-r border-gray-200">
              <div className="font-display font-black text-3xl text-vv-black leading-none">
                4.9
              </div>
              <div className="flex text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-xs">
              <span className="font-bold text-gray-900 block">Excelente no Google</span>
              <span className="text-gray-500 font-mono">+150 avaliações de alunos</span>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="p-8 rounded-3xl bg-white border border-gray-200 shadow-md hover:shadow-xl hover:border-vv-black transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-gray-100 text-gray-800 uppercase tracking-wider">
                    {rev.badge}
                  </span>
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-vv-black">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-gray-500 font-mono">
                    {rev.role}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>{rev.achievement}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
