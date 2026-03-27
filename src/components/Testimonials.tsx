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
    <section id="testimonials" className="relative py-40 px-6 md:px-24 bg-black overflow-hidden border-t border-white/5" data-scroll-section>
      {/* Atmospheric Background - Layered Gradients */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-green/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-accent-green/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col space-y-24 relative z-10">
        {/* Header - Editorial Style */}
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-[10px] uppercase tracking-[1em] font-black">
              Voices of Trust
            </span>
            <div className="w-16 h-[1px] bg-accent-green" />
          </div>
          <h2 className="text-6xl md:text-[8vw] font-black text-white leading-[0.8] tracking-tighter uppercase">
            What Our <br />
            <span className="text-accent-green italic">Clients</span> Say.
          </h2>
        </div>

        {/* Content Slider - Glassmorphism */}
        <div className="relative flex flex-col items-center justify-center min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center space-y-12 max-w-4xl p-12 md:p-20 rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl"
            >
              <Quote size={64} className="text-accent-green opacity-30" />
              
              <p className="text-2xl md:text-4xl font-black text-white leading-[1.1] tracking-tight uppercase italic">
                "{testimonials[currentIndex].text}"
              </p>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border border-accent-green/30 p-1">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent-green flex items-center justify-center text-black">
                    <Quote size={14} />
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-white text-xl font-black uppercase tracking-tighter">{testimonials[currentIndex].name}</span>
                  <span className="text-accent-green text-[10px] uppercase tracking-[0.5em] font-black">{testimonials[currentIndex].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls - Minimalist */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 md:-px-12 pointer-events-none">
            <motion.button 
              onClick={prev}
              whileHover={{ x: -10 }}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent-green hover:border-accent-green transition-all pointer-events-auto group backdrop-blur-xl"
            >
              <ChevronLeft size={32} className="group-hover:text-black transition-colors" />
            </motion.button>
            <motion.button 
              onClick={next}
              whileHover={{ x: 10 }}
              className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-accent-green hover:border-accent-green transition-all pointer-events-auto group backdrop-blur-xl"
            >
              <ChevronRight size={32} className="group-hover:text-black transition-colors" />
            </motion.button>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-1 transition-all duration-500 rounded-full ${currentIndex === index ? 'w-12 bg-accent-green' : 'w-4 bg-white/10 hover:bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.01] pointer-events-none select-none">
        <span className="text-[30vw] font-black uppercase tracking-tighter text-white">
          VOICES
        </span>
      </div>
    </section>
  );
};
