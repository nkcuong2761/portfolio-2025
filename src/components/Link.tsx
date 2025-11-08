import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../ThemeContext.tsx';
import { Text } from '../Text.tsx';

interface StyledLinkProps {
  label: String;
  currentTheme?: 'light' | 'dark';
}

const StyledLink = styled.text<StyledLinkProps>`
  // Base styles
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  // Default state
  color: ${(p) => themes[p.currentTheme ?? 'dark'].textIcon.accent.primary};

  // Hover state
  &:hover {
    color: ${(p) => themes[p.currentTheme ?? 'dark'].textIcon.accent.primary};
    text-decoration: underline;
  }

  &:active {
    color: ${(p) => themes[p.currentTheme ?? 'dark'].textIcon.accent.hover};
  }
`;

export const Link: React.FC<StyledLinkProps> = ({
  label,
  ...props
}) => {
  const {theme} = useTheme();

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