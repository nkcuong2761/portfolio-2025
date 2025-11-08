import React from 'react';
import styled from 'styled-components';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';
import { Text } from '../Text.tsx';
import Link from './Link.tsx';

interface MessageProps {
  description: string;
  link: string;
}

interface StyledMessageProps {
  currentTheme: keyof typeof themes;
}

const VerticalBox = styled.div<MessageProps>`
  padding: 0px 0px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  overflow: hidden;
`;

const MessageHeader = styled.div<StyledMessageProps>`
  height: 3px;
  background-color: ${(p) => themes[p.currentTheme].bg.warning.secondary};
`;

const MessageContent = styled.div<StyledMessageProps>`
  padding: 12px 12px;
  display: flex;
  flex-direction: column;
  background-color: ${(p) => themes[p.currentTheme].bg.neutral.tertiary};
`;

export const Message: React.FC<MessageProps> = ({
  description,
  link
}) => {
  const { theme } = useTheme();

  return (
    <VerticalBox description={description} link={link}>
      <MessageHeader currentTheme={theme} />
      <MessageContent currentTheme={theme}>
        <Text 
        variant="figmaSubtitleSmRegular" 
        color={themes[theme].textIcon.neutral.primary}>
          {description}
        </Text>
        <Text 
        variant={'figmaSubtitleSmRegular'}
        color={themes[theme].textIcon.accent.primary}>
          {link}
        </Text>
      </MessageContent>
    </VerticalBox>
  );
};

export default Message;