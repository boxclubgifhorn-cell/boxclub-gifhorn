/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B0B0F',
          50: '#f5f5f6',
          100: '#e6e6e8',
          200: '#c0c0c5',
          300: '#9a9aa2',
          400: '#55555f',
          500: '#0B0B0F',
          600: '#0a0a0e',
          700: '#08080b',
          800: '#060609',
          900: '#050507',
        },
        secondary: {
          DEFAULT: '#FF6B00',
          50: '#fff5eb',
          100: '#ffe5cc',
          200: '#ffcb99',
          300: '#ffaa5c',
          400: '#ff8a2e',
          500: '#FF6B00',
          600: '#e25e00',
          700: '#bd4d00',
          800: '#933c00',
          900: '#7a3200',
        },
        accent: {
          DEFAULT: '#C8A14A',
          50: '#fdf9ef',
          100: '#f9f0d5',
          200: '#f2dea8',
          300: '#eacc7b',
          400: '#ddb554',
          500: '#C8A14A',
          600: '#b48a3a',
          700: '#966d30',
          800: '#7a572c',
          900: '#654826',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'slide-left': 'slideLeft 0.6s ease-out forwards',
        'slide-right': 'slideRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 0, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
