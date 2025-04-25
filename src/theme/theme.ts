export const lightTheme = {
  colors: {
    primary: '#1A8917',
    secondary: '#0F730C',
    background: '#FFFFFF',
    surface: '#FFFFFF',
    text: '#242424',
    textSecondary: '#6B6B6B',
    border: '#E6E6E6',
    success: '#1A8917',
    error: '#C94A4A',
    warning: '#FFC017',
    info: '#3B82F6',
    cardBackground: '#FFFFFF',
    tagBackground: '#F2F2F2',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: '700' as const,
      lineHeight: 36,
      fontFamily: 'serif',
    },
    h2: {
      fontSize: 24,
      fontWeight: '700' as const,
      lineHeight: 32,
      fontFamily: 'serif',
    },
    h3: {
      fontSize: 20,
      fontWeight: '600' as const,
      lineHeight: 28,
      fontFamily: 'serif',
    },
    body1: {
      fontSize: 16,
      fontWeight: '400' as const,
      lineHeight: 24,
      fontFamily: 'system',
    },
    body2: {
      fontSize: 14,
      fontWeight: '400' as const,
      lineHeight: 20,
      fontFamily: 'system',
    },
    caption: {
      fontSize: 12,
      fontWeight: '400' as const,
      lineHeight: 16,
      fontFamily: 'system',
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },
  shadows: {
    sm: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.08,
      shadowRadius: 2.0,
      elevation: 1,
    },
    md: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 3.84,
      elevation: 2,
    },
    lg: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.12,
      shadowRadius: 5.65,
      elevation: 3,
    },
  },
};

export const darkTheme = {
  ...lightTheme,
  colors: {
    primary: '#1A8917',
    secondary: '#0F730C',
    background: '#121212',
    surface: '#1E1E1E',
    text: '#E6E6E6',
    textSecondary: '#A0A0A0',
    border: '#2D2D2D',
    success: '#1A8917',
    error: '#C94A4A',
    warning: '#FFC017',
    info: '#3B82F6',
    cardBackground: '#1E1E1E',
    tagBackground: '#2D2D2D',
  },
};

export type Theme = typeof lightTheme;
export type ThemeColors = keyof typeof lightTheme.colors; 