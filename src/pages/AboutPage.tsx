import React from 'react';
import { About } from '../components/About';
import { GrowWithUs } from '../components/GrowWithUs';
import { motion } from 'motion/react';

export const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-24"
    >
      <About />
      <GrowWithUs />
    </motion.div>
  );
};
