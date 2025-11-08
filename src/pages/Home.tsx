import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { LayoutVertical } from '../components/LayoutVertical.tsx';
import { LayoutHorizontal } from '../components/LayoutHorizontal.tsx';
import { Text } from '../Text.tsx';
import headshotImg from '../assets/images/headshot.png';
import tcbLogoImg from '../assets/images/tcb-logo.png';

export const Home: React.FC = () => {
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
          gap='28px'
          padding='60px 40px'
          style={{
            borderRadius: '12px',
            backgroundColor: theming.bg.neutral.secondary,
            border: `1px solid ${theming.stroke.neutral.border}`,
          }}>

          <LayoutHorizontal
            alignItems='center'
            gap='8px'
            style={{
              flexWrap: 'wrap',
              color: theming.textIcon.neutral.primary,
            }}>
            <Text variant='mainDisplayMdRegular'>Hey – I'm</Text>
            <img src={headshotImg} alt="my headshot" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
            <Text variant='mainDisplayMdRegular'>Kim Cương, </Text>
            <Text variant='mainDisplayMdRegular'>a senior </Text>
            <Text variant='mainDisplayMdRegular'>product </Text>
            <Text variant='mainDisplayMdRegular'>designer </Text>
            <Text variant='mainDisplayMdRegular'>focused on</Text>
            <Text variant='mainDisplayMdRegular'>building </Text>
            <Text variant='mainDisplayMdRegular'>scalable </Text>
            <Text variant='mainDisplayMdRegular' color={theming.textIcon.accent.primary} style={{textDecoration: 'underline'}}>design systems.</Text>
          </LayoutHorizontal>
          <LayoutHorizontal
            alignItems='center'
            gap='8px'
            style={{
              flexWrap: 'wrap',
              color: theming.textIcon.neutral.primary,
            }}>
            <Text variant='mainDisplayMdRegular'>Right now, </Text>
            <Text variant='mainDisplayMdRegular'>I'm designing</Text>
            <Text variant='mainDisplayMdRegular'>store </Text>
            <Text variant='mainDisplayMdRegular'>management </Text>
            <Text variant='mainDisplayMdRegular'>solution </Text>
            <Text variant='mainDisplayMdRegular'>for </Text>
            <Text variant='mainDisplayMdRegular'>merchant </Text>
            <Text variant='mainDisplayMdRegular'>users </Text>
            <Text variant='mainDisplayMdRegular'>at </Text>
            <img src={tcbLogoImg} alt="Techcombank" style={{ width: '36px', height: '36px', borderRadius: '8px' }} />
            <Text variant='mainDisplayMdRegular'>Techcombank. </Text>
            <Text variant='mainDisplayMdRegular'>Before that, </Text>
            <Text variant='mainDisplayMdRegular'>I crafted </Text>
            <Text variant='mainDisplayMdRegular'>AI-driven </Text>
            <Text variant='mainDisplayMdRegular'>experience </Text>
            <Text variant='mainDisplayMdRegular'>relationship </Text>
            <Text variant='mainDisplayMdRegular'>managers </Text>
            <Text variant='mainDisplayMdRegular'>and </Text>
            <Text variant='mainDisplayMdRegular'>banking </Text>
            <Text variant='mainDisplayMdRegular'>solutions </Text>
            <Text variant='mainDisplayMdRegular'>for </Text>
            <Text variant='mainDisplayMdRegular'>corporate </Text>
            <Text variant='mainDisplayMdRegular'>banking </Text>
            <Text variant='mainDisplayMdRegular'>users.</Text>
          </LayoutHorizontal>

        </LayoutVertical>
      </LayoutVertical>
      
    </LayoutVertical>
  );
};