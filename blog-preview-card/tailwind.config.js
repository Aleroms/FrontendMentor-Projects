/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "white-1": "hsl(0, 0%, 100%)",
        "grey-1": "hsl(0, 0%, 50%)",
        "black-1": "hsl(0, 0%, 7%)",
        "yellow-1": "hsl(47, 88%, 63%)",
      },
      boxShadow: {
        custom: "10px 10px 0 hsl(0, 0%, 7%)",
      },
    },
  },
  plugins: [],
};
