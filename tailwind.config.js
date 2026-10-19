/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vv-offwhite': '#F5F5F0',
        'vv-offwhite-alt': '#ECECE5',
        'vv-black': '#0C0E0C',
        'vv-charcoal': '#161915',
        'vv-card-dark': '#1C201B',
        'vv-darkgray': '#272B25',
        'vv-border-dark': '#2E332C',
        'vv-lime': '#D1FF00',
        'vv-lime-hover': '#BEEC00',
        'vv-lime-dark': '#101400',
        'vv-muted': '#7D8579',
      },
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.03em',
        widest: '0.15em',
        mega: '0.25em',
      },
      borderRadius: {
        'vv': '1.25rem',
        'vv-lg': '2rem',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
