import React from 'react';
import { GALLERY_IMAGES, STUDIO_INFO } from '../data/studioData';
import { ArrowUpRight, Camera } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

export const StudioGallery: React.FC = () => {
  return (
    <section className="py-24 bg-vv-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-vv-border-dark">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vv-charcoal text-vv-lime text-xs font-mono font-bold mb-3 border border-vv-border-dark">
              <Camera className="w-3.5 h-3.5" />
              <span>// ATMOSFERA & DIA A DIA NO STUDIO</span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              NOSSO ESPAÇO,
              <br />
              <span className="text-vv-lime">SUA EVOLUÇÃO DIÁRIA.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={STUDIO_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-vv-charcoal border border-vv-border-dark hover:border-vv-lime text-xs font-mono text-white transition-all group"
            >
              <InstagramIcon className="w-4 h-4 text-vv-lime group-hover:scale-110 transition-transform" />
              <span>{STUDIO_INFO.instagram}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-vv-lime" />
            </a>
          </div>
        </div>

        {/* Masonry / Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative rounded-3xl overflow-hidden bg-vv-charcoal border border-vv-border-dark hover:border-vv-lime transition-all duration-500 shadow-xl"
            >
              <div className="aspect-[4/3] sm:aspect-[1/1] overflow-hidden relative">
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vv-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Tag Pill */}
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-full bg-vv-black/80 backdrop-blur-md text-[10px] font-mono text-vv-lime font-bold border border-white/10">
                  {img.tag}
                </div>
              </div>

              {/* Caption Overlay */}
              <div className="p-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-base text-white group-hover:text-vv-lime transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    {img.caption}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-vv-border-dark flex items-center justify-between text-[11px] font-mono text-gray-500">
                  <span>VanderVentura Pilates</span>
                  <span className="text-vv-lime font-bold">0{idx + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
