/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F7F3E8',
          secondary: '#EFE9D7',
          card: 'rgba(255, 253, 244, 0.85)',
          gold: '#E3D27A',
          goldMuted: '#C7AE5D',
          olive: '#51513B',
          oliveLight: '#68675C',
          ink: '#292923',
          inkMuted: '#68675C',
          border: 'rgba(81, 81, 59, 0.15)',
          borderMuted: 'rgba(81, 81, 59, 0.08)',
          sand: '#E6DEC9'
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Noto Naskh Arabic"', 'Georgia', 'serif'],
        sans: ['Inter', '"IBM Plex Sans Arabic"', 'system-ui', '-apple-system', 'sans-serif'],
        arabicSerif: ['"Noto Naskh Arabic"', 'serif'],
        arabicSans: ['"IBM Plex Sans Arabic"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'Menlo', 'Consolas', 'monospace'],
      },
      letterSpacing: {
        'widest-plus': '0.25em',
        'super-wide': '0.35em',
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(81, 81, 59, 0.06)',
        'warm-md': '0 8px 24px -4px rgba(81, 81, 59, 0.08)',
        'warm-lg': '0 16px 36px -6px rgba(81, 81, 59, 0.12)',
        'warm-gold': '0 0 24px -4px rgba(227, 210, 122, 0.35)',
      }
    },
  },
  plugins: [],
}
