import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="relative py-24 px-6 md:px-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-col space-y-8"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-4">
            <div className="w-12 h-[1px] bg-accent-green" />
            <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
              About Bamboo Groves
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-bold leading-tight text-white">
            We Curate <span className="text-accent-green italic">Extraordinary</span> Experiences.
          </motion.h2>

          <motion.p variants={itemVariants} className="text-white/60 text-lg leading-relaxed max-w-lg">
            Based in the heart of Lucknow, Bamboo Groves is more than an event company. We are architects of moments, designers of atmosphere, and curators of luxury. From high-stakes corporate summits to intimate private celebrations, we bring a level of precision and creativity that is unmatched.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col space-y-4">
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-accent-green group-hover:border-accent-green transition-all duration-300">
                <ArrowUpRight size={18} className="text-white" />
              </div>
              <span className="text-white text-sm uppercase tracking-widest font-semibold group-hover:text-accent-green transition-colors">
                Our Philosophy
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-2xl group"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2062&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" />
          <div className="absolute inset-0 bg-accent-green/10 mix-blend-overlay" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-green/20 blur-3xl rounded-full" />
        </motion.div>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[20vw] font-black uppercase tracking-tighter text-white">
          LUCKNOW
        </span>
      </div>
    </section>
  );
};
