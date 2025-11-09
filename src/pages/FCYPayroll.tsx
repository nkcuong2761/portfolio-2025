import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { LayoutVertical } from '../components/LayoutVertical.tsx';
import { Text } from '../Text.tsx';

export const FCYPayroll: React.FC = () => {
  const { theme } = useTheme();
  const theming = themes[theme];
  const { isCollapsed } = useCollapse();

  return (
    <LayoutVertical
      width='100%'
      height='100vh'
      padding='92px 48px'
      gap='92px'
      alignItems='flex-start'
      style={{
        flex: 1,
        zIndex: 0,
        overflow: 'auto',
      }}
    >

      {/* Greeting Section */}
      <LayoutVertical
        alignSelf='stretch'
        gap='8px'>
        <Text
          variant='figmaSubtitleSmRegular'
          color={theming.textIcon.neutral.tertiary}>
          Greetings
        </Text>
        <LayoutVertical
          alignSelf='stretch'
          padding='60px 40px'
          style={{
            borderRadius: '12px',
            backgroundColor: theming.bg.neutral.secondary,
            border: `1px solid ${theming.stroke.neutral.border}`,
          }}>
          <Text
            variant='mainDisplayLg'
            color={theming.textIcon.neutral.primary}>
            FCY Payroll
          </Text>
        </LayoutVertical>
      </LayoutVertical>
      
    </LayoutVertical>
  );
};