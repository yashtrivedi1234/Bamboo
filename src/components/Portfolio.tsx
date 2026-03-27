import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Royal Lucknow Gala',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    year: '2024',
  },
  {
    title: 'The Heritage Wedding',
    category: 'Private',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
    year: '2023',
  },
  {
    title: 'Tech Summit 2024',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop',
    year: '2024',
  },
  {
    title: 'Elite Private Soiree',
    category: 'Private',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    year: '2023',
  },
];

export const Portfolio: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <section id="portfolio" className="relative h-[300vh] bg-[#050505]" ref={targetRef}>
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* Header Overlay */}
        <div className="absolute top-24 left-6 md:left-24 z-10 flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
              Portfolio Preview
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Our <span className="text-accent-green italic">Masterpieces</span>.
          </h2>
        </div>

        {/* Horizontal Scroll Gallery */}
        <motion.div style={{ x }} className="flex space-x-12 px-6 md:px-24">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="relative flex-shrink-0 w-[80vw] md:w-[40vw] h-[60vh] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-accent-green text-[10px] uppercase tracking-widest font-bold">
                    {item.category} — {item.year}
                  </span>
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent-green group-hover:border-accent-green transition-all duration-300">
                    <ArrowUpRight size={18} className="text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-accent-green transition-colors">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
          
          {/* View All Card */}
          <div className="flex-shrink-0 w-[80vw] md:w-[40vw] h-[60vh] rounded-3xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center space-y-6 group cursor-pointer hover:border-accent-green/50 transition-colors">
            <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent-green group-hover:border-accent-green transition-all duration-300">
              <ArrowUpRight size={32} className="text-white" />
            </div>
            <span className="text-white text-xl font-bold uppercase tracking-widest group-hover:text-accent-green transition-colors">
              View All Projects
            </span>
          </div>
        </motion.div>

        {/* Background Text Overlay */}
        <div className="absolute bottom-12 right-12 opacity-[0.03] pointer-events-none select-none">
          <span className="text-[15vw] font-black uppercase tracking-tighter text-white">
            GALLERY
          </span>
        </div>
      </div>
    </section>
  );
};
