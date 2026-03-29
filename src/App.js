import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from './contexts/ThemeContext.tsx';
import { themes } from './assets/colors/alias.ts';
import { CollapseProvider } from './contexts/CollapseContext.tsx';
import { PageProvider } from './contexts/PageContext.tsx';
import { LeftBar } from './components/LeftBar.tsx';
import { RightBar } from './components/RightBar.tsx';
import FloatingCollapseButton from './components/FloatingCollapseButton.tsx';
import { LayoutHorizontal } from './components/LayoutHorizontal.tsx';
import { Home } from './pages/Home.tsx';
import { About } from './pages/About.tsx';
import { Resume } from './pages/Resume.tsx';
import { TcbDS } from './pages/TcbDS.tsx';
import { MixBatch } from './pages/MixBatch.tsx';
import { GoodHood } from './pages/GoodHood.tsx';

const AppContent = () => {
  const { theme } = useTheme();
  return (
    <HashRouter>
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
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tcbds" element={<TcbDS />} />
          <Route path="/batch-payment" element={<MixBatch />} />
          <Route path="/goodhood" element={<GoodHood />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <RightBar />
        <FloatingCollapseButton />
      </LayoutHorizontal>
    </HashRouter>
  );
};

function App() {
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