const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/swagger-ui-react/**/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#29ABE3",
        secondary: "#231F20",
      },
    },
    fontFamily: {
      sans: ["Lato", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
