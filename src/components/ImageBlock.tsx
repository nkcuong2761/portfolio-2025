import React from 'react';
import { themes } from '../assets/colors/alias.ts';
import { useTheme } from '../contexts/ThemeContext.tsx';

interface ImageBlockProps {
  src: string;
  alt: string;
  height: string;
  imageWidth?: string;
  imageHeight?: string;
  imageLeft?: string; // left position
  imageTop?: string; // top position
  imageRight?: string; // right position
  imageBottom?: string; // bottom position
  withShadow?: boolean;
  borderRadiusFrame?: string;
  borderRadiusImage?: string;
  style?: React.CSSProperties; // For overriding container styles if needed
  className?: string;
}

export const ImageBlock: React.FC<ImageBlockProps> = ({
  src,
  alt,
  height,
  imageWidth = '100%',
  imageHeight = 'auto',
  imageLeft,
  imageTop,
  imageRight,
  imageBottom,
  withShadow = false,
  borderRadiusFrame = '12px',
  borderRadiusImage = '8px',
  style,
  className,
}) => {
  const { theme } = useTheme();
  const theming = themes[theme];

  // If X or Y are provided, we assume absolute positioning for the image
  const isAbsolute = imageLeft !== undefined || imageTop !== undefined || imageRight !== undefined || imageBottom !== undefined;

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height,
        borderRadius: borderRadiusFrame,
        backgroundColor: theming.bg.neutral.secondary,
        border: `1px solid ${theming.stroke.neutral.border}`,
        overflow: 'hidden',
        ...style,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: imageWidth,
          height: imageHeight,
          objectFit: 'cover',
          borderRadius: borderRadiusImage,
          position: isAbsolute ? 'absolute' : 'relative',
          left: imageLeft,
          top: imageTop,
          right: imageRight,
          bottom: imageBottom,
          boxShadow: withShadow
            ? '0px 85px 78px 0px rgba(39,39,39,0.03), 0px 25.625px 23.515px 0px rgba(39,39,39,0.04), 0px 10.643px 9.767px 0px rgba(39,39,39,0.05), 0px 3.849px 3.532px 0px rgba(39,39,39,0.08)'
            : 'none',
        }}
      />
    </div>
  );
};
