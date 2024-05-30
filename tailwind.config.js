/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-bg": "url('/images/bg-intro-mobile.png')",
      },
      fontFamily: {

        "poppins": ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
