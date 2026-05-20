import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { PROJECTS } from '../constants';
import { Landmark, Compass, Sparkles } from 'lucide-react';

interface ProjectGridProps {
  onProjectClick: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onProjectClick }) => {
  // Filter core contemporary projects vs heritage projects
  const contemporaryProjects = PROJECTS.filter(
    p => p.category !== 'Heritage Conservation & Hospitality'
  );
  
  const heritageProjects = PROJECTS.filter(
    p => p.category === 'Heritage Conservation & Hospitality'
  );

  return (
    <div id="projects" className="bg-[#ffffff] py-32 border-b border-neutral-100 relative film-grain">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        
        {/* Core Projects Title Header */}
        <div className="mb-24 flex flex-col items-start">
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.45em] uppercase text-neutral-400 mb-4 block animate-pulse">
            PORTFOLIO SHOWCASE
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-black mb-6">
            Selected Projects
          </h2>
          <div className="w-20 h-1 bg-[#ff4d4d]" />
        </div>

        {/* 1. Contemporary Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-24 gap-x-12 mb-40">
          {contemporaryProjects.map((project, idx) => {
            // Alternating Column Spans inside a 12-column grid for standard BIG.dk-style asymmetry
            // Items 0, 3 span 7 cols, Items 1, 4 span 5 cols, Items 2, 5 span 12 cols
            let colSpanClasses = "lg:col-span-6";
            if (idx % 3 === 0) {
              colSpanClasses = "lg:col-span-7";
            } else if (idx % 3 === 1) {
              colSpanClasses = "lg:col-span-5";
            } else {
              colSpanClasses = "lg:col-span-12";
            }

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: (idx % 3) * 0.1 }}
                className={`${colSpanClasses} group flex flex-col items-start cursor-none`}
                onClick={() => onProjectClick(project)}
              >
                {/* Image panel */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 border border-neutral-100 mb-6">
                  {/* Subtle Monochrome Treatment on Hover */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  {/* Category Pill Overlays */}
                  <div className="absolute top-4 left-4 bg-black/95 text-white text-[8px] font-bold uppercase tracking-[0.25em] px-3.5 py-1.5 backdrop-blur-md">
                    {project.category}
                  </div>
                </div>

                {/* Information Panel */}
                <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-4">
                  <div className="md:col-span-8">
                    <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.03em] text-black mb-2 group-hover:text-[#ff4d4d] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-4 md:mb-0">
                      {project.location}
                    </p>
                  </div>

                  {/* Detailed metrics box */}
                  <div className="md:col-span-4 flex flex-col md:items-end md:text-right border-l md:border-l-0 md:border-r border-neutral-100 pl-4 md:pl-0 pr-4 md:justify-center">
                    {project.area && (
                      <p className="text-[10px] text-neutral-800 uppercase tracking-widest font-bold">
                        {project.area}
                      </p>
                    )}
                    {project.cost && (
                      <p className="text-neutral-400 text-[9px] uppercase tracking-widest font-normal">
                        VAL: {project.cost}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subtext description trigger on hover */}
                <p className="text-neutral-500 text-[11px] leading-relaxed uppercase tracking-wider font-normal mt-4 line-clamp-2 max-w-xl group-hover:text-black transition-colors">
                  {project.description}
                </p>

                <div className="mt-6">
                  <span className="text-[9px] font-bold tracking-[0.45em] uppercase text-black border-b-2 border-transparent group-hover:border-[#ff4d4d] group-hover:text-[#ff4d4d] pb-1 transition-all">
                    VIEW PORTFOLIO CASE STUDY →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>


        {/* 2. Subsection Divider: "Heritage Conservation & Hospitality" */}
        <div id="heritage" className="relative border-t-2 border-black pt-24 mb-24 overflow-hidden">
          {/* Subtle Ambient watermark */}
          <div 
            style={{ fontSize: '83.96px', lineHeight: '115.96px' }}
            className="absolute right-0 top-12 opacity-5 font-black tracking-tighter select-none uppercase max-sm:text-3xl max-sm:leading-none"
          >
            CONSERVATION
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.45em] text-[#ff4d4d] mb-4 block uppercase font-mono">
                [ HISTORIC ADAPTIVE RESTORATION ]
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-black mb-6">
                Heritage Conservation & Hospitality
              </h2>
              <div className="w-20 h-1 bg-black mb-8" />
            </div>

            <div className="lg:col-span-5 lg:pl-8 pb-4">
              <p className="text-neutral-500 text-[12px] md:text-[13px] uppercase tracking-wider leading-relaxed font-normal">
                Restoring historic footprints with highly sensitive, conservation-centric planning. We combine the monumentality of 450-year-old structures with functional contemporary luxury hospitality planning.
              </p>
            </div>
          </div>
        </div>

        {/* 3. Heritage Immersive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {heritageProjects.map((project, idx) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
                className="group flex flex-col items-start cursor-none bg-neutral-50 p-6 md:p-8 border border-neutral-100 shadow-sm transition-all duration-500 hover:bg-neutral-900 hover:text-white hover:border-black"
                onClick={() => onProjectClick(project)}
              >
                {/* Image card with cinematic filter grain sepia treatment */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 border border-neutral-100 mb-6 rounded-sm">
                  <div className="absolute inset-0 bg-[#ff4d4d]/5 mix-blend-color z-10 opacity-60 group-hover:opacity-0 transition-opacity duration-700" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 sepia-[30%] brightness-90 group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  {/* Dynamic Rooms overlay pill */}
                  {project.rooms && (
                    <div className="absolute bottom-4 left-4 bg-white text-black text-[8px] font-bold tracking-widest px-3.5 py-1.5 uppercase font-mono">
                      {project.rooms}
                    </div>
                  )}
                  {project.heritageDetails && (
                    <div className="absolute top-4 right-4 bg-black text-white text-[8px] font-bold tracking-widest px-3 py-1 uppercase border border-neutral-800">
                      {project.heritageDetails}
                    </div>
                  )}
                </div>

                {/* Subheading tags */}
                <div className="flex items-center gap-3 text-[10px] font-medium tracking-[0.25em] text-[#ff4d4d] uppercase mb-3">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>HERITAGE FORT</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-black uppercase tracking-[0.02em] leading-tight mb-3 text-black group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                {/* Historic narrative snippet */}
                <p className="text-neutral-500 text-[11px] leading-relaxed uppercase tracking-wider font-normal mb-6 mt-2 line-clamp-3 group-hover:text-neutral-300 transition-colors">
                  {project.description}
                </p>

                {/* Spacing alignment items */}
                <div className="mt-auto w-full pt-6 border-t border-neutral-200/40 grid grid-cols-2 gap-4 text-[10px] uppercase font-bold tracking-wider">
                  <div>
                    <span className="text-[#bdbdbd] mb-1 block text-[8px] tracking-widest">AREA SIZE</span>
                    <span className="text-black group-hover:text-white transition-colors">{project.area}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[#bdbdbd] mb-1 block text-[8px] tracking-widest">TIMELINE</span>
                    <span className="text-black group-hover:text-white transition-colors">{project.year || 'Restored'}</span>
                  </div>
                </div>

                {/* Bottom link toggle */}
                <div className="mt-6 pt-2">
                  <span className="text-[9px] font-bold tracking-[0.55em] text-[#ff4d4d] group-hover:text-white border-b border-transparent group-hover:border-white transition-all pb-1">
                    EXPLORE MASTERPLAN →
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default ProjectGrid;
