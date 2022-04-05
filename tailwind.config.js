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
        "yale-blue": "#274C77",
        "off-white": "#F5F5F5",
        culturedWhite: "#F5F5F5",
        onyx: "#3A3E41",
        "uranian-blue": "#B8D9F4",
        carolinaBlue: "#5FA8D3",
        littleBoyBlue: "#85A8D6",
        aeroBlue: "#7AB8E1",
        yaleBlue: "#274C77",
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
        "max-eventCard": { max: "1295px" },
      },
    },
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};
