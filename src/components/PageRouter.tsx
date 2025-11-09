// Create components/PageRouter.tsx
import React from 'react';
import { usePage } from '../contexts/PageContext.tsx';
import { Home } from '../pages/Home.tsx';
import { About } from '../pages/About.tsx';
import { Resume } from '../pages/Resume.tsx';
import { TcbDS } from '../pages/TcbDS.tsx';
import { FCYPayroll } from '../pages/FCYPayroll.tsx';
import { GoodHood } from '../pages/GoodHood.tsx';

export const PageRouter: React.FC = () => {
  const { currentPage } = usePage();

  switch (currentPage) {
    case 'Home':
      return <Home />;
    case 'Techcombank Design System':
      return <TcbDS />;
    case 'Foreign Currency Payroll':
      return <FCYPayroll />;
    case 'GoodHood.SG':
      return <GoodHood />;
    case 'About me':
      return <About />;
    case 'Resume':
      return <Resume />;
    default:
      return <Home />;
  }
};

export default PageRouter;