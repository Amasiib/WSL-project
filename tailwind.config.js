/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        plumDeep: '#1a0a1e',    
        plumMedium: '#2c1332',  
        appleLight: '#e3f3d6',  
        mutedViolet: '#b3a5b8', 
      },
      fontFamily: {
  rawiya: ['var(--font-plex)', 'sans-serif'], 
},
      letterSpacing: {
        tightest: '-0.05em', 
      }
    },
  },
  plugins: [],
}