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
    }
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
    logo: {
      back: string;
      stroke: string;
      fill: string;
    }
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

export const zimaBlue: ThemeColors = {
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
      hover: "rgba(253, 253, 253, 0.0600)",
      secondaryHover: "rgba(253, 253, 253, 0.1200)",
      tertiaryHover: "rgba(253, 253, 253, 0.2000)",
      alpha: 'rgba(30, 30, 30, 0.06)'
    },
    accent: {
      primary: "#0c8ce9",
      secondary: "#49587b",
      tertiary: "#384463",
      hover: "#2182e3",
      secondaryHover: "#384463",
      tertiaryHover: "#2e3851"
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: globalColor.grey[0],
      secondary: globalColor.grey[200],
      tertiary: globalColor.grey[400]
    },
    accent: {
      primary: globalColor.blue[300],
      onPrimary: globalColor.grey[0],
      hover: globalColor.blue[400],
    },
    logo: {
      back: globalColor.grey[0],
      stroke: globalColor.grey[800],
      fill: globalColor.blue[500]
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

export const duolingo: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: '#ffffff',
      lighter: '#ffffff',
      darker: '#EDFFD0'
    },
    neutral: {
      primary: '#FFFFFF',
      secondary: '#F1F1F1',
      tertiary: '#D0D0D0',
      hover: 'rgba(88, 204, 2, 0.2)',
      secondaryHover: 'rgba(88, 204, 2, 0.1500)',
      tertiaryHover: 'rgba(88, 204, 2, 0.1000)',
      alpha: 'rgba(88, 204, 2, 0.0500)'
    },
    accent: {
      primary: '#58cc02',
      secondary: 'rgba(88, 204, 2, 0.3000)',
      tertiary: 'rgba(49, 183, 247, 0.1000)',
      hover: '#9eff07',
      secondaryHover: 'rgba(158, 255, 7, 0.3000)',
      tertiaryHover: 'rgba(49, 183, 247, 0.2000)'
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: '#58cc02',
      secondary: '#0f0f3d',
      tertiary: '#989898'
    },
    accent: {
      primary: '#31b7f7',
      onPrimary: '#ffffff',
      hover: '#0cabf8'
    },
    logo: {
      back: "#58cc02",
      stroke: "#0f0f3d",
      fill: "#ffffff"
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: 'rgba(15, 15, 61, 0.2000)',
      divider: 'rgba(15, 15, 61, 0.1000)'
    },
    accent: {
      border: '#58cc02',
      divider: 'rgba(88, 204, 2, 0.5000)'
    }
  }
};

export const google: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: '#ffffff',
      lighter: '#fcfcfc',
      darker: '#f8f9fa'
    },
    neutral: {
      primary: '#e8f0fe',
      secondary: '#fef7e1',
      tertiary: '#fce8e6',
      hover: '#facdc9ff',
      secondaryHover: '#fef7e1',
      tertiaryHover: '#fce8e6',
      alpha: 'rgba(252, 232, 230, 0.5000)'
    },
    accent: {
      primary: '#1a73e7',
      secondary: 'rgba(26, 115, 231, 0.3000)',
      tertiary: '#e8f0fe',
      hover: '#195abc',
      secondaryHover: 'rgba(26, 115, 231, 0.4000)',
      tertiaryHover: 'rgba(232, 240, 254, 0.3000)'
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: '#202124',
      secondary: '#5f6368',
      tertiary: '#a2a5a8'
    },
    accent: {
      primary: '#1a73e7',
      onPrimary: '#e8f0fe',
      hover: '#195abc'
    },
    logo: {
      back: "#ffffff",
      stroke: "#202124",
      fill: "conic-gradient(from 90deg at 50% 50%, #4285F4 0deg, #4285F4 26.009807288646698deg, #34A853 100.38461208343506deg, #F4B70A 180deg, #EA4234 289.45953369140625deg, #EA4234 360deg)"
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: 'rgba(95, 99, 104, 0.3000)',
      divider: 'rgba(95, 99, 104, 0.2000)'
    },
    accent: {
      border: '#1a73e7',
      divider: 'rgba(26, 115, 231, 0.5000)'
    }
  }
};

export const serikaDark: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: "#2c2e31",
      lighter: "#323437",
      darker: "#232527"
    },
    neutral: {
      primary: "#2c2e31",
      secondary: "#323437",
      tertiary: "#535961",
      hover: "rgba(209, 208, 197, 0.0600)",
      secondaryHover: "rgba(209, 208, 197, 0.1200)",
      tertiaryHover: "rgba(209, 208, 197, 0.2000)",
      alpha: "rgba(50, 52, 55, 0.5000)"
    },
    accent: {
      primary: "#e1b723",
      secondary: "rgba(191, 130, 0, 0.1400)",
      tertiary: "rgba(191, 130, 0, 0.1000)",
      hover: "#cb9716",
      secondaryHover: "rgba(191, 130, 0, 0.2000)",
      tertiaryHover: "rgba(191, 130, 0, 0.1600)"
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: "#d1d0c5",
      secondary: "#b0afa5",
      tertiary: "#8f8f8a"
    },
    accent: {
      primary: "#e1b723",
      onPrimary: "#232527",
      hover: "#cb9716"
    },
    logo: {
      back: "#d1d0c5",
      stroke: "#232527",
      fill: "#e1b723"
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: "#464c53",
      divider: "rgba(70, 76, 83, 0.5000)"
    },
    accent: {
      border: "#e1b723",
      divider: "rgba(225, 183, 35, 0.5000)"
    }
  }
};

export const rosePine: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: '#fffdfb',
      lighter: '#fbf7f2',
      darker: '#fffaf2'
    },
    neutral: {
      primary: '#fffdfb',
      secondary: '#fffaf2',
      tertiary: '#f0e9df',
      hover: 'rgba(192, 156, 216, 0.3)',
      secondaryHover: 'rgba(192, 156, 216, 0.2)',
      tertiaryHover: 'rgba(192, 156, 216, 0.1)',
      alpha: 'rgba(192, 156, 216, 0.05)'
    },
    accent: {
      primary: '#55939e',
      secondary: 'rgba(85, 147, 158, 0.3)',
      tertiary: 'rgba(85, 147, 158, 0.1)',
      hover: '#286982',
      secondaryHover: 'rgba(40, 105, 130, 0.3)',
      tertiaryHover: 'rgba(40, 105, 130, 0.1)'
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: '#6e6680',
      secondary: '#9a82b6',
      tertiary: '#a99db8'
    },
    accent: {
      primary: '#55939e',
      onPrimary: '#fffaf2',
      hover: '#286982'
    },
    logo: {
      back: "#c4a7e8",
      stroke: "#fffaf2",
      fill: "#55939e"
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: 'rgba(196, 167, 232, 0.4)',
      divider: 'rgba(196, 167, 232, 0.2)'
    },
    accent: {
      border: '#286982',
      divider: '#55939e'
    }
  }
};

export const terrazzo: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: '#f2e6da',
      lighter: '#e3d3c5',
      darker: '#ebddd1'
    },
    neutral: {
      primary: '#e3d3c5',
      secondary: '#f6ebe2',
      tertiary: '#e3d3c5',
      hover: 'rgba(2, 61, 58, 0.2)',
      secondaryHover: 'rgba(104, 142, 143, 0.2)',
      tertiaryHover: 'rgba(104, 142, 143, 0.1)',
      alpha: 'rgba(2, 61, 58, 0.05)'
    },
    accent: {
      primary: '#e07a4f',
      secondary: 'rgba(224, 122, 79, 0.3)',
      tertiary: 'rgba(224, 122, 79, 0.1)',
      hover: '#c15426',
      secondaryHover: 'rgba(193, 84, 38, 0.3)',
      tertiaryHover: 'rgba(193, 84, 38, 0.1)'
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: '#023d3a',
      secondary: '#688e8f',
      tertiary: '#997960'
    },
    accent: {
      primary: '#e07a4f',
      onPrimary: '#f2e6da',
      hover: '#c15426'
    },
    logo: {
      back: "#688e8f",
      stroke: "#f2e6da",
      fill: "#e07a4f"
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: 'rgba(153, 121, 96, 0.3)',
      divider: 'rgba(153, 121, 96, 0.2)'
    },
    accent: {
      border: '#c15426',
      divider: '#e07a4f'
    }
  }
};

export const paleNimbus: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: '#443f4d',
      lighter: '#574856',
      darker: '#393542'
    },
    neutral: {
      primary: '#393542',
      secondary: '#574856',
      tertiary: '#746773',
      hover: 'rgba(255, 156, 167, 0.2)',
      secondaryHover: 'rgba(255, 172, 163, 0.16)',
      tertiaryHover: 'rgba(255, 172, 163, 0.08)',
      alpha: 'rgba(255, 156, 167, 0.05)'
    },
    accent: {
      primary: '#94ffc2',
      secondary: 'rgba(148, 255, 194, 0.3)',
      tertiary: 'rgba(148, 255, 194, 0.1)',
      hover: '#c9ffd0',
      secondaryHover: 'rgba(201, 255, 208, 0.3)',
      tertiaryHover: 'rgba(201, 255, 208, 0.1)'
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: '#ff9ca7',
      secondary: '#ffaca3',
      tertiary: 'rgba(249, 250, 215, 0.5)'
    },
    accent: {
      primary: '#94ffc2',
      onPrimary: '#574856',
      hover: '#c9ffd0'
    },
    logo: {
      back: "#ff9ca7",
      stroke: "#443f4d",
      fill: "#94ffc2"
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: 'rgba(255, 156, 167, 0.3)',
      divider: 'rgba(255, 156, 167, 0.2)'
    },
    accent: {
      border: '#94ffc2',
      divider: '#c9ffd0'
    }
  }
};

export const terra: ThemeColors = {
  // Background colors
  bg: {
    page: {
      muted: '#0e1713',
      lighter: '#0f1d18',
      darker: '#0c100e'
    },
    neutral: {
      primary: '#0e1713',
      secondary: '#0f1d18',
      tertiary: '#436029',
      hover: 'rgba(67, 96, 41, 0.2)',
      secondaryHover: 'rgba(67, 96, 41, 0.16)',
      tertiaryHover: 'rgba(67, 96, 41, 0.1)',
      alpha: 'rgba(67, 96, 41, 0.05)'
    },
    accent: {
      primary: '#89c559',
      secondary: 'rgba(137, 197, 89, 0.3)',
      tertiary: 'rgba(137, 197, 89, 0.1)',
      hover: '#436029',
      secondaryHover: 'rgba(67, 96, 41, 0.3)',
      tertiaryHover: 'rgba(67, 96, 41, 0.1)'
    }
  },

  // Text and icon colors
  textIcon: {
    neutral: {
      primary: '#f1edd1',
      secondary: '#e2dca5',
      tertiary: '#6e714e'
    },
    accent: {
      primary: '#89c559',
      onPrimary: '#0f1d18',
      hover: '#bed995'
    },
    logo: {
      back: "#89c559",
      stroke: "#0f1d18",
      fill: "#f1edd1"
    }
  },

  // Stroke colors
  stroke: {
    neutral: {
      border: 'rgba(190, 217, 149, 0.3)',
      divider: 'rgba(190, 217, 149, 0.2)'
    },
    accent: {
      border: '#89c559',
      divider: '#bed995'
    }
  }
};

export const themes = {
  zimaBlue: zimaBlue,
  duolingo: duolingo,
  google: google,
  serikaDark: serikaDark,
  rosePine: rosePine,
  terrazzo: terrazzo,
  paleNimbus: paleNimbus,
  terra: terra
};