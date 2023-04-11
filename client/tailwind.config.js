/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'main': '300px 600px',
        'table': '1fr auto auto',
      },
      gridTemplateRows: {
        'board': 'auto 1fr',
        'chat': '1fr auto',
      }
    },
  },
  plugins: [],
}

