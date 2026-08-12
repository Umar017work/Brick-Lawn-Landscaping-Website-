/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#121614',        // Deep Charcoal / Near-Black
          surface: '#1C221F',     // Dark Slate Surface
          card: '#252D29',        // Card Background
          border: '#2E3833',      // Subtle Dark Border
          emerald: '#2D5A3D',     // Natural Turf Muted Green
          emeraldHover: '#39704D',// Green Hover Accent
          sandstone: '#C28E5C',   // Bronze / Sandstone Warm Accent
          sandstoneHover: '#D5A16F',
          offwhite: '#F8F9FA',    // Warm Off-White
          lightCard: '#FFFFFF',   // Light Mode Card
          stone: '#8C968F',       // Concrete / Stone Muted Gray
          mutedText: '#9BA39B',   // Muted Body Text for Dark BG
          darkText: '#1B211E',    // Dark Body Text for Light BG
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-emerald': '0 0 25px -5px rgba(45, 90, 61, 0.4)',
        'glow-sandstone': '0 0 25px -5px rgba(194, 142, 92, 0.3)',
        'premium': '0 20px 40px -15px rgba(0, 0, 0, 0.4)',
      }
    },
  },
  plugins: [],
}
