import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Reveal } from './ui/Reveal';

export const MapSection: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] bg-sand overflow-hidden flex items-center justify-center">

      {/* ✅ Google Map Embed (FULL BACKGROUND) */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6519.350282584975!2d123.51109740960732!3d9.142884765603464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sph!4v1764393595596!5m2!1sen!2sph"
        className="absolute inset-0 w-full h-full border-0 opacity-70 grayscale"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      <div className="relative z-10 text-center px-4">
        <Reveal>
          <div className="bg-white/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl border border-white/50 max-w-md mx-auto">
            
            {/* Floating Map Pin Icon */}
            <motion.div 
              className="mx-auto bg-palm text-white p-3 rounded-full w-fit mb-6 shadow-lg shadow-palm/30"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <MapPin size={32} fill="currentColor" />
            </motion.div>
            
            <h2 className="font-serif text-3xl text-coffee mb-2">
              Find Us in Siquijor
            </h2>

            <p className="font-sans text-coffee/70 mb-8">
              San Juan, Siquijor Island<br/>
              Philippines, 6227
            </p>

            {/* Button opens Google Maps */}
            <motion.button
              onClick={() => 
                window.open(
                  "https://maps.google.com/?q=9.134989813994995, 123.52389386804016",
                  "_blank"
                )
              }
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-coffee text-coconut px-8 py-3 rounded-xl font-medium w-full shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Directions
            </motion.button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
