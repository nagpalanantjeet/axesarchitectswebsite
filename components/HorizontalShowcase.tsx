
import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface HorizontalShowcaseProps {
  projects: Project[];
  onProjectClick: (p: Project) => void;
}

const HorizontalShowcase: React.FC<HorizontalShowcaseProps> = ({ projects, onProjectClick }) => {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for the floating "Lens" label
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth follow effect for the lens
  const springConfig = { damping: 25, stiffness: 200 };
  const lensX = useSpring(mouseX, springConfig);
  const lensY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[70vh] min-h-[500px] overflow-hidden bg-[#fcfcfc] cursor-none"
    >
      {/* Floating Lens Label (Follower) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{
              x: lensX,
              y: lensY,
              left: 0,
              top: 0,
              translateX: '-20px', // Center circle on cursor
              translateY: '-20px',
            }}
            className="fixed pointer-events-none z-[5000] flex items-center gap-6"
          >
            {/* The "Red Circle" from the user's reference */}
            <div className="w-10 h-10 rounded-full border-[1.5px] border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]" />
            
            {/* The Project Title Label */}
            <div className="flex flex-col">
              <span className="text-[14px] font-black tracking-[0.2em] text-black uppercase whitespace-nowrap drop-shadow-sm">
                {hoveredProject.title}
              </span >
              <span className="text-[9px] font-bold tracking-[0.3em] text-neutral-400 uppercase whitespace-nowrap">
                {hoveredProject.location}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Draggable Horizontal Strip */}
      <motion.div 
        drag="x"
        dragConstraints={containerRef}
        className="flex gap-4 px-[10vw] h-full items-center cursor-none"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            onMouseEnter={() => setHoveredProject(project)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => onProjectClick(project)}
            whileHover={{ scale: 1.02 }}
            className="relative shrink-0 w-[45vw] h-[85%] overflow-hidden rounded-[2px] bg-neutral-100 transition-transform duration-700 ease-out"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            />
            
            {/* Subtle Overlay to make it feel spatial */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* Swipe/Drag Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[9px] font-black tracking-[0.4em] text-neutral-300 uppercase pointer-events-none">
        Drag horizontally to explore
      </div>
    </div>
  );
};

export default HorizontalShowcase;
