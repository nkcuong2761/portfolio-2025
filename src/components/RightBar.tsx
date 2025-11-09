import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { useCollapse } from '../contexts/CollapseContext.tsx';
import { Text } from '../Text.tsx';
import {ReactComponent as Logo} from '../assets/icons/cuong-logo.svg';
import {ReactComponent as IconChat} from '../assets/icons/chat.svg';
import {ReactComponent as Linkedin} from '../assets/icons/linkedin-logo.svg';
import {ReactComponent as Medium} from '../assets/icons/medium-logo.svg';
import {ReactComponent as Dribbble} from '../assets/icons/dribbble-logo.svg';
import { LayoutVertical } from './LayoutVertical.tsx';
import { LayoutHorizontal } from './LayoutHorizontal.tsx';
import Divider from './Divider.tsx';
import Button from './Button.tsx';
import ItemSocials from './ItemSocials.tsx';
import ItemCollapse from './ItemCollapse.tsx';

interface RightBarContainerProps {
  isCollapsed: boolean;
  currentTheme: keyof typeof themes;
}

const RightBarContainer = styled.div<RightBarContainerProps>`
  width: 224px;
  height: 100vh;
  background-color: ${(p) => themes[p.currentTheme].bg.page.lighter};
  border-left: 1px solid ${(p) => themes[p.currentTheme].stroke.neutral.divider};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  flex-shrink: 0;
  
  transform: translateX(${(p) => p.isCollapsed ? '100%' : '0'});
  transition: transform 400ms cubic-bezier(0.25, 0.46, 0.45, 0.94); /* ease-out */
`;

export const RightBar: React.FC = () => {
  const { theme } = useTheme();
  const theming = themes[theme];
  const { isCollapsed } = useCollapse();

  return (
    <RightBarContainer isCollapsed={isCollapsed} currentTheme={theme}>
      <LayoutVertical
        width='224px'
        height='100vh'
        gap='0px'
        padding='0px'>

        {/* Top bar */}
        <LayoutVertical
        padding='12px 12px'
        gap='12px'
        alignSelf='stretch'>
          <LayoutHorizontal
          alignSelf='stretch'
          alignItems='center'
          justifyContent='space-between'>
            <Logo width={24} height={24}/>
            <Button size='small' label='Share' currentTheme={theme} />
          </LayoutHorizontal>

          <LayoutHorizontal
            alignItems='center'
            alignSelf='stretch'
            justifyContent='space-between'>
            <Text 
            variant='figmaSubtitleSmEmphasize' 
            color={theming.textIcon.neutral.primary}>Comments</Text>
            <Text 
            variant='figmaSubtitleSmMedium' 
            color={theming.textIcon.neutral.primary}>100%</Text>
          </LayoutHorizontal>
        </LayoutVertical>

        <Divider />

        {/* Comments */}
        <LayoutHorizontal
        padding='12px 12px'
        gap='8px'
        alignSelf='stretch'
        style={{flex: '1 0 0'}}>
          <IconChat 
          width={16} 
          height={16} 
          stroke={theming.textIcon.neutral.primary} 
          style={{ flexShrink: 0 }}/>
          <Text 
          variant='figmaSubtitleSmRegular' 
          color={theming.textIcon.neutral.primary}>
            Give feedback, ask a question, or just leave a note of appreciation. Send an email to <span><a href="mailto:nkcuong2761@gmail.com" style={{color: theming.textIcon.neutral.primary}}>nkcuong2761@gmail.com</a></span> to leave a comment (or to hire me).
          </Text>
        </LayoutHorizontal>

        <Divider />

        {/* Social Links */}
        <LayoutVertical
        alignSelf='stretch'>
          <ItemSocials
          label='LinkedIn'
          link='https://www.linkedin.com/in/cuongnguyen27/'
          icon={Linkedin} />
          <ItemSocials
          label='Medium'
          link='https://medium.com/@ckn006'
          icon={Medium} />
          <ItemSocials
          label='Dribbble'
          link='https://dribbble.com/ckuong'
          icon={Dribbble} />
        </LayoutVertical>

        <Divider />

        <ItemCollapse
        label='Collapse'/>
        
      </LayoutVertical>
    </RightBarContainer>
  )
}