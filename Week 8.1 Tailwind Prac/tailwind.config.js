/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          700: '#146fb5'
        },
        blue: {
          500: '#1e2640'
        },
        gray : {
          600: '#d2d4d9'
        },
        slate: {
          500: '#e6e6e6'
        }, 
       
        

      }
    },
  },
  plugins: [],
}

