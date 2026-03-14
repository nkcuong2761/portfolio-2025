import React from 'react';
import styled from 'styled-components';

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  alignItems?: string;
  gap?: string;
  padding?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  alignSelf?: string;
  justifyContent?: string;
  flex?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const Horizontal = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  align-items: ${(p) => p.alignItems || 'flex-start'};
  gap: ${(p) => p.gap || '0px'};
  padding: ${(p) => p.padding || '0px'};
  width: ${(p) => p.width || 'auto'};
  height: ${(p) => p.height || 'auto'};
  background-color: ${(p) => p.backgroundColor || 'transparent'};
  align-self: ${(p) => p.alignSelf || 'auto'};
  justify-content: ${(p) => p.justifyContent || 'flex-start'};
  flex: ${(p) => p.flex || 'none'};
`;

export const LayoutHorizontal = React.forwardRef<HTMLDivElement, LayoutProps>(({
  alignItems,
  gap,
  padding,
  width,
  height,
  backgroundColor,
  alignSelf,
  justifyContent,
  flex,
  style,
  children,
  onClick,
  ...rest
}, ref) => {
  return (
    <Horizontal
      ref={ref}
      alignItems={alignItems}
      gap={gap}
      padding={padding}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      alignSelf={alignSelf}
      justifyContent={justifyContent}
      flex={flex}
      style={style}
      onClick={onClick}
      {...rest}>
      {children}
    </Horizontal>
  )
});