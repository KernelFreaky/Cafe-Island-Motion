import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-coffee text-coconut pt-20 pb-0 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="font-serif text-3xl md:text-5xl mb-8">Island Motion</h2>
        
        <div className="flex justify-center gap-8 mb-12">
          <a href="#" className="hover:text-palm transition-colors transform hover:scale-110"><Instagram /></a>
          <a href="#" className="hover:text-palm transition-colors transform hover:scale-110"><Facebook /></a>
          <a href="#" className="hover:text-palm transition-colors transform hover:scale-110"><Twitter /></a>
        </div>

        <p className="font-sans text-sm text-coconut/60">
          © {new Date().getFullYear()} Island Motion Experience. All rights reserved.
        </p>
      </div>

      {/* Auto Scrolling Strip */}
      <div className="w-full bg-palm/20 py-4 overflow-hidden flex whitespace-nowrap border-t border-white/5">
        <motion.div 
          className="flex gap-12 font-script text-2xl text-sand/80 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {/* Repeated text for seamless loop */}
          {[...Array(10)].map((_, i) => (
             <span key={i} className="flex items-center gap-4">
                <span>@IslandMotionCafe</span> 
                <span className="w-2 h-2 bg-sand rounded-full opacity-50"></span>
             </span>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};