module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'darky': '#0f1419',
        'netflix': '#e40914',
        'cardBackground': '#242b39',
        'lightBlue': '#7685b0',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
