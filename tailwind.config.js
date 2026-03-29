/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0B0B1E',
          800: '#16162D',
          700: '#1F1F3A',
        },
        accent: {
          blue: '#00A8E8',
          gold: '#FFD700',
          red: '#E60012',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
