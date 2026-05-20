import React from 'react';
import { View } from '../types';
import { Instagram, Linkedin, ArrowUp } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  currentView?: View;
  onNavigate: (view: View, project?: Project, fromBrand?: boolean, scrollTarget?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentView, onNavigate }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavLink = (hashId: string, view: View) => {
    if (view === 'team') {
      onNavigate('team');
      return;
    }
    
    if (currentView !== 'home') {
      onNavigate('home', undefined, false, hashId);
    } else {
      if (hashId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(hashId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }
  };

  return (
    <footer className="bg-black text-white py-24 px-8 md:px-12 relative select-none">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-16">
        
        {/* Top Split: SVG Logo and Jump Link */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-neutral-900 pb-12">
          
          {/* Logo container width restricted */}
          <div className="w-[280px] md:w-[380px] text-white">
            <Logo className="h-[60px] md:h-[80px] items-start justify-start" color="#ffffff" />
          </div>

          {/* Slogan */}
          <div className="max-w-md">
            <p className="text-neutral-500 text-[11px] leading-relaxed uppercase tracking-widest font-normal">
              A commitment to architectural mastery, pristine detailing, and enduring sustainability. We design environments that transcend stylistic boundaries.
            </p>
          </div>

          {/* Smooth Scroll To Top Button */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 hover:text-white group bg-transparent border-none cursor-none py-1 transition-all"
          >
            BACK TO TOP
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform xl:stroke-[2]" />
          </button>
        </div>

        {/* Middle content: Navigation Index and Inquiries */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-[11px] tracking-widest uppercase">
          
          {/* Section 1: Navigation map */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-bold text-[#ff4d4d] tracking-[0.4em] text-[10px]">NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-4 font-medium text-neutral-400">
              <button 
                onClick={() => handleNavLink('top', 'home')} 
                className="text-left hover:text-white transition-colors cursor-none bg-transparent select-none"
              >
                Home
              </button>
              <button 
                onClick={() => handleNavLink('services', 'home')} 
                className="text-left hover:text-white transition-colors cursor-none bg-transparent select-none"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavLink('projects', 'home')} 
                className="text-left hover:text-white transition-colors cursor-none bg-transparent select-none"
              >
                Projects
              </button>
              <button 
                onClick={() => handleNavLink('people', 'team')} 
                className="text-left hover:text-white transition-colors cursor-none bg-transparent select-none"
              >
                People
              </button>
              <button 
                onClick={() => handleNavLink('contact', 'home')} 
                className="text-left hover:text-white transition-colors cursor-none bg-transparent select-none"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Section 2: Hotlines */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-bold text-[#ff4d4d] tracking-[0.4em] text-[10px]">HOTLINE / INQUIRIES</h4>
            <div className="flex flex-col gap-3 font-medium text-neutral-400 lowercase">
              <span className="text-[10px] font-bold uppercase text-neutral-600 tracking-wider">EMAIL DIRECT:</span>
              <a 
                href="mailto:architectsaxes@gmail.com" 
                className="hover:text-white transition-colors cursor-none font-bold"
              >
                architectsaxes@gmail.com
              </a>
              <span className="text-[10px] font-bold uppercase text-neutral-600 tracking-wider mt-2">PHONE:</span>
              <a 
                href="tel:+919828115410" 
                className="hover:text-white transition-colors cursor-none tracking-widest font-bold"
              >
                +91 98281 15410
              </a>
            </div>
          </div>

          {/* Section 3: Professional Networks */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-bold text-[#ff4d4d] tracking-[0.4em] text-[10px]">SOCIAL RECORD</h4>
            <div className="flex items-center gap-6">
              <a 
                href="https://www.instagram.com/axesarchitects/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-white transition-all cursor-none"
                aria-label="Instagram Network"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://www.linkedin.com/company/axes-architects" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-400 hover:text-white hover:border-white transition-all cursor-none"
                aria-label="LinkedIn Network"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line: Licensing metadata */}
        <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-bold tracking-[0.3em] text-neutral-600 gap-4">
          <p>© 2026 AXES ARCHITECTS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-neutral-400 transition-colors">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-neutral-400 transition-colors">LEGAL STATEMENT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
