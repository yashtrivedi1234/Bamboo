import { useState, useEffect, RefObject } from 'react';

export const useLocoInView = (ref: RefObject<HTMLElement | null>, threshold = 0.2) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight * (1 - threshold)) {
        setIsInView(true);
      }
    };

    window.addEventListener('loco-scroll', handleScroll);
    
    // Initial check
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener('loco-scroll', handleScroll);
  }, [ref, threshold]);

  return isInView;
};
