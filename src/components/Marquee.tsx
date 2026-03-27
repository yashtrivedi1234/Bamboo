import React from 'react';
import { motion } from 'motion/react';

interface MarqueeProps {
  text: string;
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ 
  text, 
  speed = 20, 
  direction = 'left',
  className = "" 
}) => {
  return (
    <div className={`relative flex overflow-hidden whitespace-nowrap py-4 border-y border-white/10 bg-black ${className}`}>
      <motion.div
        initial={{ x: direction === 'left' ? 0 : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        <span className="text-[8vw] md:text-[5vw] font-black uppercase tracking-tighter px-4">
          {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}
        </span>
        <span className="text-[8vw] md:text-[5vw] font-black uppercase tracking-tighter px-4">
          {text} • {text} • {text} • {text} • {text} • {text} • {text} • {text}
        </span>
      </motion.div>
    </div>
  );
};
