
import React from 'react';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  color?: string;
  strokeWidth?: number;
}

const Logo: React.FC<LogoProps> = ({ 
  className = "h-12", 
  showTagline = false, 
  color = "currentColor",
}) => {
  // Determine filter based on color - Black or White
  const isBlack = color === 'black' || color === '#000000' || color === '#111111';
  const filterStyle = isBlack ? 'brightness(0)' : 'brightness(0) invert(1)';

  const containerClasses = `flex flex-col ${
    className.includes('items-') ? '' : 'items-center'
  } ${
    className.includes('justify-') ? '' : 'justify-center'
  } ${className}`;

  return (
    <div className={containerClasses}>
      <img 
        src="https://i.ibb.co/0VVhVt0v/LOGO-AXES-NEW.png" 
        alt="AXES" 
        style={{ filter: filterStyle }}
        className="max-h-full max-w-full object-contain transition-all duration-300"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Logo;
