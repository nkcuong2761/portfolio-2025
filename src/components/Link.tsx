import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { Text } from '../Text.tsx';

type ThemeName = keyof typeof themes;

interface StyledLinkProps {
  label: string;
  currentTheme?: ThemeName;
}

const StyledLink = styled.text<StyledLinkProps>`
  // Base styles
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  // Default state
  color: ${(p) => themes[p.currentTheme ?? 'zimaBlue'].textIcon.accent.primary};

  // Hover state
  &:hover {
    color: ${(p) => themes[p.currentTheme ?? 'zimaBlue'].textIcon.accent.primary};
    text-decoration: underline;
  }

  &:active {
    color: ${(p) => themes[p.currentTheme ?? 'zimaBlue'].textIcon.accent.hover};
  }
`;

export const Link: React.FC<StyledLinkProps> = ({
  label,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <StyledLink
      label={label}
      currentTheme={theme}
      {...props}
    >
      <Text variant={'figmaSubtitleSmRegular'}>
        {label}
      </Text>
    </StyledLink>
  );
};

export default Link;