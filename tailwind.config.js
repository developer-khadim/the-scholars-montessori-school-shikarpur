/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'school-red': '#be0c21',
        'school-blue': '#3b82f6',
        'school-yellow': '#fbbf24',
        'school-gray': '#6b7280',
      }
    },
  },
  plugins: [],
}
