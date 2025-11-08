import React from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext.tsx';
import { themes } from './assets/colors/alias.ts';
import { CollapseProvider } from './contexts/CollapseContext.tsx';
import { PageProvider } from './contexts/PageContext.tsx';
import { LeftBar } from './components/LeftBar.tsx';
import { RightBar } from './components/RightBar.tsx';
import FloatingCollapseButton from './components/FloatingCollapseButton.tsx';
import PageRouter from './components/PageRouter.tsx';
import { LayoutHorizontal } from './components/LayoutHorizontal.tsx';

function App() {
  const AppContent = () => {
    const { theme } = useTheme();
    return (
      <LayoutHorizontal
      height='100vh'
      width='100%'
      backgroundColor={themes[theme].bg.page.muted}
      style={{
        transition: 'background-color 200ms ease',
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}>
        <LeftBar />
        <PageRouter />
        <RightBar />
        <FloatingCollapseButton />
      </LayoutHorizontal>
    );
  };

  return (
    <ThemeProvider>
      <CollapseProvider>
        <PageProvider>
          <AppContent />
        </PageProvider>
      </CollapseProvider>
    </ThemeProvider>
  );
}

export default App;