import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scroll = e.detail.scroll;
      const limit = e.detail.limit;
      const progress = limit.y > 0 ? scroll.y / limit.y : 0;
      setScrollProgress(progress);

      // Hide navbar in hero section (top of the page)
      if (scroll.y > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('loco-scroll', handleScroll as EventListener);
    return () => window.removeEventListener('loco-scroll', handleScroll as EventListener);
  }, []);

  // Ensure navbar is hidden initially at the top
  useEffect(() => {
    setIsVisible(false);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center"
      >
        <div className="absolute bottom-0 left-0 h-[2px] bg-accent-green w-full origin-left transition-transform duration-100" 
             style={{ transform: `scaleX(${scrollProgress})` }} 
        />
        <div className="text-2xl font-bold tracking-tighter text-white">
          BAMBOO <span className="text-accent-green">GROVES</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-accent-green transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col items-center justify-center space-y-8"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <X size={32} />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white hover:text-accent-green transition-colors uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
