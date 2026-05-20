
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="group cursor-pointer border-t border-white/5 pt-12"
      onClick={onClick}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-8">
        <div className="md:col-span-4">
          <h3 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">{project.location}</span>
            <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
            <span className="text-[10px] font-mono text-neutral-600">{project.year}</span>
          </div>
        </div>
        <div className="md:col-span-8 h-[1px] bg-white/5 mb-4 hidden md:block"></div>
      </div>

      <div className="relative aspect-[21/9] overflow-hidden bg-neutral-950">
        <motion.img 
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
        />
        
        <div className="absolute top-6 right-6">
          <div className="w-8 h-8 border border-white/20 flex items-center justify-center">
             <div className="w-4 h-[1px] bg-white/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
