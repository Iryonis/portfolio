/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#FFEAAE'
      },
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif']
      }
    }
  },
  plugins: []
}
