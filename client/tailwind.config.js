/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fantasy: {
          dark: '#0f141c',
          card: '#1a2230',
          border: '#2c3b52',
          gold: '#f59e0b',
          arcane: '#8b5cf6',
          ruby: '#ef4444',
          emerald: '#10b981',
          azure: '#3b82f6',
        }
      }
    },
  },
  plugins: [],
}
