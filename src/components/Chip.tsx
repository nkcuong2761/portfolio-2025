import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { Text } from '../Text.tsx';
import { useTheme } from '../ThemeContext.tsx';

interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  initialActive?: boolean;
  label: string;
}

interface StyledChipProps {
  isActive?: boolean;
  label: string;
  currentTheme: keyof typeof themes;
}
const StyledChip = styled.button<StyledChipProps>`
  appearance: none;
  background: transparent;
  border: none;
  padding: 4px 6px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 100ms ease, color 100ms ease;

  /* colors per spec */
  color: ${(p) =>
    p.isActive
      ? themes[p.currentTheme].textIcon.neutral.primary
      : themes[p.currentTheme].textIcon.neutral.secondary};
  background-color: ${(p) => (p.isActive ? themes[p.currentTheme].bg.neutral.hover : 'transparent')};

  &:hover {
    background-color: ${(p) => themes[p.currentTheme].bg.neutral.hover};
    /* hover text color stays neutral.secondary per spec (unless active) */
    color: ${(p) =>
      p.isActive ? themes[p.currentTheme].textIcon.neutral.primary : themes[p.currentTheme].textIcon.neutral.secondary};
  }

  &:focus {
    outline: none;
  }
`;

export const Chip: React.FC<ChipProps> = ({ label, initialActive = false, onClick, ...props }) => {
  const { theme } = useTheme();
  const [isActive, setIsActive] = useState<boolean>(initialActive);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsActive((s) => !s);
    if (onClick) onClick(e);
  };

  return (
    <StyledChip
      type="button"
      label={label}
      isActive={isActive}
      currentTheme={theme}
      onClick={handleClick}
      {...props}
    >
      <Text variant={isActive ? 'figmaSubtitleSmMedium' : 'figmaSubtitleSmMedium'}>
        {label}
      </Text>
    </StyledChip>
  );
};

export default Chip;