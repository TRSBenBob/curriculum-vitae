const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Jost', ...defaultTheme.fontFamily.sans],
        heading: ['Righteous', ...defaultTheme.fontFamily.sans],
        redacted: ['Redacted'],
      },
      fontSize: {
        '3xs': '0.8333333rem',
        '2xs': '0.875rem',
        xs: '0.9166667rem',
        sm: '0.9583333rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
