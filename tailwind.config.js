/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',              // Đối với Vue với Vite
    './src/**/*.{vue,js,ts,jsx,tsx}', // Các file nguồn Vue
    './components/**/*.{vue,js}',     // Đối với Nuxt
    './pages/**/*.{vue,js}',          // Đối với Nuxt
  ],
  theme: {
    extend: {
      fontFamily: {
        'tinos': ['Tinos', 'serif'], // Thêm font Tinos
      },
    },
  },
  plugins: [],
}