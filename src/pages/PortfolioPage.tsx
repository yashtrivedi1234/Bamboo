import React from 'react';
import { Portfolio } from '../components/Portfolio';
import { motion } from 'motion/react';

export const PortfolioPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-24"
    >
      <Portfolio />
    </motion.div>
  );
};
