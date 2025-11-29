import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import { Reveal } from './ui/Reveal';

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-sand/20">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl text-coffee mb-2">Captured Moments</h2>
              <p className="font-script text-2xl text-palm">#IslandMotion</p>
            </div>
            <p className="font-sans text-coffee/60 max-w-sm text-right md:text-left">
              Glimpses of our daily life, designed to inspire and relax.
            </p>
          </div>
        </Reveal>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {GALLERY_IMAGES.map((img, index) => (
            <Reveal key={img.id} delay={index * 0.1}>
              <div className="break-inside-avoid relative group overflow-hidden rounded-[4px] bg-white p-3 shadow-md rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="relative overflow-hidden aspect-auto">
                   <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-auto object-cover filter sepia-[0.15] contrast-[0.9] group-hover:sepia-0 group-hover:contrast-100 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                {img.caption && (
                  <div className="pt-4 pb-2 text-center font-script text-coffee text-xl opacity-80">
                    {img.caption}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};