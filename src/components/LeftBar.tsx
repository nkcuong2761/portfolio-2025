import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { usePage } from '../contexts/PageContext.tsx';
import { Text } from '../Text.tsx';
import { ReactComponent as FigmaLogo } from '../assets/icons/figma-logo.svg';
import { ReactComponent as Frame } from '../assets/icons/frame.svg';
import { LayoutVertical } from './LayoutVertical.tsx';
import { LayoutHorizontal } from './LayoutHorizontal.tsx';
import Divider from './Divider.tsx';
import Chip from './Chip.tsx';
import Page from './ItemPage.tsx';
import ItemLayer from './ItemLayer.tsx';
import { ThemeSwitcher } from './ThemeSwitcher.tsx';

import resumeZimaBlue from '../assets/resume/kimcuong-resume-zima-blue.pdf';
import resumeDuolingo from '../assets/resume/kimcuong-resume-duolingo.pdf';
import resumeGoogle from '../assets/resume/kimcuong-resume-google.pdf';
import resumeSerikaDark from '../assets/resume/kimcuong-resume-serika-dark.pdf';
import resumeRosePine from '../assets/resume/kimcuong-resume-rose-pine.pdf';
import resumeTerrazzo from '../assets/resume/kimcuong-resume-terrazzo.pdf';
import resumePaleNimbus from '../assets/resume/kimcuong-resume-pale-nimbus.pdf';
import resumeTerra from '../assets/resume/kimcuong-resume-terra.pdf';

const resumeMap: Record<string, string> = {
  zimaBlue: resumeZimaBlue,
  duolingo: resumeDuolingo,
  google: resumeGoogle,
  serikaDark: resumeSerikaDark,
  rosePine: resumeRosePine,
  terrazzo: resumeTerrazzo,
  paleNimbus: resumePaleNimbus,
  terra: resumeTerra
};
export const LeftBar: React.FC = () => {
  const { theme } = useTheme();
  const { layers, activeLayer, setTargetLayer } = usePage();
  const theming = themes[theme];

  return (
    <LayoutVertical
      padding='16px 0'
      width='224px'
      height='100vh'
      gap='8px'
      backgroundColor={theming.bg.page.lighter}
      style={{
        borderRight: '1px solid ' + theming.stroke.neutral.divider,
        zIndex: 10,
        flexShrink: 0,
      }}>

      {/* Sidebar Header */}
      <LayoutVertical
        padding='0 12px 4px 12px'
        gap='12px'
        alignSelf='stretch'>
        <LayoutHorizontal
          justifyContent='space-between'
          alignItems='center'
          alignSelf='stretch'>
          <FigmaLogo
            width={16}
            height={16}
            stroke={theming.textIcon.neutral.primary}
            style={{ flexShrink: 0 }} />
          <ThemeSwitcher initialActive={false} />
        </LayoutHorizontal>
        <Text
          variant='figmaBodyMdEmphasize'
          color={theming.textIcon.neutral.primary}>
          Kim's portfolio
        </Text>
        <LayoutHorizontal
          gap='4px'>
          <Text
            variant='figmaSubtitleSmMedium'
            color={theming.textIcon.neutral.secondary}>
            Draft
          </Text>
          <LayoutVertical
            backgroundColor={theming.bg.accent.tertiary}
            padding='1px 3px'
            style={{ borderRadius: '4px' }}>
            <Text
              variant='figmaSubtitleSmMedium'
              color={theming.textIcon.accent.primary}>
              Free
            </Text>
          </LayoutVertical>
        </LayoutHorizontal>
      </LayoutVertical>

      <Divider />

      {/* Chips group */}
      <LayoutHorizontal
        padding='0 8px'
        gap='4px'
        alignSelf='stretch'
      >
        <Chip label='File' initialActive />
        <Chip label='Assets' />
      </LayoutHorizontal>

      <Divider />

      {/* Pages */}
      <LayoutVertical
        padding='4px 8px 10px 8px'
        gap='12px'
        alignSelf='stretch'
      >
        <LayoutHorizontal
          padding='0 6px'>
          <Text
            variant='figmaSubtitleSmEmphasize'
            color={theming.textIcon.neutral.primary}>
            Pages
          </Text>
        </LayoutHorizontal>
        <LayoutVertical
          gap='8px'
          alignSelf='stretch'>
          <Page label='Home' path='/home' />
          <Page label='Techcombank Design System' isProject={true} path='/tcbds' />
          <Page label='Batch payment' isProject={true} path='/batch-payment' />
          <Page label='GoodHood.SG' isProject={true} path='/goodhood' />
          {/* <Page label='About me' path='/about-me' /> */}
          <Page
            label='Resume↗'
            onClick={(e) => {
              e.preventDefault();
              window.open(resumeMap[theme], '_blank');
            }}
          />
        </LayoutVertical>
        {/* <Message 
        description='All 3 free pages used.' 
        link='Get unlimited pages & more'/> */}
      </LayoutVertical>

      <Divider />

      {/* Layers */}
      <LayoutVertical
        padding='4px 8px 10px 8px'
        gap='12px'
        alignSelf='stretch'>
        <LayoutHorizontal
          padding='0 6px'>
          <Text
            variant='figmaSubtitleSmEmphasize'
            color={theming.textIcon.neutral.primary}>
            Layers
          </Text>
        </LayoutHorizontal>
        <LayoutVertical
          gap='8px'
          alignSelf='stretch'>

          {layers.length > 0 ? (
            layers.map((layer, index) => (
              <ItemLayer
                key={index}
                icon={Frame}
                label={layer}
                isActive={activeLayer === layer}
                onClick={() => setTargetLayer(layer)}
              />
            ))
          ) : (
            <>
              <ItemLayer icon={Frame} label='Page' initialActive />
              <ItemLayer icon={Frame} label='Layer' />
            </>
          )}
        </LayoutVertical>
      </LayoutVertical>

    </LayoutVertical>
  );
}