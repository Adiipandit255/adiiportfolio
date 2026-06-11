/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themeAccent1: 'var(--theme-accent-1)',
        themeAccent2: 'var(--theme-accent-2)',
        themeBg: 'var(--theme-bg)',
        themeText: 'var(--theme-text)',
      },



      
      boxShadow: {
        glow1: '0 0 15px var(--theme-glow-1)',
        glow2: '0 0 15px var(--theme-glow-2)',
      }
    },
  },
  plugins: [],
}