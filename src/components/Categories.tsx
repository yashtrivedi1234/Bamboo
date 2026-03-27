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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
        setIsVisible(true);
      }
    };

    window.addEventListener('loco-scroll', handleScroll);
    setTimeout(handleScroll, 100);
    return () => window.removeEventListener('loco-scroll', handleScroll);
  }, []);

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
    <section ref={containerRef} className="relative py-24 px-6 md:px-24 bg-black overflow-hidden" data-scroll-section>
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Header */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
              Our Expertise
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Specialized <span className="text-accent-green italic">Event</span> Categories.
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.title}
              id={cat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative h-[600px] rounded-3xl overflow-hidden cursor-pointer"
              onClick={handlePortfolioScroll}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80" />
              
              {/* Content */}
              <div className="absolute inset-0 p-12 flex flex-col justify-end space-y-6">
                <div className="flex flex-wrap gap-2">
                  {cat.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-white/60 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white group-hover:text-accent-green transition-colors">
                  {cat.title}
                </h3>
                <p className="text-white/60 text-lg max-w-md leading-relaxed">
                  {cat.description}
                </p>
                <motion.div 
                  className="flex items-center space-x-4 text-accent-green font-bold uppercase tracking-widest text-sm"
                  whileHover={{ x: 10 }}
                >
                  <span>View Portfolio</span>
                  <ArrowRight size={20} />
                </motion.div>
              </div>

              {/* Parallax Element */}
              <motion.div 
                style={{ y }}
                className="absolute top-12 right-12 text-[10vw] font-black text-white/5 pointer-events-none select-none"
              >
                0{index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
