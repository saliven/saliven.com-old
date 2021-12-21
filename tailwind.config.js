const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#18181b',
          200: '#0b0b0c',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
