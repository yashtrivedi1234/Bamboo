import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Vikram Singh',
    role: 'CEO, TechVantage India',
    text: 'Bamboo Groves transformed our annual summit into a world-class experience. Their attention to detail and creative vision are truly unparalleled in the Indian event industry.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Ananya Kapoor',
    role: 'Founder, Luxe Living',
    text: 'For my daughter\'s wedding, I wanted something that felt both traditional and modern. Bamboo Groves delivered a masterpiece that our family will cherish forever.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Rajesh Malhotra',
    role: 'Director, Global Logistics',
    text: 'Precision is what we look for, and Bamboo Groves exceeded all expectations. Flawless execution from start to finish. They are the best in Lucknow, hands down.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  },
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 px-6 md:px-24 bg-black overflow-hidden border-t border-white/5" data-scroll-section>
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Header */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
              Testimonials
            </span>
            <div className="w-12 h-[1px] bg-accent-green" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            What Our <span className="text-accent-green italic">Clients</span> Say.
          </h2>
        </div>

        {/* Content Slider */}
        <div className="relative flex flex-col items-center justify-center min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center space-y-8 max-w-3xl"
            >
              <Quote size={48} className="text-accent-green opacity-20" />
              <p className="text-xl md:text-3xl font-medium text-white/80 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent-green/30">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold uppercase tracking-widest">{testimonials[currentIndex].name}</span>
                  <span className="text-accent-green text-[10px] uppercase tracking-widest font-bold">{testimonials[currentIndex].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 md:bottom-auto md:top-1/2 md:-translate-y-1/2 w-full flex justify-between px-4 md:px-0 pointer-events-none">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent-green hover:border-accent-green transition-all pointer-events-auto group"
            >
              <ChevronLeft size={24} className="group-hover:text-black transition-colors" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent-green hover:border-accent-green transition-all pointer-events-auto group"
            >
              <ChevronRight size={24} className="group-hover:text-black transition-colors" />
            </button>
          </div>
        </div>

        {/* Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] pointer-events-none select-none">
          <span className="text-[25vw] font-black uppercase tracking-tighter text-white">
            VOICES
          </span>
        </div>
      </div>
    </section>
  );
};
