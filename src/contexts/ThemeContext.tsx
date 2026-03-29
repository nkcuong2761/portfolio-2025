import React, { createContext, useContext, useEffect, useState } from 'react';
import { themes } from '../assets/colors/alias.ts';

type ThemeName = keyof typeof themes;
type ThemeContextType = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  availableThemes: ThemeName[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const availableThemes = Object.keys(themes) as ThemeName[];
  const [theme, setTheme] = useState<ThemeName>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null;
    return (saved as ThemeName) || availableThemes[0];
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    const theming = themes[theme];
    document.documentElement.style.setProperty('--selection-bg', theming.bg.accent.secondary);
    document.documentElement.style.setProperty('--selection-color', theming.textIcon.neutral.tertiary);
    document.documentElement.style.setProperty('--a-color', theming.textIcon.accent.primary);
    document.documentElement.style.setProperty('--a-hover-color', theming.textIcon.accent.hover);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextType => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};