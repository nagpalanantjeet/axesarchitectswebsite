import React, { useState, useEffect } from 'react';
import { View, Project } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View, project?: Project, fromBrand?: boolean, scrollHash?: string) => void;
  onToggleDrawer?: () => void;
  isDrawerOpen?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (hashId: string, view: View) => {
    setIsMobileMenuOpen(false);
    if (view === 'team') {
      onNavigate('team');
      return;
    }
    
    if (currentView !== 'home') {
      // Let App.tsx's centralized state mechanism handle deferred scroll after Home mounts
      onNavigate('home', undefined, false, hashId);
    } else {
      // We are already on the Home view, just smooth scroll directly
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

  const navLinks = [
    { label: 'Home', hash: 'top', view: 'home' as View },
    { label: 'Services', hash: 'services', view: 'home' as View },
    { label: 'Projects', hash: 'projects', view: 'home' as View },
    { label: 'People', hash: 'people', view: 'team' as View },
    { label: 'Contact', hash: 'contact', view: 'home' as View },
  ];

  const isLightModeNav = currentView === 'home' && !isScrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[2000] transition-all duration-300 ${
          isScrolled 
            ? 'bg-white border-b border-black py-4' 
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Side: Uploaded SVG Logo link */}
          <div 
            onClick={() => handleLinkClick('top', 'home')}
            className="flex items-center cursor-none hover:opacity-85 transition-opacity w-[240px] md:w-[490px]"
          >
            <Logo className="h-[76px] md:h-[98px] text-black" color={isLightModeNav ? "#ffffff" : "#000000"} strokeWidth={7.5} />
          </div>

          {/* Right Side: Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isLinkActive = 
                (link.view === 'team' && currentView === 'team') || 
                (link.view === 'home' && currentView === 'home' && link.hash === 'top');

              return (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.hash, link.view)}
                  className={`relative text-[11px] font-bold uppercase tracking-[0.25em] bg-transparent border-none py-1 cursor-none group transition-colors duration-200 ${
                    isLightModeNav ? 'text-white/90 hover:text-white' : 'text-black hover:text-[#ff4d4d]'
                  }`}
                >
                  {link.label}
                  {/* Underline Hover Animation */}
                  <span 
                    className={`absolute bottom-0 left-0 h-[1.5px] transition-all duration-300 ${
                      isLightModeNav ? 'bg-white' : 'bg-black'
                    } ${
                      isLinkActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Side Menu Toggle - Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-colors p-2 cursor-none ${
                isLightModeNav ? 'text-white hover:text-[#ff4d4d]' : 'text-black hover:text-[#ff4d4d]'
              }`}
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Smooth Mobile Menu Slide-out/Reveal Animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1900] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Content panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-[80vw] sm:w-[50vw] bg-white z-[1950] border-l border-neutral-100 flex flex-col pt-24 px-10 shadow-2xl md:hidden"
            >
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.hash, link.view)}
                    className="text-left py-2 text-[12px] font-bold tracking-[0.3em] uppercase transition-all text-black hover:text-[#ff4d4d] hover:translate-x-2"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>

              <div className="mt-auto pb-12 flex flex-col gap-4 border-t border-neutral-100 pt-6">
                <p className="text-[10px] font-medium tracking-[0.2em] text-[#000000] leading-loose">
                  AXES ARCHITECTS
                </p>
                <p className="text-[9px] font-medium tracking-widest text-[#bdbdbd] lowercase">
                  architectsaxes@gmail.com
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
