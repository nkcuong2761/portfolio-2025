import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { LayoutVertical } from '../components/LayoutVertical.tsx';
import { Text } from '../Text.tsx';

export const TcbDS: React.FC = () => {
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
      alignSelf='stretch'
      style={{
        flex: 1,
        zIndex: 0,
        overflow: 'auto',
        marginRight: isCollapsed ? '0px' : '224px',
        transition: 'margin-right 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94)', /* ease-out */
      }}
    >

    {/* Techcombank Design System Project Page */}

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
          Techcombank Design System
        </Text>
        <Text
          variant='figmaSubtitleMdRegular'
          color={theming.textIcon.neutral.secondary}
          style={{ marginTop: 12, maxWidth: 700, lineHeight: 1.6 }}
        >
          Building a robust, scalable, and cross-platform design system for Techcombank, empowering 30+ product teams to accelerate design and development with universal UI components and guidelines.
        </Text>
      </LayoutVertical>
    </LayoutVertical>

    {/* Content Section */}
    <LayoutVertical
      alignSelf='stretch'
      gap='56px'
    >

      {/* Summary section */}
      <LayoutVertical
        alignSelf='stretch'
        gap='24px'
        style={{
          borderRadius: '12px',
          backgroundColor: theming.bg.neutral.primary,
          border: `1px solid ${theming.stroke.neutral.border}`,
          padding: '40px',
          maxWidth: 1200
        }}
      >
        <Text variant='figmaSubtitleMdMedium' color={theming.textIcon.neutral.primary}>
          About this system
        </Text>
        <Text variant='figmaBodyMdRegular' color={theming.textIcon.neutral.secondary} style={{ maxWidth: 800, lineHeight: 1.65 }}>
          Techcombank DS is a universal design system that powers products used by 15 million+ customers, offering:
          <ul style={{paddingLeft:24, margin:'16px 0', color:theming.textIcon.neutral.secondary}}>
            <li>Reusable and accessible UI React components</li>
            <li>Comprehensive guidelines, tokens, documentation, and templates</li>
            <li>Alignment of designers and developers across Apps, Web, and Enterprise platforms</li>
          </ul>
          <div style={{marginTop:16}}>
            <span style={{fontWeight:600, color:theming.textIcon.neutral.primary}}>My Role:</span> Led a team of 8, defined system architecture, and established best practices for scalable growth.
          </div>
        </Text>
        <LayoutVertical gap='16px' padding='8px 0 0 0' style={{flexWrap:'wrap', flexDirection:'row', display:'flex', alignItems:'center', gap: '32px'}}>
          <Text variant='figmaCaptionMdRegular' color={theming.textIcon.neutral.tertiary}>
            <span style={{fontWeight:600, color:theming.textIcon.neutral.primary}}>Year:</span> 2023-24
          </Text>
          <Text variant='figmaCaptionMdRegular' color={theming.textIcon.neutral.tertiary}>
            <span style={{fontWeight:600, color:theming.textIcon.neutral.primary}}>Team:</span> 4 Designers, 4 Engineers
          </Text>
          <Text variant='figmaCaptionMdRegular' color={theming.textIcon.neutral.tertiary}>
            <span style={{fontWeight:600, color:theming.textIcon.neutral.primary}}>Clients:</span> Techcombank, BCG, McKinsey
          </Text>
        </LayoutVertical>
      </LayoutVertical>

      {/* Three columns: Stats, My Contribution, Key Impact */}
      <LayoutVertical
        alignSelf='stretch'
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '40px',
          flexWrap: 'wrap',
          maxWidth: 1200,
        }}
      >
        {/* Stats */}
        <LayoutVertical
          padding='32px'
          style={{
            flex: 1,
            minWidth: 280,
            borderRadius: 12,
            backgroundColor: theming.bg.neutral.secondary,
            border: `1px solid ${theming.stroke.neutral.border}`,
            justifyContent: 'flex-start',
          }}>
          <Text variant='figmaCaptionMdRegular' color={theming.textIcon.neutral.secondary}>
            Stats
          </Text>
          <LayoutVertical gap='10px' style={{padding:'18px 0 0 0'}}>
            <Text variant='mainDisplayMd' color={theming.textIcon.neutral.primary}>
              80+ React Components
            </Text>
            <Text variant='mainDisplayMd' color={theming.textIcon.neutral.primary}>
              1000+ Figma Assets
            </Text>
            <Text variant='mainDisplayMd' color={theming.textIcon.neutral.primary}>
              15M+ End Users
            </Text>
            <Text variant='mainDisplayMd' color={theming.textIcon.neutral.primary}>
              30+ Product Teams
            </Text>
            <Text variant='mainDisplayMd' color={theming.textIcon.neutral.primary}>
              6x Faster Delivery
            </Text>
          </LayoutVertical>
        </LayoutVertical>

        {/* My Contribution */}
        <LayoutVertical
          padding='32px'
          style={{
            flex: 2,
            minWidth: 320,
            borderRadius: 12,
            backgroundColor: theming.bg.neutral.secondary,
            border: `1px solid ${theming.stroke.neutral.border}`,
            justifyContent: 'flex-start',
          }}>
          <Text variant='figmaCaptionMdRegular' color={theming.textIcon.neutral.secondary}>
            My Contribution
          </Text>
          <LayoutVertical gap='10px' style={{padding:'18px 0 0 0'}}>
            <ul style={{ margin: 0, paddingLeft:20, color:theming.textIcon.neutral.primary }}>
              <li>Established scalable multi-product architecture (web, app, enterprise)</li>
              <li>Defined coding standards, accessibility, tokens, Figma processes</li>
              <li>Drove cross-team adoption with education and enablement</li>
              <li>Collaborated with international consultants and local teams</li>
              <li>Piloted automated docs and dev–design integration</li>
            </ul>
          </LayoutVertical>
        </LayoutVertical>

        {/* Impact */}
        <LayoutVertical
          padding='32px'
          style={{
            flex: 1.5,
            minWidth: 280,
            borderRadius: 12,
            backgroundColor: theming.bg.neutral.primary,
            border: `1px solid ${theming.stroke.neutral.border}`,
            justifyContent: 'flex-start',
          }}>
          <Text variant='figmaCaptionMdRegular' color={theming.textIcon.neutral.secondary}>
            Impact
          </Text>
          <LayoutVertical gap='10px' style={{padding:'18px 0 0 0'}}>
            <ul style={{ margin: 0, paddingLeft:20, color:theming.textIcon.brand.primary }}>
              <li>Accelerated release cycle from 8+ weeks to 2 weeks</li>
              <li>Reduced redundancy and bugs in UI codebase</li>
              <li>Unified product experiences across web and app</li>
              <li>Empowered non-technical teams with DS resources</li>
            </ul>
          </LayoutVertical>
        </LayoutVertical>
      </LayoutVertical>

      {/* Visual Showcase */}
      <LayoutVertical
        alignSelf='stretch'
        gap='18px'
        padding='32px'
        style={{
          borderRadius: '12px',
          backgroundColor: theming.bg.neutral.secondary,
          border: `1px solid ${theming.stroke.neutral.border}`,
          marginTop: 28,
          maxWidth: 1200,
        }}
      >
        <Text variant='figmaSubtitleMdMedium' color={theming.textIcon.neutral.primary}>
          Visual Showcase
        </Text>
        <Text variant='figmaCaptionMdRegular' color={theming.textIcon.neutral.secondary} style={{marginBottom: 18}}>
          Glimpses of cross-platform Figma assets, docs, and live components
        </Text>
        <LayoutVertical gap='0' style={{
          flexDirection: 'row', display: 'flex', flexWrap: 'wrap', gap: '28px'
        }}>
          {/* Replace below srcs with real images/assets as available */}
          <img
            src='https://res.cloudinary.com/cuongnd97/image/upload/v1718106773/tcb-ds-1.png'
            alt='Techcombank DS Figma library'
            style={{
              flex: 1,
              minWidth: 250, maxWidth: 450,
              borderRadius: 8,
              border: `1px solid ${theming.stroke.neutral.border}`,
              boxShadow: '0 2px 18px rgba(0,0,0,0.06)',
              background: theming.bg.neutral.primary,
              objectFit: 'cover'
            }}
          />
          <img
            src='https://res.cloudinary.com/cuongnd97/image/upload/v1718106910/tcb-ds-2.png'
            alt='Techcombank DS React components'
            style={{
              flex: 1,
              minWidth: 250, maxWidth: 450,
              borderRadius: 8,
              border: `1px solid ${theming.stroke.neutral.border}`,
              boxShadow: '0 2px 18px rgba(0,0,0,0.06)',
              objectFit: 'cover'
            }}
          />
          <img
            src='https://res.cloudinary.com/cuongnd97/image/upload/v1718106910/tcb-ds-3.png'
            alt='Techcombank DS documentation'
            style={{
              flex: 1,
              minWidth: 250, maxWidth: 450,
              borderRadius: 8,
              border: `1px solid ${theming.stroke.neutral.border}`,
              boxShadow: '0 2px 18px rgba(0,0,0,0.06)',
              objectFit: 'cover'
            }}
          />
        </LayoutVertical>
      </LayoutVertical>

      {/* Call To Action */}
      <LayoutVertical
        alignSelf='stretch'
        gap='8px'
        padding='36px 0 0 0'
        style={{ alignItems: 'center', maxWidth: 1200 }}
      >
        <Text variant='figmaSubtitleMdMedium' color={theming.textIcon.brand.primary}>
          Interested in large-scale design system work?
        </Text>
        <Text variant='figmaBodyMdRegular' color={theming.textIcon.neutral.secondary}>
          Happy to present or share—reach out for a live demo or expert consult!
        </Text>
      </LayoutVertical>
    </LayoutVertical>
      
    </LayoutVertical>
  );
};