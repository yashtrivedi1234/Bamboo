import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { Categories } from '../components/Categories';
import { Portfolio } from '../components/Portfolio';
import { GrowWithUs } from '../components/GrowWithUs';
import { Testimonials } from '../components/Testimonials';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <About />
      <Services />
      <Categories />
      <Portfolio />
      <GrowWithUs />
      <Testimonials />
    </motion.div>
  );
};
