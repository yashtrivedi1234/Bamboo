import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="relative py-32 px-6 md:px-24 bg-white text-black overflow-hidden" data-scroll-section>
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Big Number & Vertical Text */}
          <div className="lg:col-span-2 flex flex-col items-start space-y-12">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-[12vw] lg:text-[8vw] font-black leading-none tracking-tighter"
            >
              01
            </motion.span>
            <div className="writing-mode-vertical-rl rotate-180 text-[10px] font-bold uppercase tracking-[1em] opacity-30">
              Architecture of Moments
            </div>
          </div>

          {/* Middle Column: Main Content */}
          <div className="lg:col-span-6 flex flex-col space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col space-y-8"
            >
              <h2 className="text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                We Curate <br />
                <span className="text-accent-green italic">Extraordinary</span> <br />
                Experiences.
              </h2>
              
              <div className="w-24 h-2 bg-black" />
              
              <p className="text-xl md:text-2xl font-medium leading-tight max-w-xl">
                Based in the heart of Lucknow, Bamboo Groves is more than an event company. We are architects of moments, designers of atmosphere, and curators of luxury.
              </p>
              
              <p className="text-black/60 text-lg leading-relaxed max-w-lg">
                From high-stakes corporate summits to intimate private celebrations, we bring a level of precision and creativity that is unmatched in the industry.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="grid grid-cols-2 gap-8 py-12 border-y border-black/10"
            >
              <div>
                <span className="block text-4xl font-black tracking-tighter">150+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Events Executed</span>
              </div>
              <div>
                <span className="block text-4xl font-black tracking-tighter">10+</span>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-40">Years Experience</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Graphic Image */}
          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm border-[12px] border-black shadow-[20px_20px_0px_0px_#88AB32]"
            >
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop" 
                alt="About"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-green rounded-full flex items-center justify-center p-4 text-center"
            >
              <span className="text-[10px] font-black uppercase tracking-tighter leading-none text-black">
                Luxury • Precision • Creativity •
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
