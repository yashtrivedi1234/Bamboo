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
      transition: { duration: 0.4, ease: "easeOut" } 
    },
  };

  return (
    <section 
      id="portfolio" 
      className="relative py-32 px-6 md:px-24 bg-black overflow-hidden" 
      ref={sectionRef} 
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto flex flex-col space-y-20">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
                Our Masterpieces
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
              Selected <span className="text-accent-green italic">Works</span>.
            </h2>
          </div>
          <div className="flex flex-col space-y-4 max-w-xs">
            <p className="text-white/40 text-sm leading-relaxed">
              A curated collection of our most ambitious projects, where creativity meets flawless execution.
            </p>
            <div className="flex items-center space-x-2 text-accent-green font-bold text-xs uppercase tracking-widest cursor-pointer group">
              <span>View Full Archive</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          </div>
        </div>

        {/* Creative Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className={`relative rounded-3xl overflow-hidden group cursor-none
                ${item.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                ${item.size === 'tall' ? 'md:col-span-1 md:row-span-2' : ''}
                ${item.size === 'wide' ? 'md:col-span-2 md:row-span-1' : ''}
                ${item.size === 'small' ? 'md:col-span-1 md:row-span-1' : ''}
                ${item.size === 'medium' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              {/* Image with Filter */}
              <div 
                className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-400 ease-out"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white font-medium backdrop-blur-sm">
                    {item.category}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-accent-green flex items-center justify-center text-black">
                    <Plus size={20} />
                  </div>
                </div>
                
                <div className="flex flex-col space-y-1">
                  <span className="text-accent-green text-[10px] font-bold uppercase tracking-[0.2em]">{item.year}</span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Static Info (Visible when not hovered) */}
              <div className="absolute bottom-8 left-8 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-lg font-bold text-white/80 uppercase tracking-widest">
                  {item.title.split(' ')[0]}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-green/5 to-transparent pointer-events-none" />
    </section>
  );
};
