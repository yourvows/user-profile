/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '15px',
        sm: '15px',
        md: '1.5rem',
        lg: '2rem',
        xl: '4rem',
        '2xl': '8rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
