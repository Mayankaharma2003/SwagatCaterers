/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
        'cursive': ['Great Vibes', 'cursive'],
      },
      colors: {
        theme: {
          primary: '#2C1810',    // Royal Dark Brown
          secondary: '#8B0000',  // Royal Red
          accent: '#D4AF37',     // Royal Gold
          light: '#FFFFFF',      // Pure White
          cream: '#FFF8E7',      // Royal Cream
          gold: '#FFD700',       // Bright Gold
          maroon: '#800020',     // Royal Maroon
          blue: '#000080',       // Royal Navy
          green: '#013220',      // Royal Green
          deep: '#1A0F0F',       // Deep Royal Brown
          beige: '#F5F5DC',      // Royal Beige
          brown: '#3A1F04',      // Dark Royal Brown
        }
      },
      backgroundImage: {
        'hero-pattern': "url('/images/royal-pattern.png')",
        'menu-bg': "url('/images/royal-menu-pattern.png')",
        'texture': "url('/images/royal-texture.png')",
        'mandala': "url('/images/royal-mandala.png')",
        'ethnic': "url('/images/royal-ethnic.png')",
      },
      boxShadow: {
        'elegant': '0 4px 20px rgba(212, 175, 55, 0.1)',
        'elegant-hover': '0 8px 30px rgba(212, 175, 55, 0.2)',
        'royal': '0 10px 30px rgba(212, 175, 55, 0.15)',
        'royal-hover': '0 15px 40px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
}