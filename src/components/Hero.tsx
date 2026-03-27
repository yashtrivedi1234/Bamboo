import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { motion, useSpring, useTransform, useScroll } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const Stars = (props: any) => {
  const ref = useRef<any>(null);
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.5 });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#88AB32"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center" data-scroll-section>
      {/* Three.js Background Layer - More Subtle */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Cinematic Background Image with Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </motion.div>

      {/* Massive Editorial Typography */}
      <div className="relative z-10 w-full px-6 md:px-24 flex flex-col items-center text-center">
        <motion.div
          style={{ y: textY, opacity }}
          className="flex flex-col items-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-accent-green text-[10px] md:text-xs font-bold tracking-[1em] uppercase mb-8"
          >
            Curating Extraordinary Experiences
          </motion.span>
          
          <div className="relative">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[18vw] md:text-[14vw] font-black leading-[0.8] uppercase tracking-tighter text-white mix-blend-difference"
            >
              BAMBOO <br />
              <span className="text-accent-green italic">GROVES</span>
            </motion.h1>
            
            {/* Overlapping Text Element */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -top-4 -left-4 md:-top-8 md:-left-8 text-[4vw] font-serif italic text-white/20 pointer-events-none"
            >
              Est. 2024
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 flex flex-col items-center space-y-8"
        >
          <p className="text-white/40 max-w-xs text-[10px] uppercase tracking-[0.4em] leading-relaxed">
            Architects of moments, designers of atmosphere, and curators of luxury.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-5 bg-accent-green text-black font-black uppercase tracking-widest text-xs rounded-full overflow-hidden"
          >
            <span className="relative z-10 flex items-center space-x-4">
              <span>Start Your Journey</span>
              <ArrowRight size={18} />
            </span>
            <motion.div 
              className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"
            />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-12 left-12 z-50 hidden md:block">
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] text-white/20 font-mono tracking-tighter">LAT: 26.8467° N</span>
          <span className="text-[8px] text-white/20 font-mono tracking-tighter">LNG: 80.9462° E</span>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 z-50 hidden md:block">
        <div className="text-right flex flex-col space-y-2">
          <span className="text-[8px] text-white/20 font-mono tracking-tighter uppercase">Luxury Event Curators</span>
          <div className="w-12 h-[1px] bg-white/10 ml-auto" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-4"
      >
        <span className="text-[8px] text-white/40 uppercase tracking-[0.5em] vertical-text">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-green to-transparent" />
      </motion.div>
    </section>
  );
};
