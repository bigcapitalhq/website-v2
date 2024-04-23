import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  darkMode: 'selector',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      indigo: '#345dec',
      darkblue: {
        '50': '#e6e7f1',
        '100': '#ccd0e2',
        '200': '#99a0c5',
        '300': '#6671a8',
        '400': '#33418b',
        '500': '#00126e',
        '600': '#000e58',
        '700': '#000b42',
        '800': '#00072c',
        '900': '#000416',
      },
    },
    container: {
      center: true,
      padding: '20px',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    letterSpacing: {
      tighter: '-.05em',
      tight: '-0.01em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
    },
  },
  plugins: [],
};
export default config;
