import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { ReactComponent as ArrowLineLeft } from '../assets/icons/arrow-line-left.svg';

interface FloatingButtonProps {
  currentTheme: keyof typeof themes;
  isCollapsed: boolean;
}

const FloatingButton = styled.button<FloatingButtonProps>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: none;
  background-color: ${(p) => themes[p.currentTheme].bg.neutral.secondary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  opacity: ${(p) => p.isCollapsed ? 1 : 0};
  transform: ${(p) => p.isCollapsed ? 'scale(1)' : 'scale(0.8)'};
  pointer-events: ${(p) => p.isCollapsed ? 'auto' : 'none'};
  
  /* Smooth ease-out transitions */
  transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              transform 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Add delay when appearing */
  transition-delay: ${(p) => p.isCollapsed ? '200ms' : '0ms'};

  &:hover {
    background-color: ${(p) => themes[p.currentTheme].bg.neutral.tertiary};
    transition: all 150ms ease-out;
  }

  &:active {
    transform: ${(p) => p.isCollapsed ? 'scale(0.95)' : 'scale(0.75)'};
  }
`;

export const FloatingCollapseButton: React.FC = () => {
  const { theme } = useTheme();
  const { isCollapsed, toggleCollapse } = useCollapse();

  return (
    <FloatingButton
      currentTheme={theme}
      isCollapsed={isCollapsed}
      onClick={toggleCollapse}
    >
      <ArrowLineLeft
        width={16}
        height={16}
        fill={themes[theme].textIcon.neutral.primary}
      />
    </FloatingButton>
  );
};

export default FloatingCollapseButton;