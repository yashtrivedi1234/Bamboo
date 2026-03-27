import React, { useRef, useEffect, useState } from 'react';
import { motion, useTransform, useMotionValue } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useLocoScroll } from './SmoothScroll';

const categories = [
  {
    id: 'corporate-events',
    title: 'Corporate Events',
    description: 'Elevating your brand through precision-engineered summits, galas, and product launches.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
    tags: ['Summits', 'Galas', 'Product Launches', 'Conferences'],
  },
  {
    id: 'social-events',
    title: 'Social Events',
    description: 'Transforming personal milestones into unforgettable, luxury experiences with an intimate touch.',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop',
    tags: ['Weddings', 'Anniversaries', 'Private Parties', 'Galas'],
  },
];

export const Categories: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollY, scroll } = useLocoScroll();

  const handlePortfolioScroll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (scroll) {
      scroll.scrollTo('#portfolio', {
        duration: 1000,
        easing: [0.22, 1, 0.36, 1],
        disableLerp: false
      });
    }
  };

  // Parallax effect using the scrollY from context
  const y = useTransform(scrollY || useMotionValue(0), [0, 5000], [0, -500]);

  return (
    <section ref={containerRef} className="relative py-32 px-6 md:px-24 bg-black overflow-hidden" data-scroll-section>
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        {/* Header - Editorial Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-[1px] bg-accent-green" />
              <span className="text-accent-green text-[10px] uppercase tracking-[1em] font-black">
                Our Expertise
              </span>
            </div>
            <h2 className="text-6xl md:text-[8vw] font-black text-white leading-[0.8] tracking-tighter uppercase">
              Specialized <br />
              <span className="text-accent-green italic">Event</span> Categories.
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <p className="text-white/40 text-xs uppercase tracking-[0.3em] leading-relaxed">
              Architecting high-impact environments that define industry standards and curate personal legacy.
            </p>
          </div>
        </div>

        {/* Categories Grid - Split Layout */}
        <div className="flex flex-col space-y-32">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              id={cat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 relative group cursor-pointer overflow-hidden rounded-sm" onClick={handlePortfolioScroll}>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[4/5] overflow-hidden"
                >
                  <img 
                    src={cat.image} 
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                
                {/* Floating Number */}
                <motion.div 
                  style={{ y }}
                  className={`absolute top-0 ${index % 2 === 1 ? 'left-0' : 'right-0'} text-[15vw] font-black text-white/10 pointer-events-none select-none`}
                >
                  0{index + 1}
                </motion.div>
              </div>

              {/* Content Container */}
              <div className="w-full lg:w-1/2 flex flex-col space-y-8">
                <div className="flex items-center space-x-4">
                  <span className="text-accent-green text-[10px] font-black uppercase tracking-[0.5em]">
                    [ CATEGORY_0{index + 1} ]
                  </span>
                </div>
                
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
                  {cat.title}
                </h3>
                
                <p className="text-white/60 text-xl leading-tight max-w-md">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {cat.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-full border border-white/10 text-[10px] uppercase tracking-widest text-white/40 font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button 
                  onClick={handlePortfolioScroll}
                  whileHover={{ x: 10 }}
                  className="flex items-center space-x-6 text-accent-green group"
                >
                  <span className="text-xs font-black uppercase tracking-[0.3em]">View Portfolio</span>
                  <div className="w-12 h-12 rounded-full border border-accent-green/20 flex items-center justify-center group-hover:bg-accent-green group-hover:text-black transition-all">
                    <ArrowRight size={20} />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
