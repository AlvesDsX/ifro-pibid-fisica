import React from 'react';
import { useAccessibility } from '../contexts/AccessibilityContext';
import { Type, Contrast, Map as MapIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccessibilityBar = () => {
  const { isHighContrast, toggleHighContrast, fontSize, toggleFontSize } = useAccessibility();

  return (
    <div className="bg-background/60 backdrop-blur-md text-foreground py-1.5 border-b border-border/50 text-xs sm:text-sm font-medium z-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 md:gap-6">
          <Link to="/" className="hover:underline opacity-80 hover:opacity-100 flex items-center gap-1.5">
            Ir para o conteúdo
          </Link>
          <Link to="/#menu" className="hover:underline opacity-80 hover:opacity-100 flex items-center gap-1.5">
            Ir para o menu
          </Link>
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <button 
            onClick={toggleFontSize} 
            className="hover:underline opacity-80 hover:opacity-100 flex items-center gap-1.5 transition-opacity"
            aria-label="Aumentar Fonte"
          >
            <Type className="w-3.5 h-3.5" /> 
            {fontSize === 'large' ? 'Fonte Normal' : 'A+ Aumentar Fonte'}
          </button>
          <button 
            onClick={toggleHighContrast} 
            className="hover:underline opacity-80 hover:opacity-100 flex items-center gap-1.5 transition-opacity"
            aria-label="Alto Contraste"
          >
            <Contrast className="w-3.5 h-3.5" />
            {isHighContrast ? 'Contraste Normal' : 'Alto Contraste'}
          </button>
          <Link to="/mapa-do-site" className="hover:underline opacity-80 hover:opacity-100 flex items-center gap-1.5 hidden md:flex">
            <MapIcon className="w-3.5 h-3.5" /> Mapa do Site
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityBar;
