import React from 'react';
import { GrowWithUs } from '../components/GrowWithUs';
import { motion } from 'motion/react';

export const GrowWithUsPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-24"
    >
      <GrowWithUs />
    </motion.div>
  );
};
