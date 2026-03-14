import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface DividerProps {
  height?: string;
  width?: string;
  color?: string;
  orientation?: 'horizontal' | 'vertical';
}

export const Divider: React.FC<DividerProps> = ({
  height,
  width,
  color,
  orientation = 'horizontal',
}) => {
  const { theme } = useTheme();

  const style: React.CSSProperties = {
    backgroundColor: color || themes[theme].stroke.neutral.divider,
    alignSelf: 'stretch',
    width: orientation === 'vertical' ? (width || '1px') : (width || 'auto'),
    height: orientation === 'horizontal' ? (height || '1px') : (height || 'auto'),
    minHeight: orientation === 'vertical' ? '100%' : 'auto',
  };

  return <div style={style} />;
};

export default Divider;