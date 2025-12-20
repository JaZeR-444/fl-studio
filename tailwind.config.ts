import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Purple Theme Palette
        'purple-dark': {
          900: '#0f051e',
          800: '#1a0a2e',
          700: '#2d1b4e',
          600: '#3d2663',
          500: '#4c3177',
        },
        'purple-primary': {
          900: '#5b21b6',
          800: '#6d28d9',
          700: '#7c3aed',
          600: '#8b5cf6',
          500: '#a78bfa',
          400: '#c4b5fd',
          300: '#ddd6fe',
          200: '#e9d5ff',
          100: '#f3e8ff',
        },
        'blue-accent': {
          700: '#1d4ed8',
          600: '#2563eb',
          500: '#3b82f6',
          400: '#60a5fa',
          300: '#93c5fd',
        },
        // Glass overlay colors
        'glass': {
          light: 'rgba(255, 255, 255, 0.05)',
          medium: 'rgba(255, 255, 255, 0.1)',
          border: 'rgba(255, 255, 255, 0.1)',
        },
      },
      backgroundImage: {
        'gradient-purple': 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #16213e 100%)',
        'gradient-purple-radial': 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
        'gradient-button': 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
        'gradient-text': 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(124, 58, 237, 0.4), 0 0 40px rgba(124, 58, 237, 0.4)',
        'purple-glow-lg': '0 0 30px rgba(124, 58, 237, 0.5), 0 0 60px rgba(124, 58, 237, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'card-hover': '0 8px 32px rgba(124, 58, 237, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '20px',
      },
      borderRadius: {
        'glass': '16px',
        'card': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(5px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(124, 58, 237, 0.4)' },
          '50%': { boxShadow: '0 0 30px rgba(124, 58, 237, 0.6), 0 0 50px rgba(124, 58, 237, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
