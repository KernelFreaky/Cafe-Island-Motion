import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Typewriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span>{currentText}</span>;
};

export const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]); // Parallax bg moves slower
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const videoSrc = "/hero-vid.mp4";

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/20 z-10" /> {/* Overlay for text readability */}
        <video
          autoPlay // Start playing automatically
          loop     // Play in a continuous loop
          muted    // **Crucial for autoplay in most browsers**
          playsInline // Recommended for mobile
          poster="https://picsum.photos/id/431/1920/1080" // Optional: A static image to show while video loads or if it fails
          className="w-full h-full object-cover"
        >
          {/* Use <source> for different video formats for maximum compatibility */}
          <source src={videoSrc} type="video/mp4" />
          {/* Fallback for browsers that don't support the video tag */}
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Floating Particles (Dust Motes) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/40 rounded-full blur-[1px]"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-20 text-center text-white px-4 max-w-4xl"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6 drop-shadow-lg"
        >
          Taste the Island Breeze
        </motion.h1>

        <div className="text-xl md:text-2xl font-light font-sans tracking-wide mb-12 h-8 text-white/90">
          <Typewriter text="Experience the slow motion of Siquijor..." delay={1500} />
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)" }}
          className="bg-palm/90 hover:bg-palm backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-serif text-lg tracking-wide transition-all shadow-lg border border-white/20"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Taste It in Siquijor &rarr;
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 z-20 text-white/70"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};