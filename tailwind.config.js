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
        "yale-blue": "#274C77",
        "off-white": "#F5F5F5",
        onyx: "#3A3E41",
      },
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
