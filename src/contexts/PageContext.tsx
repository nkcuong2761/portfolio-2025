// Create PageContext.tsx
import React, { createContext, useContext, useState } from 'react';

type PageName = 'Home' | 'Techcombank Design System' | 'Foreign Currency Payroll' | 'GoodHood.SG' | 'About me' | 'Resume';

type PageContextType = {
  currentPage: PageName;
  setCurrentPage: (page: PageName) => void;
};

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageName>('Home');

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
};

export const usePage = (): PageContextType => {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error('usePage must be used within PageProvider');
  return ctx;
};