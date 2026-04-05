import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import {ReactComponent as Caret} from '../assets/icons/caret-down.svg';
import {ReactComponent as Palette} from '../assets/icons/palette.svg';
import DropdownWrapper from './DropdownWrapper.tsx';

interface SwitcherProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  initialActive?: boolean;
}

interface StyledSwitcherProps {
  isActive?: boolean;
  currentTheme: keyof typeof themes;
}

interface CaretProps {
  isActive?: boolean;
}

const SwitcherContainer = styled.div`
  position: relative;
`;

const RedDot = styled.div`
  position: absolute;
  top: 2px;
  right: 2px;
  width: 6px;
  height: 6px;
  background-color: #ff3b30;
  border-radius: 50%;
  pointer-events: none;
  z-index: 2;
`;

const StyledSwitcher = styled.button<StyledSwitcherProps>`
  appearance: none;
  border: none;
  padding: 4px 4px;
  border-radius: 4px;
  gap: 4px;
  align-items: center;
  display: flex;
  cursor: pointer;
  transition: background-color 100ms ease, color 100ms ease;

  background-color: ${(p) => p.isActive ? themes[p.currentTheme].bg.neutral.hover : 'transparent'};

  &:hover {
    background-color: ${(p) => themes[p.currentTheme].bg.neutral.hover};
  }

  &:focus {
    outline: none;
  }
`;

const CaretWrapper = styled.div<CaretProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(p) => p.isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 200ms ease;
`;

export const ThemeSwitcher: React.FC<SwitcherProps> = ({ initialActive }) => {
  const [isActive, setIsActive] = useState<boolean>(initialActive ?? false);
  const [showDot, setShowDot] = useState<boolean>(false);
  const { theme } = useTheme();

  useEffect(() => {
    const hasClicked = localStorage.getItem('hasClickedThemeSwitcher');
    if (!hasClicked) {
      setShowDot(true);
    }
  }, []);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setIsActive((s) => !s);
    if (showDot) {
      setShowDot(false);
      localStorage.setItem('hasClickedThemeSwitcher', 'true');
    }
  };

  const handleDropdownItemClick = () => {
    setIsActive(false);
  };

  return (
    <SwitcherContainer>
      <StyledSwitcher
        type="button"
        isActive={isActive}
        currentTheme={theme}
        onClick={handleClick}>
        <Palette 
          width={16}
          height={16}
          fill={isActive ? themes[theme].textIcon.neutral.primary : themes[theme].textIcon.neutral.secondary}/>
        <CaretWrapper isActive={isActive}>
          <Caret 
            width={8}
            height={8}
            fill={isActive ? themes[theme].textIcon.neutral.primary : themes[theme].textIcon.neutral.secondary}/>
        </CaretWrapper>
      </StyledSwitcher>
      {showDot && <RedDot />}
      <DropdownWrapper 
        isOpen={isActive} 
        onItemClick={handleDropdownItemClick} 
      />
    </SwitcherContainer>
  );
}