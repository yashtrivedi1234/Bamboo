import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative py-24 px-6 md:px-24 bg-black overflow-hidden border-t border-white/10" data-scroll-section>
      <div className="max-w-7xl mx-auto flex flex-col space-y-24">
        {/* Top Section: CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-[1px] bg-accent-green" />
              <span className="text-accent-green text-xs uppercase tracking-[0.3em] font-bold">
                Let's Create Together
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tighter">
              Ready to <span className="text-accent-green italic">Elevate</span> Your Next Event?
            </h2>
          </div>
          
          <Link to="/contact">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-48 h-48 rounded-full border border-accent-green flex items-center justify-center cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-accent-green translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              <div className="relative flex flex-col items-center space-y-2 text-white group-hover:text-black transition-colors duration-500">
                <span className="text-sm font-bold uppercase tracking-widest">Get In Touch</span>
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          </Link>
        </div>

        {/* Middle Section: Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-t border-white/10 pt-16">
          <div className="flex flex-col space-y-6">
            <h3 className="text-white text-xl font-bold tracking-tighter">
              BAMBOO <span className="text-accent-green">GROVES</span>
            </h3>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Curating extraordinary experiences across India. Based in Lucknow, operating nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/40 hover:text-accent-green transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-white/40 hover:text-accent-green transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-white/40 hover:text-accent-green transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-white/40 hover:text-accent-green transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold">Navigation</h4>
            <ul className="flex flex-col space-y-4">
              <li><Link to="/" className="text-white/40 hover:text-accent-green transition-colors text-sm uppercase tracking-widest">Home</Link></li>
              <li><Link to="/about" className="text-white/40 hover:text-accent-green transition-colors text-sm uppercase tracking-widest">About</Link></li>
              <li><Link to="/services" className="text-white/40 hover:text-accent-green transition-colors text-sm uppercase tracking-widest">Services</Link></li>
              <li><Link to="/portfolio" className="text-white/40 hover:text-accent-green transition-colors text-sm uppercase tracking-widest">Portfolio</Link></li>
              <li><Link to="/grow-with-us" className="text-white/40 hover:text-accent-green transition-colors text-sm uppercase tracking-widest">Grow With Us</Link></li>
              <li><Link to="/contact" className="text-white/40 hover:text-accent-green transition-colors text-sm uppercase tracking-widest">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold">Contact</h4>
            <ul className="flex flex-col space-y-4">
              <li className="text-white/40 text-sm uppercase tracking-widest">Lucknow, India</li>
              <li className="text-white/40 text-sm uppercase tracking-widest">+91 98765 43210</li>
              <li className="text-white/40 text-sm uppercase tracking-widest">hello@bamboogroves.com</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-6">
            <h4 className="text-white text-xs uppercase tracking-[0.3em] font-bold">Newsletter</h4>
            <p className="text-white/40 text-xs uppercase tracking-widest leading-relaxed">
              Subscribe to our newsletter for luxury event insights.
            </p>
            <div className="flex items-center border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none text-white text-xs uppercase tracking-widest focus:ring-0 w-full"
              />
              <button className="text-accent-green hover:text-white transition-colors">
                <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/10 pt-8 text-[10px] uppercase tracking-widest font-medium">
          <div className="flex flex-col md:flex-row items-center gap-4 text-white/20">
            <span>&copy; {currentYear} Bamboo Groves. All Rights Reserved.</span>
            <div className="hidden md:block w-[1px] h-3 bg-white/10" />
            <div className="flex space-x-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col items-center md:items-end gap-3 p-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-accent-green/30 hover:bg-white/[0.04] transition-all duration-300 group"
          >
            <span className="text-white/30 text-[9px] uppercase tracking-[0.2em] font-bold">Design and Developed by</span>
            <a 
              href="https://codecrafter.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-1">
                  <span className="text-white group-hover:text-accent-green transition-colors text-sm font-black tracking-tighter">
                    CODE
                  </span>
                  <span className="text-accent-green group-hover:text-white transition-colors text-sm font-black tracking-tighter">
                    CRAFTER
                  </span>
                </div>
                <span className="text-[7px] text-white/50 tracking-[0.4em] -mt-1 font-bold">WEB SOLUTIONS</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center group-hover:border-accent-green group-hover:shadow-[0_0_20px_rgba(0,255,153,0.2)] transition-all duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-green">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute bottom-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[25vw] font-black uppercase tracking-tighter text-white">
          GROVES
        </span>
      </div>
    </footer>
  );
};
