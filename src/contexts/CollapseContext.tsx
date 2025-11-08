// Create CollapseContext.tsx
import React, { createContext, useContext, useState } from 'react';

type CollapseContextType = {
  isCollapsed: boolean;
  toggleCollapse: () => void;
};

const CollapseContext = createContext<CollapseContextType | undefined>(undefined);

export const CollapseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(prev => !prev);

  return (
    <CollapseContext.Provider value={{ isCollapsed, toggleCollapse }}>
      {children}
    </CollapseContext.Provider>
  );
};

export const useCollapse = (): CollapseContextType => {
  const ctx = useContext(CollapseContext);
  if (!ctx) throw new Error('useCollapse must be used within CollapseProvider');
  return ctx;
};