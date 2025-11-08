import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { Text } from '../Text.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { ReactComponent as ArrowLineRight } from '../assets/icons/arrow-line-right.svg';

interface ComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

interface StyledProps {
  label: string;
  currentTheme: keyof typeof themes;
}

const StyledLayer = styled.button<StyledProps>`
  appearance: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: none;
  padding: 12px 12px;
  align-self: stretch;
  cursor: pointer;
  transition: background-color 100ms ease, color 100ms ease;

  /* colors per spec */
  color: ${(p) => themes[p.currentTheme].textIcon.neutral.primary};
  background-color: transparent;

  &:hover {
    background-color: ${(p) => themes[p.currentTheme].bg.neutral.hover};
  }

  &:focus {
    outline: none;
  }
`;

export const Collapse: React.FC<ComponentProps> = ({ label, onClick, ...props }) => {
  const { theme } = useTheme();
  const { toggleCollapse } = useCollapse();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    toggleCollapse();
    if (onClick) onClick(e);
  };

  return (
    <StyledLayer
      type="button"
      label={label}
      currentTheme={theme}
      onClick={handleClick}
      {...props}
    >
      <ArrowLineRight
        width={16}
        height={16}
        fill={themes[theme].textIcon.neutral.primary}
      />
      <Text
        variant='figmaSubtitleSmRegular'
        color={themes[theme].textIcon.neutral.primary}>
        {label}
      </Text>
    </StyledLayer>
  );
};

export default Collapse;