import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { Text } from '../Text.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface LayerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  label: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

interface StyledLayerProps {
  isActive?: boolean;
  label: string;
  currentTheme: keyof typeof themes;
}

const StyledLayer = styled.button<StyledLayerProps>`
  appearance: none;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border: none;
  padding: 8px 8px;
  border-radius: 4px;
  align-self: stretch;
  cursor: pointer;
  transition: background-color 100ms ease, color 100ms ease;

  /* colors per spec */
  color: ${(p) => themes[p.currentTheme].textIcon.neutral.primary};
  background-color: ${(p) => (p.isActive ? 
    themes[p.currentTheme].bg.neutral.hover : 
    'transparent')};

  &:hover {
    background-color: ${(p) => (themes[p.currentTheme].bg.neutral.hover)};
  }

  &:focus {
    outline: none;
  }
`;

export const DropdownItem: React.FC<LayerProps> = ({ label, icon: Icon, isActive, onClick, ...props }) => {
  const { theme } = useTheme();

  return (
    <StyledLayer
      type="button"
      label={label}
      isActive={isActive}
      currentTheme={theme}
      onClick={onClick}
      {...props}
    >
      {Icon && (
        <Icon
          width={16}
          height={12}
        />
      )}
      <Text
      variant='figmaSubtitleSmRegular'
      color={themes[theme].textIcon.neutral.primary}>
        {label}
      </Text>
    </StyledLayer>
  );
};

export default DropdownItem;