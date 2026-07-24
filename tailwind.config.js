/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#0f7a63',
          dark: '#35d0a5',
          muted: '#5ba3b0',
        },
        ground: '#f4f7f6',
        surface: {
          DEFAULT: '#ffffff',
          dark: '#17201d',
        },
        base: {
          DEFAULT: '#f4f7f6',
          dark: '#101715',
        },
        ink: {
          DEFAULT: '#131d1a',
          dark: '#e3ece9',
        },
        muted: {
          DEFAULT: '#5c6b66',
          dark: '#8fa39c',
        },
        line: {
          DEFAULT: '#d5ddda',
          dark: '#2a3733',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
