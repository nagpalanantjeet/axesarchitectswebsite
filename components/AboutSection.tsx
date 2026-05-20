
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <div className="max-w-[1400px] mx-auto px-12 py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black tracking-tight mb-16 leading-none"
          >
            DESIGN-CENTRIC.<br/>
            MINIMALIST.<br/>
            TIMELESS.
          </motion.h2>
          
          <div className="space-y-12 max-w-2xl">
            <p className="text-xl md:text-2xl text-neutral-500 leading-relaxed font-light">
              AXES Architects is an internationally benchmarked practice focused on the intersection of architecture, design, and engineering excellence. We believe in the power of white space, clean typography, and the profound impact of well-crafted environments.
            </p>
            <p className="text-lg text-neutral-400 leading-relaxed font-light">
              Our approach is rooted in minimalism. We let images speak more than text, avoiding clutter and excessive ornamentation to find the essential beauty in every structure. Whether restoring historic forts or designing high-efficiency data centers, our commitment to architectural integrity remains constant.
            </p>
          </div>
        </div>
        
        <div className="lg:col-span-4 border-l border-neutral-100 pl-12 space-y-16">
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase text-black mb-6">Expertise</h3>
            <ul className="space-y-4 text-sm text-neutral-500 uppercase tracking-widest font-bold">
              <li>Institutional Design</li>
              <li>Heritage Restoration</li>
              <li>High-End Residential</li>
              <li>Industrial Planning</li>
              <li>Hospitality & Wellness</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.4em] uppercase text-black mb-6">Location</h3>
            <p className="text-sm text-neutral-500 leading-relaxed font-medium">
              Jaipur, Rajasthan<br/>
              India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
