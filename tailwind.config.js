/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    container: {
      center: 'true',
    },
    fontFamily: {
      karla: 'Karla',
    },
    colors: {
      white: "#fff",
      black: "#000",
      cyan: "hsl(179, 62%, 43%)",
      brightYellow: "hsl(71, 73%, 54%)",
      lightGray: "hsl(204, 43%, 93%)",
      grayishBlue: "hsl(218, 22%, 67%)",

    },
    extend: {},
  },
  plugins: [],
}
