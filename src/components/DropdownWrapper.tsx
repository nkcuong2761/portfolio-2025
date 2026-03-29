import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import DropdownItem from './DropdownItem.tsx';
import { ReactComponent as SerikaDarkIcon } from '../assets/themeIcons/serika-dark.svg';
import { ReactComponent as ZimaBlueIcon } from '../assets/themeIcons/zima-blue.svg';
import { ReactComponent as RosePineIcon } from '../assets/themeIcons/rose-pine.svg';
import { ReactComponent as TerrazzoIcon } from '../assets/themeIcons/terrazzo.svg';
import { ReactComponent as PaleNimbusIcon } from '../assets/themeIcons/pale-nimbus.svg';
import { ReactComponent as TerraIcon } from '../assets/themeIcons/terra.svg';

interface DropdownWrapperProps {
  isOpen: boolean;
  onItemClick: (themeName: string) => void;
}

interface StyledDropdownProps {
  isOpen: boolean;
  currentTheme: keyof typeof themes;
}

const StyledDropdown = styled.div<StyledDropdownProps>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  padding: 4px;
  border-radius: 6px;
  background-color: ${(p) => themes[p.currentTheme].bg.neutral.primary};
  border: 1px solid ${(p) => themes[p.currentTheme].stroke.neutral.divider};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  min-width: 120px;
  z-index: 1000;
  
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transform: ${(p) => (p.isOpen ? 'translateY(0)' : 'translateY(-8px)')};
  pointer-events: ${(p) => (p.isOpen ? 'auto' : 'none')};
  transition: opacity 200ms ease, transform 200ms ease;
`;

export const DropdownWrapper: React.FC<DropdownWrapperProps> = ({ isOpen, onItemClick }) => {
  const { theme, availableThemes, setTheme } = useTheme();

  const handleItemClick = (themeName: string) => {
    setTheme(themeName as keyof typeof themes);
    onItemClick(themeName);
  };

  const formatThemeName = (themeName: string) => {
    // Convert camelCase to space-separated words
    return themeName
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/\s+([A-Z])/g, (match, letter) => ` ${letter.toLowerCase()}`); // Lowercase letters after spaces
  };

  const getThemeIcon = (themeName: string) => {
    const iconMap: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
      serikaDark: SerikaDarkIcon,
      zimaBlue: ZimaBlueIcon,
      rosePine: RosePineIcon,
      terrazzo: TerrazzoIcon,
      paleNimbus: PaleNimbusIcon,
      terra: TerraIcon
    };
    return iconMap[themeName];
  };

  return (
    <StyledDropdown isOpen={isOpen} currentTheme={theme}>
      {availableThemes.map((themeName) => (
        <DropdownItem
          key={themeName}
          label={formatThemeName(themeName)}
          icon={getThemeIcon(themeName)}
          isActive={theme === themeName}
          onClick={() => handleItemClick(themeName)}
        />
      ))}
    </StyledDropdown>
  );
};

export default DropdownWrapper;