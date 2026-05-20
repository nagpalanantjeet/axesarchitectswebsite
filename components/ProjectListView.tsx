
import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project, MainCategory, ProjectCategory } from '../types';
import { Search, X, Plus } from 'lucide-react';

interface ProjectListViewProps {
  onProjectSelect: (p: Project) => void;
}

const MAIN_CATEGORIES: MainCategory[] = ['ARCHITECTURE', 'INTERIORS', 'LANDSCAPE', 'PLANNING', 'PRODUCTS'];
const SUB_CATEGORIES: ProjectCategory[] = ['Culture', 'Education', 'Work', 'Hospitality', 'Residential', 'Infrastructure', 'Space', 'Sports', 'Health'];

const ProjectListView: React.FC<ProjectListViewProps> = ({ onProjectSelect }) => {
  const [activeMain, setActiveMain] = useState<MainCategory>('ARCHITECTURE');
  const [activeSub, setActiveSub] = useState<ProjectCategory>('Culture');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(p => p.mainCategory === activeMain && p.category === activeSub);
  }, [activeMain, activeSub]);

  const toggleProject = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <div className="w-full bg-[#fcfcfc] pb-32">
      {/* Navigation Tiers */}
      <div className="sticky top-[50px] z-[100] bg-[#fcfcfc]/90 backdrop-blur-xl pt-8 pb-4 px-8 md:px-12 border-b border-neutral-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-center justify-start gap-6 md:gap-12 mb-4 overflow-x-auto no-scrollbar">
            {MAIN_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveMain(cat);
                  setExpandedProjectId(null);
                }}
                className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all whitespace-nowrap ${
                  activeMain === cat ? 'text-black opacity-100' : 'text-neutral-300 hover:text-neutral-500'
                }`}
              >
                {cat}
              </button>
            ))}
            <button className="text-neutral-300 hover:text-black transition-colors ml-auto">
              <Search size={14} />
            </button>
          </div>

          <div className="flex items-center justify-start gap-3 md:gap-6 flex-wrap">
            {SUB_CATEGORIES.map((sub) => (
              <button
                key={sub}
                onClick={() => {
                  setActiveSub(sub);
                  setExpandedProjectId(null);
                }}
                className={`text-[8px] md:text-[9px] font-bold tracking-tight transition-all py-1 px-3 rounded-full border ${
                  activeSub === sub ? 'bg-black text-white border-black' : 'text-neutral-400 border-neutral-100 hover:border-neutral-300'
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Expandable Project List */}
      <div className="max-w-[1600px] mx-auto px-8 md:px-12 mt-12">
        {filteredProjects.length > 0 ? (
          <div className="flex flex-col">
            {filteredProjects.map((project) => (
              <ProjectListItem 
                key={project.id} 
                project={project} 
                isExpanded={expandedProjectId === project.id}
                onToggle={() => toggleProject(project.id)}
              />
            ))}
          </div>
        ) : (
          <div className="py-60 text-center">
            <p className="text-neutral-300 font-bold tracking-[0.5em] uppercase text-[10px]">No Projects Found in this Category</p>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectListItem: React.FC<{ project: Project; isExpanded: boolean; onToggle: () => void }> = ({ project, isExpanded, onToggle }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (isExpanded && itemRef.current) {
      setTimeout(() => {
        itemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isExpanded]);

  return (
    <div 
      ref={itemRef}
      className={`border-b border-neutral-100 transition-colors duration-500 ${isExpanded ? 'bg-white' : 'hover:bg-neutral-50/50'}`}
    >
      {/* Header View */}
      <div 
        onClick={onToggle}
        className="py-10 md:py-16 flex items-center justify-between cursor-none group px-4"
      >
        <div className="flex flex-col">
          <h3 className={`text-4xl md:text-6xl font-black tracking-tighter uppercase transition-colors duration-500 ${isExpanded ? 'text-black' : 'text-neutral-200 group-hover:text-black'}`}>
            {project.title}
          </h3>
          <p className="text-[10px] font-bold tracking-[0.4em] text-neutral-300 uppercase mt-2">
            {project.location}
          </p>
        </div>
        
        <div className="hidden md:block w-[120px] aspect-video overflow-hidden rounded-sm opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex items-center justify-center w-12 h-12">
          {isExpanded ? (
            <X className="w-6 h-6 text-black" strokeWidth={1.5} />
          ) : (
            <Plus className="w-6 h-6 text-neutral-200 group-hover:text-black transition-colors" strokeWidth={1.5} />
          )}
        </div>
      </div>

      {/* Expanded View */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-20 px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left: Metadata */}
              <div className="lg:col-span-2 flex flex-col gap-8 pt-4">
                <div className="flex flex-col border-b border-neutral-100 pb-4">
                  <span className="text-[8px] font-black tracking-[0.4em] text-neutral-300 uppercase mb-2">Year</span>
                  <span className="text-sm font-bold uppercase">{project.year}</span>
                </div>
                <div className="flex flex-col border-b border-neutral-100 pb-4">
                  <span className="text-[8px] font-black tracking-[0.4em] text-neutral-300 uppercase mb-2">Client</span>
                  <span className="text-sm font-bold uppercase">{project.client || 'Government of Rajasthan'}</span>
                </div>
                <div className="flex flex-col border-b border-neutral-100 pb-4">
                  <span className="text-[8px] font-black tracking-[0.4em] text-neutral-300 uppercase mb-2">Typology</span>
                  <span className="text-sm font-bold uppercase">{project.typology || project.category}</span>
                </div>
                <div className="flex flex-col border-b border-neutral-100 pb-4">
                  <span className="text-[8px] font-black tracking-[0.4em] text-neutral-300 uppercase mb-2">Size</span>
                  <span className="text-sm font-bold uppercase">{project.size || '45,000 SQFT'}</span>
                </div>
                <div className="flex flex-col border-b border-neutral-100 pb-4">
                  <span className="text-[8px] font-black tracking-[0.4em] text-neutral-300 uppercase mb-2">Status</span>
                  <span className={`text-sm font-bold uppercase ${project.status === 'Completed' ? 'text-black' : 'text-blue-500'}`}>{project.status}</span>
                </div>
              </div>

              {/* Center: Hero Image */}
              <div className="lg:col-span-7 pt-4">
                <div className="w-full aspect-video overflow-hidden rounded-[4px] bg-neutral-50 shadow-sm">
                  <motion.img 
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                {/* Secondary Gallery Strip */}
                {project.gallery && project.gallery.filter(g => g && g !== project.image).length > 0 && (
                  <div className={`grid gap-4 mt-8 ${
                    project.gallery.filter(g => g && g !== project.image).length === 1 
                      ? 'grid-cols-1' 
                      : 'grid-cols-2'
                  }`}>
                    {project.gallery
                      .filter(g => g && g !== project.image)
                      .slice(0, 2)
                      .map((img, i) => (
                        <div key={i} className="aspect-[16/9] overflow-hidden rounded-[2px] bg-neutral-50">
                          <img src={img} className="w-full h-full object-cover" alt="Detail" referrerPolicy="no-referrer" />
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>

              {/* Right: Narrative */}
              <div className="lg:col-span-3 pt-4 lg:pl-8">
                <h4 className="text-[10px] font-black tracking-[0.5em] text-neutral-300 uppercase mb-6">Narrative</h4>
                <p className="text-sm md:text-md leading-relaxed text-neutral-600 font-medium uppercase tracking-tight">
                  {project.description}
                  <br/><br/>
                  The design philosophy emphasizes the integration of local context with global engineering standards, creating a landmark that transcends functional requirements to become a social anchor for the city.
                </p>
                <div className="mt-12">
                   <button className="text-[9px] font-black tracking-[0.5em] uppercase border-b border-black pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-colors cursor-none">
                     Request Full Dossier
                   </button>
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectListView;
