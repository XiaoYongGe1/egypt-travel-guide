/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'egypt-gold': '#D4AF37',
        'egypt-sand': '#F4E4C1',
        'egypt-blue': '#1B3A5C',
        'egypt-brown': '#3D2B1F',
        'egypt-light': '#FFF8E7',
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
