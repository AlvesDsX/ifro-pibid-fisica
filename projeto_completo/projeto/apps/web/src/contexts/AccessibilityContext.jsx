import React, { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('normal');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }
  }, [isHighContrast]);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const root = document.documentElement;
    if (fontSize === 'large') {
      root.classList.add('text-large-mode');
    } else {
      root.classList.remove('text-large-mode');
    }
  }, [fontSize]);

  const toggleHighContrast = () => setIsHighContrast(prev => !prev);
  const toggleFontSize = () => setFontSize(prev => prev === 'normal' ? 'large' : 'normal');
  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return (
    <AccessibilityContext.Provider value={{ isHighContrast, toggleHighContrast, fontSize, toggleFontSize, isDarkMode, toggleDarkMode }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
