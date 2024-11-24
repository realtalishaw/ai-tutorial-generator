/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f3f4f6',
          100: '#1a1b1e',
          200: '#18191c',
          300: '#151618',
          400: '#121314',
          500: '#0f1011',
          600: '#0c0d0e',
          700: '#090a0b',
          800: '#060708',
          900: '#030405',
        },
        accent: {
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
        },
      },
    },
  },
  plugins: [],
};