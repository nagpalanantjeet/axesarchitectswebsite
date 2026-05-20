
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Project, ProjectCategory } from '../types';
import { ArrowLeft } from 'lucide-react';
import ProjectGrid from './ProjectGrid';

// Grouping logic for the UI to match user's requested "tabs" and PDF structure
const CATEGORIES: { label: string; categories: ProjectCategory[]; image: string }[] = [
  { 
    label: 'Institutional / Banks', 
    categories: ['Institutional'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    label: 'Heritage / Hospitality', 
    categories: ['Heritage', 'Hospitality'],
    image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    label: 'Healthcare / Hospital', 
    categories: ['Hospital'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    label: 'Commercial', 
    categories: ['Commercial'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    label: 'Residential', 
    categories: ['Residential'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    label: 'Industrial', 
    categories: ['Industrial'],
    image: 'https://images.unsplash.com/photo-1530124564312-6f76cb7075e7?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    label: 'PMC', 
    categories: ['PMC'],
    image: 'https://images.unsplash.com/photo-1504307651254-35682fdc42ff?auto=format&fit=crop&q=80&w=800' 
  }
];

interface TypologyIndexProps {
  onProjectSelect: (p: Project) => void;
}

const TypologyIndex: React.FC<TypologyIndexProps> = ({ onProjectSelect }) => {
  const [selectedGroup, setSelectedGroup] = useState<typeof CATEGORIES[0] | null>(null);

  return (
    <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 py-24 min-h-[600px]">
      <AnimatePresence mode="wait">
        {!selectedGroup ? (
          <motion.div
            key="categories"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[14px] font-bold tracking-[0.4em] uppercase text-black mb-12">PROJECT TYPOLOGIES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-x-8 md:gap-y-16">
              {CATEGORIES.map((group) => (
                <div 
                  key={group.label}
                  onClick={() => setSelectedGroup(group)}
                  className="group cursor-pointer flex flex-col items-center"
                >
                  <div className="relative w-full aspect-[2/3] rounded-[40px] overflow-hidden bg-neutral-100 mb-6 border border-neutral-100 transition-transform duration-700 group-hover:scale-[0.98]">
                    <img 
                      src={group.image} 
                      alt={group.label}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                  </div>
                  <span className="text-[14px] font-bold tracking-[0.1em] text-black text-center group-hover:translate-y-[-2px] transition-transform uppercase">
                    {group.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="project-list"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <h2 className="text-[14px] font-bold tracking-[0.4em] uppercase text-black">
                {selectedGroup.label} ARCHIVE
              </h2>
              <button 
                onClick={() => setSelectedGroup(null)}
                className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-neutral-400 hover:text-black transition-colors uppercase"
              >
                <ArrowLeft size={14} /> Back to index
              </button>
            </div>

            <ProjectGrid 
              onProjectClick={onProjectSelect}
              categoryFilter={selectedGroup.categories} 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TypologyIndex;
