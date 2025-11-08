import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { Text } from '../Text.tsx';
import { useTheme } from '../ThemeContext.tsx';

interface PageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  initialActive?: boolean;
  label: string;
}

interface StyledPageProps {
  isActive?: boolean;
  label: string;
  currentTheme: keyof typeof themes;
}

const StyledChip = styled.button<StyledPageProps>`
  appearance: none;
  background: transparent;
  display: flex;
  border: none;
  padding: 4px 6px;
  border-radius: 4px;
  align-self: stretch;
  cursor: pointer;
  transition: background-color 100ms ease, color 100ms ease;

  /* colors per spec */
  color: ${(p) => themes[p.currentTheme].textIcon.neutral.primary};
  background-color: ${(p) => (p.isActive ? themes[p.currentTheme].bg.neutral.hover : 'transparent')};

  &:hover {
    background-color: ${(p) => themes[p.currentTheme].bg.neutral.hover};
    color: ${(p) => themes[p.currentTheme].textIcon.neutral.primary};
  }

  &:focus {
    outline: none;
  }
`;

export const Page: React.FC<PageProps> = ({ label, initialActive = false, onClick, ...props }) => {
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
      <Text variant={isActive ? 'figmaSubtitleSmMedium' : 'figmaSubtitleSmRegular'}>
        {label}
      </Text>
    </StyledChip>
  );
};

export default Page;