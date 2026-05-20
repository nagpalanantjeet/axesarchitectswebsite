import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ArrowLeft, MapPin, Calendar, Layout, DollarSign, Maximize, Landmark, Hotel, ShieldCheck } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Safe back to portfolio window scrolling
  const handleBack = () => {
    onBack();
  };

  return (
    <div className="bg-white min-h-screen py-32 film-grain">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        
        {/* Editorial Action Bar */}
        <button 
          onClick={handleBack}
          className="flex items-center gap-3 group mb-20 text-[10px] font-bold tracking-[0.4em] uppercase text-black bg-transparent border-none cursor-none transition-colors hover:text-[#ff4d4d]"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" strokeWidth={2.5} />
          BACK TO PORTFOLIO
        </button>

        {/* 2-Column Split: Editorial Metadata & Cinematic Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Fixed / Sticky Information Grid */}
          <div className="lg:col-span-4 lg:sticky lg:top-[120px] border-l-2 border-black pl-8 space-y-10">
            <div>
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.45em] uppercase text-[#ff4d4d] mb-4 block">
                {project.category.toUpperCase()}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase text-black leading-none">
                {project.title}
              </h1>
            </div>

            <div className="space-y-6 pt-10 border-t border-neutral-100">
              
              {/* Location */}
              <div className="flex gap-4 items-start">
                <MapPin className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                <div>
                  <p className="text-[9px] font-bold tracking-widest text-[#bdbdbd] uppercase mb-1">LOCATION</p>
                  <p className="text-sm font-bold uppercase text-black">{project.location}</p>
                </div>
              </div>

              {/* Client */}
              {project.client && (
                <div className="flex gap-4 items-start">
                  <ShieldCheck className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold tracking-widest text-[#bdbdbd] uppercase mb-1">CLIENT</p>
                    <p className="text-sm font-bold uppercase text-black">{project.client}</p>
                  </div>
                </div>
              )}

              {/* Built Area */}
              {project.area && (
                <div className="flex gap-4 items-start">
                  <Maximize className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold tracking-widest text-[#bdbdbd] uppercase mb-1">BUILT AREA</p>
                    <p className="text-sm font-bold uppercase text-black">{project.area}</p>
                  </div>
                </div>
              )}

              {/* Cost */}
              {project.cost && (
                <div className="flex gap-4 items-start">
                  <DollarSign className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold tracking-widest text-[#bdbdbd] uppercase mb-1">PROJECT VALUE</p>
                    <p className="text-sm font-bold uppercase text-black">{project.cost}</p>
                  </div>
                </div>
              )}

              {/* Rooms Capacity */}
              {project.rooms && (
                <div className="flex gap-4 items-start">
                  <Hotel className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold tracking-widest text-[#bdbdbd] uppercase mb-1">CAPACITY / KEYS</p>
                    <p className="text-sm font-bold uppercase text-black">{project.rooms}</p>
                  </div>
                </div>
              )}

              {/* Heritage Historical Baseline */}
              {project.heritageDetails && (
                <div className="flex gap-4 items-start">
                  <Landmark className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold tracking-widest text-[#bdbdbd] uppercase mb-1">HISTORICAL RECORD</p>
                    <p className="text-sm font-bold uppercase text-black">{project.heritageDetails}</p>
                  </div>
                </div>
              )}

              {/* Timeline Year */}
              {project.year && (
                <div className="flex gap-4 items-start">
                  <Calendar className="w-4 h-4 text-neutral-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[9px] font-bold tracking-widest text-[#bdbdbd] uppercase mb-1">CALENDAR YEAR</p>
                    <p className="text-sm font-bold uppercase text-black">{project.year}</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Immersive Media Column */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Main Immersive Hero Card */}
            <motion.div 
              initial={{ scale: 1.05, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="aspect-video w-full overflow-hidden bg-neutral-100 shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-neutral-100"
            >
              <img 
                src={project.image} 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" 
                alt={project.title} 
              />
            </motion.div>
            
            {/* Monolithic Narrative Presentation */}
            <div className="py-8 border-b border-t border-neutral-100">
              <h4 className="text-[10px] font-black tracking-[0.55em] text-[#ff4d4d] uppercase mb-6">
                ARCHITECTURAL BRIEF
              </h4>
              <p className="text-lg md:text-xl leading-relaxed text-neutral-800 uppercase tracking-widest font-light">
                {project.description}
              </p>
            </div>
            
            {/* Dual Geometry Grid (Secondary Visual Panels) */}
            {project.gallery && project.gallery.filter(img => img && img !== project.image).length > 0 && (
              <div className={`grid gap-8 ${
                project.gallery.filter(img => img && img !== project.image).length === 1 
                  ? 'grid-cols-1' 
                  : 'grid-cols-2'
              }`}>
                {project.gallery
                  .filter(img => img && img !== project.image)
                  .slice(0, 2)
                  .map((img, i) => (
                    <div key={i} className="aspect-video w-full overflow-hidden bg-neutral-100 border border-neutral-100">
                      <img 
                        src={img} 
                        className="w-full h-full object-cover filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700" 
                        alt={`Gallery view of ${project.title} - Layer ${i+1}`} 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))
                }
              </div>
            )}
            
            {/* Refined Back Button at base */}
            <div className="pt-8 flex justify-start">
              <button 
                onClick={handleBack}
                className="text-[10px] font-bold tracking-[0.5em] uppercase border-b border-black pb-1 hover:text-[#ff4d4d] hover:border-[#ff4d4d] transition-all cursor-none bg-transparent"
              >
                ← BACK TO PORTFOLIO SHOWCASE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
