module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'darky': '#0f1419',
        'netflix': '#e40914'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
