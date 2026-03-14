import React from 'react';
import { typography } from './assets/typography/typo.ts';

type TypographyVariant =
  | 'mainDisplayLg'
  | 'mainDisplayMdRegular'
  | 'mainDisplayMdEmphasize'
  | 'mainHeadingLg'
  | 'mainHeadingMd'
  | 'mainBodyLg'
  | 'mainBodyMdRegular'
  | 'mainBodyMdEmphasize'
  | 'mainBodySmRegular'
  | 'mainBodySmEmphasize'
  | 'figmaBodyMdRegular'
  | 'figmaBodyMdEmphasize'
  | 'figmaBodySmRegular'
  | 'figmaBodySmMedium'
  | 'figmaBodySmEmphasize'
  | 'figmaSubtitleSmRegular'
  | 'figmaSubtitleSmMedium'
  | 'figmaSubtitleSmEmphasize'
  | 'figmaSubtitleXsRegular';

interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant: TypographyVariant;
  as?: React.ElementType;
  children: React.ReactNode;
  color?: string;
}

const getTypographyStyle = (variant: TypographyVariant) => {
  const map = {
    // Main variants
    mainDisplayLg: typography.main.dislay.lg,
    mainDisplayMdRegular: typography.main.dislay.md.regular,
    mainDisplayMdEmphasize: typography.main.dislay.md.emphasize,
    mainHeadingLg: typography.main.heading.lg,
    mainHeadingMd: typography.main.heading.md,
    mainBodyLg: typography.main.body.lg,
    mainBodyMdRegular: typography.main.body.md.regular,
    mainBodyMdEmphasize: typography.main.body.md.emphasize,
    mainBodySmRegular: typography.main.body.sm.regular,
    mainBodySmEmphasize: typography.main.body.sm.emphasize,
    // Figma variants
    figmaBodyMdRegular: typography.figma.body.md.regular,
    figmaBodyMdEmphasize: typography.figma.body.md.emphasize,
    figmaBodySmRegular: typography.figma.body.sm.regular,
    figmaBodySmMedium: typography.figma.body.sm.medium,
    figmaBodySmEmphasize: typography.figma.body.sm.emphasize,
    figmaSubtitleSmRegular: typography.figma.subtitle.sm.regular,
    figmaSubtitleSmMedium: typography.figma.subtitle.sm.medium,
    figmaSubtitleSmEmphasize: typography.figma.subtitle.sm.emphasize,
    figmaSubtitleXsRegular: typography.figma.subtitle.xs.regular,
  };
  return map[variant];
};

const getFontFamily = (variant: TypographyVariant): string => {
  if (variant.startsWith('figma')) {
    return typography.fontFamily.figma;
  } else if (variant.startsWith('mainDisplay') || variant.startsWith('mainHeading')) {
    return typography.fontFamily.mainHeading;
  } else if (variant.startsWith('mainBody')) {
    return typography.fontFamily.mainBody;
  }
  return typography.fontFamily.figma; // fallback
};

export const Text: React.FC<TextProps> = ({ variant, as = 'span', children, style, color, ...rest }) => {
  const typo = getTypographyStyle(variant);

  const textStyle: React.CSSProperties = {
    fontFamily: getFontFamily(variant),
    fontSize: typo.fontSize,
    fontWeight: typo.fontWeight,
    lineHeight: typo.lineHeight,
    letterSpacing: typo.letterSpacing,
    textAlign: 'start',
    color: color,
    margin: 0,
    padding: 0,
    ...style,
  };

  return React.createElement(as, { style: textStyle, ...rest }, children);
};

export default Text;