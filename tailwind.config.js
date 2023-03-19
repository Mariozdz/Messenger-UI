/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        purple: {
          100 : '#aaa6ca',
          200 : '#8487a9',
          300 : '#6c6889',
          400 : '#4e4c6b',
          500 : '#32314e',
          600 : '#21213b',
          700 : '#1a1a33',
          800 : '#13142a',
          900 : '#0c0c22',
          950 : '#00001a'
        },
        back: '#06060E',
        message: "#6E3AFF",
        read: "#2DDC73"
      },
    },
  },
  plugins: [],
}
