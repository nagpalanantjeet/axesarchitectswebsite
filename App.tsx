import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { View, Project } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);

  const navigateTo = (view: View, project?: Project, fromBrand: boolean = false, scrollTarget?: string) => {
    if (project) {
      setSelectedProject(project);
    }
    
    setCurrentView(view);
    
    if (scrollTarget) {
      setPendingScrollTarget(scrollTarget);
    } else {
      setPendingScrollTarget(null);
      // In case of navigating from brand or normal, ensure smooth scroll resetting
      if (fromBrand) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    }
  };

  // Centralized scroll handler when switching back to home view from team or details
  useEffect(() => {
    if (currentView === 'home' && pendingScrollTarget) {
      let attempts = 0;
      const scrollInterval = setInterval(() => {
        const el = document.getElementById(pendingScrollTarget);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          clearInterval(scrollInterval);
          setPendingScrollTarget(null);
        } else {
          attempts++;
          if (attempts > 12) { // Allow up to 1.2s of DOM mounting
            clearInterval(scrollInterval);
            setPendingScrollTarget(null);
          }
        }
      }, 100);
      return () => clearInterval(scrollInterval);
    }
  }, [currentView, pendingScrollTarget]);

  const handleExploreProjects = () => {
    navigateTo('home', undefined, false, 'projects');
  };

  const handleExploreTeam = () => {
    navigateTo('team');
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-white text-black cursor-none">
      
      {/* Custom signature pointer */}
      <CustomCursor />

      {/* Modern sticky BIG-inspired header */}
      <Navbar 
        currentView={currentView} 
        onNavigate={navigateTo} 
      />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          
          {currentView === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Cinematic Fullscreen background hero */}
              <Hero 
                onExploreProjects={handleExploreProjects} 
                onExploreTeam={handleExploreTeam} 
              />
              
              {/* Minimal architectural services catalog */}
              <ServicesSection />
              
              {/* Professional portfolio grids with masonry dynamics */}
              <ProjectGrid onProjectClick={(p) => navigateTo('project-detail', p)} />
              
              {/* Dynamic EmailJS contact center */}
              <ContactSection />
            </motion.div>
          )}

          {currentView === 'project-detail' && selectedProject && (
            <motion.div
              key={`detail-${selectedProject.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <ProjectDetail 
                project={selectedProject} 
                onBack={() => navigateTo('home', undefined, false, 'projects')} 
              />
            </motion.div>
          )}

          {currentView === 'team' && (
            <motion.div 
              key="team" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-[1600px] mx-auto px-6 md:px-12 py-32"
            >
              <TeamSection />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* Minimal BIG-style monochrome footer */}
      <Footer currentView={currentView} onNavigate={(v, p, b, s) => navigateTo(v, p, b, s)} />
    </div>
  );
};

export default App;
