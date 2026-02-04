const tokens = require('./src/lib/config/theme.tokens.json');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        secondary: tokens.colors.secondary,
        accent: tokens.colors.accent,
        gray: tokens.colors.gray,
        black: tokens.colors.black,
        white: tokens.colors.white,
      },
      fontFamily: {
        heading: [tokens.fonts.heading],
        body: [tokens.fonts.body],
        mono: [tokens.fonts.mono],
      },
      borderRadius: tokens.radii,
      boxShadow: tokens.shadows,
      maxWidth: {
        container: tokens.spacing.containerMaxWidth,
      },
      transitionDuration: {
        fast: tokens.transitions.durations.fast,
        normal: tokens.transitions.durations.normal,
        slow: tokens.transitions.durations.slow,
      },
      transitionTimingFunction: {
        smooth: tokens.transitions.easings.smooth,
        elastic: tokens.transitions.easings.elastic,
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
