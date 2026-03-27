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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <section id="grow-with-us" className="relative py-24 px-6 md:px-24 bg-black overflow-hidden" data-scroll-section>
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent-green rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col space-y-20 relative z-10">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
                Join the Legacy
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tighter">
              Grow With <span className="text-accent-green italic">Us</span>.
            </h2>
          </div>
          <p className="text-white/40 text-lg max-w-md leading-relaxed font-medium">
            We are always looking for visionary talent and strategic partners to help us architect the future of luxury experiences.
          </p>
        </div>

        {/* Benefits Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="p-10 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-accent-green/30 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-black border border-white/10 flex items-center justify-center text-accent-green mb-8 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent-green transition-colors">
                {benefit.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative rounded-[40px] overflow-hidden p-12 md:p-20 flex flex-col items-center text-center space-y-8"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
          </div>

          <div className="relative z-10 flex flex-col items-center space-y-6 max-w-2xl">
            <h4 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Ready to redefine the <span className="text-accent-green italic">extraordinary</span>?
            </h4>
            <p className="text-white/60 text-base uppercase tracking-widest font-medium">
              Whether you're a creative professional or a potential partner, let's explore the possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-accent-green text-black font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors flex items-center space-x-3"
              >
                <span>Join the Team</span>
                <ArrowRight size={18} />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors"
              >
                Become a Partner
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
