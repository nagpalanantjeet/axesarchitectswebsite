import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Users, Briefcase } from 'lucide-react';
import Logo from './Logo';

interface HeroProps {
  onExploreProjects: () => void;
  onExploreTeam: () => void;
}

const Hero: React.FC<HeroProps> = ({ onExploreProjects, onExploreTeam }) => {
  const { scrollY } = useScroll();

  // Fine-tuned parallax scrolling transformations for full viewport composition
  const imageY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 800], [0, -100]);
  const logoScale = useTransform(scrollY, [0, 800], [1, 0.9]);
  const logoY = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black flex items-center justify-center text-white select-none">
      
      {/* Background Hero Image with Slow Cinematic Zoom & Parallax */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.65 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full bg-cover bg-center filter grayscale contrast-115 brightness-90"
          style={{ 
            backgroundImage: `url("https://i.postimg.cc/YCTgsjpm/Chat-GPT-Image-May-20-2026-02-12-22-AM.png")`,
            backgroundPosition: '50% 45%'
          }}
        />
        {/* Editorial vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30 z-[2]" />
      </motion.div>

      {/* Massive SVG Logo Placement - Center of Home Page, Elegant Scale, editorial & minimal */}
      <div className="absolute inset-0 z-[4] flex flex-col items-center justify-center px-8 text-white pointer-events-none">
        <motion.div
          style={{ scale: logoScale, y: logoY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full max-w-[115px] md:max-w-[235px] lg:max-w-[285px] flex flex-col items-center filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
        >
          <Logo color="#ffffff" className="w-full h-auto" />
        </motion.div>
      </div>

      {/* Scroll indicator animation button */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-0 right-0 mx-auto w-full z-10 flex flex-col items-center justify-center gap-3 text-white cursor-none text-center"
        onClick={onExploreProjects}
      >
        <span className="text-[9px] font-black tracking-[0.55em] text-white/95 hover:text-[#ff4d4d] transition-all uppercase block pl-[0.55em]">
          SCROLL TO DISCOVER
        </span>
        <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center bg-black/60 backdrop-blur-md hover:border-[#ff4d4d] hover:text-[#ff4d4d] transition-all">
          <ArrowDown className="w-4 h-4 text-white" />
        </div>
      </motion.div>

      {/* Small white text caption for the photo at the bottom-right of the home page */}
      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-12 z-10 text-[8px] md:text-[9px] font-sans font-medium tracking-[0.25em] text-white/60 uppercase select-none pointer-events-none">
        ATAL INNOVATION CENTER BHARATPUR
      </div>
    </section>
  );
};

export default Hero;
