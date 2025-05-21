/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1',
          light: '#a5b4fc',
          dark: '#4338ca'
        },
        secondary: {
          DEFAULT: '#ec4899',
          light: '#f9a8d4',
          dark: '#be185d'
        },
        accent: '#f97316',
        friends: '#f1c232',
          DEFAULT: '#f1c232', 
          secondary: '#9146fe',
          light: '#fef3c7',
          dark: '#d97706'
        harrypotter: '#7c3aed',
        modernfamily: {
          DEFAULT: '#38bdf8',
          secondary: '#f87171',
          light: '#e0f2fe',
          dark: '#0369a1'
        },
        harrypotter: {
          DEFAULT: '#7c3aed',
          secondary: '#c7d2fe',
          gryffindor: '#a40000',
          hufflepuff: '#ecd000',
          ravenclaw: '#0d4b9b',
          slytherin: '#036448'
        },
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'], 
        heading: ['Inter', 'ui-sans-serif', 'system-ui'],
        friends: ['Helvetica', 'Arial', 'sans-serif'],
        modernfamily: ['Futura', 'Trebuchet MS', 'sans-serif'],
        wizarding: ['Georgia', 'Times New Roman', 'serif']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem'
      },
      backgroundImage: {
        'friends-pattern': "url('/src/assets/images/friends-bg.jpg')",
        'modernfamily-pattern': "url('/src/assets/images/modernfamily-bg.jpg')",
        'harrypotter-pattern': "url('/src/assets/images/harrypotter-bg.jpg')"
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-short': 'bounceShort 2s infinite',
        'coffee-steam': 'steam 3s ease infinite',
        'wand-sparkle': 'sparkle 2s ease-in-out infinite',
        'familiar-shift': 'shiftPosition 8s ease-in-out infinite',
        'broom-wobble': 'wobble 3s ease-in-out infinite',
        'camera-flash': 'flash 5s ease-in-out infinite',
        'family-bounce': 'familyBounce 3s ease infinite'
      },
    }
  },
  plugins: [],
  darkMode: 'class',
}