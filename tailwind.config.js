/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '20px',
        screens: {
          sm: '100%',
          md: '768px',
          lg: '1210px',
          xl: '1280px',
          '2xl': '1536px', 
        },
      },
      colors: {
        primary: '#e2780a',
      },
    },
  },
  plugins: [],
}
