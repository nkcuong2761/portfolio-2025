import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../ThemeContext.tsx';
import { Text } from '../Text.tsx';

interface StyledButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  label: string;
  currentTheme: keyof typeof themes;
}

const StyledButton = styled.button<StyledButtonProps>`
  // Base styles
  padding: 8px 10px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  // Default state
  background-color: ${(p) => themes[p.currentTheme].bg.accent.primary};
  color: ${(p) => themes[p.currentTheme].textIcon.accent.onPrimary};

  // Hover state
  &:hover {
    background-color: ${(p) => themes[p.currentTheme].bg.accent.hover};
  }

  // Disabled state
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Button: React.FC<StyledButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  label,
  currentTheme,
  onClick,
  ...props
}) => {
  const { theme } = useTheme();

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <StyledButton
      variant={variant}
      size={size}
      label={label}
      onClick={handleClick}
      currentTheme={theme}
      {...props}
    >
      <Text variant={size === 'small' ? 'figmaBodySmEmphasize' : 'figmaBodyMdEmphasize'}>
        {label}
      </Text>
    </StyledButton>
  );
};

export default Button;