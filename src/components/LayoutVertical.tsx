import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
  alignItems?: string;
  gap?: string;
  padding?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  alignSelf?: string;
  justifyContent?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Vertical = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => p.alignItems || 'flex-start'};
  gap: ${(p) => p.gap || '0px'};
  padding: ${(p) => p.padding || '0px'};
  width: ${(p) => p.width || 'auto'};
  height: ${(p) => p.height || 'auto'};
  background-color: ${(p) => p.backgroundColor || 'transparent'};
  align-self: ${(p) => p.alignSelf || 'auto'};
  justify-content: ${(p) => p.justifyContent || 'flex-start'};
`;

export const LayoutVertical: React.FC<LayoutProps> = ({
  alignItems,
  gap,
  padding,
  width,
  height,
  backgroundColor,
  alignSelf,
  justifyContent,
  style,
  children,
  onClick
}) => {
  return (
  <Vertical
    alignItems={alignItems}
    gap={gap}
    padding={padding}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    alignSelf={alignSelf}
    justifyContent={justifyContent}
    style={style}
    onClick={onClick}>
    {children}
  </Vertical>
)}