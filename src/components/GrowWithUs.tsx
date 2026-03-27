import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowRight, Users, Sparkles, TrendingUp } from 'lucide-react';

const benefits = [
  {
    icon: <Users size={24} />,
    title: 'Creative Synergy',
    description: 'Collaborate with a diverse team of designers, planners, and visionaries to bring bold ideas to life.',
  },
  {
    icon: <Sparkles size={24} />,
    title: 'Luxury Excellence',
    description: 'Work at the intersection of art and logistics, setting new benchmarks for premium event curation.',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Career Evolution',
    description: 'Grow your expertise through high-stakes projects and a culture that values continuous learning.',
  },
];

export const GrowWithUs: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="grow-with-us" className="relative py-32 px-6 md:px-24 bg-[#151619] overflow-hidden" data-scroll-section>
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto flex flex-col space-y-24 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-accent-green text-[10px] uppercase tracking-[0.5em] font-black">
                Join the Legacy
              </span>
            </div>
            <h2 className="text-6xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase">
              Grow With <br />
              <span className="text-accent-green italic">Us</span>.
            </h2>
          </div>
          <div className="flex flex-col space-y-6 max-w-sm">
            <p className="text-white/40 text-xs uppercase tracking-[0.2em] leading-relaxed font-mono">
              [SYSTEM_STATUS: RECRUITING_VISIONARIES]
              <br />
              We are always looking for visionary talent and strategic partners to help us architect the future of luxury experiences.
            </p>
            <div className="w-full h-[1px] bg-white/10" />
          </div>
        </div>

        {/* Benefits Grid - Technical Style */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-1 border border-white/10 bg-white/10"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-12 bg-[#151619] group hover:bg-accent-green transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-accent-green group-hover:text-black group-hover:border-black transition-colors">
                  {benefit.icon}
                </div>
                <span className="text-[10px] font-mono text-white/20 group-hover:text-black/40">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter group-hover:text-black transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed group-hover:text-black/70 transition-colors uppercase tracking-widest">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section - Immersive */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-sm overflow-hidden p-12 md:p-24 flex flex-col items-center text-center space-y-12 border border-dashed border-white/20"
        >
          <div className="absolute inset-0 z-0 opacity-20 grayscale mix-blend-overlay">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Team"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-8 max-w-3xl">
            <h4 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Ready to redefine the <br />
              <span className="text-accent-green italic">extraordinary</span>?
            </h4>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#fff', color: '#000' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-accent-green text-black font-black uppercase tracking-[0.2em] text-[10px] transition-all flex items-center space-x-4"
              >
                <span>Join the Team</span>
                <ArrowRight size={16} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#88AB32', color: '#000' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 border border-white/20 text-white font-black uppercase tracking-[0.2em] text-[10px] transition-all"
              >
                Become a Partner
              </motion.button>
            </div>
          </div>

          {/* Technical Detail */}
          <div className="absolute bottom-4 left-4 text-[8px] font-mono text-white/10 uppercase tracking-widest">
            [ACCESS_LEVEL: UNRESTRICTED] • [ENCRYPTION: ACTIVE]
          </div>
        </motion.div>
      </div>
    </section>
  );
};
