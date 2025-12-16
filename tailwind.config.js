/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#000000',
        'bg-elevated': '#0A0A0A',
        'bg-surface': '#111111',
        'bg-hover': '#1A1A1A',
        // Borders
        'border-subtle': '#1F1F1F',
        'border-default': '#2E2E2E',
        'border-strong': '#454545',
        // Text
        'text-primary': '#EDEDED',
        'text-secondary': '#A1A1A1',
        'text-tertiary': '#707070',
        // Accent
        'accent-blue': '#0070F3',
        'accent-blue-hover': '#0060D0',
        // Semantic
        'success': '#00C853',
        'warning': '#F5A623',
        'error': '#EE0000',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.3s ease-out forwards',
        'count-up': 'countUp 0.5s ease-out forwards',
        'slide-right': 'slideRight 0.3s ease-out forwards',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'expand-width': 'expandWidth 0.8s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        expandWidth: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      transitionDuration: {
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
}
