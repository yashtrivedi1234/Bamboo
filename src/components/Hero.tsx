import React, { useRef, Suspense, useState } from 'react';
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const springConfig = { damping: 20, stiffness: 100 };
  const corporateWidth = useSpring(hoveredSide === 'corporate' ? 60 : hoveredSide === 'private' ? 40 : 50, springConfig);
  const privateWidth = useSpring(hoveredSide === 'private' ? 60 : hoveredSide === 'corporate' ? 40 : 50, springConfig);

  // Update springs when hoveredSide changes
  React.useEffect(() => {
    if (hoveredSide === 'corporate') {
      corporateWidth.set(65);
      privateWidth.set(35);
    } else if (hoveredSide === 'private') {
      corporateWidth.set(35);
      privateWidth.set(65);
    } else {
      corporateWidth.set(50);
      privateWidth.set(50);
    }
  }, [hoveredSide, corporateWidth, privateWidth]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <Stars />
          </Suspense>
        </Canvas>
      </div>

      {/* Split Screen Content */}
      <div className="relative z-10 flex h-full w-full flex-col md:flex-row">
        {/* Corporate Events */}
        <motion.div
          style={{ width: typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : `${corporateWidth.get()}%` }}
          onMouseEnter={() => setHoveredSide('corporate')}
          onMouseLeave={() => setHoveredSide(null)}
          className="group relative flex h-1/2 w-full cursor-pointer items-center justify-center overflow-hidden border-b border-white/10 md:h-full md:border-b-0 md:border-r"
        >
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center scale-110 transition-transform duration-1000 group-hover:scale-115" 
          />
          <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
          
          <div className="relative flex flex-col items-center text-center p-8 z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
                Corporate <span className="text-accent-green italic">Events</span>
              </h2>
              <p className="text-white/60 max-w-xs text-sm uppercase tracking-widest mb-6 mx-auto">
                Precision. Professionalism. Impact.
              </p>
              <motion.div 
                className="inline-flex items-center space-x-2 text-accent-green font-semibold uppercase tracking-widest text-xs border border-accent-green/30 px-6 py-3 rounded-full hover:bg-accent-green hover:text-black transition-all"
                whileHover={{ x: 10 }}
              >
                <span>Explore Corporate</span>
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Private Events */}
        <motion.div
          style={{ width: typeof window !== 'undefined' && window.innerWidth < 768 ? '100%' : `${privateWidth.get()}%` }}
          onMouseEnter={() => setHoveredSide('private')}
          onMouseLeave={() => setHoveredSide(null)}
          className="group relative flex h-1/2 w-full cursor-pointer items-center justify-center overflow-hidden md:h-full"
        >
          <motion.div 
            style={{ y: backgroundY }}
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center scale-110 transition-transform duration-1000 group-hover:scale-115" 
          />
          <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

          <div className="relative flex flex-col items-center text-center p-8 z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white mb-4">
                Private <span className="text-accent-green italic">Events</span>
              </h2>
              <p className="text-white/60 max-w-xs text-sm uppercase tracking-widest mb-6 mx-auto">
                Intimacy. Luxury. Memories.
              </p>
              <motion.div 
                className="inline-flex items-center space-x-2 text-accent-green font-semibold uppercase tracking-widest text-xs border border-accent-green/30 px-6 py-3 rounded-full hover:bg-accent-green hover:text-black transition-all"
                whileHover={{ x: 10 }}
              >
                <span>Explore Private</span>
                <ArrowRight size={16} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>


      {/* Center Logo/Tagline Overlay */}
      <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-40">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="text-center bg-black/20 backdrop-blur-sm p-12 rounded-full border border-white/5"
        >
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-2xl">
            BAMBOO <span className="text-accent-green">GROVES</span>
          </h1>
          <p className="text-white/80 text-[10px] md:text-xs uppercase tracking-[0.8em] mt-4 font-bold">
            Curating Extraordinary Experiences
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-green to-transparent" />
        <span className="text-[10px] uppercase tracking-widest text-white/40 mt-2">Scroll</span>
      </motion.div>
    </section>
  );
};
