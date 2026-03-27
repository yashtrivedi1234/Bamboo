import React, { useEffect, useRef, createContext, useContext } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import { useMotionValue } from 'motion/react';

interface ScrollContextType {
  scrollY: any;
}

const ScrollContext = createContext<ScrollContextType>({ scrollY: null });
export const useLocoScroll = () => useContext(ScrollContext);

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      lerp: 0.05,
      touchMultiplier: 2,
    });

    scroll.on('scroll', (args: any) => {
      window.dispatchEvent(new CustomEvent('loco-scroll', { detail: args }));
      scrollY.set(args.scroll.y);
    });

    // Update scroll on window resize
    const handleResize = () => {
      scroll.update();
    };
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });
    resizeObserver.observe(scrollRef.current);

    return () => {
      if (scroll) scroll.destroy();
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [scrollY]);

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      <div data-scroll-container ref={scrollRef}>
        {children}
      </div>
    </ScrollContext.Provider>
  );
};
