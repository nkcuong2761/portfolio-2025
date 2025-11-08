import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext.tsx';
import { themes } from './assets/colors/alias.ts';
import { CollapseProvider } from './CollapseContext.tsx';
import { LeftBar } from './components/LeftBar.tsx';
import { RightBar } from './components/RightBar.tsx';
import FloatingCollapseButton from './components/FloatingCollapseButton.tsx';

function App() {
  const AppContent = () => {
    const { theme } = useTheme();
    return (
      <div
        style={{
          backgroundColor: themes[theme].bg.page.muted,
          minHeight: '100vh',
          transition: 'background-color 200ms ease',
        }}
      >
        <LeftBar />
        <RightBar />
        <FloatingCollapseButton />
      </div>
    );
  };

  return (
    <ThemeProvider>
      <CollapseProvider>
        <AppContent />
      </CollapseProvider>
    </ThemeProvider>
  );
}

export default App;