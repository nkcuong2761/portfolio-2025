const baseFontSizes = {
  xxxs: '9px',
  xxs: '10px',
  xs: '11px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '20px',
  xxl: '26px',
  xxxl: '32px',
  xxxxl: '48px',
} as const;

const fontWeights = {
  light: 300,
  regular: 500,
  medium: 600,
  emphasize: 700,
} as const;

const lineHeights = {
  tight: '100%',
  normal: '120%',
  relaxed: '150%',
} as const;

const letterSpacing = {
  tighter: '-0.05em',
  tight: '-0.02em',
  normal: '0',
  wide: '0.02em',
} as const;

export const typography = {
  main: {
    dislay: {
      lg: {
        fontSize: baseFontSizes.xxxxl,
        lineHeight: lineHeights.normal,
        fontWeight: fontWeights.regular,
        letterSpacing: letterSpacing.tight,
      },
      md: {
        regular: {
          fontSize: baseFontSizes.xxl,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.light,
          letterSpacing: letterSpacing.tight,
        },
        emphasize: {
          fontSize: baseFontSizes.xxl,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.regular,
          letterSpacing: letterSpacing.tight,
        },
      }
    },
    heading: {
      lg: {
        fontSize: baseFontSizes.xxxl,
        lineHeight: lineHeights.normal,
        fontWeight: fontWeights.regular,
        letterSpacing: letterSpacing.tight,
      },
      md: {
        fontSize: baseFontSizes.xxl,
        lineHeight: lineHeights.normal,
        fontWeight: fontWeights.regular,
        letterSpacing: letterSpacing.tight,
      }
    },
    body: {
      lg: {
        fontSize: baseFontSizes.lg,
        lineHeight: lineHeights.relaxed,
        fontWeight: fontWeights.regular,
        letterSpacing: letterSpacing.normal,
      },
      md: {
        regular: {
          fontSize: baseFontSizes.md,
          lineHeight: lineHeights.relaxed,
          fontWeight: fontWeights.regular,
          letterSpacing: letterSpacing.normal,
        },
        emphasize: {
          fontSize: baseFontSizes.md,
          lineHeight: lineHeights.relaxed,
          fontWeight: fontWeights.emphasize,
          letterSpacing: letterSpacing.normal,
        },
      },
      sm: {
        regular: {
          fontSize: baseFontSizes.sm,
          lineHeight: lineHeights.relaxed,
          fontWeight: fontWeights.regular,
          letterSpacing: letterSpacing.normal,
        },
        emphasize: {
          fontSize: baseFontSizes.sm,
          lineHeight: lineHeights.relaxed,
          fontWeight: fontWeights.emphasize,
          letterSpacing: letterSpacing.normal,
        },
      }
    }
  },
  figma: {
    body: {
      md: {
        regular: {
          fontSize: baseFontSizes.sm,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.regular,
          letterSpacing: letterSpacing.tight,
        },
        emphasize: {
          fontSize: baseFontSizes.sm,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.emphasize,
          letterSpacing: letterSpacing.tight,
        },
      },
      sm: {
        regular: {
          fontSize: baseFontSizes.xs,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.regular,
          letterSpacing: letterSpacing.tight,
        },
        medium: {
          fontSize: baseFontSizes.xs,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.medium,
          letterSpacing: letterSpacing.tight,
        },
        emphasize: {
          fontSize: baseFontSizes.xs,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.emphasize,
          letterSpacing: letterSpacing.tight,
        },
      },
    },
    subtitle: {
      sm: {
        regular: {
          fontSize: baseFontSizes.xxs,
          lineHeight: lineHeights.relaxed,
          fontWeight: fontWeights.regular,
          letterSpacing: letterSpacing.tight,
        },
        medium: {
          fontSize: baseFontSizes.xxs,
          lineHeight: lineHeights.relaxed,
          fontWeight: fontWeights.medium,
          letterSpacing: letterSpacing.tight,
        },
        emphasize: {
          fontSize: baseFontSizes.xxs,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.emphasize,
          letterSpacing: letterSpacing.tight,
        },
      },
      xs: {
        regular: {
          fontSize: baseFontSizes.xxxs,
          lineHeight: lineHeights.normal,
          fontWeight: fontWeights.regular,
          letterSpacing: letterSpacing.tight,
        },
      }
    },
  },
  fontFamily: {
    figma: "'Lato', -apple-system, BlinkMacSystemFont, sans-serif",
    mainBody: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    mainHeading: "'Epilogue', -apple-system, BlinkMacSystemFont, sans-serif",
  },
} as const;

export type Typography = typeof typography;