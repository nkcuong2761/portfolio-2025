import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { Text } from '../Text.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import {ReactComponent as ArrowSquareOut} from '../assets/icons/arrow-square-out.svg';

interface ComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  link: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface StyledProps {
  label: string;
  link: string;
  currentTheme: keyof typeof themes;
}

interface ArrowIconProps {
  currentTheme: keyof typeof themes;
}

const StyledLayer = styled.button<StyledProps>`
  appearance: none;
  background: transparent;
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

  &:hover {
    background-color: ${(p) => themes[p.currentTheme].bg.neutral.hover};
  }

  &:focus {
    outline: none;
  }
`;

const ArrowIcon = styled(ArrowSquareOut)<ArrowIconProps>`
  opacity: 0;
  transition: opacity 150ms ease;

  ${StyledLayer}:hover & {
    opacity: 1;
  }
`

export const Social: React.FC<ComponentProps> = ({ label, link, icon: Icon, onClick, ...props }) => {
  const { theme } = useTheme();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    // Open the link in a new tab
    window.open(link, '_blank', 'noopener,noreferrer');
    if (onClick) onClick(e);
  };

  return (
    <StyledLayer
      type="button"
      label={label}
      link={link}
      currentTheme={theme}
      onClick={handleClick}
      {...props}
    >
      {Icon && (
        <Icon
          width={16}
          height={16}
          fill={themes[theme].textIcon.neutral.primary}
        />
      )}
      <Text
      variant='figmaSubtitleSmRegular'
      color={themes[theme].textIcon.neutral.primary}
      style={{flex: '1 0 0'}}>
        {label}
      </Text>
      <ArrowIcon
      width={16}
      height={16}
      currentTheme={theme}
      fill={themes[theme].textIcon.neutral.primary} />
    </StyledLayer>
  );
};

export default Social;