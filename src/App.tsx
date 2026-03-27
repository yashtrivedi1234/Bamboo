import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

// Pages
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { CorporateEventsPage } from './pages/CorporateEventsPage';
import { SocialEventsPage } from './pages/SocialEventsPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { GrowWithUsPage } from './pages/GrowWithUsPage';
import { ContactPage } from './pages/ContactPage';

const NoiseOverlay = () => (
  <div className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.03] mix-blend-overlay">
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <filter id="noiseFilter">
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.65" 
          numOctaves="3" 
          stitchTiles="stitch" 
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    </svg>
  </div>
);

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
          BAMBOO <span className="text-accent-green">GROVES</span>
        </h1>
        <div className="mt-4 h-[2px] w-24 bg-accent-green mx-auto overflow-hidden">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="h-full w-full bg-white"
          />
        </div>
        <p className="mt-4 text-[10px] uppercase tracking-[0.5em] text-white/40 font-medium">
          Curating Extraordinary Experiences
        </p>
      </motion.div>
    </motion.div>
  );
};

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    rotateY: 45,
    scale: 0.9,
    z: -200,
  },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    z: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    rotateY: -45,
    scale: 0.9,
    z: -200,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div className="perspective-container" style={{ perspective: '2000px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="w-full origin-center"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/corporate-events" element={<CorporateEventsPage />} />
            <Route path="/social-events" element={<SocialEventsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/grow-with-us" element={<GrowWithUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="bg-black text-white selection:bg-accent-green selection:text-black">
        <CustomCursor />
        <NoiseOverlay />
        <AnimatePresence>
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        {!isLoading && (
          <>
            <Navbar />
            <SmoothScroll>
              <AnimatedRoutes />
              <Footer />
            </SmoothScroll>
          </>
        )}
      </div>
    </Router>
  );
}
