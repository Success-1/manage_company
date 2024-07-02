/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 58%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 16%, 32%)',
        darkGrayishBlue: 'hsl(227, 12%, 63%)',
        verydarkBlue: 'hsl(223, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGrey: 'hsl(0, 8%, 98%)',
      }
    },
  },
  plugins: [],
}

