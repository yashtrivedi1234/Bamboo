import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { MapPin, Globe, Zap, Shield } from 'lucide-react';

const locations = [
  { name: 'Lucknow', status: 'Headquarters', coords: '26.8467° N, 80.9462° E' },
  { name: 'Delhi', status: 'Regional Office', coords: '28.6139° N, 77.2090° E' },
  { name: 'Mumbai', status: 'Regional Office', coords: '19.0760° N, 72.8777° E' },
  { name: 'Bangalore', status: 'Regional Office', coords: '12.9716° N, 77.5946° E' },
  { name: 'Jaipur', status: 'Project Hub', coords: '26.9124° N, 75.7873° E' },
  { name: 'Goa', status: 'Project Hub', coords: '15.2993° N, 74.1240° E' },
];

export const Services: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="services" className="relative py-24 px-6 md:px-24 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
                Pan India Presence
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white">
              Where We Create <span className="text-accent-green italic">Experiences</span>.
            </h2>
          </div>
          <p className="text-white/40 text-sm uppercase tracking-widest max-w-xs font-medium">
            From the royal courts of Lucknow to the high-rises of Mumbai, we bring luxury everywhere.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Map/Visual representation */}
          <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white/5 rounded-3xl overflow-hidden border border-white/10 group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 via-transparent to-black/80" />
            
            {/* Animated Location Markers */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                {/* Simulated Map Markers */}
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-accent-green shadow-[0_0_20px_#88AB32]"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                  className="absolute top-1/2 left-1/4 w-3 h-3 rounded-full bg-accent-green shadow-[0_0_20px_#88AB32]"
                />
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-accent-green shadow-[0_0_20px_#88AB32]"
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-8 flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-white/80 text-xs uppercase tracking-widest font-bold">
                <Globe size={14} className="text-accent-green" />
                <span>Operating Across India</span>
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest">
                Seamless Logistics. Local Expertise. Global Standards.
              </p>
            </div>
          </div>

          {/* Right: Location List */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {locations.map((loc) => (
              <motion.div
                key={loc.name}
                variants={itemVariants}
                className="flex flex-col space-y-2 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-accent-green/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-xl font-bold group-hover:text-accent-green transition-colors">
                    {loc.name}
                  </span>
                  <MapPin size={16} className="text-accent-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <span className="text-accent-green text-[10px] uppercase tracking-widest font-bold">
                  {loc.status}
                </span>
                <span className="text-white/30 text-[9px] font-mono tracking-tighter">
                  {loc.coords}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-16">
          <div className="flex flex-col space-y-4">
            <Zap size={32} className="text-accent-green" />
            <h3 className="text-white text-lg font-bold uppercase tracking-widest">Rapid Execution</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Our pan-India network allows us to mobilize resources quickly, ensuring your event is executed flawlessly regardless of the location.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <Shield size={32} className="text-accent-green" />
            <h3 className="text-white text-lg font-bold uppercase tracking-widest">Premium Quality</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              We maintain a rigorous standard of luxury and professionalism across all regions, ensuring a consistent Bamboo Groves experience.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <Globe size={32} className="text-accent-green" />
            <h3 className="text-white text-lg font-bold uppercase tracking-widest">Local Insight</h3>
            <p className="text-white/40 text-sm leading-relaxed">
              We combine our global design standards with deep local insights to create culturally resonant and logistically sound events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
