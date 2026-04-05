import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';
import { themes } from '../assets/colors/alias.ts';
import { Text } from '../Text.tsx';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { PageName } from '../contexts/PageContext.tsx';

interface PageProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: PageName;
  path?: string;
  isProject?: boolean;
}

interface StyledPageProps {
  isActive?: boolean;
  label: PageName;
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

export const Page: React.FC<PageProps> = ({ label, path, isProject = false, onClick, ...props }) => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // Simple check if current path matches the link
  const isActive = path ? location.pathname === path : false;

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && path) {
      navigate(path);
    }
  };

  return (
    <StyledChip
      type="button"
      label={label}
      isActive={isActive}
      currentTheme={theme}
      onClick={handleClick}
      style={{
        paddingLeft: isProject ? '20px' : '6px',
      }}
      {...props}
    >
      <Text variant={isActive ? 'figmaSubtitleSmMedium' : 'figmaSubtitleSmRegular'}>
        {isProject ? `↳ ${label}` : label}
      </Text>
    </StyledChip>
  );
};

export default Page;