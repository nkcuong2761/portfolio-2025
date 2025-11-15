import { globalColor } from './global.ts';

interface ThemeColors {
  bg: {
    page: {
      muted: string;
      lighter: string;
      darker: string;
    };
    neutral: {
      primary: string;
      secondary: string;
      tertiary: string;
      hover: string;
      secondaryHover: string;
      tertiaryHover: string;
      alpha: string;
    };
    accent: {
      primary: string;
      secondary: string;
      tertiary: string;
      hover: string;
      secondaryHover: string;
      tertiaryHover: string;
    };
    warning: {
      primary: string;
      secondary: string;
      hover: string;
      secondaryHover: string;
    };
  };
  textIcon: {
    neutral: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    accent: {
      primary: string;
      onPrimary: string;
      hover: string;
    };
  };
  stroke: {
    neutral: {
      border: string;
      divider: string
    },
    accent: {
      border: string;
      divider: string
    }
  }
}

export const sekira: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: globalColor.grey[100],
      lighter: globalColor.grey[0],
      darker: globalColor.grey[200]
    },
    neutral: {
      primary: globalColor.grey[0],
      secondary: globalColor.grey[100],
      tertiary: globalColor.grey[200],
      hover: globalColor.alpha.black[200],
      secondaryHover: globalColor.alpha.black[300],
      tertiaryHover: globalColor.alpha.black[400],
      alpha: globalColor.alpha.black[500]
    },
    accent: {
      primary: globalColor.blue[300],
      secondary: globalColor.alpha.purple[500],
      tertiary: globalColor.alpha.purple[100],
      hover: globalColor.blue[400],
      secondaryHover: globalColor.alpha.purple[600],
      tertiaryHover: globalColor.alpha.purple[200]
    },
    warning: {
      primary: globalColor.yellow[0],
      secondary: globalColor.yellow[400],
      hover: globalColor.yellow[100],
      secondaryHover: globalColor.yellow[500]
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: globalColor.grey[900],
      secondary: globalColor.grey[600],
      tertiary: globalColor.grey[400]
    },
    accent: {
      primary: globalColor.blue[400],
      onPrimary: globalColor.grey[0],
      hover: globalColor.blue[500],
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: globalColor.grey[200],
      divider: globalColor.grey[200]
    },
    accent: {
      border: globalColor.blue[400],
      divider: globalColor.blue[300]
    }
  }
};

export const sekiraDark: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: globalColor.grey[900],
      lighter: globalColor.grey[800],
      darker: globalColor.grey[1000]
    },
    neutral: {
      primary: globalColor.grey[900],
      secondary: globalColor.grey[800],
      tertiary: globalColor.grey[700],
      hover: globalColor.alpha.white[200],
      secondaryHover: globalColor.alpha.white[300],
      tertiaryHover: globalColor.alpha.white[400],
      alpha: 'rgba(30, 30, 30, 0.50)'
    },
    accent: {
      primary: globalColor.blue[400],
      secondary: globalColor.alpha.purple[700],
      tertiary: globalColor.alpha.purple[400],
      hover: globalColor.blue[600],
      secondaryHover: globalColor.alpha.purple[800],
      tertiaryHover: globalColor.alpha.purple[500]
    },
    warning: {
      primary: globalColor.yellow[0],
      secondary: globalColor.yellow[400],
      hover: globalColor.yellow[100],
      secondaryHover: globalColor.yellow[500]
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: globalColor.grey[0],
      secondary: globalColor.grey[300],
      tertiary: globalColor.grey[500]
    },
    accent: {
      primary: globalColor.blue[200],
      onPrimary: globalColor.grey[0],
      hover: globalColor.blue[300]
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: globalColor.grey[700],
      divider: globalColor.grey[700]
    },
    accent: {
      border: globalColor.blue[400],
      divider: globalColor.blue[300]
    }
  }
};

export const zimaBlue: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: globalColor.grey[100],
      lighter: globalColor.grey[0],
      darker: globalColor.grey[200]
    },
    neutral: {
      primary: globalColor.grey[0],
      secondary: globalColor.grey[100],
      tertiary: globalColor.grey[200],
      hover: globalColor.alpha.black[200],
      secondaryHover: globalColor.alpha.black[300],
      tertiaryHover: globalColor.alpha.black[400],
      alpha: 'rgba(30, 30, 30, 0.10)'
    },
    accent: {
      primary: globalColor.yellow[300],
      secondary: globalColor.alpha.purple[500],
      tertiary: globalColor.alpha.purple[100],
      hover: globalColor.blue[400],
      secondaryHover: globalColor.alpha.purple[600],
      tertiaryHover: globalColor.alpha.purple[200]
    },
    warning: {
      primary: globalColor.yellow[0],
      secondary: globalColor.yellow[400],
      hover: globalColor.yellow[100],
      secondaryHover: globalColor.yellow[500]
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: globalColor.grey[900],
      secondary: globalColor.grey[600],
      tertiary: globalColor.grey[400]
    },
    accent: {
      primary: globalColor.blue[400],
      onPrimary: globalColor.grey[0],
      hover: globalColor.blue[500],
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: globalColor.grey[200],
      divider: globalColor.grey[200]
    },
    accent: {
      border: globalColor.blue[400],
      divider: globalColor.blue[300]
    }
  }
};

export const themes = {
  sekira: sekira,
  sekiraDark: sekiraDark,
  zimaBlue: zimaBlue
};