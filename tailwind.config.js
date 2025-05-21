// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // if using app directory
    ],
    theme: {
      extend: {
        colors: {
          'dark-bg': '#101010',
          'red-accent': '#FF0000', // Sesuaikan jika warna merah di gambar berbeda
          'placeholder-light': '#D1D5DB', // gray-300
          'placeholder-dark': '#4B5563', // gray-600
          'light-gray': '#D1D5DB', // text-gray-300
        },
         backgroundImage: {
           'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
           'gradient-conic':
             'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
         },
      },
    },
    plugins: [],
  }