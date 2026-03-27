import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (e: any) => {
      const scroll = e.detail.scroll;
      const limit = e.detail.limit;
      const progress = limit.y > 0 ? scroll.y / limit.y : 0;
      setScrollProgress(progress);

      // On home page, hide navbar at the top. On other pages, keep it visible.
      if (location.pathname === '/') {
        if (scroll.y > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('loco-scroll', handleScroll as EventListener);
    return () => window.removeEventListener('loco-scroll', handleScroll as EventListener);
  }, [location.pathname]);

  // Set initial visibility based on path
  useEffect(() => {
    if (location.pathname === '/') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Corporate Events', href: '/corporate-events' },
    { name: 'Social Events', href: '/social-events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-4 flex justify-between items-center"
      >
        <div className="absolute bottom-0 left-0 h-[2px] bg-accent-green w-full origin-left transition-transform duration-100" 
             style={{ transform: `scaleX(${scrollProgress})` }} 
        />
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
          BAMBOO <span className="text-accent-green">GROVES</span>
        </Link>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors uppercase tracking-widest ${
                location.pathname === link.href ? 'text-accent-green' : 'text-white/70 hover:text-accent-green'
              }`}
            >
              {link.name}
            </Link>
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
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-bold transition-colors uppercase tracking-widest ${
                  location.pathname === link.href ? 'text-accent-green' : 'text-white hover:text-accent-green'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
