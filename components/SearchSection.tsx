
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

interface SearchSectionProps {
  onProjectClick: (p: Project) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onProjectClick }) => {
  const [query, setQuery] = useState('');
  const [localResults, setLocalResults] = useState<Project[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setLocalResults([]);
      return;
    }
    const filtered = PROJECTS.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) || 
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.location.toLowerCase().includes(query.toLowerCase())
    );
    setLocalResults(filtered);
  }, [query]);

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-4xl mx-auto px-12">
        <div className="relative mb-20 group">
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="SEARCH OUR PROJECTS..."
            className="w-full bg-transparent border-b-2 border-neutral-100 py-12 text-3xl md:text-5xl font-black tracking-tighter uppercase focus:outline-none focus:border-black transition-colors placeholder:text-neutral-200"
            autoFocus
          />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <Search className="w-8 h-8 text-neutral-200" />
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-[10px] font-bold tracking-[0.4em] text-neutral-400 mb-12 uppercase">
            MATCHING PROJECTS ({localResults.length})
          </h3>
          <div className="space-y-4 pb-40">
            <AnimatePresence mode="popLayout">
              {localResults.length > 0 ? localResults.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onClick={() => onProjectClick(project)}
                  className="group flex items-center justify-between p-8 bg-neutral-50 border border-neutral-100 hover:border-black cursor-pointer transition-all"
                >
                  <div className="flex items-center gap-8">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-20 h-20 object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                    <div>
                      <h4 className="font-bold text-2xl tracking-tight group-hover:text-blue-600 transition-colors uppercase">
                        {project.title}
                      </h4>
                      <p className="text-[10px] font-bold text-neutral-400 tracking-widest uppercase mt-1">
                        {project.location} — {project.category}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-neutral-200 group-hover:text-black transition-colors" />
                </motion.div>
              )) : query ? (
                <p className="text-neutral-400 uppercase text-[11px] font-bold tracking-[0.3em] text-center py-24 border border-dashed border-neutral-200">
                  No matching internal projects found for "{query}".
                </p>
              ) : (
                <p className="text-neutral-400 uppercase text-[11px] font-bold tracking-[0.3em] text-center py-24 border border-dashed border-neutral-200">
                  Enter criteria to explore the AXES archive.
                </p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
