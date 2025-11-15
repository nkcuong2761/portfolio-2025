import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { usePage } from '../contexts/PageContext.tsx';
import { LayoutVertical } from '../components/LayoutVertical.tsx';
import { LayoutHorizontal } from '../components/LayoutHorizontal.tsx';
import { Text } from '../Text.tsx';
import headshotImg from '../assets/images/headshot.png';
import tcbLogoImg from '../assets/images/tcb-logo.png';
import techcombankDSImg from '../assets/images/tcb-ds.png';
import foreignCurrencyImg from '../assets/images/fcy-payroll.png';
import goodhoodImg from '../assets/images/gh-mockup.png';

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const theming = themes[theme];
  const { isCollapsed } = useCollapse();
  const { setCurrentPage } = usePage();

  return (
    <LayoutVertical
      width='100%'
      height='100vh'
      padding='92px 48px'
      gap='156px'
      alignItems='flex-start'
      alignSelf='stretch'
      style={{
        flex: 1,
        zIndex: 0,
        overflow: 'auto',
        marginRight: isCollapsed ? '0px' : '224px',
        transition: 'margin-right 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', /* ease-out */
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

      {/* Projects section */}
      <LayoutVertical
        alignSelf='stretch'
        gap='8px'>
        <Text
          variant='figmaSubtitleSmRegular'
          color={theming.textIcon.neutral.tertiary}>
          Projects
        </Text>
        
        <LayoutVertical
          alignSelf='stretch'
          gap='32px'>
          
          {/* First Project - Full Width - Techcombank Design System */}
          <LayoutVertical
            alignSelf='stretch'
            onClick={() => setCurrentPage('Techcombank Design System')}
            style={{
              borderRadius: '12px',
              border: `1px solid ${theming.stroke.neutral.border}`,
              overflow: 'hidden',
              height: '480px',
              cursor: 'pointer',
            }}>
            {/* Project Image Container */}
            <LayoutHorizontal
            backgroundColor={theming.bg.neutral.secondary}
            alignSelf='stretch'
            style={{overflow: 'hidden', position: 'relative', flex: 1}}>
              <img 
              src={techcombankDSImg} 
              alt="Techcombank Design System" 
              onError={(e) => {
                console.log('Image failed to load:', e);
                e.currentTarget.style.backgroundColor = '#f0f0f0';
              }}
              onLoad={(e) => {
                console.log('Image loaded successfully');
              }}
              style={{
                width: '783px',
                objectFit: 'cover',
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }} />
            </LayoutHorizontal>
            {/* Project Info */}
            <LayoutVertical
              gap='4px'
              padding='24px'
              alignItems='flex-start'>
              <Text
                variant='mainHeadingMd'
                color={theming.textIcon.neutral.primary}>
                Techcombank Design system
              </Text>
              <Text
                variant='mainBodyMdRegular'
                color={theming.textIcon.neutral.secondary}>
                A unified visual language for all banking platforms—built to scale, governed with precision
              </Text>
            </LayoutVertical>
          </LayoutVertical>

          {/* Two Projects Side by Side */}
          <LayoutHorizontal
            alignSelf='stretch'
            gap='32px'
            alignItems='center'>
            
            {/* Second Project - Foreign Currency Payroll */}
            <LayoutVertical
              onClick={() => setCurrentPage('Foreign Currency Payroll')}
              style={{
                flex: 1,
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
                height: '480px',
                cursor: 'pointer',
              }}>
              {/* Project Image Container */}
              <LayoutHorizontal
                backgroundColor={theming.bg.neutral.secondary}
                alignSelf='stretch'
                style={{overflow: 'hidden', position: 'relative', flex: 1}}>
                <img 
                src={foreignCurrencyImg} 
                alt="Foreign Currency Payroll" 
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0px 85px 78px 0px rgba(39,39,39,0.03), 0px 25.625px 23.515px 0px rgba(39,39,39,0.04), 0px 10.643px 9.767px 0px rgba(39,39,39,0.05), 0px 3.849px 3.532px 0px rgba(39,39,39,0.08)',
                  position: 'absolute',
                  right: '-10%',
                  top: '10%',
                }} />
              </LayoutHorizontal>
              {/* Project Info */}
              <LayoutVertical
                gap='4px'
                padding='24px'
                alignItems='flex-start'>
                <Text
                  variant='mainHeadingMd'
                  color={theming.textIcon.neutral.primary}>
                  Foreign currency payroll
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  From data visualization to prototyping, I help ship the biggest update the team has ever released in 2 years
                </Text>
              </LayoutVertical>
            </LayoutVertical>

            {/* Third Project - GoodHood.SG */}
            <LayoutVertical
              onClick={() => setCurrentPage('GoodHood.SG')}
              style={{
                flex: 1,
                borderRadius: '12px',
                border: `1px solid ${theming.stroke.neutral.border}`,
                overflow: 'hidden',
                height: '480px',
                cursor: 'pointer',
              }}>
              {/* Project Image Container */}
              <LayoutHorizontal
                backgroundColor={theming.bg.neutral.secondary}
                alignSelf='stretch'
                style={{overflow: 'hidden', position: 'relative', flex: 1}}>
                <img 
                src={goodhoodImg} 
                alt="GoodHood.SG" 
                style={{
                  width: '170%',
                  objectFit: 'cover',
                  borderRadius: '8px',
                  boxShadow: '0px 85px 78px 0px rgba(39,39,39,0.03), 0px 25.625px 23.515px 0px rgba(39,39,39,0.04), 0px 10.643px 9.767px 0px rgba(39,39,39,0.05), 0px 3.849px 3.532px 0px rgba(39,39,39,0.08)',
                  position: 'absolute',
                  left: '-50%',
                  top: '-20%',
                  transform: 'rotate(20deg)',
                }} />
              </LayoutHorizontal>
              {/* Project Info */}
              <LayoutVertical
                gap='4px'
                padding='24px'
                alignItems='flex-start'>
                <Text
                  variant='mainHeadingMd'
                  color={theming.textIcon.neutral.primary}>
                  GoodHood.SG
                </Text>
                <Text
                  variant='mainBodyMdRegular'
                  color={theming.textIcon.neutral.secondary}>
                  From data visualization to prototyping, I help ship the biggest update the team has ever released in 2 years
                </Text>
              </LayoutVertical>
            </LayoutVertical>

          </LayoutHorizontal>
        </LayoutVertical>
      </LayoutVertical>
      
    </LayoutVertical>
  );
};