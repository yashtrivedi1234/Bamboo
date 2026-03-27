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
  const [hoveredSide, setHoveredSide] = useState<'corporate' | 'private' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  const springConfig = { damping: 40, stiffness: 80, mass: 1 };
  const splitPos = useSpring(50, springConfig);

  useEffect(() => {
    if (hoveredSide === 'corporate') splitPos.set(70);
    else if (hoveredSide === 'private') splitPos.set(30);
    else splitPos.set(50);
  }, [hoveredSide, splitPos]);

  // Derive smooth strings for width and clipPath
  const leftClipPath = useTransform(splitPos, (val) => 
    `polygon(0 0, ${val + 10}% 0, ${val - 10}% 100%, 0 100%)`
  );
  const rightClipPath = useTransform(splitPos, (val) => 
    `polygon(${val + 10}% 0, 100% 0, 100% 100%, ${val - 10}% 100%)`
  );

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black" data-scroll-section>
      {/* Three.js Background Layer */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Top Center Brand Identity */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center"
        >
          <span className="text-accent-green text-[10px] font-bold tracking-[1em] uppercase block mb-1">Bamboo</span>
          <h1 className="text-white text-xl font-black tracking-tighter uppercase">Groves</h1>
        </motion.div>
      </div>

      {/* Main Split Container */}
      <div className="relative z-10 h-full w-full flex flex-col md:block">
        {/* Left Side: Corporate */}
        <motion.div
          style={{ 
            clipPath: typeof window !== 'undefined' && window.innerWidth >= 768 ? leftClipPath : 'none'
          }}
          onMouseEnter={() => setHoveredSide('corporate')}
          onMouseLeave={() => setHoveredSide(null)}
          className="group absolute inset-0 md:w-full h-1/2 md:h-full overflow-hidden border-b md:border-b-0 border-white/5 cursor-pointer z-20"
        >
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center scale-110 group-hover:scale-125 transition-transform duration-[2.5s] ease-out" 
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-1000" />
          
          <div className="relative h-full w-full md:w-1/2 flex flex-col justify-center p-8 md:p-24 z-30">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent-green text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">01 / CORPORATE</span>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                THE <br /> <span className="text-accent-green italic">SUMMIT</span>
              </h2>
              <p className="text-white/60 max-w-xs text-[10px] md:text-xs uppercase tracking-widest mb-8 leading-relaxed">
                Architecting high-impact corporate environments that define industry standards.
              </p>
              <motion.button 
                className="flex items-center space-x-4 text-white group/btn"
                whileHover={{ x: 10 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent-green group-hover/btn:border-accent-green transition-all duration-500">
                  <ArrowRight size={18} className="group-hover/btn:text-black transition-colors" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Explore Precision</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Side: Private */}
        <motion.div
          style={{ 
            clipPath: typeof window !== 'undefined' && window.innerWidth >= 768 ? rightClipPath : 'none',
            top: typeof window !== 'undefined' && window.innerWidth < 768 ? '50%' : '0'
          }}
          onMouseEnter={() => setHoveredSide('private')}
          onMouseLeave={() => setHoveredSide(null)}
          className="group absolute inset-0 md:w-full h-1/2 md:h-full overflow-hidden cursor-pointer z-10"
        >
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center scale-110 group-hover:scale-125 transition-transform duration-[2.5s] ease-out" 
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-1000" />

          <div className="relative h-full w-full md:w-1/2 md:ml-auto flex flex-col justify-center items-start md:items-end p-8 md:p-24 z-30 text-left md:text-right">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-accent-green text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">02 / PRIVATE</span>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4 leading-none">
                THE <br /> <span className="text-accent-green italic">SOIRÉE</span>
              </h2>
              <p className="text-white/60 max-w-xs text-[10px] md:text-xs uppercase tracking-widest mb-8 leading-relaxed md:ml-auto">
                Curating intimate, luxury milestones that resonate with personal legacy.
              </p>
              <motion.button 
                className="flex items-center space-x-4 text-white group/btn md:flex-row-reverse md:space-x-reverse"
                whileHover={{ x: typeof window !== 'undefined' && window.innerWidth >= 768 ? -10 : 10 }}
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-accent-green group-hover/btn:border-accent-green transition-all duration-500">
                  <ArrowRight size={18} className="group-hover/btn:text-black transition-colors" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Explore Intimacy</span>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-12 left-12 z-50 hidden md:block">
        <div className="flex flex-col space-y-1">
          <span className="text-[8px] text-white/20 font-mono tracking-tighter">LAT: 26.8467° N</span>
          <span className="text-[8px] text-white/20 font-mono tracking-tighter">LNG: 80.9462° E</span>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 z-50 hidden md:block">
        <div className="text-right">
          <span className="text-[8px] text-white/20 font-mono tracking-tighter uppercase">Luxury Event Curators</span>
        </div>
      </div>
    </section>
  );
};
