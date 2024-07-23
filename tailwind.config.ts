import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        'md-custom': '252px',
        'lg-custom': '400px',
      },
      height: {
        'md-custom': '348px',
        'lg-custom': '560px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'red-100': '#ED2024',
        'red-90': '#EF373A',
        'red-80': '#F14D50',
        'red-70': '#F36366',
        'red-60': '#F4797C',
        'red-50': '#F58F91',
        'red-40': '#F8A6A7',
        'red-30': '#FABDBE',
        'red-20': '#FBD2D3',
        'red-10': '#FEE9EA',
      },
      keyframes: {
        expand: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--width)' },
        },
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          },
        },
      },
      animation: {
        expand: 'expand 2s ease-out forwards',
        'border-spin': 'border-spin 3s linear infinite',
      },
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover', 'focus'],
    },
  },
  plugins: [],
};
export default config;
