import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { MapSection } from './components/MapSection';
import { Reviews } from './components/Reviews';
import { Footer } from './components/Footer';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switch colors when scrolled past 90% of the viewport (exiting hero)
      const threshold = window.innerHeight * 0.9;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-sans selection:bg-palm selection:text-white">
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-grain mix-blend-overlay opacity-30"></div>
      
      {/* Navigation (Transparent Sticky) */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6 flex justify-between items-center pointer-events-none transition-all duration-500">
        <div 
          className={`pointer-events-auto px-6 py-3 rounded-full shadow-lg transition-all duration-500 border ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md border-coffee/10' 
              : 'bg-white/10 backdrop-blur-md border-white/10'
          }`}
        >
          <span 
            className={`font-serif font-bold text-xl tracking-wider transition-colors duration-500 ${
              isScrolled ? 'text-coffee' : 'text-white'
            }`}
          >
            IM.
          </span>
        </div>
        
        <a href="#menu"
          className={`pointer-events-auto px-6 py-3 rounded-full shadow-lg cursor-pointer transition-all duration-500 border hover:bg-opacity-30 ${
            isScrolled 
              ? 'bg-white/80 backdrop-blur-md border-coffee/10 text-coffee hover:bg-coffee/5' 
              : 'bg-white/10 backdrop-blur-md border-white/10 text-white hover:bg-white/20'
          }`}
        >
          <span className="font-sans font-medium text-sm">Menu</span>
        </a>
      </nav>

      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
        <MapSection />
        <Reviews />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;