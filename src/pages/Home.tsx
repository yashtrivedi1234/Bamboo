import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Categories } from '../components/Categories';
import { Portfolio } from '../components/Portfolio';
import { GrowWithUs } from '../components/GrowWithUs';
import { Testimonials } from '../components/Testimonials';
import { motion } from 'motion/react';

import { Marquee } from '../components/Marquee';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Marquee text="Luxury Events • Corporate Excellence • Private Soirées • Architectural Precision" speed={30} className="text-white/20" />
      <About />
      <Categories />
      <Marquee text="BAMBOO GROVES • LUCKNOW • EST 2024 • BEYOND EVENTS" speed={40} direction="right" className="bg-accent-green !text-black border-none" />
      <Services />
      <Portfolio />
      <GrowWithUs />
      <Testimonials />
    </motion.div>
  );
};
