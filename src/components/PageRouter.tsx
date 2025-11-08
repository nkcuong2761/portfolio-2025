// Create components/PageRouter.tsx
import React from 'react';
import { usePage } from '../contexts/PageContext.tsx';
import { Home } from '../pages/Home.tsx';
import { About } from '../pages/About.tsx';
import { Resume } from '../pages/Resume.tsx';

export const PageRouter: React.FC = () => {
  const { currentPage } = usePage();

  switch (currentPage) {
    case 'Home':
      return <Home />;
    case 'About me':
      return <About />;
    case 'Resume':
      return <Resume />;
    default:
      return <Home />;
  }
};

export default PageRouter;