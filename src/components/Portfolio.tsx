import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, Variants } from 'motion/react';
import { ArrowUpRight, Plus } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Royal Lucknow Gala',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    year: '2024',
    size: 'large', // 2x2
  },
  {
    title: 'The Heritage Wedding',
    category: 'Private',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
    year: '2023',
    size: 'tall', // 1x2
  },
  {
    title: 'Tech Summit 2024',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop',
    year: '2024',
    size: 'small', // 1x1
  },
  {
    title: 'Elite Private Soiree',
    category: 'Private',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop',
    year: '2023',
    size: 'small', // 1x1
  },
  {
    title: 'Modern Art Launch',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop',
    year: '2024',
    size: 'wide', // 2x1
  },
  {
    title: 'Global Logistics Meet',
    category: 'Corporate',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    year: '2023',
    size: 'medium', // 1x1
  },
  {
    title: 'Urban Design Expo',
    category: 'Exhibition',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=2070&auto=format&fit=crop',
    year: '2024',
    size: 'tall', // 1x2
  },
  {
    title: 'Midnight Jazz Night',
    category: 'Private',
    image: 'https://images.unsplash.com/photo-1514525253361-bee8718a340b?q=80&w=1974&auto=format&fit=crop',
    year: '2023',
    size: 'small', // 1x1
  },
];

export const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        controls.start('visible');
      }
    };

    window.addEventListener('loco-scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('loco-scroll', handleScroll);
  }, [controls]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section 
      id="portfolio" 
      className="relative py-40 px-6 md:px-24 bg-black overflow-hidden" 
      ref={sectionRef} 
      data-scroll-section
    >
      {/* Background Grid - Technical Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      <div className="max-w-7xl mx-auto flex flex-col space-y-32">
        {/* Header Section - Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-[1px] bg-accent-green" />
              <span className="text-accent-green text-[10px] uppercase tracking-[1em] font-black">
                Archive_v2.4
              </span>
            </div>
            <h2 className="text-6xl md:text-[10vw] font-black text-white leading-[0.8] tracking-tighter uppercase">
              Selected <br />
              <span className="text-accent-green italic">Works</span>.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <span className="text-white/20 text-[10px] font-mono uppercase tracking-widest">System_Status: Optimal</span>
              <p className="text-white/40 text-xs uppercase tracking-[0.3em] leading-relaxed">
                A curated collection of our most ambitious projects, where creativity meets flawless execution.
              </p>
            </div>
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center space-x-4 text-accent-green font-black text-[10px] uppercase tracking-[0.5em] cursor-pointer group"
            >
              <span>View Full Archive</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.div>
          </div>
        </div>

        {/* Masonry Grid - Dynamic Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="relative group cursor-pointer break-inside-avoid mb-12"
            >
              {/* Image Container */}
              <div className={`relative w-full overflow-hidden rounded-sm ${
                item.size === 'large' ? 'aspect-[4/5]' : 
                item.size === 'tall' ? 'aspect-[2/3]' : 
                item.size === 'wide' ? 'aspect-[16/9]' : 
                'aspect-square'
              }`}>
                <div 
                  className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  style={{ backgroundImage: `url(${item.image})` }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-between items-start">
                    <span className="px-4 py-2 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] text-white font-black backdrop-blur-xl bg-white/5">
                      {item.category}
                    </span>
                    <div className="w-14 h-14 rounded-full bg-accent-green flex items-center justify-center text-black shadow-2xl shadow-accent-green/40">
                      <Plus size={28} />
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-3">
                    <div className="flex items-center space-x-4">
                      <div className="w-8 h-[1px] bg-accent-green" />
                      <span className="text-accent-green text-[10px] font-black uppercase tracking-[0.5em]">{item.year}</span>
                    </div>
                    <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Technical Micro-Details (Visible when not hovered) */}
                <div className="absolute top-6 right-6 group-hover:opacity-0 transition-opacity duration-500">
                  <span className="text-white/20 text-[10px] font-mono tracking-widest">
                    [ PROJECT_ID: 0{index + 1} ]
                  </span>
                </div>
                
                <div className="absolute bottom-10 left-10 group-hover:opacity-0 transition-opacity duration-500">
                  <div className="flex flex-col space-y-2">
                    <div className="w-12 h-[1px] bg-accent-green" />
                    <h3 className="text-xs font-black text-white uppercase tracking-[0.4em]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Technical Elements */}
      <div className="absolute bottom-12 right-12 flex flex-col items-end space-y-2 opacity-20 pointer-events-none">
        <span className="text-[10px] font-mono text-white tracking-[0.5em] uppercase">Lat: 26.8467° N</span>
        <span className="text-[10px] font-mono text-white tracking-[0.5em] uppercase">Long: 80.9462° E</span>
        <div className="w-32 h-[1px] bg-white/40" />
      </div>
    </section>
  );
};
