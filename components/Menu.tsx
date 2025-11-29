import React from 'react';
import { MENU_ITEMS } from '../constants';
import { Reveal } from './ui/Reveal';
import { TiltCard } from './ui/TiltCard';

export const Menu: React.FC = () => {
  return (
    <section className="py-24 md:py-32 px-6 bg-coconut" id="menu">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-coffee mb-4">Our Curated Selections</h2>
            <p className="font-sans text-coffee/60 max-w-2xl mx-auto">
              Simple ingredients, complex flavors. A taste of the island on every plate.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {MENU_ITEMS.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.2}>
              <TiltCard className="h-full">
                <div className="group relative h-full bg-white rounded-[20px] shadow-lg overflow-hidden border border-sand/50">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex justify-between items-end mb-2">
                      <h3 className="font-serif text-2xl">{item.title}</h3>
                      <span className="font-sans font-medium text-lg text-sand">{item.price}</span>
                    </div>
                    <p className="font-sans text-sm text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {item.description}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};