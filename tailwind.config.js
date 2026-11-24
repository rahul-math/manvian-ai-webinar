/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: 'rgb(var(--bg-dark) / <alpha-value>)',
          900: 'rgb(var(--bg-primary) / <alpha-value>)', // Primary background
          850: 'rgb(var(--bg-secondary) / <alpha-value>)',
          800: 'rgb(var(--bg-tertiary) / <alpha-value>)', // Secondary background
          750: 'rgb(var(--bg-card) / <alpha-value>)',
          700: 'rgb(var(--border-muted) / <alpha-value>)',
          600: 'rgb(var(--border-subtle) / <alpha-value>)',
        },
        accent: {
          emerald: 'rgb(var(--accent-primary) / <alpha-value>)', // Primary accent (themeable)
          'emerald-glow': 'rgb(var(--accent-primary-glow) / <alpha-value>)',
          blue: 'rgb(var(--accent-secondary) / <alpha-value>)', // Secondary accent (themeable)
          'blue-glow': 'rgb(var(--accent-secondary-glow) / <alpha-value>)',
        },
        slate: {
          text: 'rgb(var(--text-secondary) / <alpha-value>)', // Secondary text
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
        'grid-pattern': "radial-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}
