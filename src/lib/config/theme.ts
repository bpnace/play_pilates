import tokens from './theme.tokens.json';

type ColorScale = {
  DEFAULT: string;
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
};

export type ThemeTokens = {
  colors: {
    primary: ColorScale;
    secondary: ColorScale;
    accent: ColorScale;
    gray: Omit<ColorScale, 'DEFAULT'>;
    black: string;
    white: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  radii: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    full: string;
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  transitions: {
    durations: {
      fast: string;
      normal: string;
      slow: string;
    };
    easings: {
      smooth: string;
      elastic: string;
    };
  };
  spacing: {
    containerMaxWidth: string;
    sectionPadding: {
      mobile: string;
      desktop: string;
    };
  };
};

export const theme: ThemeTokens = tokens;
