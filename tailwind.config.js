/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        paper: '#f5f3ef',
        acid: '#c8ff00',
        acid2: '#ff3cac',
        steel: '#6b7280',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: {
    '@tailwindcss/postcss': {},
  },
}