// tailwind.config.js

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#1F2544',
        'brand-purple': '#7077A1',
        'brand-blue': '#1F8FF9',
        'purple-light': '#6962AD',
        'brand-gray': '#374151',
      },
      backgroundImage: {
        'gradient-color': 'linear-gradient(135deg, #690D65, #0B61B0)',
      },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
      }

      addUtilities(newUtilities)
    },
  ],
}
