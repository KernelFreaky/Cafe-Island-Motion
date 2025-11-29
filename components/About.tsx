import React from 'react';
import { Coffee, Croissant, Palmtree } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 overflow-hidden bg-sand/30">
        {/* Woven texture overlay handled by CSS in global styles or here */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#6A4E3A 1px, transparent 1px)`, backgroundSize: '16px 16px' }}></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <Reveal>
              <h2 className="font-serif text-4xl md:text-6xl text-coffee">
                Slow down. <br />
                <span className="italic font-script text-palm">Breathe in.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-sans text-lg text-coffee/80 leading-relaxed">
                Nestled in the heart of Siquijor, Island Motion is more than a café—it's a sanctuary. 
                Inspired by the gentle sway of palm trees and the golden hour glow, we curate an experience 
                where time moves just a little bit slower.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex gap-4">
                 <div className="h-px w-20 bg-palm my-auto"></div>
                 <span className="font-serif text-coffee uppercase tracking-widest text-sm">Since 2024</span>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-8">
             <Reveal delay={0.3}>
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-[20px] shadow-sm border border-white/40 flex items-start gap-6 hover:bg-white/80 transition-colors">
                <div className="bg-palm/10 p-4 rounded-full text-palm">
                  <Coffee size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-coffee mb-2">Artisan Coffee</h3>
                  <p className="font-sans text-coffee/70 text-sm">Locally sourced beans roasted to perfection, delivering rich notes of chocolate and island spice.</p>
                </div>
              </div>
             </Reveal>

             <Reveal delay={0.5}>
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-[20px] shadow-sm border border-white/40 flex items-start gap-6 hover:bg-white/80 transition-colors">
                <div className="bg-palm/10 p-4 rounded-full text-palm">
                  <Croissant size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-coffee mb-2">Fresh Pastries</h3>
                  <p className="font-sans text-coffee/70 text-sm">Baked daily using traditional techniques and organic coconut flour.</p>
                </div>
              </div>
             </Reveal>

             <Reveal delay={0.7}>
              <div className="bg-white/60 backdrop-blur-md p-8 rounded-[20px] shadow-sm border border-white/40 flex items-start gap-6 hover:bg-white/80 transition-colors">
                <div className="bg-palm/10 p-4 rounded-full text-palm">
                  <Palmtree size={28} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-coffee mb-2">Tropical Ambience</h3>
                  <p className="font-sans text-coffee/70 text-sm">Open-air design that welcomes the sea breeze and natural sunlight.</p>
                </div>
              </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};