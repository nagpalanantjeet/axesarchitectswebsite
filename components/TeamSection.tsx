import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';
import { Landmark, Award, BookOpen, Clock } from 'lucide-react';

const TeamSection: React.FC = () => {
  return (
    <section id="people" className="py-24 bg-white film-grain">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        
        {/* Page Header with Significant Editorial Spacing */}
        <div className="mb-24 flex flex-col items-start">
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.45em] uppercase text-neutral-400 mb-4 block">
            STUDIO LEADERSHIP / BOARD
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter uppercase text-black mb-6">
            Our People
          </h1>
          <div className="w-20 h-1 bg-[#ff4d4d] mb-8" />
          <p className="text-md md:text-lg text-neutral-500 max-w-2xl uppercase tracking-wider leading-relaxed">
            Led by directors with decades of hands-on expertise managing complex public health complexes, high-volume technology infrastructure, and luxury restoration.
          </p>
        </div>

        {/* Board of Directors Landscape Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
          {TEAM.map((director, idx) => (
            <motion.div
              key={director.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="group flex flex-col md:flex-row gap-10 items-start p-8 md:p-10 border border-neutral-100 bg-neutral-50/50 hover:bg-white hover:border-black transition-all duration-500 hover:shadow-2xl"
            >
              
              {/* Director Portrait with Cinematic Grayscale */}
              <div className="w-full md:w-[240px] aspect-[3/4] overflow-hidden bg-neutral-100 shadow-md shrink-0 border border-neutral-100 relative">
                <div className="absolute inset-0 bg-neutral-900/10 z-10 transition-opacity duration-500 group-hover:opacity-0" />
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                
                {/* Visual Label */}
                <span className="absolute bottom-4 left-4 bg-black text-white px-3 py-1 text-[8px] font-bold tracking-widest uppercase font-mono z-20">
                  {director.role.toUpperCase()}
                </span>
              </div>

              {/* Director Dossier Detail Area */}
              <div className="flex-grow flex flex-col justify-between h-full space-y-8">
                <div>
                  {/* Name and Title */}
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-black mb-2 leading-none">
                    {director.name}
                  </h2>
                  <p className="text-[#ff4d4d] text-[10px] font-black tracking-[0.35em] uppercase mb-6">
                    {director.role}
                  </p>
                  
                  {/* Portrait short profile */}
                  <p className="text-neutral-600 text-[12px] md:text-[13px] uppercase tracking-wider leading-relaxed font-normal mb-8">
                    {director.bio}
                  </p>

                  {/* High level info matrix grid */}
                  <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-t border-neutral-100 pt-6 text-[10px] uppercase font-bold tracking-widest text-neutral-800">
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{director.qualification}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{director.almaMater}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2 mt-1">
                      <Clock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                      <span>{director.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Director's Selected Featured Projects Strip */}
                {director.featuredProjects && (
                  <div className="border-t border-neutral-150 pt-6">
                    <h3 className="flex items-center gap-2 text-[9px] font-black tracking-[0.45em] text-[#bdbdbd] uppercase mb-4">
                      <Landmark className="w-3.5 h-3.5" />
                      <span>KEY DIRECTED COMMISSIONS</span>
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {director.featuredProjects.map((proj, pi) => (
                        <span 
                          key={pi}
                          className="bg-neutral-100 hover:bg-black hover:text-white transition-colors text-[8px] md:text-[9px] font-bold uppercase tracking-wider px-3 py-1.5 text-neutral-700 cursor-none"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
