module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        '1': '100%'
      },
      maxWidth: {
        'xxs': '50px',
      }
    },
  },
  plugins: [],
}
