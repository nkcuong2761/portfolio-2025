import React, { useState } from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { Text } from '../Text.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface LayerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  initialActive?: boolean;
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
  gap: 6px;
  border: none;
  padding: 4px 6px;
  border-radius: 4px;
  align-self: stretch;
  cursor: pointer;
  transition: background-color 100ms ease, color 100ms ease;

  /* colors per spec */
  color: ${(p) => themes[p.currentTheme].textIcon.neutral.primary};
  background-color: ${(p) => (p.isActive ?
    themes[p.currentTheme].bg.accent.secondary :
    'transparent')};

  &:hover {
    background-color: ${(p) => (p.isActive ?
    themes[p.currentTheme].bg.accent.secondary :
    themes[p.currentTheme].bg.neutral.hover)};
    color: ${(p) => themes[p.currentTheme].textIcon.neutral.primary};
  }

  &:focus {
    outline: none;
  }
`;

export const ItemLayer: React.FC<LayerProps & { isActive?: boolean }> = ({ label, icon: Icon, initialActive = false, isActive: controlledIsActive, onClick, ...props }) => {
  const { theme } = useTheme();
  const [internalIsActive, setInternalIsActive] = useState<boolean>(initialActive);

  const isActive = controlledIsActive !== undefined ? controlledIsActive : internalIsActive;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (controlledIsActive === undefined) {
      setInternalIsActive((s) => !s);
    }
    if (onClick) onClick(e);
  };

  return (
    <StyledLayer
      type="button"
      label={label}
      isActive={isActive}
      currentTheme={theme}
      onClick={handleClick}
      {...props}
    >
      {Icon && (
        <Icon
          width={8}
          height={8}
          fill={isActive ? themes[theme].textIcon.neutral.primary : themes[theme].textIcon.neutral.tertiary}
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

export default ItemLayer;