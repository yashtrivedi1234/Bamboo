import React from 'react';
import { Services } from '../components/Services';
import { Categories } from '../components/Categories';
import { motion } from 'motion/react';

export const ServicesPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-24"
    >
      <Services />
      <Categories />
    </motion.div>
  );
};
