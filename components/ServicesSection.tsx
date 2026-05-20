import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Map, 
  Layers, 
  GraduationCap, 
  HeartHandshake, 
  Leaf, 
  History, 
  Sparkles 
} from 'lucide-react';

const SERVICES = [
  {
    icon: Building,
    title: 'Architecture Design',
    desc: 'Comprehensive structural solutions from concept planning to schematic design, focusing on clarity, structural authenticity, and timeless proportions.'
  },
  {
    icon: Map,
    title: 'Urban Planning',
    desc: 'Large scale layout masterplanning, contextual environmental studies, and development strategies for functional and human-centric habitations.'
  },
  {
    icon: Layers,
    title: 'Interior Design',
    desc: 'Bespoke custom inner spaces curated with raw architectural materials, optimizing sensory experience, natural illumination, and high comfort.'
  },
  {
    icon: GraduationCap,
    title: 'Institutional Projects',
    desc: 'Specialized state infrastructure, governmental hubs, technical institutes, and civic schools engineered to inspire high-performance learning.'
  },
  {
    icon: HeartHandshake,
    title: 'Healthcare Architecture',
    desc: 'Tertiary hospitals, medical colleges, and health facilities planned carefully to streamline clinical flow and cultivate restorative environments.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    desc: 'Low carbon emission systems, thermal insulation details, water recycling, and LEED certification strategies integrated into the core shell.'
  },
  {
    icon: History,
    title: 'Heritage Conservation',
    desc: 'Rigorous restoration and adaptive reuse of centuries-old palaces, forts, and ruins preserving archaeological identity with modern utilities.'
  },
  {
    icon: Sparkles,
    title: 'Hospitality Design',
    desc: 'Ultra-luxurious resorts, historical heritage retreat hotels, and bespoke dining spaces that narrate cultural heritage and luxury living.'
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-[#fcfcfc] py-32 border-b border-neutral-100">
      <div className="max-w-[1600px] mx-auto px-8 md:px-12">
        
        {/* Section Heading Editorial Style */}
        <div className="mb-24 flex flex-col items-start">
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.45em] uppercase text-neutral-400 mb-4">
            CATEGORIES & EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-black mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-[#ff4d4d] mb-8" />
          <p className="text-md md:text-xl text-neutral-500 max-w-2xl uppercase tracking-wider leading-relaxed font-normal">
            We provide world-class, integrated architectural engineering and design solutions that redefine urban landscape boundaries.
          </p>
        </div>

        {/* 3-Column Responsive Grid on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="group relative bg-white border border-neutral-100 p-8 md:p-10 flex flex-col items-start transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:border-[#ff4d4d]"
              >
                {/* Micro Red Accent Hover Block */}
                <div className="absolute top-0 left-0 w-0 h-[3px] bg-[#ff4d4d] transition-all duration-300 group-hover:w-full" />

                {/* Service Card Number */}
                <span className="absolute top-8 right-8 text-[11px] font-bold text-neutral-300 tracking-widest group-hover:text-[#ff4d4d] transition-colors">
                  0{idx + 1}
                </span>

                {/* Minimal line icon */}
                <div className="p-4 bg-neutral-50 rounded-lg text-black group-hover:bg-[#000000] group-hover:text-white transition-all duration-300 mb-8">
                  <IconComponent className="w-5 h-5 stroke-[1.5]" />
                </div>

                {/* Service title */}
                <h3 className="text-lg font-black uppercase tracking-[0.1em] text-black mb-4 group-hover:text-[#ff4d4d] transition-colors">
                  {service.title}
                </h3>

                {/* Service descriptive copy */}
                <p className="text-neutral-500 text-[12px] md:text-[13px] leading-relaxed uppercase tracking-wider font-normal">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
