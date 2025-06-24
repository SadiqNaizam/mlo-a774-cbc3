import React from 'react';
import { cn } from '@/lib/utils';

interface LeftImageSectionProps {
  className?: string;
}

/**
 * A component representing the left-side image panel for an authentication page layout.
 * It displays a background image and a logo, and is typically hidden on smaller screens.
 */
const LeftImageSection: React.FC<LeftImageSectionProps> = ({ className }) => {
  return (
    <div className={cn("relative hidden h-screen flex-col p-10 text-foreground lg:flex", className)}>
      {/* Background image covering the entire section */}
      <img
        src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=2574&auto=format&fit=crop"
        alt="Abstract background with blue and white shapes"
        className="absolute inset-0 h-full w-full object-cover"
        width={1280}
        height={1920}
      />
      
      {/* Logo positioned at the top-left corner */}
      <div className="relative z-20 flex items-center text-xl font-bold">
        ASCENDION
      </div>
    </div>
  );
};

export default LeftImageSection;
