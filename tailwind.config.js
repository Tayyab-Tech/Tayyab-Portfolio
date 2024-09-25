/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  // theme: {
  //   extend: {},
  // },
  theme: {
    extend: {
      animation: {
        picSuffle: "picSuffle 5s ease-in-out infinite",
        rotate: 'rotate 9s linear infinite',
        slideInTop: "slideInTop 2s ease-in-out forwards",
        slideInBottom: "slideInBottom 2s ease-in-out forwards",
        slideInRight: "slideInRight 2s ease-in-out forwards",
        slideInLeft: "slideInLeft 2s ease-in-out forwards",
      },
      keyframes: {
        picSuffle: {
          "0%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
          "50%": { borderRadius: "30% 60% 70% 40%/50% 60% 30% 60%" },
          "100%": { borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%" },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideInTop: {
          '0%': { transform: 'translateX(300px) translateY(-300px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInBottom: {
          '0%': { transform: 'translateX(-300px) translateY(300px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-200px)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(300px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      screens: {
        'md-custom': '900px',
      },
    },
  },
  plugins: [],
};
