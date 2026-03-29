import React, { createContext, useContext, useState } from 'react';

export type PageName = 'Home' | 'Techcombank Design System' | 'Batch payment' | 'GoodHood.SG' | 'About me' | 'Resume↗';

type PageContextType = {
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
  layers: string[];
  setLayers: (layers: string[] | ((prev: string[]) => string[])) => void;
  activeLayer: string | null;
  setActiveLayer: (layer: string | null) => void;
  targetLayer: string | null;
  setTargetLayer: (layer: string | null) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageName>('Home');
  const [layers, setLayers] = useState<string[]>([]);
  const [activeLayer, setActiveLayer] = useState<string | null>(null);
  const [targetLayer, setTargetLayer] = useState<string | null>(null);

  // Don't memoize - useState setters are already stable
  // Memoizing with state values as deps causes new object on every state change
  // which makes setters appear as "new" references, triggering infinite loops
  const value = {
    currentPage, setCurrentPage,
    layers, setLayers,
    activeLayer, setActiveLayer,
    targetLayer, setTargetLayer
  };

  return (
    <PageContext.Provider value={value}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = (): PageContextType => {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error('usePage must be used within PageProvider');
  return ctx;
};