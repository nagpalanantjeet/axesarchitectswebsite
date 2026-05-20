import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Motion values for the primary mouse coordinates (instant, drives the short black line)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring values for the trailing follower (smooth follow, drives the longer gray line)
  // Slightly looser spring setup to create a subtle 10% trailing lag effect that feels premium
  const springConfig = { damping: 28, stiffness: 180 };
  const chaseX = useSpring(mouseX, springConfig);
  const chaseY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (typeof window === 'undefined') return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[10000] hidden md:block select-none">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* 1. Longer Gray Stroke (Trailing follower, tilted /, runs bottom-left to top-right) */}
            <motion.div
              style={{
                x: chaseX,
                y: chaseY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="absolute w-[80px] h-[80px] flex items-center justify-center pointer-events-none"
            >
              <svg 
                width="80" 
                height="80" 
                viewBox="-40 -40 80 80" 
                className="absolute overflow-visible pointer-events-none"
              >
                {/* 
                  Longer silver-gray stroke: 
                  - Flatter 35-degree slope (slanted cut)
                  - Bottom endpoint aligns on y = 10 baseline
                  - Top-right endpoint extends far up to y = -22
                  - Bold horizontal thickness matching visual weight of original logo
                  - Flat tapered cuts matching logo style
                */}
                <polygon 
                  points="-16.25,10 -12.25,10 33.40,-22 29.40,-22" 
                  fill="#e5e5e5" 
                  shapeRendering="geometricPrecision"
                />
              </svg>
            </motion.div>

            {/* 2. Shorter Black Stroke (Instant position, tilted \, runs top-left to bottom-right) */}
            <motion.div
              style={{
                x: mouseX,
                y: mouseY,
                translateX: '-50%',
                translateY: '-50%',
              }}
              className="absolute w-[80px] h-[80px] flex items-center justify-center pointer-events-none"
            >
              <svg 
                width="80" 
                height="80" 
                viewBox="-40 -40 80 80" 
                className="absolute overflow-visible pointer-events-none"
              >
                {/* 
                  Shorter black stroke:
                  - Flatter 35-degree slope
                  - Bottom-right endpoint aligns perfectly on y = 10 baseline
                  - Midpoint sits perfectly at intersection (0,0) 
                  - Bold horizontal thickness matching visual weight of original logo
                  - Flat tapered cuts matching logo style
                */}
                <polygon 
                  points="-16.25,-10 -12.25,-10 16.25,10 12.25,10" 
                  fill="#000000" 
                  shapeRendering="geometricPrecision"
                />
              </svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomCursor;
