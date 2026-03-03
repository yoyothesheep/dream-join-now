import { createTheme, responsiveFontSizes, alpha } from "@mui/material/styles";

declare module '@mui/material/styles' {
  interface Palette {
    navy: PaletteColor;
    purple: PaletteColor;
  }
  interface PaletteOptions {
    navy?: PaletteColorOptions;
    purple?: PaletteColorOptions;
  }
  interface TypeBackground {
    subtle?: string;
  }
  interface TypeText {
    successPrimary: string;
    successInverse: string;
  }
  interface TypographyVariants {
    body1SemiBold: React.CSSProperties;
    body2SemiBold: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    body1SemiBold?: React.CSSProperties;
    body2SemiBold?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body1SemiBold: true;
    body2SemiBold: true;
  }
}

// Design Tokens from Figma / Google Doc / test theme
const colors = {
  purple: {
    50: "#F3E8FF",
    100: "#DCB9FE",
    200: "#C489FF",
    400: "#9237ED",
    900: "#9237ED",
  },
  navy: {
    50: "#B8BACC",
    100: "#B8BACC",
    200: "#9A9DB8",
    300: "#616487",
    400: "#4A4D6E",
    600: "#232555",
    900: "#0D002A",
  },
  green: {
    100: "#DCFDEC",
    200: "#8AFEC4",
    300: "#4FF3A2",
    900: '#4FF3A2',
  },
  yellow: {
    50: "#FEF9E6",
    100: "#FBE9AE",
    200: "#F7DC7A",
    300: "#F5D23E",
    400: "#F3C403",
    900: '#F3C403',
  },
  red: {
    100: "#FFD2D5",
    200: "#F2A3A0",
    500: "#FA5C42",
    900: '#FA5C42',
  },
  white: "#FFFFFF",
  black: "#000000",
  subtle: "#F4EEFB",
  grey: {
    400: "#BDBDBD",
  },
};

const _states = {
  light: {
    primary: {
      hover: alpha(colors.navy[600], 0.08),
      selected: alpha(colors.navy[600], 0.16),
      focus: alpha(colors.navy[600], 0.12),
      focusVisible: alpha(colors.navy[600], 0.12),
      outlinedBorder: alpha(colors.navy[600], 0.5),
    },
    secondary: {
      hover: alpha(colors.navy[600], 0.08),
      selected: alpha(colors.navy[600], 0.16),
      focus: alpha(colors.navy[600], 0.12),
      focusVisible: alpha(colors.navy[600], 0.12),
      outlinedBorder: alpha(colors.navy[600], 0.5),
    },
    warning: {
      hover: alpha(colors.navy[600], 0.08),
      selected: alpha(colors.navy[600], 0.16),
      focus: alpha(colors.navy[600], 0.12),
      focusVisible: alpha(colors.navy[600], 0.12),
      outlinedBorder: alpha(colors.navy[600], 0.5),
    },
    info: {
      hover: alpha(colors.navy[600], 0.08),
      selected: alpha(colors.navy[600], 0.16),
      focus: alpha(colors.navy[600], 0.12),
      focusVisible: alpha(colors.navy[600], 0.12),
      outlinedBorder: alpha(colors.navy[600], 0.5),
    },
  },
  dark: {
    primary: {
      hover: alpha(colors.white, 0.08),
      selected: alpha(colors.white, 0.16),
      focus: alpha(colors.white, 0.12),
      focusVisible: alpha(colors.white, 0.12),
      outlinedBorder: alpha(colors.white, 0.24),
    },
    secondary: {
      hover: alpha(colors.white, 0.08),
      selected: alpha(colors.white, 0.16),
      focus: alpha(colors.white, 0.12),
      focusVisible: alpha(colors.white, 0.12),
      outlinedBorder: alpha(colors.white, 0.24),
    },
    warning: {
      hover: alpha(colors.white, 0.08),
      selected: alpha(colors.white, 0.16),
      focus: alpha(colors.white, 0.12),
      focusVisible: alpha(colors.white, 0.12),
      outlinedBorder: alpha(colors.white, 0.24),
    },
    info: {
      hover: alpha(colors.white, 0.08),
      selected: alpha(colors.white, 0.16),
      focus: alpha(colors.white, 0.12),
      focusVisible: alpha(colors.white, 0.12),
      outlinedBorder: alpha(colors.white, 0.24),
    },
  },
};


const sharedTypography = {
  fontFamily: '"Inter", sans-serif',
  h1: {
    fontFamily: '"Special Gothic Condensed One", sans-serif',
    fontSize: 64,
    textTransform: 'uppercase' as const,
  },
  h2: {
    fontFamily: '"Special Gothic Condensed One", sans-serif',
    fontSize: 55,
    textTransform: 'uppercase' as const,
  },
  h3: {
    fontFamily: '"Special Gothic", sans-serif',
    fontSize: 48,
    fontWeight: 500,
    lineHeight: 1.167,
    fontFeatureSettings: "'liga' off, 'clig' off",
  },
  h4: {
    fontFamily: '"Special Gothic", sans-serif',
    fontWeight: 500,
  },
  h5: {
    fontFamily: '"Special Gothic Condensed One", sans-serif',
    fontSize: 28,
    textTransform: 'uppercase' as const,
  },
  h6: {
    fontFamily: '"Special Gothic Condensed One", sans-serif',
    fontSize: 22,
    textTransform: 'uppercase' as const,
  },
  subtitle1: {
    fontFamily: '"Inter", sans-serif',
  },
  subtitle2: {
    fontFamily: '"Inter", sans-serif',
  },
  body1: {
    fontFamily: '"Inter", sans-serif',
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  body2: {
    fontFamily: '"Inter", sans-serif',
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
  },
  caption: {
    fontFamily: '"Inter", sans-serif',
    fontSize: 12,
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.4px',
    fontFeatureSettings: "'liga' off, 'clig' off",
  },
  overline: {
    fontFamily: '"Inter", sans-serif',
  },
  button: {
    fontFamily: '"Roboto", sans-serif',
  },
  body1SemiBold: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 600,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  body2SemiBold: {
    fontFamily: '"Inter", sans-serif',
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
};

const sharedShape = {
  borderRadius: 4,
  borderRadiusLg: '16px',
};

const sharedPalette = {
  primary: {
    main: colors.purple[400],
    dark: colors.purple[400],
    light: colors.purple[200],
  },
  secondary: {
    main: colors.purple[200],
    dark: colors.purple[400],
    light: colors.purple[100],
  },
  error: {
    main: "#D32F2F", // Or colors.red[500] depending on preference. Mapped to test theme here.
    light: colors.red[500],
  },
  purple: colors.purple,
  navy: colors.navy,
  green: colors.green,
  yellow: colors.yellow,
  red: colors.red,
};


const lightPalette = {
  success: {
    main: colors.green[300],
    dark: colors.green[300],
    light: colors.green[200],
    contrastText: colors.navy[900],
  },
  warning: {
    main: colors.yellow[400],
    dark: colors.yellow[400],
    light: colors.yellow[200],
    contrastText: colors.navy[900],
  },
  info: {
    main: colors.navy[600],
    dark: colors.navy[900],
    light: colors.navy[200],
  },
};

const darkPalette = {
  success: {
    main: colors.green[200],
    dark: colors.green[300],
    light: colors.green[100],
    contrastText: colors.navy[900],
  },
  warning: {
    main: colors.yellow[200],
    dark: colors.yellow[300],
    light: colors.yellow[100],
    contrastText: colors.navy[900],
  },
  info: {
    main: colors.navy[200],
    dark: colors.navy[400],
    light: colors.navy[100],
  },
};


// Component Overrides mapping logic from theme_test.ts integration
const getComponents = (mode: 'light' | 'dark') => {
  const states = mode === 'light' ? _states.light : _states.dark;
  const textColors = {
    primary: mode === 'light' ? colors.navy[900] : colors.white,
  };

  return {
    MuiLink: {
      defaultProps: {
        color: 'text.secondary',
      },
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", sans-serif',
        },
        outlined: {
          borderRadius: '4px',
        },
        outlinedPrimary: {
          borderColor: states.primary.outlinedBorder,
          '&:hover': {
            borderColor: colors.purple[400],
            backgroundColor: states.primary.hover,
          },
        },
        containedWarning: {
          borderRadius: '4px',
          backgroundColor: mode === 'light' ? colors.yellow[400] : colors.yellow[200],
          boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20)',
          '&:hover': {
            backgroundColor: mode === 'light' ? colors.yellow[400] : colors.yellow[200],
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.20)',
          },
        },
        containedSuccess: {
          color: textColors.primary,
          "&:hover": { color: textColors.primary },
          "&:focus": { color: textColors.primary },
          "&:active": { color: textColors.primary },
        },
        outlinedSuccess: {
          color: textColors.primary,
          "&:hover": { color: textColors.primary },
          "&:focus": { color: textColors.primary },
          "&:active": { color: textColors.primary },
        },
        textSuccess: {
          color: textColors.primary,
          "&:hover": { color: textColors.primary },
          "&:focus": { color: textColors.primary },
          "&:active": { color: textColors.primary },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlinedSuccess: {
          color: textColors.primary,
        },
        filledSuccess: {
          color: textColors.primary,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused.MuiInputLabel-colorSuccess": {
            color: textColors.primary,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused.MuiFormLabel-colorSuccess": {
            color: textColors.primary,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlinedSuccess: {
          color: textColors.primary,
        },
        standardSuccess: {
          color: textColors.primary,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16, // Enforce borderRadiusLg across standard paper
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        lineVertical: {
          borderColor: colors.grey[400],
        },
      },
    },
  };
};

export const lightThemeBase = createTheme({
  palette: {
    mode: 'light',
    ...sharedPalette,
    ...lightPalette,
    text: {
      primary: colors.navy[900],
      secondary: colors.navy[600],
      disabled: colors.navy[300],
      successPrimary: colors.navy[900],
      successInverse: colors.white,
    },
    background: {
      default: colors.white,
      paper: colors.white,
      subtle: colors.subtle,
    },
    divider: "#D8D2E1",
    action: {
      hover: _states.light.primary.hover,
      focus: _states.light.primary.focus,
      selected: _states.light.primary.selected,
      focusVisible: _states.light.primary.focusVisible,
    },
  },
  typography: sharedTypography,
  shape: sharedShape,
  components: getComponents('light') as any, // Cast to any to bypass strict internal typing for now due to complex overrides
});


export const darkThemeBase = createTheme({
  palette: {
    mode: 'dark',
    ...sharedPalette,
    ...darkPalette,
    text: {
      primary: colors.white,
      secondary: colors.navy[100],
      disabled: colors.navy[400],
      successPrimary: colors.white,
      successInverse: colors.navy[900],
    },
    background: {
      default: colors.navy[900],
      paper: colors.navy[600],
      subtle: colors.subtle,
    },
    divider: colors.navy[400],
    action: {
      hover: _states.dark.primary.hover,
      focus: _states.dark.primary.focus,
      selected: _states.dark.primary.selected,
      focusVisible: _states.dark.primary.focusVisible,
    },
  },
  shape: sharedShape,
  typography: sharedTypography,
  components: {
    ...getComponents('dark') as any,
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'rgba(255, 255, 255, 0.24)', // outlinedBorder dark mode
        },
      },
    },
  },
});

export const lightTheme = responsiveFontSizes(lightThemeBase);
export const darkTheme = responsiveFontSizes(darkThemeBase);

