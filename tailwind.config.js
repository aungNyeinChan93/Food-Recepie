/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        extra: "5rem",
        header: "2rem",
      },
      colors: {
        primary: "red",
        secondary: {
          100: "green",
          200: "blue",
        },
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
