/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
         montserrat: ['Montserrat', 'sans-serif'],
         oswald: ['Oswald', 'sans-serif'],
          rubik: ['Rubik', 'sans-serif'],
           poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
