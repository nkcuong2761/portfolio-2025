import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface DividerProps {
  height?: string;
  color?: string;
}

export const Divider: React.FC<DividerProps> = ({
  height = '1px',
  color,
}) => {
  const { theme } = useTheme();

  return (
    <div
    style={{
      height: height, 
      backgroundColor: color || themes[theme].stroke.neutral.divider, 
      alignSelf: 'stretch'}}>
    </div>
  );
};

export default Divider;