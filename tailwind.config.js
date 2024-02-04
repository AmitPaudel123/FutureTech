/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        //EA7F1D  text
        primary: {
          50: "EA7F1D",
          100: "#fadec5",
          150: "#fadec5",
          200: "#f2b277",
          250: "#f2b277",
          300: "#eb8629",
          350: "#d67114",
          400: "#af5c10",
          450: "#88480d",
          500: "#613309",
        },
      },
    },
  },
  plugins: [],
};
