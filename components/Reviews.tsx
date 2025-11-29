import React from 'react';
import { motion } from 'framer-motion';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

export const Reviews: React.FC = () => {
  // Duplicate reviews to create a seamless infinite loop
  const LOOP_REVIEWS = [...REVIEWS, ...REVIEWS, ...REVIEWS];
  
  return (
    <section className="py-32 overflow-hidden bg-coconut border-b border-coffee/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="font-serif text-4xl text-coffee">Kind Words</h2>
      </div>

      {/* Horizontal Auto-Scroll Container */}
      <div className="relative w-full overflow-hidden mask-gradient-x">
        <motion.div 
          className="flex gap-8 w-max pl-6"
          animate={{ x: ["0%", "-33.33%"] }} // Move by 1/3 since we tripled the array to ensure smoothness
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          whileHover={{ animationPlayState: 'paused' }} // Note: Framer Motion needs specific handling for pause, but purely CSS or high duration serves 'slow' request well.
        >
          {LOOP_REVIEWS.map((review, index) => (
            <div 
              key={`${review.id}-${index}`}
              className="w-[350px] md:w-[450px] bg-white p-8 rounded-[20px] border border-sand shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col justify-between flex-shrink-0"
            >
              <div>
                <div className="flex gap-1 text-palm mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="font-serif text-xl text-coffee italic leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-sand/50 flex items-center justify-center font-bold text-coffee text-xs">
                    {review.name.charAt(0)}
                </div>
                <span className="font-sans text-sm font-medium text-coffee/60 uppercase tracking-wider">{review.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};